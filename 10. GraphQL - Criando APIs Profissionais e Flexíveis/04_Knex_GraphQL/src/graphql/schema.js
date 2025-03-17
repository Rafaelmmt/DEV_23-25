export const typeDefs = `#graphql

  # USUÁRIO
  type Usuario {
    id: Int
    nome: String!
    email: String!
    perfil: [Perfil]
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
    usuario: [Usuario]
  }

  input IdPerfil {
    id: Int
  }

  input PerfilInput {
    nome: String!
    rotulo: String!
  }

  # MUTATION
  type Mutation {
    novoPerfil(dados: PerfilInput): Perfil
    editarPerfil(filtro:IdPerfil!, dados:PerfilInput!): Perfil
  }

  ##### QUERY #####
  type Query {
    usuarios: [Usuario]
    usuario(filtro: FiltroUsuario): Usuario
    perfis: [Perfil]
    perfil(filtro: IdPerfil): Perfil
  }

`
