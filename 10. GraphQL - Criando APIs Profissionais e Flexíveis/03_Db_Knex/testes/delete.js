const db = require('../config/db')

const usuarioId = 5

async function deletarUsuario() {
  await db('usuarios').where({ id: usuarioId }).delete()
  return db('usuarios')
}

deletarUsuario()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => db.destroy())
