const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Welcome!')
    next()
  })
}

module.exports = routes
