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

  input CategoryInput {
    name: String!
  }

  input ProductInput {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: ID!
  }

  type Query {
    hello: String
    products(filter:ProductsFilterInput): [Product!]!
    product(id:ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: CategoryInput): Category!
    addProduct(input: ProductInput): Product!
  }

`
