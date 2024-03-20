import { PrismaClient } from '@prisma/client'
import { hash } from "bcrypt"
import Link from 'next/link'
import { redirect } from 'next/navigation'


export default function page() {


    async function registerUser(formData) {

        'use server'


        const { email, password, nickname, role } = Object.fromEntries(formData)
        try {
            const prisma = new PrismaClient()
            const hashedPassword = await hash(password, 10)
            const resp = await prisma.users.create({
                data: {
                    nickname: nickname,
                    email: email,
                    password: hashedPassword,
                    role: role
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

            <h3 className="text-lg flex justifu-center items-center">Выберите ваш тип:</h3>
            <select name='role' className="bg-inherit border-b-2 p-3 my-3">
            
                <option value="user">Юзер</option>
                <option value="admin">Админ</option>
            </select>

            <button className='border px-10 py-2 rounded-md w-fit mx-auto '>Зарегистрироваться</button>
            {/* {error && <p>Аккаунт с такой почтой или никнеймом уже зарегистрирован</p>}  */}
            <div className='flex mx-auto mt-5'>
                <p className='text-slate-400'>Вы уже зарегистрированы? </p>
                <Link className='underline ml-3' href={'/login'}>Войти</Link>
            </div>

        </form>
    )
}
