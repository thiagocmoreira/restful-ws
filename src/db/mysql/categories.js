const categories = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('SELECT * FROM categories;', (error, results) => {
          if (!error) {
            resolve({ categories: results })
          } else {
            errorHandler(error, 'Erro ao listar as categorias', reject)
          }
        })
      })
    },
    save: (name) => {},
    update: (id, name) => {},
    del: (id) => {}
  }
}

module.exports = categories
