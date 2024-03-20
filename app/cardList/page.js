import React from 'react'
import getCards from '../libs/getCard'
import CardTable from '../components/card/CardTable'

export default async function page() {
    const cards = await getCards()
    return (
        <div>
            <CardTable cards={cards} />
        </div>
    )
}
