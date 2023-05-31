import { gql } from "graphql-tag";

export const typeDefs = gql`
  scalar DateTime

  type Date {
    year: String
    month: String
    day: String
  }

  type Material {
    id: ID!
    name: String!
    price: Int!
    movement: [Movement]
    user: User!
    userId: ID!
    createdAt: Date
  }

  type Movement {
    id: ID!
    input: Int
    output: Int
    user: User!
    Material: Material!
    userId: ID!
    materialId: ID!
    createdAt: Date
  }

  type User {
    id: ID!
    name: String!
    email: String!
    image: String!
    role: Role
    roleId: ID!
    material: [Material]
    movement: [Movement]
    createdAt: Date
  }

  type Role {
    id: ID!
    name: String!
    user: [User]
  }

  type Query {
    materials: [Material]
    material(id: ID!): Material
    users: [User]
    user(id: ID!): User
    roles: [Role]
    role(id: ID!): Role
  }

  type Mutation {
    createMaterial(name: String!, price: Int!): Material!
    updateMaterial(id: ID!, name: String!, price: Int!): Material!
    deleteMaterial(id: ID!): Material!
    createMovement(input: Int, output: Int, materialId: String!): Movement
    updateRole(id: ID!, roleId: String!): User!
  }
`;
