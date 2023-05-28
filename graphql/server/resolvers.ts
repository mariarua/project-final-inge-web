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
      console.log(role)
      if (role=='ADMIN'){
        return await context.db.user.findMany()
      }
      else {return null}
      
    
    },

    materials: async (parent, args, context) => 
      await context.db.material.findMany(),
      
    material: async (parent, args, context) =>
      await context.db.material.findUnique({where: {id: args.id}}),

     
    user: async (parent, args, context) => {
      const{db , session} = context;
      if (!session){
        return null
      }

      const userr = await db.User.findUnique({where: {id: args.id},
        include:{role:true}})
      const role = userr.role.name
      if (role=='ADMIN'){
      return userr
      }


    }
  },
  Mutation: {
     /*--------------------------------------------------------*/
    updateRole: async (parent, args, context) =>{
      const {db , session} = context;
      if (!session){
        throw new Error("debes estar logeado")
      }
      const user = await db.User.findUnique({
        where: {email: session.user?.email},
        include: {role:true}
      })
      const role = user.role.name
      if (role =="ADMIN"){
        const a =await context.db.user.update({
          where:{id: args.id},
          data:{
            roleId: args.roleId
          }
        }
        )
        return a
      }


      
      
    }
    
    ,
    createMaterial: async (parent, args, context) => {
      const { db, session } = context;      
      if (!session){
        throw new Error("Para hacer esto debes autenticarte");
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
      throw new Error("Unauthorized");
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
