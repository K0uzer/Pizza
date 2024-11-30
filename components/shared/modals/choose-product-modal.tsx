'use client'
import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Product } from '@prisma/client'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import ChoosePizzaForm from '../forms/choose-pizza-form'

interface ChooseProductModalProps {
    className?: string
    product: Product
}

const ChooseProductModal: FC<ChooseProductModalProps> = ({
    className,
    product,
}) => {
    const router = useRouter()

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    className,
                    'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
                )}
            >
                <DialogTitle />
                <ChoosePizzaForm
                    imageUrl={product.imageUrl}
                    ingredients={[]}
                    name={product.name}
                    className=""
                />
            </DialogContent>
        </Dialog>
    )
}

export { ChooseProductModal }
