const transactionRouter = require('express').Router()
const pg = require('pg');
const connection = require('../postgres');


transactionRouter.get('/all',async(request,response)=>{
    const client = new pg.Client(connection);
    const query = `
    SELECT *
    FROM transactions
    `;
    try {
        await client.connect();
        const { rows } = await client.query(query);
        await client.end();
        response.status(201).json(rows);
    } catch (error) {
        response.status(401).send(error)
    }

})

module.exports = transactionRouter