import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { usuarios, perfilUsuario } from './usuarios'

// 1. DEFINE O SCHEMA DO GRAPHQL
const typeDefs = ` 

  type PerfilUsuario {
    id: ID
    name: String
  }

  type Usuario {
    id: ID
    name: String
    idade: Int
    email: String
    perfil: PerfilUsuario
  }

  type Query {
    hello: String
    horaAtual: String
    age: Int
    usuarios: [Usuario]
  }

`

// 2. IMPLEMENTA OS RESOLVERS
const resolvers = {

  Query: {
    hello: () => 'Olá, mundo!',
    horaAtual: () => `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`,
    age: () => 45,
    usuarios: () => {
      return usuarios.map(usuario => {
        const perfil = perfilUsuario.find(perfil => perfil.id === usuario.perfil_id)
        return {
          ...usuario,
          perfil
        }
      })
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