export function up(knex) {
  return knex.schema.createTable('usuario_perfil', table => {
    table.integer('usuario_id').unsigned()
    table.integer('perfil_id').unsigned()
    table.foreign('usuario_id').references('usuarios.id')
    table.foreign('perfil_id').references('perfis.id')
    table.primary(['usuario_id', 'perfil_id'])
  }).then(function() {
    return knex('usuario_perfil').insert([
      { usuario_id: 1, perfil_id: 1 },
      { usuario_id: 2, perfil_id: 1 },
      { usuario_id: 3, perfil_id: 1 },
      { usuario_id: 4, perfil_id: 2 },
      { usuario_id: 5, perfil_id: 1 },
      { usuario_id: 6, perfil_id: 1 },
      { usuario_id: 7, perfil_id: 1 },
      { usuario_id: 8, perfil_id: 2 },
      { usuario_id: 9, perfil_id: 1 },
      { usuario_id: 10, perfil_id: 1 },
      { usuario_id: 11, perfil_id: 3 },
      { usuario_id: 12, perfil_id: 2 },
      { usuario_id: 13, perfil_id: 1 },
      { usuario_id: 14, perfil_id: 2 },
      { usuario_id: 15, perfil_id: 1 },
      { usuario_id: 16, perfil_id: 1 },
      { usuario_id: 17, perfil_id: 1 },
      { usuario_id: 18, perfil_id: 2 }
    ])
  })
}

export function down(knex) {
  return knex.schema.dropTable('usuario_perfil')
}
