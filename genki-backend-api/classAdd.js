import AWS from 'aws-sdk';

export function main(event, context, callback){
  const data = JSON.parse(event.body);
  let docClient = new AWS.DynamoDB.DocumentClient();
  let username = data.username;
  let classIDObj = {ClassID: data.classID};
  let table = "Users_Classes";
  let params = {
    TableName: table,
    Key: {
      "Username": username
    },
    UpdateExpression: "Set Classes = list_append(Classes, :classID)",
    ExpressionAttributeValues: {
      ":classID": classIDObj
    },
    ReturnValues: "UPDATED_NEW"
  };

  console.log("Adding student to class.");
  console.log(data);

  docClient.update(params, function(err, result){
    if(err){
      const response = {
        statusCode: 500,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
      console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify({ status: true })
      };
      callback(null, response);
      console.log("Updated item:", JSON.stringify(result, null, 2));
    }
  })
}
