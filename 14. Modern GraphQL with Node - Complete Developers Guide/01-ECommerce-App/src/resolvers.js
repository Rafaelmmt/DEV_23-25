import { categories, products, reviews } from "./data.js"

export const resolvers = {

  Category: {
    products: ({ id }, args, context) => products.filter((obj) => obj.categoryId === id)
  },

  Product: {
    category: ({ categoryId }) => categories.find((obj) => obj.id === categoryId),
    reviews: ({ id }) => reviews.filter((obj) => obj.productId === id) 
  },
  
  Query: {
    hello: () => "Hello World!!",
    products: (parent, { filter }) => {
      if (filter) {
        return products.filter((obj) => obj.onSale === filter.onSale)
      }
      return products
    },
    product: (parent, { id }, context) => products.find((obj) => obj.id === id),
    categories: () => categories,
    category: (parent, { id }) => categories.find((obj) => obj.id === id)
  }

}
