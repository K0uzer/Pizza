'use client'
import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/shared/lib'

import { ProductWithRelations } from '@/@types/prisma'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    ChoosePizzaForm,
    ChooseProductForm,
} from '@/shared/components'

interface ChooseProductModalProps {
    className?: string
    product: ProductWithRelations
}

const ChooseProductModal: FC<ChooseProductModalProps> = ({
    className,
    product,
}) => {
    const router = useRouter()
    const { imageUrl, name, ingredients } = product

    const isProductForm = Boolean(!product.variants[0].pizzaType)

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    className,
                    'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
                )}
            >
                <DialogTitle className="hidden" />
                {isProductForm ? (
                    <ChooseProductForm imageUrl={imageUrl} name={name} />
                ) : (
                    <ChoosePizzaForm
                        imageUrl={imageUrl}
                        name={name}
                        ingredients={ingredients}
                    />
                )}
            </DialogContent>
        </Dialog>
    )
}

export { ChooseProductModal }
