const db = require('../db/mysql/index')

const routes = (server) => {
  server.get('categories', async (req, res, next) => {
    try {
      res.send(await db.categories().all())
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  })

  server.post('categories', async (req, res, next) => {
    console.log(req.params)
    const { name } = req.params
    try {
      res.send(await db.categories().save(name))
      next()
    } catch (error) {
      res.send(error)
      next()
    }
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
