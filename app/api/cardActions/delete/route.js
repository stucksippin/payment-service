import { PrismaClient } from "@prisma/client"


export async function DELETE(request) {
    const { id } = await request.json()



    const prisma = new PrismaClient()
    const resp = await prisma.card.delete({
        where: {
            id: parseInt(id)
        }
    })
    if (resp) {
        return Response.json({
            result: "OK"
        })
    } else {
        return Response.json({
            result: "fail"
        })
    }

}