# Criação de tabelas no Postgresql
## Criação de migrations
`node_modules/.bin/knex migrate:make create_users --env test`
`node_modules/.bin/knex migrate:make create_table_accounts --env test`
## Criação de tabelas pegando a ultima migration
`node_modules/.bin/knex migrate:latest --env test`
## realizar rollback nas tabelas
`node_modules/.bin/knex migrate:rollback --env test`