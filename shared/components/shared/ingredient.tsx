import React, { FC } from 'react'
import { cn } from '@/shared/lib'

interface IngredientProps {
    className?: string
    imageUrl?: string
    name: string
    price: number
    active?: boolean
    onClick?: () => void
}

const Ingredient: FC<IngredientProps> = ({ className }) => {
    return (
        <div className={cn('', className)} c>
            ingredient
        </div>
    )
}

export default Ingredient
