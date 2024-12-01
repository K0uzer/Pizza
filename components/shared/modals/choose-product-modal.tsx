'use client'
import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

import { ProductWithRelations } from '@/@types/prisma'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import ChoosePizzaForm from '../forms/choose-product-form'

interface ChooseProductModalProps {
    className?: string
    product: ProductWithRelations
}

const ChooseProductModal: FC<ChooseProductModalProps> = ({
    className,
    product,
}) => {
    const router = useRouter()
    const { imageUrl, name } = product

    const isPizzaForm = Boolean(product.variants[0].pizzaType)

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    className,
                    'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
                )}
            >
                <DialogTitle className="hidden" />
                {isPizzaForm ? (
                    'PizzaForm'
                ) : (
                    <ChoosePizzaForm
                        imageUrl={imageUrl}
                        ingredients={[]}
                        name={name}
                        className=""
                    />
                )}
            </DialogContent>
        </Dialog>
    )
}

export { ChooseProductModal }
