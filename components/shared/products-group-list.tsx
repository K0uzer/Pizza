'use client'
import { useEffect, useRef, FC } from 'react'
import { useIntersection } from 'react-use'

import { cn } from '@/lib/utils'
import { ProductCard, Title } from './index'
import { useCategoryStore } from '@/store/cateroty'

interface ProductsGroupListProps {
    categoryId: number
    title: string
    products: unknown[]
    className?: string
    listClassName?: string
}

const ProductsGroupList: FC<ProductsGroupListProps> = ({
    title,
    products,
    className,
    listClassName,
    categoryId,
}) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const intersectionRef = useRef(null)
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    })
    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {products.map(
                    ({
                        id,
                        imageUrl,
                        name,
                        variants,
                    }: {
                        id: number
                        imageUrl: string
                        name: string
                        variants: number[]
                    }) => (
                        <ProductCard
                            key={id}
                            id={id}
                            imageUrl={imageUrl}
                            name={name}
                            price={variants[0].price}
                        />
                    ),
                )}
            </div>
        </div>
    )
}

export { ProductsGroupList }
