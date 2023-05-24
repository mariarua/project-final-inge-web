import { gql } from "graphql-tag";

export const typeDefs = gql`

  scalar DateTime

  type Material {
    id: ID!
    name: String!
    price: Int!
    movement: [Movement]
    user: User!
    userId: ID!
  }

  type Movement {
    id: ID!
    input: Int
    output: Int
    user: User!
    Material: Material!
    userId: ID!
    materialId: ID!
    createdAt: DateTime
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
  }

  type Role {
    id: ID!
    name: String!
    user: [User]
  }

  type Query {
    materials: [Material]
    material(id: ID!): Material
    movements: [Movement]
    movement(id: ID!): Movement
    users: [User]
    user(id: ID!): User
    roles: [Role]
    role(id: ID!): Role
  }

  type Mutation {
    createMaterial(name: String!, price: Int!): Material!
    updateMaterial(id: ID!, name: String!, price: Int!): Material!
    deleteMaterial(id: ID!): Material!
    createMovement(input: Int, output: Int, userId: String!, materialId: String!): Movement
  }
`;
