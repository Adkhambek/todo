//express
const express = require('express')
const app = express()

//config
const {PORT, host} = require('./config')

app.get('/', (req, res) => {
    res.send('Test')
})

app.listen(PORT, () => console.log('server is running on http://' + host + ':' + PORT))