import AWS from 'aws-sdk';
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};
const VIRTUAL_CLASS_TABLENAME = 'Virtual_Class';
const USERS_CLASSES_TABLENAME = 'Users_Classes';

export function main(event, context, callback){
  console.log(event);
  const data = JSON.parse(event.body);
  let studentList = data.usernames;
  let classID = data.classID;
  removeFromUsersClasses(studentList, classID, callback);
}

function removeFromUsersClasses(studentList, classID, callback) {
  studentList.forEach(studentUsername => {
    let params = {
      TableName: USERS_CLASSES_TABLENAME,
      Key: {
        "Username": studentUsername
      },
      ProjectionExpression: "Classes"
    }; // End params
    docClient.get(params, function(err, result) {
      if (err) {
        console.log('Unable to fetch student info: ' + studentUsername);
        console.log(err, err.stack);
      } else {
        console.log('Successfully fetched student classes');
        console.log(JSON.stringify(result));
        let classes = result.Item.Classes;
        classes = classes.filter((curClass) => curClass.ClassID !== classID);
        let params = {
          TableName: USERS_CLASSES_TABLENAME,
          Key: {
            "Username": studentUsername
          },
          UpdateExpression: "Set Classes = :classes",
          ExpressionAttributeValues: {
            ":classes": classes
          },
          ReturnValues: "UPDATED_NEW"
        };
        docClient.update(params, function(err, result) {
          if (err) {
            console.log('Failed to update classes for student: ' + studentUsername);
            const response = {
              statusCode: 500,
              headers: HEADERS,
              body: JSON.stringify({ status: false })
            };
            callback(null, response);
          } else {
            console.log('Successfully updated students class list');
            console.log(JSON.stringify(result));
          } // End docClient.update else
        }); // End docClient.update
      } // End docClient.get else
    }); // End of docClient.get
  }); // End of forEach
  removeFromVirtualClass(studentList, classID, callback);
}

function removeFromVirtualClass(studentList, classID, callback) {
  let params = {
    TableName: VIRTUAL_CLASS_TABLENAME,
    Key: {
      "ClassID": classID
    },
    ProjectionExpression: "ClassRoster"
  };
  docClient.get(params, function(err, result) {
    if (err) {
      console.log('Problem fetching class roster: ' + classID);
      console.log(err, err.stack);
      const response = {
        statusCode: 500,
        headers: HEADERS,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
    } else {
      console.log('Successfully fetched class roster');
      console.log(JSON.stringify(result));
      let roster = result.Item.ClassRoster;
      roster = roster.filter((student) => !studentList.includes(student.Username));
      let params = {
        TableName: VIRTUAL_CLASS_TABLENAME,
        Key: {
          "ClassID": classID
        },
        UpdateExpression: "Set ClassRoster = :roster",
        ExpressionAttributeValues: {
          ":roster": roster
        },
        ReturnValues: "UPDATED_NEW"
      }
      docClient.update(params, function(err, result) {
        if (err) {
          console.log('Failed to update class roster: ' + classID);
          const response = {
            statusCode: 500,
            headers: HEADERS,
            body: JSON.stringify({ status: false })
          };
          callback(null, response);
        } else {
          console.log('Successfully updated class roster');
          console.log(result);
          const response = {
            statusCode: 200,
            headers: HEADERS,
            body: JSON.stringify({ status: true })
          };
          callback(null, response);
        }
      })
    }
  })
}
