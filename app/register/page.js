import { PrismaClient } from '@prisma/client'
import { hash } from "bcrypt"
import Link from 'next/link'
import { redirect } from 'next/navigation'


export default function page() {


    async function registerUser(formData) {

        'use server'


        const { email, password, nickname } = Object.fromEntries(formData)
        try {
            const prisma = new PrismaClient()
            const hashedPassword = await hash(password, 10)
            const resp = await prisma.users.create({
                data: {
                    nickname: nickname,
                    email: email,
                    password: hashedPassword
                }
            })

            if (resp) {
                redirect('/login')
            }
        }
        catch (error) {
            console.log(error)
        }
    }



    return (
        <form action={registerUser} className='border p-5 w-1/2 flex flex-col mx-auto mt-[30px]' >
            <input className='border p-3 my-3 rounded-md' required type="text" name='nickname' placeholder="Никнейм" />
            <input className='border p-3 my-3 rounded-md' required type="text" name='email' placeholder="E-mail" />
            <input className='border p-3 my-3 rounded-md' required type="password" name='password' placeholder="Пароль" />
            <button className='border px-10 py-2 rounded-md w-fit mx-auto '>Зарегистрироваться</button>
            {/* {error && <p>Аккаунт с такой почтой или никнеймом уже зарегистрирован</p>}  */}
            <div className='flex mx-auto mt-5'>
                <p className='text-slate-400'>Вы уже зарегистрированы? </p>
                <Link className='underline ml-3' href={'/login'}>Войти</Link>
            </div>

        </form>
    )
}
