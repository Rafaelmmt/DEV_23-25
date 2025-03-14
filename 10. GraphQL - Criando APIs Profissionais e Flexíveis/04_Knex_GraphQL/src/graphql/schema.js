export const typeDefs = `#graphql

  # USUÁRIO
  type Usuario {
    id: Int
    nome: String!
    email: String!
    perfis: [Perfil]
  }

  input FiltroUsuario {
    id: Int
    nome: String
  }

  # PERFIL
  type Perfil {
    id: Int
    nome: String!
    rotulo: String!
  }

  input IdPerfil {
    id: Int
  }

  ##### QUERY #####
  type Query {
    usuarios: [Usuario]
    usuario(filtro: FiltroUsuario): Usuario
    perfis: [Perfil]
    perfil(filtro: IdPerfil): Perfil
  }

`
