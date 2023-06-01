import { gql } from "@apollo/client";

const GET_ROLES = gql`
query Roles {
    roles {
      id
      name
    }
  }
`;

export {GET_ROLES};