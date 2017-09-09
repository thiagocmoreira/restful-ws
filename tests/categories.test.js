const { test, connection, errorHandler } = require('./setup')
const categories = require('../src/db/mysql/categories')({ connection, errorHandler })

test.beforeEach(t => connection.query('TRUNCATE TABLE categories'))
test.after.always(t => connection.query('TRUNCATE TABLE categories'))

test('Create Category', async t => {
  const result = await categories.save('Category Test')
  t.is(result.category.name, 'Category Test')
})
