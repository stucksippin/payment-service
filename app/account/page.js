import React from 'react'

export default function page() {
    return (
        <div>
            <h2 className='font-bold text-center text-2xl'>Профиль</h2>
            <div className='flex justify-around mt-10'>
                <div className='flex flex-col'>
                    <span>Nickname</span>
                    <span>Trader</span>
                </div>
                <div className='flex flex-col'>
                    <span>List card</span>
                    <span>all cards:</span>
                    <span>active cards:</span>

                </div>
            </div>
        </div>
    )
}
