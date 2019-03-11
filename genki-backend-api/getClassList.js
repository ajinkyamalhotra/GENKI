import AWS from 'aws-sdk';

export function main(event, context, callback){
  const data = JSON.parse(event.body);
  let docClient = AWS.DynamoDB.DocumentClient();
  let table = "Virtual_Class";
  let array = data.Classes;
  let params = {
    RequestItems: {
      TableName: table {
        "Keys": array
      }
    },

  }

  docClient.batchGet(params, function(err, result){
    if(err){
      const response = {
        statusCode: 500,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
      console.error("Unable to get items. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify({ status: true })
      };
      callback(null, response);
      console.log("Got items:", JSON.stringify(result, null, 2));
    }
  })
}
