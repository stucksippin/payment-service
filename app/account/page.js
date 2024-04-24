import { NextAuthOptions } from '@/config'
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth'
import React from 'react'
import getCards from '../libs/getCard';

export default async function AccountPage() {
    const session = await getServerSession(NextAuthOptions)
    const prisma = new PrismaClient()

    let data = null
    let activeCards = null
    if (session && session.user) {
        data = await prisma.users.findFirst({
            where: {
                id: session.user.id
            }
        })
    }
    const cards = await getCards()
    const activeCards = await prisma.card.findMany({
        where: {
            AND: [
                {
                    usersId: session.user.id
                },
                {
                    active: true
                }
            ]
        },





    return (
        <div className='container bg-white rounded-xl pt-10'>


            {
                data && (
                    <>
                        <h2 className='font-bold text-center text-2xl'>Профиль</h2>
                        <div className='flex justify-end font-bold mt-10 text-xl p-3'>Баланс: 100.000 руб. </div>
                        <div className='flex flex-col mt-5'>
                            <span className='text-lg'>Trader: <span className='font-bold text-indigo-500 '>{data.nickname}</span></span>
                            <span className='text-lg'>Почта: <span className='font-bold text-indigo-500'>{data.email}</span> </span>
                        </div>
                        <div className='flex justify-between mt-10'>


                            <div className='flex'>

                                <div >
                                    <span className='text-xl font-bold'>Все карты:</span>
                                    <div className='w-[800px] flex flex-wrap'>
                                        {
                                            cards.map((card) => (
                                                <div className='border flex flex-col mt-2 mr-5 p-3' key={card.id}>
                                                    <span>{card.cardNumber}</span>
                                                    <span className='font-semibold'>{card.cardHolder}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div>
                                    <span className='text-xl font-bold'>Активные карты:</span>
                                    <div className='w-[500px] flex flex-wrap'>
                                        {
                                            activeCards.map((card) => (
                                                <div className='border flex flex-col mt-2 mr-5 p-3' key={card.id}>
                                                    <span>{card.cardNumber}</span>
                                                    <span className='font-semibold'>{card.cardHolder}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr className='mt-10' />
                    </>
                )
            }

        </div>
    )
}
