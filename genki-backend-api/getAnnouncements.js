import AWS from 'aws-sdk';

const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
// Set response headers to enable CORS (Cross-Origin Resource Sharing)
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};

const ANNOUNCEMENTS_TABLENAME = 'Announcements';

/**
 * This Lambda function retrieves all announcements for a particular virtual
 * class.  It returns these announcements as a list.
 * @return Returns a list of announcements.
 */
export function main (event, context, callback) {
  console.log('Received Get');
  console.log(event.pathParameters);
  let classID = event.pathParameters.ClassID;
  let params = {
    TableName: ANNOUNCEMENTS_TABLENAME,
    KeyConditionExpression: "ClassID = :c_ID",
    ExpressionAttributeValues: {
      ":c_ID": classID
    },
  };
  console.log("Fetching Announcements");
  docClient.query(params, function(err, result){
    if(err){
      const response = {
        statusCode: 500,
        body: JSON.stringify({ status: false })
      };
      console.error("Unable to query item. Error JSON:",
                                                JSON.stringify(err, null, 2));
      callback(null, response);
    } else {
      let announcementList = result['Items'];
      const response = {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify(announcementList)
      };
      console.log("Queried item:", JSON.stringify(result, null, 2));
      callback(null, response);
    }
  });

}
