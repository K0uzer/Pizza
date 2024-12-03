'use client'
import { FC, useState } from 'react'

import { cn } from '@/shared/lib'
import { PizzaImage, Title, Button, GroupVariants } from '@/shared/components'
import {
    PizzaSize,
    pizzaSizes,
    PizzaType,
    pizzaTypes,
} from '@/shared/constants'
import { Ingredient } from '@prisma/client'

interface ChoosePizzaFormProps {
    className?: string
    imageUrl: string
    name: string
    ingredients: Ingredient[]
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
    const [size, setSize] = useState<PizzaSize>(20)
    const [type, setType] = useState<PizzaType>(1)

    const textDetails = '30 см, традиционное тесто 30'
    const totalPrice = 350

    return (
        <div className={cn('flex flex-1', className)}>
            <div className="flex items-center justify-center flex-1 relative w-full">
                <PizzaImage
                    imageUrl={imageUrl}
                    size={size}
                    className="relative left-2 top-2 transition-all z-10 duration-300 w-[400px] h-[400px]"
                />
            </div>
            <div className=" flex flex-col w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1" />
                <p className="text-gray-400">{textDetails}</p>
                <div className="flex flex-col gap-1 mt-5">
                    <GroupVariants
                        items={pizzaSizes}
                        value={String(size)}
                        onClick={(value) => setSize(Number(value) as PizzaSize)}
                    />
                    <GroupVariants
                        items={pizzaTypes}
                        value={String(type)}
                        onClick={(value) => setType(Number(value) as PizzaType)}
                    />
                </div>
                <div className="grid grid-cols-3 gap-3">
                    
                </div>
                <Button className="mt-5">
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    )
}

export { ChoosePizzaForm }
