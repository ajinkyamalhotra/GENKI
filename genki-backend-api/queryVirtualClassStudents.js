import AWS from 'aws-sdk';

export function main (event, context, callback) {
  var docClient = new AWS.DynamoDB.DocumentClient();
  const data = JSON.parse(event.body);


  console.log(data);
  callback(null, null);
}
