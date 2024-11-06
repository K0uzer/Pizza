import React from 'react'

import { Container, Title, Categories } from '@/components/shared'

const Home = () => {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" />
                <Categories />
            </Container>
        </>
    )
}

export default Home
