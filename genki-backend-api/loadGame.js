import AWS from 'aws-sdk';

export function main(event, context, callback){
  let data = JSON.parse(event.body);
  let docClient = AWS.DynamoDB.DocumentClient();
  let username = data.Username;
  let table = "User_Save";
  let params = {
    TableName: table,
    Key: username,
    ProjectionExpression: "SaveString"
  };

  docClient.get(params, function(err, result){
    if(err){
      const response = {
        statusCode: 500,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
      console.error("Unable to get item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify({ status: true })
      };
      callback(null, response);
      console.log("Got item:", JSON.stringify(result, null, 2));
    }
  })
}
