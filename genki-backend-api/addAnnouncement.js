import AWS from 'aws-sdk';

// CORS headers
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};
const docClient = new AWS.DynamoDB.DocumentClient();

const ANNOUNCEMENTS_TABLENAME = "Announcements";

/**
 * This function accepts a POST request to add a new announcement to the
 * announcements table.  It stores the messageHeader, message, classID, date,
 * and Author (as username).
 *
 * Note: The ClassID is the Partition Key for this table.
 */
export function main (event, context, callback) {
  const data = JSON.parse(event.body);
  let messageHeader = data.MessageHeader;
  let message = data.Message;
  let classID = data.ClassID;
  let date = data.Date;
  let author = data.Author;
  let params = {
    TableName:ANNOUNCEMENTS_TABLENAME,
    Item:{
      "ClassID": classID,
      "Date": date,
      "MessageHeader": messageHeader,
      "Message": message,
      "Author": author
    }
  };

  console.log("Creating Announcement");
  docClient.put(params, function(err, result){
    if(err){
      const response = {
        statusCode: 500,
        body: JSON.stringify({ status: false })
      };
      console.error("Unable to add item. Error JSON:",
                                                JSON.stringify(err, null, 2));
      callback(null, response);
    } else {
      const response = {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({ status: true })
      };
      console.log("Added item:", JSON.stringify(params, null, 2));
      callback(null, response);
    }
  });
}
