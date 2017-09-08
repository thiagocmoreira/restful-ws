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
    save: (name) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('INSERT INTO categories (name) VALUES (?)', [name], (error, results) => {
          if (!error) {
            resolve({ category: { id: results.insertId, name } })
          } else {
            errorHandler(error, `Erro ao salvar a categoria ${name}`, reject)
          }
        })
      })
    },
    update: (id, name) => {},
    del: (id) => {}
  }
}

module.exports = categories
