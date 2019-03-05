import AWS from 'aws-sdk';

export function main (event, context, callback) {
  const data = JSON.parse(event.body);
  let docClient = new AWS.DynamoDB.DocumentClient();
  let table = "Announcements";
  let message = data.Message;
  let classID = data.ClassID;
  let date = data.Date;
  let params = {
    TableName:table,
    Item:{
      "ClassID": classID,
      "Date": date,
      "Message": message
    }
  };

  console.log("Creating Announcement");
  docClient.put(params, function(err, data){
    if (err) {
      console.error("Unable to create announcement. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("Announcement created:", JSON.stringify(data, null, 2));
    }
  });
  callback(null, null);

}
