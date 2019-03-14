import AWS from 'aws-sdk';
const crypto = require('crypto');

export function main (event, context, callback) {
  const data = JSON.parse(event.body);
  console.log(event);
  let docClient = new AWS.DynamoDB.DocumentClient();
  let table = "Virtual_Class";
  let teacher = data.Teacher;
  let semester = data.Semester;
  let classTime = data.ClassTime;
  let className = data.ClassName;
  let section = data.Section;
  let classID =
    crypto.createHash('md5').update(className + teacher + semester + section + classTime).digest('hex');
  let params = {
    TableName:table,
    Item:{
      "Teacher": teacher,
      "ClassID": classID,
      "ClassName": className,
      "Section": section,
      "Semester": semester,
      "ClassTime": classTime
    }
  }
  console.log("Adding new virtual class");
  console.log(data);

  docClient.put(params, function(err, result){
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
