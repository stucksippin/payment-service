import getListOfUsers from '@/app/libs/getListOfUsers'
import React from 'react'

export default async function ListOfUsers() {
    const users = await getListOfUsers()
    return (
        <div>
            <span>Список трейдеров</span>
            {
                users.map((user) => (
                    <div className='flex flex-col' key={user.id}>
                        <span>{user.nickname}</span>
                        <span>{user.email}</span>
                    </div>
                ))
            }
            <div>

            </div>
        </div>
    )
}


