const sha1 = require('sha1')

const user = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('SELECT id, email FROM user;', (error, results) => {
          if (!error) {
            resolve({ users: results })
          } else {
            errorHandler(error, 'Erro ao listar os usuários', reject)
          }
        })
      })
    },
    save: (email, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('INSERT INTO user (email, password) VALUES (?, ?)', [email, sha1(password)], (error, results) => {
          if (!error) {
            resolve({ user: { id: results.insertId, email } })
          } else {
            errorHandler(error, `Erro ao salvar o usuário de email ${email}`, reject)
          }
        })
      })
    },
    update: (id, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('UPDATE user SET password = ? WHERE id = ?', [sha1(password), id], (error, results) => {
          if (!error) {
            resolve({ user: { id } })
          } else {
            errorHandler(error, `Erro ao atualizar o usuário de ${id}`, reject)
          }
        })
      })
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps
        connection.query('DELETE FROM user WHERE id = ?', [id], (error, results) => {
          if (!error) {
            resolve({ user: { id: id } })
          } else {
            errorHandler(error, `Erro ao atualizar o usuário de id ${id}`, reject)
          }
        })
      })
    }
  }
}

module.exports = user
