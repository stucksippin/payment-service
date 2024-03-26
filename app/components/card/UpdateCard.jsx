'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import InputCard from './InputAddCard/InputCard'
import InputPhone from './InputAddCard/InputPhone'

export default function UpdateCard({ id, cardHolder, phone, cardNumber, active }) {
    const router = useRouter()
    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const resp = await fetch('/api/cardActions/update', {
            method: 'PATCH',
            body: formData
        })

        const res = await resp.json()
        console.log(res);
        if (res.result === "OK") {
            router.push('/cardList')
            router.refresh()
        }


    }

    return (
        <form onSubmit={handleSubmit} className='container flex flex-col gap-y-5 w-[800px]'>
            <input type="text" name='id' defaultValue={id} hidden />
            <InputCard type="text" name='cardNumber' cardValue={cardNumber} placeholder='Номер карты' />
            <InputPhone type="text" name='phone' cardPhone={phone} placeholder='Номер телефона' />
            <Input type="text" name='cardHolder' defaultValue={cardHolder} placeholder='Держатель карты' />
            <label>Активность карты</label>
            <input type="checkbox" name='active' defaultChecked={!!active ? 'checked' : ''} placeholder='active' />
            <div className='text-center'>
                <Button>Обновить данные о карте</Button>
            </div>
        </form>
    )
} 
