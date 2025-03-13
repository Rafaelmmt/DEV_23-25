export function up(knex) {
  return knex.schema.createTable('usuarios', table => {
    table.increments('id').primary()
    table.string('nome').notNullable()
    table.string('email').notNullable().unique()
    table.string('senha', 60)
    table.boolean('ativo').notNullable().defaultTo(true)
    table.timestamp('data_criacao').defaultTo(knex.fn.now())
    table.timestamp('data_atualizacao').defaultTo(knex.fn.now())
  }).then(function() {
    return knex('usuarios').insert([
      { nome: 'João Silva', email: 'js@empresa.com.br' },
      { nome: 'Maria Alencar', email: 'mariaalr@empresa.com.br' },
      { nome: 'Antonio Carlos', email: 'antcarlos@empresa.com.br' },
      { nome: 'Gustavo Eduardo', email: 'ge@empresa.com.br' }
    ])
  })
}

export function down(knex) {
  return knex.schema.dropTable('usuarios')
}
