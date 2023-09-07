import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      plants {
        watering
        sunlight
        scientific_name
        common_name
        _id
        description
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