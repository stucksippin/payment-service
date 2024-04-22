import prisma from "@/app/libs/prisma"

export async function PUT(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body)
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