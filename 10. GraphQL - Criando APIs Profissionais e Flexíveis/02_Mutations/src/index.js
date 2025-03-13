import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// 1. DEFINE O SCHEMA DO GRAPHQL
const typeDefs = `#graphql

  type Perfil {
    id: Int
    nome: String
  }

  enum UsuarioStatus {
    ATIVO
    INATIVO
    BLOQUEADO
  }

  type Usuario {
    id: Int
    nome: String!
    email: String!
    idade: Int
    perfil: Perfil
    status: UsuarioStatus
  }
  
  #CRUD (Create = Mutation, Read = Query, Update = Mutation, Delete = Mutation)
  
  type Mutation {
    createUser(nome: String!, email: String!, idade: Int, perfil_id: Int, status: UsuarioStatus): Usuario 
    updateUser(id: Int!, nome: String, email: String, idade: Int, perfil_id: Int, status: UsuarioStatus): Usuario
    deleteUser(id: Int!): Usuario
    
  }

  type Query {
    section3: String
    usuarios: [Usuario] 
    usuario(id: Int): Usuario 
    perfis: [Perfil] 
    perfil(id: Int): Perfil
  }

`

const perfis = [
  { id: 1, nome: 'comum' },
  { id: 2, nome: 'administrador' }
]

const usuarios = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
  }, {
    id: 2,
    nome: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
  }, {
    id: 3,
    nome: 'Daniela Smith',
    email: 'danismi@umail.com',
    idade: 24,
    perfil_id: 1,
    status: 'BLOQUEADO'
  }
] 

// 2. IMPLEMENTA OS RESOLVERS
const resolvers = {

  Usuario: {
    perfil: (usuario) => {
      const sels = perfis.filter(p => p.id === usuario.perfil_id)
      return sels ? sels[0] : null
    },
  },

  Query: {
    section3: () => 'Mutations: Mutations are used to modify data in the database, they are used to create, update, and delete data.',
    usuarios: () => usuarios,
    usuario: (_, { id }) => {
      const sels = usuarios.filter(u => u.id === id)
      return sels ? sels[0] : null
    },
    perfis: () => perfis,
    perfil: (_, { id }) => {
      const sels = perfis.filter(p => p.id === id)
      return sels ? sels[0] : null
    },
  },

  Mutation: {
    createUser: (_, args) => {
      const emailExistente = usuarios.some(u => u.email === args.email)
      if (emailExistente) {
        throw new Error('E-mail já cadastrado!')
      }
      const novo = {
        id: usuarios.length + 1,
        nome: args.nome,
        email: args.email,
        idade: args.idade,
        perfil_id: args.perfil_id,
        status: args.status
      }
      usuarios.push(novo)
      return novo
    },
    
    updateUser: (_, args) => {
      const i = usuarios.findIndex(u => u.id === args.id)
      if (i < 0) {
        throw new Error('Usuário não encontrado!')
      }
      const usuario = {...usuarios[i], ...args}
      usuarios.splice(i, 1, usuario)
      return usuario
    },

    deleteUser: (_, { id }) => {
      const i = usuarios.findIndex(u => u.id === id)
      if (i < 0) {
        throw new Error('Usuário não encontrado!')
      }
      const excluido = usuarios.splice(i, 1)
      return excluido[0]
    }
  }
  
}

// 3. CRIAR UM INSTÂNCIA DO APOLLO SERVER
const server = new ApolloServer({ typeDefs, resolvers })

// 4. INICIA O SERVIDOR
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}`)
