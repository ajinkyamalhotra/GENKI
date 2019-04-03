import AWS from 'aws-sdk';

export function main (event, context, callback) {
  var docClient = new AWS.DynamoDB.DocumentClient();
  const data = JSON.parse(event.body);
  var teacher = data.teacher;
  let table = "Virtual_Class";
  let params = {
    "TableName": table,
    "KeyCondition": "Teacher = :t",
    "ExpressionAttributeValues": {
      ":t": teacher
    }
  };

  docClient.query(params, function(err, result){
    if (err){
      console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
      console.console.log("Query succeeded");
      data.Items.forEach(function(item){
        console.log("-", item.Teacher + ": " + item.ClassID + ", "
          + item.Semester + ", " + item.ClassTime + ", " + item.Section + ", "
           + item.ClassName);
      });
    }
  })
  console.log(data);
  callback(null, null);
}
