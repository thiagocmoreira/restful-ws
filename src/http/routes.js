const db = require('../db/mysql/index')

const routes = (server) => {
  server.get('categories', (req, res, next) => {
    db.categories().all()
      .then(categories => {
        res.send(categories)
        next()
      })
      .catch(error => {
        res.send(error)
        next()
      })
  })

  server.post('category', (req, res, next) => {
    const { name } = req.params
    res.send(name)
    next()
  })

  // server.put('category', (req, res, next) => {
  //   res.send()
  //   next()
  // })
  // server.delete('category', (req, res, next) => {
  //   res.send()
  //   next()
  // })

  server.get('/', (req, res, next) => {
    res.send('Welcome!')
    next()
  })
}

module.exports = routes
