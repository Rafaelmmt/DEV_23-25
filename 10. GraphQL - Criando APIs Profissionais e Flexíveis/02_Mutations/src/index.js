import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// 1. DEFINE O SCHEMA DO GRAPHQL
const typeDefs = `

  type Query {
    section3: String
  }

`

// 2. IMPLEMENTA OS RESOLVERS
const resolvers = {
  Query: {
    section3: () => 'Mutations: Mutations are used to modify data in the database, they are used to create, update, and delete data.',
  },
}

// 3. CRIAR UM INSTÂNCIA DO APOLLO SERVER
const server = new ApolloServer({ typeDefs, resolvers })

// 4. INICIA O SERVIDOR
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}`)
