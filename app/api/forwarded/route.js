export async function POST(resp) {
    const response = await resp.json()


    if (resp) {
        return Response.json({
            result: "ok"
        })
    } else {
        return Response.json({
            result: "error!!!!"
        })
    }
}