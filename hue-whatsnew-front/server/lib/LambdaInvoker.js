const AWS = require('aws-sdk');
const EnvHelper = require('./EnvHelper');
const AuthorizerHolder = require('../holder/AuthorizerHolder');

const lambda = new AWS.Lambda({
  region: EnvHelper.getRegion()
});


module.exports.testData = request => invoke('TestData', request);



function invoke(name, request) {
    const authorizer = AuthorizerHolder.get();
    const internalFunctionRequest =　{
        'sessionToken': authorizer.sessionToken,
        'tenantId': authorizer.tenantId,
        'userContext': authorizer.userContext,
        'essId': authorizer.essId,
        'essAuthorities': authorizer.essAuthorities,
        'loginMode': authorizer.loginMode,
        'body': JSON.stringify(request)
    };

    return new Promise((resolve, reject) => {
        lambda.invoke({
            FunctionName: `develop-zh-ess-v2-internal-function-${name}`,
            InvocationType: 'RequestResponse',
            Payload: JSON.stringify(request)
        }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.Payload);
            }
        });
    });
}