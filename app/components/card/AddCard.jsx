import React from 'react'

export default function AddCard() {
    return (
        <form>
            <input type="text" placeholder='Введите номер карты' />
            <input type="text" placeholder='Введите номер телефона' />
            <input type="text" placeholder='Держатель карты' />
            <input type="chechbox" placeholder='Активность включить сразу?' />

        </form>
    )
}
