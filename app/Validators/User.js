'use strict'

class User {

  //metodo para validar todos e não parar no primeiro erro
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      email: 'email|required|unique:users',
      password: 'required'// validation rules
    }
  }

  get messages () {
    return {
      'name.required': 'Campo nome nao foi preenchido corretamente',
      'email.email': 'Email nao esta no formato de email.',
      'email.required': 'Campo email nao foi preenchido.',
      'email.unique': 'Esse email ja esta registrado.',
      'password.required': 'Campo senha nao foi preenchido'
    }
  }
}

module.exports = User
