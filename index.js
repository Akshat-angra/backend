require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

// doing get request
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Angrasons')
})

app.get('/login', (req, res) => {
    res.send('<h1>pls login again to verify your details</h1>');
})

app.get('/techin', (req, res) => {
    res.send('<b>Pls get subscription to know your details</b>');
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})