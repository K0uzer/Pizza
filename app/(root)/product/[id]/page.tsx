import React from 'react'
import { notFound } from 'next/navigation'
import { prisma } from '@/prisma/prisma-client'

import { Container, GroupVariants, ProductImage, Title } from '@/shared'

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
    const product = await prisma.product.findFirst({
        where: { id: Number(id) },
    })

    if (!product) {
        return notFound()
    }

    return (
        <Container className="flex flex-col my-10">
            <div className="flex flex-1">
                <ProductImage imageUrl={product.imageUrl} size={40} />
                <div className="w-[490px] bg-[#FCFCFC] p-7">
                    <Title
                        text={product.name}
                        size="md"
                        className="font-extrabold md-1"
                    />
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Suscipit perferendis minima accusamus voluptatem
                        consequuntur eaque ipsa nobis. Fugit, incidunt iste
                        itaque ut maxime, vel et rerum in nihil, atque unde.
                    </p>

                    <GroupVariants
                        selectedValued="2"
                        items={[
                            {
                                name: 'Маленькая',
                                value: '1',
                            },
                            {
                                name: 'Средняя',
                                value: '2',
                            },
                            {
                                name: 'Большая',
                                value: '3',
                            },
                        ]}
                    />
                </div>
            </div>
        </Container>
    )
}

export default ProductPage
