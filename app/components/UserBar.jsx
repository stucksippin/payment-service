import { NextAuthOptions } from '@/config'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'
import React from 'react'

export default async function UserBar() {
    const session = await getServerSession(NextAuthOptions)

    const prisma = new PrismaClient()

    let data = null
    if (session) {
        data = await prisma.users.findFirst({
            where: {
                id: session.user.id
            }
        })
    }
    return (
        <div className='absolute -z-10 min-w-full right-0 left-0 top-0 bg-indigo-500 py-2 px-10  rounded-b-xl w-[1200px]  text-white text-lg'>
            <div className='flex items-center justify-end'>
                <span className='mr-10'>Баланс: 12500 rub.</span>
                <a className='mr-5 flex flex-col border-t-2 border-b-2 border-white py-1 rounded-xl px-5 hover:text-blue-200' href='/account'>
                    <span>{data.nickname}</span>
                    <span>{data.email}</span>
                </a>
            </div>
        </div>
    )
}
