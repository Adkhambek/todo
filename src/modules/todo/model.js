const fs = require('fs')
const path = require('path')

const fetchAll = () => {
      let todos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'todo.json'), 'utf-8')
      todos = todos ? JSON.parse(todos) : []
      return todos
}

module.exports = { fetchAll }