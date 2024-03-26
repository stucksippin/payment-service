import { PrismaClient } from "@prisma/client"

export async function PUT(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body)
    console.log(data)

    const prisma = new PrismaClient()
    const resp = await prisma.card.create({
        data: {
            phone: data.phone,
            cardNumber: data.cardNumber,
            cardHolder: data.cardHolder,
            active: data.active === "false",
            busy: data.busy === "false",
            usersId: Number(data.user_id)
        }
    })
    if (resp) {
        return Response.json(resp)
    } else {
        return Response.json({
            result: "fail"
        })
    }
}