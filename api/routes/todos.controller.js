const { db } = require('../utils/database');

async function getAll(ctx) {
    try {
        const data = await db.queryAsync('SELECT * FROM todos')
        return ctx.body = {
            success: true,
            data
        }
    } catch(err) {
        return ctx.body = {
            success: false,
            err
        }
    }
}

async function createOne(ctx) {
    if (!ctx.request.body.body) return ctx.body = { success: false, err: 'Body of the todo is empty!' }
    try {
        await db.queryAsync('INSERT INTO todos(body) VALUES(?)', [ctx.request.body.body])
        return ctx.body = {
            success: true
        }
    } catch(err) {
        return ctx.body = {
            success: false,
            err
        }
    }
}

async function removeOne(ctx) {
    try {
        await db.queryAsync('DELETE FROM todos where id = ?', [ctx.params.id])
        return ctx.body = {
            success: true
        }
    } catch(err) {
        return ctx.body = {
            success: false,
            err
        }
    }
}

module.exports = { getAll, createOne, removeOne }