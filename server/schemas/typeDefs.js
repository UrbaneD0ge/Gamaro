const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
    gameOrConsole: Boolean
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Inventory {
    _id: ID
    sellDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    userName: String
    email: String
    orders: [Order]
    inventory: [Inventory]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      userName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    addInventory(products: [ID!): Inventory
    updateUser(
      firstName: String
      lastName: String
      userName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!): Product
    updateInventory(_id: ID!): Inventory
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
