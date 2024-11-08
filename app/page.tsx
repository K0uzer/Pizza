import React from 'react'

import { Container, Filters, Title, TopBar } from '@/components/shared'

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
                        <div className="flex flex-col gap-16">Список пиццы</div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home
