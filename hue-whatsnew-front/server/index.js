const serverless = require('serverless-http');
const Koa = require('koa');
const koaBody = require('koa-body');
const views = require('koa-views');
const routers = require('./router/index');
const path = require('path');
const authorizerHolder = require('./holder/AuthorizerHolder');
const app = new Koa();


// load view engine
app.use(views(path.join(__dirname, '../view'), {
    extension: 'ejs',
}));

//parse body
app.use(koaBody({
    jsonLimit: '1kb'
}));

app.use(routers.routes()).use(routers.allowedMethods());


// run in ap
app.listen(3000);

// api gateway proxy to koa
// const handler = serverless(app);
// module.exports.handler = async (event, context) => {
//     if(!event.requestContext.authorizer) {
//         console.error(`authorizer is empty, requestContext = ${event.requestContext}`);
//     }
//     authorizerHolder.set(event.requestContext.authorizer);
//     return await handler(event, context);
// };


