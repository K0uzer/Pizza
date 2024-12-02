import { FC } from 'react'

import { cn } from '@/shared/lib'

interface ProductImageProps {
    className?: string
    imageUrl: string
}

const ProductImage: FC<ProductImageProps> = ({ imageUrl, className }) => {
    return (
        <div
            className={cn(
                'flex items-center justify-center flex-1 relative w-full',
                className,
            )}
        >
            <img
                src={imageUrl}
                alt="Logo"
                className="relative left-2 top-2 transition-all z-10 duration-300"
            />

            <div className="absolute left-1/2 -translate-x-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]"></div>
            <div className="absolute left-1/2 -translate-x-1/2 border-dashed border-2 rounded-full border-gray-200 w-[370px] h-[370px]"></div>
        </div>
    )
}

export { ProductImage }
