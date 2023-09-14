import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
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