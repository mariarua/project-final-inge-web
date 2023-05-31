import { gql } from "@apollo/client";

const GET_USERS = gql`
  query Users {
    users {
      name
      id
      createdAt{
        day
        month
        year
      }
      email
      role {
        name
      }
    }
  }
`;

const GET_EMAIL_USERS = gql`
  query Users {
    users {
      email
    }
  }
`;


export { GET_USERS , GET_EMAIL_USERS};
