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
mutation Mutation($scientificName: String!, $watering: String!, $sunlight: String!) {
  addPlant(scientific_name: $scientificName, watering: $watering, sunlight: $sunlight) {
    _id
    common_name
    scientific_name
    watering
    sunlight
  }
}
`;

export const UPDATE_USER = gql`
mutation Mutation($firstName: String, $lastName: String, $email: String, $password: String) {
  updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    firstName
    lastName
    email
    _id
  }
}
`;

export const DELETE_USER = gql`
mutation Mutation($id: ID!) {
  deleteUser(_id: $id) {
    _id
  }
}
`;

export const DELETE_PLANT = gql`
mutation Mutation($deletePlantId: ID!) {
  deletePlant(id: $deletePlantId) {
    _id
  }
}
`;

export const LOGIN = gql`
mutation Mutation($email: String!, $password: String!) {
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
mutation Mutation($plantId: ID!, $date: String!, $watered: Boolean!) {
  waterPlant(plantId: $plantId, date: $date, watered: $watered) {
    wateringHistory {
      watered
      date {
        value
      }
    }
  }
}
  }
`
