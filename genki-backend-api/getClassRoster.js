import AWS from 'aws-sdk';

const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
// Set response headers to enable CORS (Cross-Origin Resource Sharing)
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};

const USERS_CLASSES_TABLENAME = 'Users_Classes';
const VIRTUAL_CLASS_TABLENAME = 'Virtual_Class';


/**
 * This lambda function accepts a GET request that includes a ClassID.  It
 * uses that ClassID to retrieve a list of students enrolled in the class
 * and then retrieves those users' information from the Users_Classes table.
 * @param  event    The GET event proxied from APIGateway
 * @param  context  Typical Lambda context
 * @param  callback The callback function
 */
export function main(event, context, callback){
  console.log('Received get');
  console.log(event.pathParameters);
  let classId = event.pathParameters.ClassID;
  let table = VIRTUAL_CLASS_TABLENAME;
  let params = {
    TableName: table,
    Key: {'ClassID': classId},
    ProjectionExpression: 'ClassRoster'
  };
  // Retrieve the class roster
  docClient.get(params, function(err, result) {
    if (err) {
      console.error(err);
      const response = {
        statusCode: 500,
        headers: headers,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
    } else {
      console.log(result);
      let classRoster = result.Item.ClassRoster;
      // Use the list of usernames to retrieve actual information
      getClassRoster(classRoster, callback);
    }
  })
}

/**
 * This function accepts a list of students enrolled into a particular class.
 * It then retrieves all of their information (username, first/last name, email)
 * from the Users_Classes table and returns it as a list.
 * @param  roster   The list of usernames
 * @param  callback The actual callback of the Lambda function
 */
function getClassRoster(roster, callback) {
  console.log('Received Class Roster');
  console.log(roster);
  let table = USERS_CLASSES_TABLENAME;
  // Only retrieve the UserInfo field from each Users_Classes entry.
  let params = {
    RequestItems: {
      [table]: {
        'Keys': roster,
        AttributesToGet: [
          'UserInfo'
        ]
      }
    }
  };
  docClient.batchGet(params, function(err, result){
    if(err){
      console.error(err);
      const response = {
        statusCode: 500,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
    } else {
      console.log("Got items:", JSON.stringify(result, null, 2));
      let classRoster = result.Responses[USERS_CLASSES_TABLENAME];
      console.log('The class roster: ' + JSON.stringify(classRoster));
      const response = {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify(classRoster)
      };
      callback(null, response);
    }
  })
}
