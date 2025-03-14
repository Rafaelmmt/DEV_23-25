import { dataBase } from '../db/db_curso_graphql.js'

export const resolvers = {

  Query: {

    // TABELA USUÁRIOS
    usuarios: () => dataBase('usuarios'),
    usuario: (_, { filtro }) => {
      const { id, nome } = filtro
      if(id) {
        return dataBase('usuarios').where({ id }).first()
      } else {
        return filtro.nome ? dataBase('usuarios').where({ nome }).first() : null
      }
    },

    // TABELA PERFIS
    perfis: () => dataBase('perfis'),
    perfil: (_, { filtro }) => {
      const { id } = filtro
      return filtro.id ? dataBase('perfis').where({ id }).first() : null
    }
  }

}
