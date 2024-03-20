'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
export default function DeleteCardButton({ id }) {

    async function handleDelete(e) {
        const id = e.target.dataset.id

        const resp = await fetch('/api/cardActions/delete', {
            method: 'DELETE',
            body: JSON.stringify({
                id: id
            })
        })
    }
    return (
        <div>
            <Button
                onClick={handleDelete}
                data-id={id}
                className="text-2xl bg-slate-700">
                🗑
            </Button>
        </div>
    )
}
