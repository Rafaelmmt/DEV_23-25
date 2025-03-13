/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('usuario_perfil', table => {
    table.integer('usuario_id').unsigned().notNullable()
    table.integer('perfil_id').unsigned().notNullable()
    table.foreign('perfil_id').references('perfis.id')
    table.foreign('usuario_id').references('usuarios.id')
    table.primary(['usuario_id', 'perfil_id'])
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('usuario_perfil')
};
