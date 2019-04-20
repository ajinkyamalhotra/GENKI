import AWS from 'aws-sdk';
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};

export function main(event, context, callback){
  const data = JSON.parse(event.body);
  let username = data.username;
  let firstName = data.firstName;
  let lastName = data.lastName;
  let email = data.email;
  let table = "Users_Classes";
  let infoObj = {
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Username: username};
  let params = {
    TableName: table,
    Item: {
      "Username": username,
      "Classes": [],
      "UserInfo": infoObj
    }
  };
  docClient.put(params, function(err, result){
    if(err){
      const response = {
        statusCode: 500,
        headers: headers,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
      console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    }else{
      const response = {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({ status: true })
      };
      callback(null, response);
      console.log("Updated item:", JSON.stringify(result, null, 2));
    }
  })
}
