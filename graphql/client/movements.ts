import { gql } from "@apollo/client";

const GET_MOVEMENTS = gql`
  query Materials {
    materials {
      id
      createdAt {
        day
        month
        year
      }
      input
      output
    }
  }
`;

export { GET_MOVEMENTS };
