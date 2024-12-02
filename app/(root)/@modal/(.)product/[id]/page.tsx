import React from 'react'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

import { ChooseProductModal } from '@/shared'

const ProductModalPage = async ({
    params: { id },
}: {
    params: { id: string }
}) => {
    const product = await prisma.product.findFirst({
        where: { id: Number(id) },
        include: {
            ingredients: true,
            variants: true,
        },
    })

    if (!product) {
        return notFound()
    }

    return <ChooseProductModal product={product} />
}

export default ProductModalPage
