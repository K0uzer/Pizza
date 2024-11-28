import { FC } from 'react'
import { cn } from '@/lib/utils'

import { ProductImage, Title } from '../index'
import { Button } from '@/components/ui'

interface ChoosePizzaFormProps {
    className?: string
    imageUrl: string
    name: string
    ingredients: any[]
    variants?: any[]
    onClickAdd?: VoidFunction
}

const ChoosePizzaForm: FC<ChoosePizzaFormProps> = ({
    className,
    imageUrl,
    name,
    ingredients,
    variants,
    onClickAdd,
}) => {
    const textDetails = '30 см, традиционное тесто 30'
    const totalPrice = 350
    return (
        <div className={cn('flex flex-1', className)}>
            <ProductImage imageUrl={imageUrl} size={30} className="" />
            <div>
                <Title text={name} size="md" className="font-extrabold md-1" />
                <p className="text-gray-400">{textDetails}</p>
                <Button>Добавить в корзину за {totalPrice} ₽</Button>
            </div>
        </div>
    )
}

export default ChoosePizzaForm
