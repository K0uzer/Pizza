import { FC } from 'react'

import { Categories, Container, SortPopup } from './index'
import { cn } from '@/lib/utils'
import { Category } from '@prisma/client'

interface Props {
    categories: Category[]
    className?: string
}

const TopBar: FC<Props> = ({ categories, className }) => {
    return (
        <div
            className={cn(
                'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
                className,
            )}
        >
            <Container>
                <Categories items={categories} />
                <SortPopup />
            </Container>
        </div>
    )
}

export { TopBar }
