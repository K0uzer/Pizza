'use client'
import { FC } from 'react'
import { Category } from '@prisma/client'
import { useCategoryStore } from '@/store/cateroty'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Props {
    items: Category[]
    className?: string
}

const Categories: FC<Props> = ({ items, className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId)

    return (
        <div
            className={cn(
                'inline-flex gap-1 bg-gray-50 p-1 row-span-2xl',
                className,
            )}
        >
            {items.map(({ id, name }) => (
                <Link
                    className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        categoryActiveId === id &&
                            'bg-white shadow-md shadow-gray-200 text-primary',
                    )}
                    key={id}
                    href={`/#${name}`}
                >
                    <button>{name}</button>
                </Link>
            ))}
        </div>
    )
}

export { Categories }
