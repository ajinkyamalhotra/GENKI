import AWS from 'aws-sdk';
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};
const VIRTUAL_CLASS_TABLENAME = 'Virtual_Class';
const USERS_CLASSES_TABLENAME = 'Users_Classes';

export function main(event, context, callback){
  console.log(event);
  const data = JSON.parse(event.body);
  let studentUsername = data.username;
  let classID = data.classID;
  removeFromUsersClasses(studentUsername, classID, callback);
}

function removeFromUsersClasses(studentUsername, classID, callback) {
  let classObject = [{ ClassID: classID }];
  let params = {
    TableName: USERS_CLASSES_TABLENAME,
    Key: {
      "Username": studentUsername
    },
    UpdateExpression: "Delete Classes :class",
    ExpressionAttributeValues: {
      ":class": classObject
    },
    ReturnValues: "UPDATED_NEW"
  };
  docClient.update(params, function(err, result) {
    if (err) {
      console.log('Failed to update classes for student: ' + studentUsername);
      const response = {
        statusCode: 500,
        headers: HEADERS,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
    } else {
      console.log('Successfully updated students class list');
      console.log(result);
      removeFromVirtualClass(studentUsername, classID, callback);
    }
  })
}

function removeFromVirtualClass(studentUsername, classID, callback) {
  let usernameObject = [{ Username: studentUsername }];
  let params = {
    TableName: VIRTUAL_CLASS_TABLENAME,
    Key: {
      "ClassID": classID
    },
    UpdateExpression: "Delete ClassRoster :student",
    ExpressionAttributeValues: {
      ":student": usernameObj
    },
    ReturnValues: "UPDATED_NEW"
  }
  docClient.update(params, function(err, result) {
    if (err) {
      console.log('Failed to update class roster: ' + classID);
      const response = {
        statusCode: 500,
        headers: HEADERS,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
    } else {
      console.log('Successfully updated class roster');
      console.log(result);
      const response = {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({ status: true })
      };
      callback(null, response);
    }
  })
}
