import Link from 'next/link'
import React from 'react'
import Logout from './auth/Logout'
import { getServerSession } from 'next-auth'

export default async function Header() {
    const session = await getServerSession()
    return (
        <header>
            <nav>
                <ul className='flex justify-between m-10 p-5 bg-slate-100'>

                    <Link href={"/"}>PAYMENT SERVICE</Link>
                    <Link href={"/manual"}>Мануал</Link>
                    <Link href={"/cardList"}>Список карт</Link>
                    <Link href={"/statistic"}>Статистика</Link>
                    <Link href={"/account"}>Личный кабинет</Link>

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
