
require('dotenv').config();
var AWS = require('aws-sdk');
const queueURL = process.env.SQS_URL;
AWS.config.update({region: 'ca-central-1'});
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

const listMessages = async ()=>{
    var params = {
        AttributeNames: [
        "SentTimestamp"
        ],
        MaxNumberOfMessages: 10,
        MessageAttributeNames: [
        "All"
        ],
        QueueUrl: queueURL,
        VisibilityTimeout: 20,
        WaitTimeSeconds: 0
    };
    
    const data = await sqs.receiveMessage(params, function(err, data) {
        if (err) {
            return err;
        } else if (data.Messages) {
            return data
            // var deleteParams = {
            //     QueueUrl: queueURL,
            //     ReceiptHandle: data.Messages[0].ReceiptHandle
            // };
            // sqs.deleteMessage(deleteParams, function(err, data) {
            //     if (err) {
            //     console.log("Delete Error", err);
            //     } else {
            //     console.log("Message Deleted", data);
            //     }
            // });
        }
    }).promise();
    return(data)
}

const sendMessage = async (attr,body)=>{
    var params = {
        // Remove DelaySeconds parameter and value for FIFO queues
        
        MessageAttributes: attr,
        MessageBody: JSON.stringify(body),
        // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
        // MessageGroupId: "Group1",  // Required for FIFO queues
        QueueUrl: queueURL   
    };
        
    msgId = await sqs.sendMessage(params, function(err, data) {
    if (err) {
        return err;
    } else {
        return data;
    }
    }).promise();
    return msgId;
}
const getQueueList = async()=>{
    data = await sqs.listQueues({}, function(err, data) {
        if (err) {
        return err;
        } else {
            return data;
        }
    }).promise();
    return data;
}
module.exports = {sendMessage,listMessages,getQueueList}