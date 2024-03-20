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