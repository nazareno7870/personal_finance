require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const transactionRouter = require('./controllers/transactions');



app.use(cors())
app.use(express.json())
app.use('/api/transactions',transactionRouter)

app.listen(process.env.PORT ||3001)
