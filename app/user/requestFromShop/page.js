'use client'
import { v4 as uuidv4 } from 'uuid';

export default function Transcation() {
    async function sendTransaction() {
        const currentDate = new Date()
        const formattedDate = currentDate.toLocaleString()
        const idTransaction = uuidv4()

        const data = {
            idTransaction: idTransaction,
            idRequester: 'Casino212',
            sum: 2120,
            dataSent: formattedDate,
            status: 0
        }
        const resp = await fetch('http://localhost:3000/api/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseData = await resp.json()
        return responseData
    }


    return (

        <div className=' border p-5'>
            <button onClick={sendTransaction}>Оплатить</button>
        </div>
    )
}
