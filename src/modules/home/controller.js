const { getFile } = require('./model')

const GET = (req, res) => {
    res.sendFile(getFile('index.html'))
}

module.exports = { GET }