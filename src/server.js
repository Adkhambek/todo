//express
const express = require('express')
const app = express()

//buildin modules
const path = require('path')

//config
const {PORT, host} = require('./config')

//moddleware
app.use(express.static(path.join(__dirname, 'public')))


//modules 
const modules = require('./modules')
app.use(modules)


app.listen(PORT, () => console.log('server is running on http://' + host + ':' + PORT))