const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Plant {
    _id: ID!
    common_name: String
    scientific_name: String!
    watering: String!
    sunlight: String!
    description: String
    cycle: String
    growth_rate: String
    maintenance: String
    hardiness: String
    wateringHistory: [WateringEvent]!
  }

  type WateringEvent {
    date: Date!
    watered: Boolean!
  }
  
  type Date {
    value: String!
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    plants: [Plant]
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

    addPlant(
          common_name: String
          scientific_name: String!
          watering: String!
          sunlight: String!
          description: String
        ): Plant

    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User

    deleteUser(
      _id: ID!
    ): User

    deletePlant(
      id: ID!
    ): Plant

    login(email: String!, password: String!): Auth

    waterPlant(
      plantId: ID!
      date: String!
      watered: Boolean!
      ): Plant

    addWateringEvent(
      plantId: ID!
      date: String!
      watered: Boolean!
    ): Plant
  }
`;

module.exports = typeDefs;
