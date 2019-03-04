import AWS from 'aws-sdk';
const crypt = require('crypto');

export function main (event, context, callback) {
  const data = JSON.parse(event.body);
  let docClient = new AWS.DynamoDB.DocumentClient();
  let table = "Virtual_Class";
  let teacher = data.Teacher;
  let classID =
    crypto.createHash('md5').update(data.ClassName + data.Section + data.Teacher).digest('hex');
  let className = data.ClassName;
  let section = data.Section;
  let params = {
    TableName:table,
    Item:{
      "Teacher": teacher,
      "ClassID": classID,
      "ClassName": className,
      "Section": section,
      "Announcement": ''
    }
  }
  console.log("Adding new virtual class");
  console.log(data);

  docClient.put(params, function(err, data){
    if(err){
      console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("Added item:", JSON.stringify(data, null, 2));
    }
  })
  callback(null, null);
}
