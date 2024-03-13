import React from 'react'

export default function page() {
    return (
        <div>
            <div className='flex justify-end w-[90%]  mb-10 mt-20'>
                <button className='mr-10 border p-3 bg-green-200'>Добавить карту</button>
                <button className=' border p-3 bg-red-200 '>Удалить карту</button>
            </div>
            <table class="table-auto w-[80%] mx-auto text-center">
                <thead>
                    <tr >
                        <th class="px-4 py-2">Номер карты</th>
                        <th class="px-4 py-2">Номер телефона</th>
                        <th class="px-4 py-2">Держатель</th>
                        <th class="px-4 py-2">Активность</th>
                        <th class="px-4 py-2">Занятость</th>
                        <th class="px-4 py-2">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border px-4 py-2">1234 5678 9012 3456</td>
                        <td class="border px-4 py-2">8-800-555-35-35</td>
                        <td class="border px-4 py-2">Иванов Иван Иванович</td>
                        <td class="border px-4 py-2">Активна</td>
                        <td class="border px-4 py-2">Свободна</td>
                        <td class="border px-4 py-2">Изменить</td>
                    </tr>
                    <tr>
                        <td class="border px-4 py-2">9876 5432 1098 7654</td>
                        <td class="border px-4 py-2">8-800-555-35-35</td>
                        <td class="border px-4 py-2">Петров Петр Петрович</td>
                        <td class="border px-4 py-2">Неактивна</td>
                        <td class="border px-4 py-2">Занята</td>
                        <td class="border px-4 py-2">Изменить</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
