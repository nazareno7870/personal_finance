const transactionRouter = require('express').Router()
const pg = require('pg');
const connection = require('../postgres');


transactionRouter.get('/last',async(request,response)=>{
    const client = new pg.Client(connection);
    const query = `
    SELECT *
    FROM transactions
    WHERE user_id = 1
    ORDER BY
	date DESC
    LIMIT 10;
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

transactionRouter.get('/all',async(request,response)=>{
    const client = new pg.Client(connection);
    const query = `
    SELECT *
    FROM transactions
    WHERE user_id = 1
    ORDER BY
	date DESC;
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

transactionRouter.get('/balance',async(request,response)=>{
    const client = new pg.Client(connection);
    const query = `
    SELECT *
    FROM balances
    WHERE user_id = 1
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

transactionRouter.post('/new',async(request,response)=>{
    const {body} = request
    const {concept,amount,date,type,user_id,category} = body


    const client = new pg.Client(connection);

    try {
        await client.connect();
        const { rows } = await client.query('INSERT INTO public.transactions(concept, amount, date, type, user_id, category)VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;', [concept, amount,date,type,user_id,category]);
        await client.end();
        response.status(201).json(rows);
    } catch (error) {
        response.status(401).send(error)
    }

})

transactionRouter.post('/update',async(request,response)=>{
    const {body} = request
    const {concept,amount,date,category,id_transaction} = body


    const client = new pg.Client(connection);

    try {
        await client.connect();
        const { rows } = await client.query('UPDATE public.transactions SET concept=$1, amount=$2, date=$3, category=$4 WHERE id_transaction = $5 RETURNING *;', [concept,amount,date,category,id_transaction]);
        await client.end();
        response.status(201).json(rows);
    } catch (error) {
        response.status(401).send(error)
    }

})

module.exports = transactionRouter