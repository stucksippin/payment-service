import Link from 'next/link'
import React from 'react'
import Logout from './auth/Logout'
import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'
export default async function Header() {
    const session = await getServerSession(NextAuthOptions)

    return (
        <header>
            <nav>
                <ul className='flex justify-between m-10 p-5 bg-slate-100'>

                    <Link href={"/"}>PAYMENT SERVICE</Link>
                    <Link href={"/cardList"}>Список карт</Link>
                    <Link href={"/account"}>Личный кабинет</Link>
                    <Link href={"/moneystatistic"}>Статистика</Link>
                    <Link href={"/forwarder"}>Форвардер</Link>
                    <Link href={"/requestFromShop"}>Транзакция отправка</Link>


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
