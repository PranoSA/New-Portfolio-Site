import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"

import { AuthOptions } from "next-auth";


export const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID||'nextjs',
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET||'',
      issuer: process.env.KEYCLOAK_SERVER_URL||'http://localhost:8080/auth',
    })
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        //@ts-ignore
        session.user.id = token.sub;

        session.user.id = token.sub || "";
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
},
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
