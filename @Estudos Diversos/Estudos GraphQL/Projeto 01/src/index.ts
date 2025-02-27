import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { booksList } from './data'

// Um ​​esquema é uma coleção de definições de tipo - por isso "typeDefs"
const typeDefs = `

  #graphql

  # Adding "#graphql" to the beginning of a template literal provides GraphQL syntax highlighting in supporting IDEs.
  
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Book" type defines the queryable fields for every book in our data source.
  
  type Book {
    id: String
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  
  type Query {
    books: [Book]
  }

`

const books = booksList

// RESOLVERS definem como buscar os tipos definidos em seu esquema.
const resolvers = {
  Query: {
    books: () => books,
  },
}

// A função ApolloServer requer dois parâmetros: o schema de tipos (typeDefs) e os resolvers (resolvers).
const server = new ApolloServer({
  
  typeDefs, resolvers // Essa sintaxe é equivalente a "typeDefs: typeDefs, resolvers: resolvers" que seria útil se houvesse o interesse de renomear as variáveis)

})

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}`)