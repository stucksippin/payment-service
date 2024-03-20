import Link from 'next/link'
import React from 'react'

export default function CardInfo({ id, cardHolder, phone, cardNumber, active, busy }) {
    return (

        <tr >
            <td class="border px-4 py-2">{cardNumber}</td>
            <td class="border px-4 py-2">{phone}</td>
            <td class="border px-4 py-2">{cardHolder}</td>
            <td class="border px-4 py-2">{active ? "Активна" : "Неактивна"}</td>
            <td class="border px-4 py-2">{busy ? "Занята" : "Не занята"}</td>
            <td class="border px-4 py-2"><button>Удалить</button></td>
            <Link class="border px-4 py-2" href={`/cardList/${id}`}>Изменить</Link>
        </tr>

    )
}
