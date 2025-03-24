export function up(knex) {
  return knex.schema.createTable('perfis', table => {
    table.increments('id').primary()
    table.string('nome').notNullable().unique()
    table.string('rotulo').notNullable().unique()
  }).then(function() {
    return knex('perfis').insert([
      { nome: 'comum', rotulo: 'Comum' },
      { nome: 'admin', rotulo: 'Administrador' }
    ])
  })
}

export function down(knex) {
  return knex.schema.dropTable('perfis')
}
