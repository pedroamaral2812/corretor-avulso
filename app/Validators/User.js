'use strict'

class User {

  //metodo para validar todos e não parar no primeiro erro
  get validateAll () {
    return true
  }

  get rules () {
    return {
      user: 'required',
      email: 'email|required|unique:user',
      password: 'required|confirmed'// validation rules
    }
  }
}

module.exports = User
