import { PrismaClient } from "@prisma/client"


export default async function getListOfUsers() {
    const prisma = new PrismaClient()
    return await prisma.users.findMany({
        where: {
            role: 'user'
        }
    })

}