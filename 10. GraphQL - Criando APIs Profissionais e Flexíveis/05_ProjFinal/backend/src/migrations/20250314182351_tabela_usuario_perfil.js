export function up(knex) {
  return knex.schema.createTable('usuario_perfil', table => {
    table.integer('usuario_id').unsigned()
    table.integer('perfil_id').unsigned()
    table.foreign('usuario_id').references('usuarios.id')
    table.foreign('perfil_id').references('perfis.id')
    table.primary(['usuario_id', 'perfil_id'])
  })
}

export function down(knex) {
  return knex.schema.dropTable('usuario_perfil')
}
