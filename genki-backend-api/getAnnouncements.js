import AWS from 'aws-sdk';

export function main (event, context, callback) {
  const data = JSON.parse(event.body);
  let docClient = new AWS.DynamoDB.DocumentClient();
  let table = "Announcements";
  let index = "ClassID-index";
  let classID = data.classID;
  let params = {
    TableName: table,
    IndexName: index,
    KeyConditionExpression: "ClassID = :c_ID",
    ExpressionAttributeValues: {
      ":c_ID": classID
    },
    ProjectionExpression: "Message, Date"
  };

  console.log("Creating Announcement");
  docClient.query(params, function(err, result){
    if(err){
      const response = {
        statusCode: 500,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
      console.error("Unable to query item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify({ status: true })
      };
      callback(null, response);
      console.log("Queried item:", JSON.stringify(result, null, 2));
    }
  });

}
