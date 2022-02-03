require('dotenv').config()

const connection = {
    user: 'rwjzhfqwlibutf',
    host: 'ec2-34-230-110-100.compute-1.amazonaws.com',
    database: 'd6dh2o361qrtbq',
    password: process.env.PASSWORD,
    port: 5432,
    ssl: { rejectUnauthorized: false }
};

module.exports = connection