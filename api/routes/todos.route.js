const Router = require('koa-router');
const controller = require('./todos.controller');

const router = new Router();

router
    .get('/todos', controller.getAll)
    .post('/todos', controller.createOne)
    .get('/todos/:id/remove', controller.removeOne)

module.exports = router;