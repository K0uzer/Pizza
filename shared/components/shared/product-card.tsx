import { FC } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'

import { Title, Button } from '@/shared/components'

interface ProductCardProps {
    id: number
    name: string
    price: number
    imageUrl: string
    className?: string
}

const ProductCard: FC<ProductCardProps> = ({
    id,
    name,
    price,
    imageUrl,
    className,
}) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <img
                        className="w-[215px] h-[215px]"
                        src={imageUrl}
                        alt="Logo"
                    />
                </div>
                <Title text={name} size="sm" className="md-1 mt-3 font-bold" />

                <p className="text-sm text-gray-400">
                    Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус,
                    томаты, соус альфредо, чеснок
                </p>
            </Link>

            <div className="flex justify-between items-center mt-4">
                <span>
                    от <b>{price} ₽</b>
                </span>
                <Button>
                    <Plus size={20} className="w-5 h-5 mr-1" />
                    Добавить
                </Button>
            </div>
        </div>
    )
}

export { ProductCard }
