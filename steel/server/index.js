import express from 'express'
import mysql from "mysql";
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express()

const port = '3001'

// connect to DB
const conn = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "steel",
    "password": "1234"
});
conn.connect((err) => {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Mysql --- OK");
    }
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json())

// listening requests
app.post('/sql', (req, res) => {
    conn.query(req.body.sql, (err, result) => {
        if (err) {
            console.log(`Query error: ${err}`)
            return
        }
        res.send(result)
    })
})
app.listen(port)

