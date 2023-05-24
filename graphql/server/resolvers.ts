import { Resolver } from "@/types";

const resolvers: Resolver = {
  User: {
    role: async (parent, args, context) =>
      await context.db.role.findUnique({
        where: { id: parent.roleId },
      }),
  },
  Material: {
    movement: async (parent, args, context) =>
      await context.db.Movement.findMany({
        where: {id: parent.materialId}
      })
  },
  Query: {
    users: async (parent, args, context) => await context.db.user.findMany(),
    materials: async (parent, args, context) =>
      await context.db.material.findMany(),
    material: async (parent, args, context) =>
      await context.db.material.findUnique({where: {id: args.id}}),
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
    createMovement: async (parent, args, context) =>
      await context.db.Movement.create({
        data: {
          input: args.input,
          output: args.output,
          userId: args.userId,
          materialId: args.materialId
        },
      }),
  },
};

export { resolvers };
