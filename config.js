import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prisma from "./app/libs/prisma";



export const NextAuthOptions = {
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            credentials: {
                nickname: {},
                password: {}
            },
            async authorize(credentials) {

                try {
                    const user = await prisma.users.findFirst({
                        where: {
                            nickname: credentials.nickname
                        }
                    });
                    const correctPassword = await compare(credentials.password, user.password);
                    if (correctPassword) {
                        return {
                            id: user.id,
                            nickname: user.nickname,
                            role: user.role
                        };
                    }
                    return { error: 'Неверное имя пользователя или пароль' };
                } catch (error) {
                    console.error('Error fetching user:', error);
                    return { error: 'Ошибка при аутентификации' };
                } finally {
                    await prisma.$disconnect();
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.id = user.id;
            }
            return token;
        },
        async session({ token, session }) {
            session.user = {
                nickname: token.nickname,
                role: token.role,
                id: token.id
            };
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
};
