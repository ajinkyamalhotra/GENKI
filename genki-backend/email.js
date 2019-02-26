const AWS = require('aws-sdk');

AWS.config.update({region: 'us-west-2'});

module.exports = {
  SendEmail: function(firstName, lastName, emailName, userType, purpose){
    var emailBodyHTML='test';
    var emailBodyText='test';
    var emailSubject='test';
    if(purpose=='signup'){
      if(userType=='teacher'){
        emailBodyText=`New instructor ${firstName} ${lastName} is attempting to
          create an account. Email is ${emailName}. Verify them as soon as
          possible.`;
        emailBodyHTML=`New instructor ${firstName} ${lastName} is attempting to
          create an account. Email is ${emailName}. Verify them as soon as
          possible.`;
        emailName='joshuashewmaker@gmail.com';
        emailSubject='New Instructor Verification';
      }
    }
    var params = {
      Destination: { /* required */
      CcAddresses: [
        /* more items */
      ],
      ToAddresses: [
        emailName,
        /* more items */
      ]
      },
      Message: { /* required */
      Body: { /* required */
        Html: {
         Charset: "UTF-8",
         Data: emailBodyHTML
        },
        Text: {
         Charset: "UTF-8",
         Data: emailBodyText
        }
       },
       Subject: {
        Charset: 'UTF-8',
        Data: emailSubject
       }
      },
      Source: 'joshuashewmaker@gmail.com', /* required */
      ReplyToAddresses: [

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
}
