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
  
  input UsuarioInput {
    nome: String!
    email: String!
    senha: String!
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
    criarPerfil(dados: PerfilInput): Perfil
    editarPerfil(filtro:IdPerfil!, dados:PerfilInput!): Perfil
    criarUsuario(dados: UsuarioInput!): Usuario
  }

  ##### QUERY #####
  type Query {
    usuarios: [Usuario]
    usuario(filtro: FiltroUsuario): Usuario
    perfis: [Perfil]
    perfil(filtro: IdPerfil): Perfil
  }

`
