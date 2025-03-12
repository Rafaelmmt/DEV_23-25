const db = require('../config/db')

// const novoPerfil = {
//   nome: 'visitante',
//   rotulo: 'Visitante'
// }

// db('perfis').insert(novoPerfil)
//   .then(res => console.log(res))
//   .catch(err => console.log(err.sqlMessage))
//   .finally(() => db.destroy())

// const perfilSU = {
//   nome: 'root' + Math.random(),
//   rotulo: 'Super Usuário'
// }

// db.insert(perfilSU).into('perfis')
//   .then(res => res.command)
//   .then(command => `Comando: ${command}`)
//   .then(status => console.log(status))
//   .catch(err => console.log(err.sqlMessage))
//   .finally(() => db.destroy())

const novoPerfil = {
  nome: 'leitor',
  rotulo: 'Leitor'
}

db('perfis').insert(novoPerfil)
  .then(res => console.log(res))
  .catch(err => console.log(err.sqlMessage))
  .finally(() => db.destroy())