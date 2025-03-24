export function up(knex) {
  return knex.schema.createTable('usuarios', table => {
    table.increments('id').primary()
    table.string('nome').notNullable()
    table.string('email').notNullable().unique()
    table.string('senha', 60).notNullable()
    table.boolean('ativo').notNullable().defaultTo(true)
    table.timestamp('data_criacao').defaultTo(knex.fn.now())
    table.timestamp('data_atualizacao').defaultTo(knex.fn.now())
  })
}

export function down(knex) {
  return knex.schema.dropTable('usuarios')
}
