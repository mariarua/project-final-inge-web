import { gql } from "@apollo/client";

const GET_MATERIALS = gql`
  query Materials {
    materials {
      id
      createdAt
      name
      price
    }
  }
`;

const GET_MATERIALS_LIST = gql`
  query Materials {
    materials {
      id
      name
      price
    }
  }
`;

export { GET_MATERIALS, GET_MATERIALS_LIST };
