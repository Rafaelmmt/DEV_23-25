export const typeDefs = `#graphql
  
  type Product {
    id: ID!
    name: String! 
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Review]
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Review {
    id: ID!
    title: String!
    date: String!
    comment: String!
    rating: Int!
  }

  input ProductsFilterInput {
    onSale: Boolean!
  }

  type Query {
    hello: String
    products(filter:ProductsFilterInput): [Product!]!
    product(id:ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

`
