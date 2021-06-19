const model = require('./model')

const GET = (req, res) => {
    res.status(200).json(model.fetchAll())
}

module.exports = { GET }