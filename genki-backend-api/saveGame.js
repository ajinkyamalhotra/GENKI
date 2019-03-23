import AWS from 'aws-sdk';

//const cognito = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

export function main (event, context, callback) {
  const data = JSON.parse(event.body);
  // Set response headers to enable CORS (Cross-Origin Resource Sharing)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  };

let table = "User_Save";
let username = data.Username;
let dateCreated = data.DateCreated;
let slotNumber = data.SlotNumber;
let saveString = data.SaveString; // stringified from Game.js

let params = {
  TableName:table,
  Item:{
    "Username": username,
    "DateCreated": dateCreated,
    "SlotNumber": slotNumber,
    "SaveString": saveString,
  }
}

  console.log('Adding new user save');
  console.log(data);

  /*try {
    data = JSON.parse(event.body);
    var params = {
      saveString: data.saveString,
      createdAt: Date.now()
    };*/

  } catch (e) { // Error occured during parsing
    console.log('Issue with parsing');
    console.log(e);
    const response = {
      statusCode: 500,
      headers: headers,
      body: JSON.stringify({ status: false })
    };
    callback(null, response);
  }
}
