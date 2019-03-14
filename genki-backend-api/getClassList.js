import AWS from 'aws-sdk';

const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
// Set response headers to enable CORS (Cross-Origin Resource Sharing)
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};

export function main(event, context, callback){
  console.log('Received get');
  console.log(event.pathParameters);
  let username = event.pathParameters.Username;
  let table = "Users_Classes";
  let params = {
    TableName: table,
    Key: {'Username': username},
    ProjectionExpression: "Classes"
  };
  docClient.get(params, function(err, result){
    if(err){
      console.error(err);
      const response = {
        statusCode: 500,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
    } else {
      console.log(result);
      let classList = result.Item.Classes;
      getClasses(classList, callback);
    }
  });
}

function getClasses(classList, callback){
  console.log('Received Classlist:');
  console.log(classList);
  let table = "Virtual_Class";
  let params = {
    RequestItems: {
      [table]: {
        "Keys": classList
      }
    }
  }
  docClient.batchGet(params, function(err, result){
    if(err){
      console.error(err);
      const response = {
        statusCode: 500,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
    } else {
      console.log("Got items:", JSON.stringify(result, null, 2));
      const response = {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify(result)
      };
      callback(null, response);
    }
  })
}
