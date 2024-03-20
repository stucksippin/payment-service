'use client'
import React, { useState } from 'react'
import CardInfo from './CardInfo'
import { Dialog, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import AddCard from './AddCard'

export default function CardTable({ cards }) {
    const [Cards, setCards] = useState(cards)
    return (
        <>
            <div className='mr-10 border p-3 bg-green-200 w-fit ml-10 mb-10 rounded-xl'>
                <Dialog>
                    <DialogTrigger>
                        Добавить карту
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Добавление карты</DialogTitle>
                            <AddCard setCards={setCards} />
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
                                <TableCell>
                                    <Link className='font-bold' href={`/cardList/${card.id}`}>Изменить</Link>
                                </TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </>

    )
}
