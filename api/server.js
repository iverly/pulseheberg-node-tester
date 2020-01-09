const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');

const indexRouter = require('./routes/index.route');
const todosRouter = require('./routes/todos.route');

const server = new Koa();

server
    .use(helmet())
    .use(cors())
    .use(bodyParser())
    .use(indexRouter.routes())
    .use(indexRouter.allowedMethods())
    .use(todosRouter.routes())
    .use(todosRouter.allowedMethods())

module.exports = server;