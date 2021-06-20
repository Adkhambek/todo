const fs = require('fs')
const path = require('path')

const fetchAll = () => {
      let todos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'todo.json'), 'utf-8')
      todos = todos ? JSON.parse(todos) : []
      return todos
}

const insert = todo => {
     
      let todos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'todo.json'), 'utf-8')
      todos = todos ? JSON.parse(todos) : []  
      const id = todos.length ? todos[todos.length - 1].id + 1 : 1
      const newTodo = {
            id, 
            name: todo.name
      }
      todos.push(newTodo)
      fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'todo.json'), JSON.stringify(todos, null, 4))
      return newTodo
}

const deleteTodo = todo => {
      let todos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'todo.json'), 'utf-8')
      todos = JSON.parse(todos)
      const newTodos = todos.filter(check => check.id != todo.id)
      fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'todo.json'), JSON.stringify(newTodos, null, 4))
      return newTodos
}

module.exports = { fetchAll, insert, deleteTodo }