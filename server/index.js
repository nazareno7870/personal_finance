require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const transactionRouter = require('./controllers/transactions');
const usersRouter = require('./controllers/users');



app.use(cors())
app.use(express.json())
app.use('/', express.static('./dist'));
app.use('/api/transactions',transactionRouter)
app.use('/api/users',usersRouter)

app.listen(process.env.PORT ||3001)
