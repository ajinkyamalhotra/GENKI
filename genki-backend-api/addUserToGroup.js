import AWS from 'aws-sdk';

// const cognito = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

export function main (event, context, callback) {
  var data;
  console.log('received POST');
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    console.log(e);
  }
  console.log(data);
  callback(null, null);
}
