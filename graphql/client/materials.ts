import { gql } from "@apollo/client";

const GET_MATERIALS = gql`
  query Materials {
    materials {
      id
      createdAt {
        day
        month
        year
      }
      name
      price
    }
  }
`;

const GET_NAME_MATERIALS = gql`
  query Materials {
    materials {
      id
      name
    }
  }
`;

export { GET_MATERIALS, GET_NAME_MATERIALS};
