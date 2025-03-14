import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// 1. DEFINE O SCHEMA DO GRAPHQL
import { typeDefs } from './graphql/schema.js'

// 2. IMPLEMENTA OS RESOLVERS
import { resolvers } from './graphql/resolvers.js'

// 3. CRIAR UM INSTÂNCIA DO APOLLO SERVER
const server = new ApolloServer({ typeDefs, resolvers })

// 4. INICIA O SERVIDOR
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}`)
