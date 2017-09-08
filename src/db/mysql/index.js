var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restful_ws'
})

connection.connect()

const categories = new Promise((resolve, reject) => {
  connection.query('SELECT * FROM categories;', (error, results) => {
    if (!error) {
      resolve({ categories: results })
    } else {
      reject(error)
    }
  })
})

module.exports = categories
