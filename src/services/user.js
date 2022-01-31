module.exports = (app) => {
  const findAll = (filter = {}) => {
    return app.db('users').where(filter).select()
  }

  const save = async (user) => {
    if (!user.name) return { error: 'Nome é atributo obrigatorio' }
    if (!user.mail) return { error: 'Email é atributo obrigatorio' }
    if (!user.passwd) return { error: 'Senha é atributo obrigatorio' }

    const userDb = await findAll({ mail: user.mail })
    if (userDb && userDb.length > 0) return { error: 'Já existe um usuario com este e-mail' }
    return app.db('users').insert(user, '*')
  }
  return { findAll, save }
}
