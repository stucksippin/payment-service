import React from 'react'

export default function page() {
    return (
        <div>
            <div className='flex justify-between text-xl'>
                <div className='flex flex-col border w-[300px] h-[100px] bg-white rounded-xl  p-5'>
                    <span>Total</span>
                    <span>10.000 rub.</span>
                </div>
                <div className='flex flex-col border w-[300px] h-[100px] bg-white rounded-xl p-5'>
                    <span>Продажи 1 мерчанта</span>
                    <span>10.000 rub.</span>
                </div>
                <div className='flex flex-col border w-[300px] h-[100px] bg-white rounded-xl p-5'>
                    <span>Общие 2 мерчанта</span>
                    <span>10.000 rub.</span>
                </div>
                <div className='flex flex-col border w-[300px] h-[100px] bg-white rounded-xl p-5'>
                    <span>Общие 3 мерчанта</span>
                    <span>10.000 rub.</span>
                </div>


            </div>

            <div>
                статистика по каждой карте ниже
            </div>
        </div>
    )
}
