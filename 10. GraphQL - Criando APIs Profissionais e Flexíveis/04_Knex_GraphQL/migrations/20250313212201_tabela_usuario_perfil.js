export function up(knex) {
  return knex.schema.createTable('usuario_perfil', table => {
    table.integer('usuario_id').unsigned()
    table.integer('perfil_id').unsigned()
    table.foreign('usuario_id').references('usuarios.id')
    table.foreign('perfil_id').references('perfis.id')
    table.primary(['usuario_id', 'perfil_id'])
  }).then(function() {
    return knex('usuario_perfil').insert([
      { usuario_id: 1, perfil_id: 3 },
      { usuario_id: 2, perfil_id: 1 },
      { usuario_id: 3, perfil_id: 1 },
      { usuario_id: 4, perfil_id: 2 }
    ])
  })
}

export function down(knex) {
  return knex.schema.dropTable('usuario_perfil')
}
