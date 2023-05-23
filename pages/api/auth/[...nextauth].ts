import NextAuth, { NextAuthOptions } from "next-auth";
import prisma from "@/config/prisma";
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextApiRequest, NextApiResponse } from "next";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID ?? "",
      clientSecret: process.env.AUTH0_CLIENT_SECRET ?? "",
      issuer: process.env.AUTH0_ISSUER ?? "",
    }),
  ],
};

const auth = async (req: NextApiRequest, res: NextApiResponse) =>
  await NextAuth(req, res, authOptions);

export default auth;
