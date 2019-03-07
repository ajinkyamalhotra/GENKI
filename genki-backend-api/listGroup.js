import AWS from 'aws-sdk';

const USER_POOL_ID = 'us-west-2_WV9ZxGPoJ';
const
const cognito = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

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
      UserPoolId: USER_POOL_ID, /* required */
      Limit: 0,
      NextToken: 'STRING_VALUE'
    };
    cognito.listUsersInGroup(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
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
