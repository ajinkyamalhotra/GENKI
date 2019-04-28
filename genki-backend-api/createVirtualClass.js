import AWS from 'aws-sdk';
const crypto = require('crypto');
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
// Set response headers to enable CORS (Cross-Origin Resource Sharing)
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};

export function main (event, context, callback) {
  const data = JSON.parse(event.body);
  let table = "Virtual_Class";
  let username = data.Username;
  let teacher = data.Teacher;
  let semester = data.Semester;
  let classTime = data.ClassTime;
  let className = data.ClassName;
  let section = data.Section;
  let usernameObj = {Username: username};
  console.log(usernameObj)
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
      "ClassTime": classTime,
      "ClassRoster": [usernameObj]
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
      console.error("Unable to create class. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      const response = {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({ status: true })
      };
      addToClass(classID, username, callback);
      console.log("Created class:", JSON.stringify(result, null, 2));
    }
  })
}
//Adds class to Users_Classes classes list
function addToClass(classID, username, callback){
  let table = "Users_Classes";
  let classIDObj = [{ClassID: classID}];
  let params = {
    TableName: table,
    Key: {
      "Username": username
    },
    UpdateExpression: "Set Classes = list_append(Classes, :classID)",
    ExpressionAttributeValues: {
      ":classID": classIDObj
    },
    ReturnValues: "UPDATED_NEW"
  };

  console.log("Adding student to class.");
  console.log(username);

  docClient.update(params, function(err, result){
    if(err){
      const response = {
        statusCode: 500,
        headers: headers,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
      console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
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
