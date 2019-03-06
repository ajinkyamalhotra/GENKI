import AWS from 'aws-sdk';
const crypt = require('crypto');

export function main (event, context, callback) {
  const data = JSON.parse(event.body);
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
      console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("Added item:", JSON.stringify(result, null, 2));
    }
  })
  callback(null, null);
}
