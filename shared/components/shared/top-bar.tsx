import { FC } from 'react'
import { Category } from '@prisma/client'

import { Categories, Container, SortPopup } from '@/shared/components'
import { cn } from '@/shared/lib'

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
            <Container className="flex justify-between">
                <Categories items={categories} />
                <SortPopup />
            </Container>
        </div>
    )
}

export { TopBar }
