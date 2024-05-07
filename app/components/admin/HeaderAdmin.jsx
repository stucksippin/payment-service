import Link from 'next/link'
import React from 'react'

import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'
import Logout from '../auth/Logout'
export default async function HeaderAdmin() {
    const session = await getServerSession(NextAuthOptions)

    return (
        <header className='container mx-auto mt-10'>
            <nav>
                <ul className='flex justify-between p-5 bg-slate-500 rounded-lg'>
                    <Link className='text-white text-2xl' href={'/'}>PAYMENT SERVICE</Link>

                    {
                        !session && <Link className='text-white' href="/login">ВОЙТИ</Link>
                    }
                    {
                        !!session && <Logout />
                    }
                </ul>
            </nav>
        </header>
    )
}

