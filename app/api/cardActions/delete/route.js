// import { PrismaClient } from "@prisma/client";

// export async function Delete(request) {
//     const { id } = await request.json()
//     console.log("Удалена карточка " + id)

//     const prisma = new PrismaClient()
//     const resp = await prisma.card.delete({
//         where: {
//             id: parseInt(id)
//         }
//     })
//     if (resp) {
//         return Response.json({
//             resu     