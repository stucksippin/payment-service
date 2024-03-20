import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { PrismaClient } from "@prisma/client";
export const NextAuthOptions = {
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt'
    },
    providers: [CredentialsProvider({
        credentials: {
            email: {},
            password: {}
        },
        async authorize(credentials) {
            const prisma = new PrismaClient()
            const user = await prisma.users.findFirst({
                where: {
                    email: credentials.email
                }
            })
            const correctPassword = await compare(credentials.password, user.password)


            if (correctPassword) {
                return {
                    id: user.id,
                    email: user.email,
                    role: user.role
                }
            }
            return null
        }
    })],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
                token.id = user.id
            }
            return token
        },
        async session({ token, session }) {

            session.user = {
                email: token.email,
                role: token.role,
                id: token.id
            }
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
}