const categories = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection } = deps
        connection.query('SELECT * FROM categories;', (error, results) => {
          if (!error) {
            resolve({ categories: results })
          } else {
            reject(error)
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
