import AWS from 'aws-sdk';

const cognito =
          new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

export function main (event, context, callback) {
  const data = JSON.parse(event.body);
  console.log(data);
  callback(null, null);
}
