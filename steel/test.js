import express from 'express'

const app = express()

app.get('/', (req, res) => {
    console.log(req.body)
    res.send('OK')
})

app.listen(3001)