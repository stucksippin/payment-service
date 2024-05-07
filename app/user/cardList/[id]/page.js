import getCardById from '@/app/libs/getCardById'
import React from 'react'
import CardInfo from '../../../components/card/CardInfo'
import UpdateCard from '@/app/components/card/UpdateCard'

export default async function CardById({ params: { id } }) {
    const card = await getCardById(id)

    return (
        <div>
            <UpdateCard
                key={card.id}
                id={card.id}
                phone={card.phone}
                cardNumber={card.cardNumber}
                cardHolder={card.cardHolder}
                active={card.active}
                busy={card.busy}
            />
        </div>
    )
}
