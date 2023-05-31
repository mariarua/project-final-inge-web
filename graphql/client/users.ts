import { gql } from "@apollo/client";

const GET_USERS = gql`
  query Users {
    users {
      name
      id
      createdAt
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

const GET_USER_BY_EMAIL = gql`
  query Users($email: String!) {
    userByEmail(email: $email) {
      id
      email
      role {
        name
      }
    }
  }
`;

export { GET_USERS, GET_EMAIL_USERS, GET_USER_BY_EMAIL };
