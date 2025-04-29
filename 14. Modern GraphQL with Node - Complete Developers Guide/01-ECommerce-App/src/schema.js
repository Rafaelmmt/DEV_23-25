// The GraphQL schema
export const typeDefs = `#graphql
  
  type Product {
    name: String! 
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }

  type Query {
    hello: String
    products: [Product!]!
    product(name:String!): Product
  }

`
