const db = require('../config/db')

// db('perfis')
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

// db('perfis')
//   .then(res => res.map(p => p.nome))
//   .then(nomes => console.log(nomes))
//   .finally(() => db.destroy())

// db('perfis').select('nome', 'id')
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

// db('perfis').where({ id: 2 })
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

db.select('id', 'rotulo').from('perfis').limit(4)
  .then(res => console.log(res))
  .finally(() => db.destroy())