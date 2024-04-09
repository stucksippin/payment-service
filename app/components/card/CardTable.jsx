'use client'
import React, { useEffect, useState } from 'react'
import CardInfo from './CardInfo'
import { Dialog, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import AddCard from './AddCard'
import DeleteCardButton from './DeleteCardButton'
import { SessionProvider } from 'next-auth/react'

export default function CardTable({ cards }) {
    const [Cards, setCards] = useState(cards)

    useEffect(() => {

    }, [Cards])

    return (
        <div >
            <div className='mr-10 border p-3 bg-indigo-500 text-white w-fit ml-10 mb-10 rounded-xl'>
                <Dialog>
                    <DialogTrigger>
                        Добавить карту
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Добавление карты</DialogTitle>
                            <SessionProvider>
                                <AddCard setCards={setCards} />
                            </SessionProvider>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
            <Table className=" mx-auto container">
                <TableHeader>
                    <TableRow>
                        <TableHead>Номер карты</TableHead>
                        <TableHead>Номер телефона</TableHead>
                        <TableHead>Держатель</TableHead>
                        <TableHead>Активность</TableHead>
                        <TableHead>Занятость</TableHead>
                        <TableHead>Действия</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        Cards.map((card) => (
                            <TableRow key={card.id}>
                                <TableCell>{card.cardNumber}</TableCell>
                                <TableCell>{card.phone}</TableCell>
                                <TableCell>{card.cardHolder}</TableCell>
                                <TableCell>{card.active ? "Активна" : "Неактивна"}</TableCell>
                                <TableCell>{card.busy ? "Занята" : "Свободна"}</TableCell>
                                <TableCell className='flex items-center gap-10'>
                                    <Link className='font-bold' href={`/cardList/${card.id}`}>Изменить</Link>

                                    <DeleteCardButton id={card.id} />
                                </TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </div>

    )
}
