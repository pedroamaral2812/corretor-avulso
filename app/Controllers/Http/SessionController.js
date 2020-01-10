'use strict'

class SessionController {
  async store({ request, auth }) {
    const { email, password } = request.only([
      'email',
      'password'
    ]);


    const {token} = await auth.attempt(email, password);

    //Esta fazendo destruct duas vezes por que o objeto esta assim: token: { barear: 'algo', token: 'o token'}
    return { token}
  }
}

module.exports = SessionController
