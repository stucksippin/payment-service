import { PrismaClient } from "@prisma/client"


export default async function getTransactionById(idTransaction) {
    const prisma = new PrismaClient()

    const resp = await prisma.transactions.findFirst({
        where: {
            idTransaction: idTransaction
        }
    })

    console.log(resp);

    return resp

}   