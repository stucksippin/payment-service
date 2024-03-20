import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

import InputCard from './InputAddCard/InputCard'
import InputPhone from './InputAddCard/InputPhone'

export default function AddCard({ setCards }) {
    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const resp = await fetch('/api/cardActions/create', {
            method: 'PUT',
            body: formData
        })

        const result = await resp.json()
        if (resp.ok) {
            setCards((prev) => ([
                ...prev,
                result
            ]))
        }
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <InputCard name="cardNumber" className="mb-5" type="text" required placeholder='Введите номер карты' />
            <InputPhone name="phone" className="mb-5" type="phone" required placeholder='Введите номер телефона' />
            <Input name="cardHolder" className="mb-5" type="text" required placeholder='Держатель карты' />
            <div className="text-center">
                <Button>Добавить карту</Button>
            </div>
        </form>
    )
}
