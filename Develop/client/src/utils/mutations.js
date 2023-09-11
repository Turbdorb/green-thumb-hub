import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      lastName
      firstName
      email
      _id
    }
  }
}
`;

export const ADD_PLANT = gql`
  mutation addPlant(
    $common_name: String
    $scientific_name: String!
    $watering: String!
    $sunlight: String!
  ) {
    addPlant(
      common_name: $common_name
      scientific_name: $scientific_name
      watering: $watering
      sunlight: $sunlight
    ) {
      _id
      common_name
      scientific_name
      watering
      sunlight
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String
    $lastName: String
    $email: String
    $password: String
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($_id: ID!) {
    deleteUser(_id: $_id) {
      _id
    }
  }
`;

export const DELETE_PLANT = gql`
  mutation deletePlant($_id: ID!) {
    deletePlant(_id: $_id) {
      _id
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const WATER_PLANT = gql`
  mutation waterPlant(
    $plantId: ID!,
    $date: String!,
    $watered: Boolean!
  ) {
    addWateringEvent(input: {
      plantId: $plantId,
      date: $date,
      watered: $watered
    }) {
      _id
      name
      wateringHistory {
        date
        watered
      }
    }
  }
`
