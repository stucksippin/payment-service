import Link from 'next/link'
import React from 'react'
import Logout from './auth/Logout'
import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'
export default async function Header() {
    const session = await getServerSession(NextAuthOptions)

    return (
        <header className='w-[300px] min-h-screen bg-white border border-slate-200'>
            <nav className='text-lg'>
                <ul className='flex flex-col gap-y-10 items-center mt-5'>
                    <Link className='font-bold text-2xl' href={"/"}>PAYMENT SERVICE</Link>

                    <Link className='hover:bg-indigo-500 hover:text-white p-3 rounded-lg' href={"/user/account"}>Личный кабинет</Link>
                    <Link className='hover:bg-indigo-500 hover:text-white p-3 rounded-lg' href={"/user/cardList"}>Список карт</Link>
                    <Link className='hover:bg-indigo-500 hover:text-white p-3 rounded-lg' href={"/user/moneystatistic"}>Статистика</Link>
                    <Link className='hover:bg-indigo-500 hover:text-white p-3 rounded-lg' href={"/user/forwarder"}>Форвардер</Link>
                    <Link className='hover:bg-indigo-500 hover:text-white p-3 rounded-lg' href={"/user/requestFromShop"}>Транзакция отправка</Link>


                    {
                        !session && <Link className='' href="/login">ВОЙТИ</Link>
                    }
                    {
                        !!session && <Logout />
                    }
                </ul>
            </nav>
        </header>
    )
}
