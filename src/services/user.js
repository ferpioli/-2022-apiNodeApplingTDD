const validationError = require('../errors/ValidationError')

module.exports = (app) => {
  const findAll = (filter = {}) => {
    return app.db('users').where(filter).select()
  }

  const save = async (user) => {
    if (!user.name) throw new validationError('Nome é atributo obrigatorio')
    if (!user.mail) throw new validationError('Email é atributo obrigatorio')
    if (!user.passwd) throw new validationError('Senha é atributo obrigatorio')

    const userDb = await findAll({ mail: user.mail })
    if (userDb && userDb.length > 0) return { error: 'Já existe um usuario com este e-mail' }
    return app.db('users').insert(user, '*')
  }
  return { findAll, save }
}
