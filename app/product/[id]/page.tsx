import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ params: { id } }: { params: { id: string } }) => {
    const product = await prisma.product.findFirst({
        where: { id: Number(id) },
    })

    if (!product) {
        return notFound()
    }

    return <div>Product {product.name}</div>
}

export default page
