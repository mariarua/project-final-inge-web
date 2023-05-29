import { Resolver } from "@/types";
import { GraphQLError } from "graphql/error";

const resolvers: Resolver = {
  User: {
    role: async (parent, args, context) =>
      await context.db.role.findUnique({
        where: { id: parent.roleId },
      }),
      createdAt: async (parent, args, context) => {
        console.log(parent)
        const date = new Date(parent.createdAt);
        return ({year: date.getFullYear(), month:date.getMonth(), day:date.getDay()})
      }
  },
  Material: {
    movement: async (parent, args, context) =>
      await context.db.Movement.findMany({
        where: {id: parent.materialId}
      })
  },
  Query: {

    users: async (parent, args, context) => {
      const{db , session} = context;
      if (!session) {
        return null
      }
      
      const user = await db.User.findUnique({
        where: {email: session.user?.email}, 
        include: {role:true}
      })
      
      const role = user.role.name
      if (role=='ADMIN'){
        return await context.db.user.findMany()
      }
      else {return null}
      
    
    },

    materials: async (parent, args, context) => {
      const{db , session} = context;
      if (!session) {
        return null
      }
      return (await db.material.findMany())
    },
      
    material: async (parent, args, context) => {
      const{db , session} = context;
      if (!session) {
        return null
      }
      return (await db.material.findUnique({where: {id: args.id}}))
    },
    user: async (parent, args, context) => {
      const{db , session} = context;
      if (!session){
        return null
      }
      return (await db.User.findUnique({where: {id: args.id}, include:{role:true}}))
    },
    roles:async (parent, args, context) => {
      const{db , session} = context;
      if (!session) {
        return null
      }
      return (await db.role.findMany())
    }
  },
  Mutation: {
     /*--------------------------------------------------------*/
    updateRole: async (parent, args, context) =>{
      const {db , session} = context;
      if (!session){
        throw new GraphQLError("User is not authenticated", {
          extensions:{
            code: 'Unauthorized',
            http: {status: 401}
          }
        });
      }
      const user = await db.User.findUnique({
        where: {email: session.user?.email},
        include: {role:true}
      })
      const role = user.role.name
      if (role =="ADMIN"){
        const userUpdated =await context.db.user.update({
          where:{id: args.id},
          data:{
            roleId: args.roleId
          }
        }
        )
        return userUpdated
      }
      throw new GraphQLError("Unauthorized",{
        extensions:{
          code: 'Unauthorized',
          http: {status: 401}
        }
      });
    },
    createMaterial: async (parent, args, context) => {
      const { db, session } = context;      
      if (!session){
        throw new GraphQLError("User is not authenticated", {
          extensions:{
            code: 'Unauthorized',
            http: {status: 401}
          }
        });
      }
      const user = await db.User.findUnique({
        where: {email: session.user?.email},
        include: {role: true}
      })
      const role = user.role.name

      if (role == 'ADMIN'){
        const newMaterial = await db.Material.create({
          data: {
            name: args.name,
            price: args.price,
            userId: user.id ,
          }
        })
        return newMaterial;
      }
      throw new GraphQLError("Unauthorized",{
        extensions:{
          code: 'Unauthorized',
          http: {status: 401}
        }
      });
    },
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
    createMovement: async (parent, args, context) => {
      const {db , session} = context;
      if (!session){
        throw new GraphQLError("User is not authenticated", {
          extensions:{
            code: 'Unauthorized',
            http: {status: 401}
          }
        });
      }
      const user = await db.User.findUnique({
        where: {email: session.user?.email},
      })
      const newMovement = await db.Movement.create({
        data: {
          input: args.input,
          output: args.output,
          userId: user.id,
          materialId: args.materialId
        },
      })
      console.log(newMovement)
      return newMovement
    },
  },
};

export { resolvers };
