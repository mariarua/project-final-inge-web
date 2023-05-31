/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth/core/types";
import { PrismaClient, User, Role, Enum_RoleName } from "@prisma/client";

export interface Context {
  db: PrismaClient;
  req: NextApiRequest;
  res: NextApiResponse;
  session: Session | null;
}

interface ResolverFunction {
  [key: string]: (parent: any, args: any, context: Context) => Promise<any>;
}

export interface Resolver {
  Query: ResolverFunction;
  Mutation: ResolverFunction;
  [key: string]: ResolverFunction;
}

export interface ExtendedUser extends User {
  role: Role;
}

export type Roles = Enum_RoleName[];
