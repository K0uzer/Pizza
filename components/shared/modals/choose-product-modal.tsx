'use client'
import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Product } from '@prisma/client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Title } from '../title'

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
                    'p-0 w-[1060px] min-h-[500px] bg-white overflow-hidden',
                    className,
                )}
            >
                <Title text={product.name} />
            </DialogContent>
        </Dialog>
    )
}

export { ChooseProductModal }
