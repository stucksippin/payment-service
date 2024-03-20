import { PrismaClient } from "@prisma/client"

export async function PATCH(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body)
    console.log(data)

    const prisma = new PrismaClient()
    const resp = await prisma.card.update({
        data: {
            cardNumber: data.cardNumber,
            phone: data.phone,
            cardHolder: data.cardHolder,
            active: !!data.active
        },
        where: {
            id: parseInt(data.id)
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