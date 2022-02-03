require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const client = require('./postgres')


const query = `
SELECT *
FROM transactions
`;

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(res.rows);
    client.end();
});

app.use(cors())
app.use(express.json())

app.listen(process.env.PORT ||3001)
