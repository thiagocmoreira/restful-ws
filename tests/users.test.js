const { test, connection, errorHandler } = require('./setup')
const user = require('../src/db/mysql/users')({ connection, errorHandler })

test.beforeEach(t => connection.query('TRUNCATE TABLE user'))
test.after.always(t => connection.query('TRUNCATE TABLE user'))

const create = () => user.save('user@test.com', '123456')

// Success paths

test('List', async t => {
  await create()
  const result = await user.all()
  t.is(result.users.length, 1)
})

test('Create', async t => {
  const result = await create()
  t.is(result.user.email, 'user@test.com')
})

test('Edit', async t => {
  await create()
  const result = await user.update(1, '123456789')
  t.is(result.user.id, 1)
})

test('Delete', async t => {
  await create()
  const result = await user.del(1)
  t.is(result.user.id, 1)
})
