import AWS from 'aws-sdk';
const crypto = require('crypto');

export function main (event, context, callback) {
  const data = JSON.parse(event.body);
  let docClient = new AWS.DynamoDB.DocumentClient();
  // Set response headers to enable CORS (Cross-Origin Resource Sharing)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  };
  let table = "Virtual_Class";
  let username = data.username;
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
        headers: headers,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
      console.error("Unable to get items. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      let userData = {
        classID: classID,
        username: username
      }
      classAdd(userData, callback);
      console.log("Got items:", JSON.stringify(result, null, 2));
    }
  })
}
