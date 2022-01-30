## Criação da tabela usuarios
`node_modules/.bin/knex migrate:make create_users --env test`
## realizar migração pegando a ultima migração possivel
`node_modules/.bin/knex migrate:latest --env test`
## realizar rollback nas tabelas
`node_modules/.bin/knex migrate:rollback --env test`