const fs = require('fs')
const path = require('path')

const getFile = fileName => {
   return path.join(process.cwd(), 'src', 'views', fileName)
}

module.exports = { getFile }