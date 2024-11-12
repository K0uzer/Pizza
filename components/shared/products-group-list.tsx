'use client'
import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

import { cn } from '@/lib/utils'
import { ProductCard, Title } from './index'
import { useActiveIdStore } from '@/store/cateroty'

interface ProductsGroupListProps {
    title: string
    products: any[]
    className?: string
    listClassName?: string
    categoryId: number
}

const ProductsGroupList: React.FC<ProductsGroupListProps> = ({
    title,
    products,
    className,
    listClassName,
    categoryId,
}) => {
    const setActiveCategoryId = useActiveIdStore((state) => state.setActiveId)
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
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        imageUrl={product.imageUrl}
                        name={product.name}
                        price={product.items[0].price}
                    />
                ))}
            </div>
        </div>
    )
}

export { ProductsGroupList }
