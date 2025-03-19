export function up(knex) {
  return knex.schema.createTable('usuarios', table => {
    table.increments('id').primary()
    table.string('nome').notNullable()
    table.string('email').notNullable().unique()
    table.string('senha', 60).notNullable()
    table.boolean('ativo').notNullable().defaultTo(true)
    table.timestamp('data_criacao').defaultTo(knex.fn.now())
    table.timestamp('data_atualizacao').defaultTo(knex.fn.now())
  }).then(function() {
    return knex('usuarios').insert([
      {nome: 'Randle McMurphy', email: 'rmc@gml.com', senha: '38106137'},
      {nome: 'Norman Bates', email: 'nbmommy@gml.com', senha: '10473870'},
      {nome: 'Maximus Decimus', email: 'cclxxxvi@gml.com', senha: '80382153'},
      {nome: 'Wednesday Addamns', email: 'quarta_feira@gml.com', senha: '20613738'},
      {nome: 'Frank Drebin', email: 'fd2e1-2@gml.com', senha: '10514563'},
      {nome: 'Tony Montana', email: 'little_friend@gml.com', senha: '23836180'},
      {nome: 'Marge Gunderson', email: 'mg@gml.com', senha: '15633738'},
      {nome: 'Hermione Granger', email: 'wingardiumleviosa@gml.com', senha: '38108130'},
      {nome: 'Sarah Connor', email: 'scnn@gml.com', senha: '20386135'},
      {nome: 'Amélie Poulain', email: 'amelie2908@gml.com', senha: '10613887'},
      {nome: 'Vito Corleone', email: 'vcorleone@gml.com', senha: '10313380'},
      {nome: 'Shaun Riley', email: 'shnrly@gml.com', senha: '10638835'},
      {nome: 'Tommy DeVito', email: 'funnyhow@gml.com', senha: '38106137'},
      {nome: 'Forrest Gump', email: 'runforrest@gml.com', senha: '10386380'},
      {nome: 'Daniel Plainview', email: 'plainview@gml.com', senha: '23613387'},
      {nome: 'Travis Bickle', email: 'talkingtome@gml.com', senha: '23803135'},
      {nome: 'Ron Burgundy', email: 'sandiego@gml.com', senha: '38205635'},
      {nome: 'Ellen Ripley', email: 'ripley8@gml.com', senha: '00000001'}
    ])
  })
}

export function down(knex) {
  return knex.schema.dropTable('usuarios')
}
