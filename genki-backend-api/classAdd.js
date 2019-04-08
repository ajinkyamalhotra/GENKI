import AWS from 'aws-sdk';
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};

export function main(event, context, callback){
  const data = JSON.parse(event.body);
  let username = data.username;
  let classID = data.classID;
  let table = "Virtual_Class";
  let params = {
    TableName: table,
    Key: {
      "ClassID": classID
    },
    ProjectionExpression: "ClassRoster"
  };
  docClient.get(params, function(err, result){
    if(err){
      const response = {
        statusCode: 500,
        headers: headers,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
      console.error("Unable to find class. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      let roster = result.Item.ClassRoster;
      console.log("class found");
      checkRoster(roster, classID, username, callback);
    }
  })
}
//Make sure user isn't already in Roster
function checkRoster(roster, classID, username, callback){
  console.log("checking roster");
  console.log(roster);
  let add = true;
  let usernameTest = {Username: username}; //Needed to test if user in class
  roster.forEach(function(entry){
    if(JSON.stringify(entry) === JSON.stringify(usernameTest)){
      const response = {
        statusCode: 500,
        headers: headers,
        body: JSON.stringify({ status: false })
      };
      add = false;
      callback(null, response);
      console.error("User already in class");
    }
  })
  if(add){
    console.log("user not in class");
    addUsertoRoster(classID, username, callback);
  }
}
//Add the user to the virtual class Roster
function addUsertoRoster(classID, username, callback){
  let usernameObj = [{Username: username}];
  let table = "Virtual_Class";
  let params = {
    TableName: table,
    Key: {
      "ClassID": classID
    },
    UpdateExpression: "Set ClassRoster = list_append(ClassRoster, :username)",
    ExpressionAttributeValues: {
      ":username": usernameObj
    },
    ReturnValues: "UPDATED_NEW"
  }
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
      console.log("Added to roster successfully.");
      addToClass(classID, username, callback);
    }
  })
}
//Add class to user_classes classes list
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
