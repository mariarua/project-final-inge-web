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

const CREATE_MOVEMENT = gql`
mutation Mutation($materialId: String!, $output: Int, $input: Int) {
  createMovement(materialId: $materialId, output: $output, input: $input) {
    id
    input
    output
  }
}
`;
export { GET_MOVEMENTS, CREATE_MOVEMENT };
