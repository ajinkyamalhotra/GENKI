import AWS from 'aws-sdk';

export function main (event, context, callback) {
  let docClient = new AWS.DynamoDB.DocumentClient();
  const data = JSON.parse(event.body);
  let classID = data.classID;
  let table = "Virtual_Class"
  let params = {
    "TableName": table,
    "KeyCondition": "ClassID = :c_ID",
    "ExpressionAttributeValues": {
      ":c_ID": classID
    }
  };

  docClient.query(params, function(err, result){
    if (err){
      console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
      console.console.log("Query succeeded");
      data.Items.forEach(function(item){
        console.log("-", item.ClassID + ": " + item.Teacher + ", "
          + item.Semester + ", " + item.ClassTime + ", " + item.Section + ", "
           + item.ClassName);
      });
    }
  })
  console.log(data);
  callback(null, null);
}
