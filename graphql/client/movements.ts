import { gql } from "@apollo/client";

const GET_MOVEMENTS = gql`
  query Movements($material: ID) {
    movements(material: $material) {
      id
      createdAt
      input
      output
    }
  }
`;

export { GET_MOVEMENTS };
