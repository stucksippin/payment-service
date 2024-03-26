import { PrismaClient } from "@prisma/client";

export default async function getCards(userId) {
    const prisma = new PrismaClient()
    const user = await prisma.users.findFirstOrThrow({
        where: {
            id: userId
        },
        include: {
            cards: true
        }
    });
    return user.cards
}
