const db = require('../config/db')

const novoUsuario = {
  nome: 'Rafael',
  email: 'rafa823949283@gmail.com',
  senha: '123456'
}

async function testeEdicao() {
  
  // COUNT
  const {qtde} = await db('usuarios').count('* as qtde').first()
  console.log(qtde)
  
  //INSERIR (se a tabela estiver vazia)
  if(qtde == 0) {
    await db('usuarios').insert(novoUsuario)
    console.log('Novo usuário inserido no sistema!')
  }
  
  // EDITAR
  let { id } = await db('usuarios').select('id').limit(1).first()
  await db('usuarios').where({ id: id }).update({nome: 'Rafael Matos'})

  return db('usuarios').where({ id: id })

}

testeEdicao()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => db.destroy())
