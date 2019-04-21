import AWS from 'aws-sdk';

const COGNITO = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});
const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};
const PENDING_TEACHERS_GROUP = 'pendingTeacher';
const TEACHERS_GROUP = 'teacher';
const USERS_CLASSES_TABLENAME = 'Users_Classes';
/**
 * This lambda function accepts a POST that contains a userType, userPoolId,
 * and cognito username.  It then will place that user into the appropriate
 * cognito group.  Users will not be added as admin.
 *
 * @param event     The POST event
 * @param context   The lambda context
 * @param callback  The callback function to the frontend
 */
export function main (event, context, callback) {
  var data;
  // Set response headers to enable CORS (Cross-Origin Resource Sharing)

  console.log('received POST');
  try {
    data = JSON.parse(event.body);
    if (data.approved) {
      removeFromPendingGroup(data.username, data.userPoolId, callback);
    } else {
      removeUser(data.username, data.userPoolId, callback);
    }
  } catch (e) { // Error occured during parsing
    console.log('Issue with parsing');
    console.log(e);
    const response = {
      statusCode: 500,
      headers: headers,
      body: JSON.stringify({ status: false })
    };
    callback(null, response);
  }
}

function removeUser(username, poolID, callback) {
  console.log('Deleting User from app: ' + username);
  var params = {
    UserPoolId: poolID,
    Username: username
  };

  COGNITO.adminDeleteUser(params, function(err, data) {
    if (err) {
      console.log('Could not remove user');
      console.log(err, err.stack);
      const response = {
        statusCode: 500,
        headers: headers,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
    } else {
      console.log('Successfully removed user from app');
      console.log(data);
      console.log('Attempting to delete from Dynamo');
      const docClient =
                    new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
      params = {
        Key: {
          Username: username
        },
        TableName: USERS_CLASSES_TABLENAME
      }
      docClient.delete(params, function(error, dat) {
        if (error) {
          console.log('Unable to Delete from Dynamo');
          console.log(error, error.stack);
        } else {
          console.log('Deleted user from Dynamo');
          console.log(dat);
        }
      });
      const response = {
        statusCode: 200,
        headers: HEADERS,
        body: JSON.stringify({ status: true })
      };
      callback(null, response);
    }
  })
}

function removeFromPendingGroup(username, poolID, callback) {
  console.log('Removing User from Pending Teacher Group: ' + username);
  var params = {
    GroupName: PENDING_TEACHERS_GROUP,
    UserPoolId: poolID,
    Username: username
  };
  COGNITO.adminRemoveUserFromGroup(params, function(err, data) {
    if (err) {
      console.log('Unable to remove teacher form Pending Teacher Group');
      console.log(err, err.stack);
      const response = {
        statusCode: 500,
        headers: HEADERS,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
    } else {
      console.log('Successfully removed user from Pending Teacher Group');
      console.log(data);
      addToTeacherGroup(username, poolID, callback);
    }
  });
}

function addToTeacherGroup(username, poolID, callback) {
  console.log('Adding user to Teacher Group: ' + username);
  var params = {
    GroupName: TEACHERS_GROUP,
    UserPoolId: poolID,
    Username: username
  };
  COGNITO.adminAddUserToGroup(params, function(err, data) {
    if (err) {
      console.log('Unable to add teacher to Teacher Group');
      console.log(err, err.stack);
      const response = {
        statusCode: 500,
        headers: HEADERS,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
    } else {
      console.log('Successfully added user to Teacher Group');
      console.log(data);
      const response = {
        statusCode: 200,
        headers: HEADERS,
        body: JSON.stringify({ status: true })
      };
      callback(null, response);
    }
  });
}
