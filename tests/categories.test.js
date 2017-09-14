const { test, connection, errorHandler } = require('./setup')
const categories = require('../src/db/mysql/categories')({ connection, errorHandler })

test.beforeEach(t => connection.query('TRUNCATE TABLE categories'))
test.after.always(t => connection.query('TRUNCATE TABLE categories'))

const create = () => categories.save('Category Test')

// Success paths

test('List', async t => {
  await create()
  const result = await categories.all()
  t.is(result.categories.length, 1)
})

test('Create', async t => {
  const result = await create()
  t.is(result.category.name, 'Category Test')
})

test('Edit', async t => {
  await create()
  const result = await categories.update(1, 'Category Edited')
  t.is(result.category.name, 'Category Edited')
})

test('Delete', async t => {
  await create()
  const result = await categories.del(1)
  t.is(result.category.id, 1)
})
