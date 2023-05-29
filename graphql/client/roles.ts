import { gql } from "@apollo/client";

const GET_ROLES = gql`
query Roles {
    roles {
      name
    }
  }
`;

export {GET_ROLES};