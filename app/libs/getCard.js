import { PrismaClient } from "@prisma/client";

export default async function getCards() {
    const prisma = new PrismaClient()
    const cards = await prisma.card.findMany();
    return cards
}