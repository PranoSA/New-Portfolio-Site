import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"
import { authOptions } from '@/components/AuthOptions'


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
