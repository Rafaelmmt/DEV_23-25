import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

// The GraphQL schema
import { typeDefs } from "./schema.js"

// DATA
import productList from "./data.js"
 
 
// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => "Hello World!!",
    products: () => productList,
    product: (parent, args, context) => {
      const chosenProduct = productList.find((obj) => obj.name === args.name)
      return chosenProduct? chosenProduct : null
    }
  },
}
 
const server = new ApolloServer({
  typeDefs,
  resolvers,
})
 
const { url } = await startStandaloneServer(server)
console.log(`🚀 Server ready at ${url}`)
