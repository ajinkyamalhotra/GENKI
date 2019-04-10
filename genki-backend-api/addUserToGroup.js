import AWS from 'aws-sdk';

const cognito = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

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
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  };
  console.log('received POST');
  try {
    data = JSON.parse(event.body);
    var params = {
      GroupName: data.userType,
      UserPoolId: data.userPoolId,
      Username: data.username
    };
    // Don't allow people to sign up as admin
    if (params.GroupName === 'admin') {
      throw new Error('IllegalArgument: Cannot signup as type \'admin\'.');
    }
    // Just double checking for errors
    if (params.GroupName) {
      console.log(params);
      cognito.adminAddUserToGroup(params, function (err, data) {
        if (err) { // An error occurred
          console.log('Could not add user to group');
          console.log(err, err.stack);
          const response = {
            statusCode: 500,
            headers: headers,
            body: JSON.stringify({ status: false })
          };
          callback(null, response);
        } else { // Successful response
          // Return status code 200 and the newly created item
          const response = {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ status: true })
          };
          callback(null, response);
        }
      });
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
