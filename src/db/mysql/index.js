var mysql = require('mysql')

var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

connection.connect()

const errorHandler = (error, msg, rejectFunction) => {
  console.log(error)
  rejectFunction({ error: msg })
}

const categoryModule = require('./categories')({ connection, errorHandler })
const usersModule = require('./users')({ connection, errorHandler })

module.exports = {
  categories: () => categoryModule,
  users: () => usersModule
}
