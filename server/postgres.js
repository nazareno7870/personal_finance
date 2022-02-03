require('dotenv').config()

const connection = {
    user: 'postgres',
    host: 'localhost',
    database: 'personal_finance',
    password: process.env.PASSWORD,
    port: 5432,
};

module.exports = connection