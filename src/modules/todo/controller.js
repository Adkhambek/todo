const model = require('./model')

const GET = (req, res) => {
    res.status(200).json(model.fetchAll())
}
const POST = (req, res) => {
    const insertTodo = model.insert(req.body)
    if(insertTodo){
        res.redirect('/')
    }else {
        res.status(400).send('somthing wrong')
    }
}

const DELETE =  (req, res) => {
    const deleteTodo = model.deleteTodo(req.body)
    if(deleteTodo){
        res.status(200).json({message: 'the todo was deleted successfully'})
    }else {
        res.status(400).send('somthing wrong')
    }
}

const PUT = (req, res) => {
    const updateTodo = model.updateTodo(req.body)
    if(updateTodo){
        res.status(200).json({message: 'the todo was updated successfully'})
    }else {
        res.status(400).send('somthing wrong')
    }
}

module.exports = { GET, POST, DELETE, PUT }