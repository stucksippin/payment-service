import { PrismaClient } from '@prisma/client';


export async function POST(req) {
    const data = await req.json();
    const prisma = new PrismaClient();
    try {
        const resp = await prisma.transactions.create({
            data: {
                idTransaction: data.idTransaction,
                idRequester: data.idRequester,
                sum: parseInt(data.sum),
                dataSent: new Date(data.dataSent),
                status: parseInt(data.status)
            }
        });
        return Response.json({ result: 'ok' });
    } catch (error) {
        console.error('Error creating transaction:', error);
        return Response.json({ error: 'Error creating transaction' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
