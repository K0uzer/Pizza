import React from 'react'

import {
    Container,
    Filters,
    ProductCard,
    ProductsGroupList,
    Title,
    TopBar,
} from '@/components/shared'

const Home = () => {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" />
            </Container>
            <TopBar />
            <Container className="pb-14 mt-10">
                <div className="flex gap-[60px]">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    {/* Пиццы */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                categoryId={1}
                                title="Пиццы"
                                products={[
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        price: 1000,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 2,
                                        name: 'Чизбургер-пицца',
                                        price: 1000,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        price: 1000,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 4,
                                        name: 'Чизбургер-пицца',
                                        price: 1000,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 5,
                                        name: 'Чизбургер-пицца',
                                        price: 1000,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 6,
                                        name: 'Чизбургер-пицца',
                                        price: 1000,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg',
                                        items: [{ price: 550 }],
                                    },
                                ]}
                            />
                            <ProductsGroupList
                                categoryId={2}
                                title="Комбо"
                                products={[
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        price: 1000,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 2,
                                        name: 'Чизбургер-пицца',
                                        price: 1000,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        price: 1000,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 4,
                                        name: 'Чизбургер-пицца',
                                        price: 1000,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 5,
                                        name: 'Чизбургер-пицца',
                                        price: 1000,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg',
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 6,
                                        name: 'Чизбургер-пицца',
                                        price: 1000,
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg',
                                        items: [{ price: 550 }],
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home
