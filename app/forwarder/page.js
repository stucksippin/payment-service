'use client'

export default function Forwarder() {
    async function sendMsg() {
        const sendMessage = {
            KEY: "traderOne",
            FROM: "900",
            SIM: "79281223954",
            SMS: "MIR-2622 11:32 Перевод 4332.95р от Вадим Х. Баланс: 15 406.95р",
        }

        const resp = await fetch("http://localhost:3000/api/forwarded", {
            method: "POST",
            body: JSON.stringify(sendMessage)
        })
        if (resp) {
            console.log('Оки')
        }
    }
    return (
        <button className="border p-5 " onClick={sendMsg}>SEND FORWARDER MESSAGE</button>


    )
}
