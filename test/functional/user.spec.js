const { test, trait } = use("Test/Suite")('User');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

 /** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
 const User = use('App/Models/User');

 trait('Test/ApiClient')
 trait('DatabaseTransactions')

test('it should return the user create', async({client }) => {
  const userCreate = {
    name: 'Pedro Paulo Machado do Amaral',
    email: 'dev.pedro@m2corp.com.br',
    password: '123456'
  }

  const newUser = await User.create(userCreate)

  const { id, name, email, password, created_at, updated_at } = newUser;

  const response = await client.get(`/users/${id}`).end()

  response.assertStatus(200)

  response.assertJSONSubset({
    id,
    name,
    email,
    password,
    created_at,
    updated_at
  })

});
