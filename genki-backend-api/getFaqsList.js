import AWS from 'aws-sdk';

const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

const FAQS_TABLENAME = 'FAQs';

export function main(event, context, callback){
  console.log('Received get');
  console.log(event.pathParameters);
  let params = {
    TableName: FAQS_TABLENAME,
  };
  docClient.get(params, function(err, result){
    if(err){
      console.error(err);
      const response = {
        statusCode: 500,
        body: JSON.stringify({ status: false })
      };
      callback(null, response);
    } else {
      console.log(result);
      getFaqs();
    }
  });
}

async function getFaqs() {
  const params = {
    TableName: FAQS_TABLENAME
  };

  let scanResults = [];
  let items;
  do{
    items =  await docClient.scan(params).promise();
    items.Items.forEach((item) => scanResults.push(item));
    params.ExclusiveStartKey  = items.LastEvaluatedKey;
  } while(typeof items.LastEvaluatedKey != "undefined");

  console.log(scanResults);
  return scanResults;
}