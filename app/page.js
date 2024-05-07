
import { NextAuthOptions } from '@/config';
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'


export default async function MainPage() {
  const session = await getServerSession(NextAuthOptions);

  if (!session || !session.user) {
    console.error('Ошибка: Невозможно получить данные о пользователе');
    return;
  }

  const { role } = session.user;
  console.log(role)


  if (role === 'admin') {
    redirect('/admin');
  } else {
    redirect('/user');
  }
  return (
    <div>здарова<br />
      &#128075;

    </div>



  )

}
