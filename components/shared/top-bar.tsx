import { FC } from 'react'

import { Categories, Container, SortPopup } from './index'
import { cn } from '@/lib/utils'

interface Props {
    className?: string
}

const TopBar: FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
                className,
            )}
        >
            <Container>
                <Categories />
                <SortPopup />
            </Container>
        </div>
    )
}

export { TopBar }
