const req = require('express/lib/request')
const request = require('supertest')
// const { response } = require('../../src/app')

const app = require('../../src/app')

const mail = `${Date.now()}@mail.com`

test('deve listar todos os usuarios', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200)
      // expect(res.body.lenght).toBeGreaterThan(0)
      //
    })
})

test('Deve inserir usuario com sucesso', () => {
  return request(app).post('/users')
    .send({ name: 'Almeida Garrett', mail, passwd: '123456' })
    .then((res) => {
      expect(res.status).toBe(201)
      expect(res.body.name).toBe('Almeida Garrett')
    })
})

test('Não deve inserir usuario sem nome', () => {
  return request(app).post('/users')
    .send({ mail: 'fernando@mail.com', passwd: '123456' })
    .then((res) => {
      expect(res.status).toBe(400)
      expect(res.body.error).toBe('Nome é atributo obrigatorio')
    })
})

test('Não deve inserir usuario sem email', async () => {
  const result = await request(app).post('/users')
    .send({ name: 'Fernando Pessoa', passwd: '123456' })
  expect(result.status).toBe(400)
  expect(result.body.error).toBe('Email é atributo obrigatorio')
})

test('Não deve inserir usuario sem senha', (done) => {
  request(app).post('/users')
    .send({ name: 'Fernando Pessoa', mail: 'fernando@mail.com' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Senha é atributo obrigatorio')
      done()
    })
    .catch((err) => done.fail(err))
})

test.skip('Não deve inserir usuario com email existente', () => {
  return request(app).post('/users')
    .send({ name: 'Luiz de Camôes', mail, passwd: '123456' })
    .then((res) => {
      expect(res.status).toBe(400)
      expect(res.body.error).toBe('Já existe um usuario com este e-mail')
      console.log(`email${mail}`)
    })
})
