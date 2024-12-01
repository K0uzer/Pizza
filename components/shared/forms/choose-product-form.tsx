import { FC } from 'react'
import { cn } from '@/lib/utils'

import { Title } from '../index'
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
            <div className="flex items-center justify-center flex-1 relative w-full">
                <img
                    src={imageUrl}
                    alt={name}
                    className=""
                />
            </div>
            <div className=" flex flex-col w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-5" />
                <p className="text-gray-400 mb-5">{textDetails}</p>
                <Button>Добавить в корзину за {totalPrice} ₽</Button>
            </div>
        </div>
    )
}

export default ChoosePizzaForm
