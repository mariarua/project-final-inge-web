import { Resolver } from "@/types";

const resolvers: Resolver = {
  User: {
    role: async (parent, args, context) =>
      await context.db.role.findUnique({
        where: { id: parent.roleId },
      }),
  },
  Query: {
    users: async (parent, args, context) => await context.db.user.findMany(),
    materials: async (parent, args, context) =>
      await context.db.material.findMany(),
  },
  Mutation: {
    createMaterial: async (parent, args, context) =>
      await context.db.material.create({
        data: {
          name: args.name,
          price: args.price,
          userId: args.userId,
        },
      }),
    updateMaterial: async (parent, args, context) =>
      await context.db.material.update({
        where: { id: args.id },
        data: {
          name: args.name,
          price: args.price,
        },
      }),
    deleteMaterial: async (parent, args, context) =>
      await context.db.material.delete({
        where: { id: args.id },
      }),
  },
};

export { resolvers };
