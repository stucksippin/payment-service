import { PrismaClient } from "@prisma/client"


export default async function getCardById(id) {
    const prisma = new PrismaClient()
    return await prisma.card.findFirst({
        where: {
            id: parseInt(id)
        }
    })

}