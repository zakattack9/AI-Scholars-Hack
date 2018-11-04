'use strict';

const AWS = require('aws-sdk');
const process = require('process');
AWS.config.update({region: 'us-east-1'});
const sns = new AWS.SNS({apiVersion: '2010-03-31'});

module.exports.startTimer = (event, context, callback) => {
  //console.log("event", event.body);
  //let messageText = JSON.parse(event.body);
  let topicARN = process.env.TOPIC_ARN;
  console.log(topicARN);

  let snsparams = {
    Message: "Your break is now over, it's time to get back to studying. To start your studying timer say, \"Alexa open pace study and enter study mode\"",
    MessageStructure: 'string',
    TopicArn: topicARN
  };

  sns.publish(snsparams, function(err, data) {
    console.log("running");
    if (err) {
      console.log("Error", err.stack);
      
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Go Serverless v1.0! Your function executed successfully!',
          input: event,
        }),
      };
    
      callback(null, response);
    } else {
      console.log("Success", data);
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Go Serverless v1.0! Your function executed successfully!',
          input: event,
        }),
      };
    
      callback(null, response);
    }
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
