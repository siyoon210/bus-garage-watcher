const AWS = require('aws-sdk')

exports.handler = async(event) => {
    const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

    const params = {
        MessageBody: "My msg body",
        QueueUrl: "https://sqs.ap-northeast-2.amazonaws.com/917722598800/My-SQS-for-Lambda"
    };

    try {
        const response = await sqs.sendMessage(params).promise();
        return JSON.stringify(response)
    }
    catch (e) {
        console.log(e)
    }
};