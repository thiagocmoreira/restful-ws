const db = require('../db/mysql/index')

const routes = (server) => {
  // Categories
  server.get('category', async (req, res, next) => {
    try {
      res.send(await db.categories().all())
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.post('category', async (req, res, next) => {
    const { name } = req.params
    try {
      res.send(await db.categories().save(name))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.put('category', async (req, res, next) => {
    const { id, name } = req.params
    try {
      res.send(await db.categories().update(id, name))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.del('category', async (req, res, next) => {
    const { id } = req.params
    try {
      res.send(await db.categories().del(id))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  // Users
  server.get('user', async (req, res, next) => {
    try {
      res.send(await db.users().all())
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.post('user', async (req, res, next) => {
    const { email, password } = req.params
    try {
      res.send(await db.users().save(email, password))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.put('user', async (req, res, next) => {
    const { id, password } = req.params
    try {
      res.send(await db.users().update(id, password))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.del('user', async (req, res, next) => {
    const { id } = req.params
    try {
      res.send(await db.users().del(id))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  // Main

  server.get('/', (req, res, next) => {
    res.send('Welcome to Restful-WS!')
    next()
  })
}

module.exports = routes
