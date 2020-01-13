'use strict'

const User = use("App/Models/User")

class UserController {
  async store( { request }){
    const data = request.only(['name', 'email', 'password'])

    const user = await User.create(data)

    return user;
  }

  async index(){
    const user = await User.all()

    return user
  }

  async show ({ params, response }) {
    const user = await User.findOrFail(params.id)

    return user;

  }
}

module.exports = UserController
