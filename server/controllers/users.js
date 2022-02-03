require('dotenv').config()
const usersRouter = require('express').Router()
const pg = require('pg');
const connection = require('../postgres');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

usersRouter.post('/createuser', async (request, response) => {

        const { body } = request
        const { name, password, email} = body
    
        if(name.length<6 || password.length<8){
            return response.status(401).json({error: 'invalid name or password'})
        }
    
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)

        let date = new Date()
        date.toISOString().split('T')[0]

        const client = new pg.Client(connection);
        try {
            await client.connect();
            const { rows } = await client.query('SELECT id_user, mail, password, name, date FROM public.users WHERE mail LIKE $1 ;', [email.toLowerCase()]);
            await client.end();
            if(!rows.length){
                const client = new pg.Client(connection);
                await client.connect();
                const { rows } = await client.query('INSERT INTO public.users(mail, password, name, date) VALUES ($1,$2,$3,$4) RETURNING *;', [email.toLowerCase(), passwordHash,name,date]);
                await client.end();
                response.status(201).json(rows);
            }else{
                response.status(401).send('That Mail is already associated with a user')
            }
            response.end()
        } catch (error) {
            response.status(401).send(error)
        }

    })


    usersRouter.post('/login', async (request, response) => {

        const { body } = request
        const { email, password } = body
      

        const client = new pg.Client(connection);
        try {

            await client.connect();
            const { rows } = await client.query('SELECT id_user, mail, password, name, date FROM public.users WHERE mail LIKE $1 ;', [email.toLowerCase()]);
            await client.end();
            if(!!rows.length){
                const passwordCorrect = await bcrypt.compare(password, rows[0].password)

                if (!passwordCorrect){
                    return response.status(401).send('Invalid Email or Password')
                  }

                const userForToken = {
                id: rows[0].id_user,
                email: rows[0].mail
                }
            
                const token = jwt.sign(
                userForToken,
                process.env.SECRET,
                {
                    expiresIn: 60 * 60 * 24 * 7
                }
                )
                response.send({
                    id: rows[0].id_user,
                    email: rows[0].mail,
                    token
                })

            }else{
                response.status(401).send('Invalid Email or Password')
            }
        } catch (error) {
            response.status(401).send(error)
        }

    })

module.exports = usersRouter