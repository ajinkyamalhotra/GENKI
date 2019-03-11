import AWS from 'aws-sdk';

const USER_POOL_ID = 'us-west-2_WV9ZxGPoJ';
const USER_LOAD_LIMIT = 50;
const cognito = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

/**
 * This Lambda function is designed to fetch all users from a particular
 * Cognito group for Genki-VN.
 * @param  event                The GET event contains the groupName in URL
 * @param  context              Typical Lambda Context
 * @param  callback             Callback function
 */
export function main (event, context, callback) {
  var data;
  // Set response headers to enable CORS (Cross-Origin Resource Sharing)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  };
  console.log('received get');
  console.log(event.pathParameters);
  try {
    data = JSON.parse(event.body);
    // Setup the parameters for the listUsersInGroup function
    var params = {
      GroupName: event.pathParameters.groupName,
      UserPoolId: USER_POOL_ID,
      Limit: USER_LOAD_LIMIT,
      NextToken: ''
    };
    // Get the users from Cognito
    cognito.listUsersInGroup(params, function(err, data) {
      if (err) throw err; // an error occurred
      else { // successful response
        console.log(data);
        // Create a list of users with only username and attributes
        let userList = data.Users.map((user) => {
          let { Username, Attributes } = user;
          let filteredUser = {
            Username: Username,
            Attributes: Attributes
          }
          return filteredUser;
        });
        // Return status code 200 and the newly created item
        const response = {
          statusCode: 200,
          headers: headers,
          body: JSON.stringify(userList)
        };
        callback(null, response);
      }
    });
  } catch (e) { // Error occured
    console.log(e, e.stack);
    const response = {
      statusCode: 500,
      headers: headers,
      body: JSON.stringify({ status: false })
    };
    callback(null, response);
  }
}
