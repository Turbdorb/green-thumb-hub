const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Plant {
    _id: ID
    common_name: String
    scientific_name: String
    watering: String
    sunlight: String
    description: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    plants: [Plant]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    addPlant(
      common_name: String
      scientific_name: String!
      watering: String!
      sunlight: String!
      description: String
    ): Plant
  }
`;

module.exports = typeDefs;
