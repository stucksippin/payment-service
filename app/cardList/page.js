import React from 'react'
import getCards from '../libs/getCard'
import CardTable from '../components/card/CardTable'

export default async function page() {
    const cards = await getCards()
    return (
        <div className='bg-white p-5 rounded-xl'>
            <CardTable cards={cards} />
        </div>
    )
}
