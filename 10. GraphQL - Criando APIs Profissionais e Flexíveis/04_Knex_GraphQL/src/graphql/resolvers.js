import { dataBase } from '../db/db_curso_graphql.js'

const buscarPerfil = (filtro) => {
  return dataBase('perfis').where({ id: filtro.id }).first()
}
const buscarUsuario = (filtro) => {
  const { id, nome } = filtro
  if(id) {
    return dataBase('usuarios').where({ id }).first()
  } else {
    return filtro.nome ? dataBase('usuarios').where({ nome }).first() : null
  }
}

export const resolvers = {

  Usuario: {
    perfil: (usuario) => {
      return dataBase('perfis')
        .join('usuario_perfil', 'perfis.id', 'usuario_perfil.perfil_id')
        .where({ usuario_id: usuario.id })
    }
  },

  Perfil: {
    usuario: (perfil) => {
      return dataBase('usuarios')
        .join('usuario_perfil', 'usuarios.id', 'usuario_perfil.usuario_id')
        .where({ perfil_id: perfil.id })
    }
  },

  Query: {

    // TABELA USUÁRIOS
    usuarios: () => dataBase('usuarios'),
    usuario: (_, { filtro }) => buscarUsuario(filtro),

    // TABELA PERFIS
    perfis: () => dataBase('perfis'),
    perfil: (_, { filtro }) => buscarPerfil(filtro)
  },

  Mutation: {

    // PERFIL
    criarPerfil: async (_, { dados }) => {
      try {
        // Inserir o registro
        await dataBase('perfis').insert(dados)
        // Buscar o registro inserido
        const newData = await dataBase('perfis').where({nome: dados.nome}).first()
        // Retorna o registro inserido
        return newData
      } catch(e) {
        throw new Error('Erro ao criar perfil.')
      }
    },
    editarPerfil: async(_, { filtro, dados }) => {
      try {
        const obterPerfil = await buscarPerfil(filtro)
        if(obterPerfil) {
          const { id } = obterPerfil
          await dataBase('perfis').where({ id }).update(dados)
          return { ...obterPerfil, ...dados }
        } else {
          throw new Error('Perfil não encontrado!')
        }
      } catch(e) {
        throw new Error('Erro ao editar o perfil')
      }
    },
    // excluirPerfil: async(_, args) => {
    //   try {

    //   } catch(e) {
    //     throw new Error('Erro ao criar perfil.')
    //   }
    // },


    // USUARIO
    criarUsuario: async (_, { dados }) => {
      try {
        // Insere o Usuário e obtêm o ID
        const [{ id }] = await dataBase('usuarios').insert(dados).returning('id')
        // Cria relação padrão de Usuário-Perfil
        await dataBase('usuario_perfil').insert({ usuario_id: id, perfil_id: 1 })
        // Retorna o usuário criado
        const newUser = await dataBase('usuarios').where({ id }).first()
        return newUser
      } catch (e) {
        throw new Error(`Erro ao criar usuário: ${e.message}`)
      }
    },

  }

}
