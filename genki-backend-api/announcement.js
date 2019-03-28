import AWS from 'aws-sdk';

export function main (event, context, callback) {
  const data = JSON.parse(event.body);
  let docClient = new AWS.DynamoDB.DocumentClient();
  let table = "Announcements";
  let message = data.message;
  let classID = data.classID;
  let date = data.date;
  let params = {
    TableName:table,
    Item:{
      "ClassID": classID,
      "Date": date,
      "Message": message
    }
  };

  console.log("Creating Announcement");
  docClient.put(params, function(err, result){
    if(err){
      const response = {
        statusCode: 500,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
      console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify({ status: true })
      };
      callback(null, response);
      console.log("Added item:", JSON.stringify(result, null, 2));
    }
  });

}
