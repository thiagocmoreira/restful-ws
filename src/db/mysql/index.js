var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restful_ws'
})

connection.connect()

const categoryModule = require('./categories')({ connection })

module.exports = {
  categories: () => categoryModule
}
