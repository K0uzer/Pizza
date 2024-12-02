import React from 'react'
import { prisma } from '@/prisma/prisma-client'

import {
    Container,
    Filters,
    ProductsGroupList,
    Title,
    TopBar,
} from '@/shared/components'

const Home = async () => {
    const categories = await prisma.category.findMany({
        include: {
            products: {
                include: {
                    variants: true,
                    ingredients: true,
                },
            },
        },
    })

    const noIdleCategory = categories.filter((item) => item.products.length)

    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" />
            </Container>

            <TopBar categories={noIdleCategory} />

            <Container className="pb-14 mt-10">
                <div className="flex gap-[60px]">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    {/* Пиццы */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {noIdleCategory.map(({ id, name, products }) => (
                                <ProductsGroupList
                                    key={id}
                                    categoryId={id}
                                    title={name}
                                    products={products}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home
