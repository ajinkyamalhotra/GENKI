import AWS from 'aws-sdk';


function SendEmail(){
  var params = {
  Destination: { /* required */
  CcAddresses: [
    /* more items */
  ],
  ToAddresses: [
    'joshuashewmaker@gmail.com',
    /* more items */
  ]
  },
  Message: { /* required */
  Body: { /* required */
    Html: {
     Charset: "UTF-8",
     Data: "Test"
    },
    Text: {
     Charset: "UTF-8",
     Data: "Test"
    }
   },
   Subject: {
    Charset: 'UTF-8',
    Data: 'Test email'
   }
  },
  Source: 'joshuashewmaker@gmail.com', /* required */
  ReplyToAddresses: [
   'joshuashewmaker@gmail.com',
  /* more items */
  ],
  };

  // Create the promise and SES service object
  var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

  // Handle promise's fulfilled/rejected states
  sendPromise.then(
  function(data) {
  console.log(data.MessageId);
  }).catch(
  function(err) {
  console.error(err, err.stack);
  });
}

export default SendEmail;
