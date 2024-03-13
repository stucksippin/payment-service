export async function POST(req) {
    const resp = await req.json()
    console.log('-------------');
    console.log(resp);

    return Response.json(resp, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    })
}