'use client'
import { FC, useRef, useState } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import { useClickAway, useDebounce } from 'react-use'
import { Api } from '@/services/api-client'
import { Product } from '@prisma/client'

interface SearchInputProps {
    className?: string
}

const SearchInput: FC<SearchInputProps> = ({ className }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [focused, setFocused] = useState(false)
    const [products, setProducts] = useState<Product[]>([])
    const ref = useRef(null)

    useClickAway(ref, () => setFocused(false))

    useDebounce(
        async () => {
            try {
                const resolve = await Api.products.search(searchQuery)
                setProducts(resolve)
            } catch (error) {
                console.error(error)
            }
        },
        250,
        [searchQuery],
    )

    const returnInDefaultState = () => {
        setSearchQuery('')
        setFocused(false)
        setProducts([])
    }

    return (
        <>
            {focused && (
                <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
            )}
            <div
                className={cn(
                    'flex rounded-2xl flex-1 justify-between relative h-11 z-30',
                    className,
                )}
                ref={ref}
            >
                <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
                <input
                    className="rounded-2xl outline-none w-full bg-gray-100 pl-11 cursor-pointer focus:cursor-auto"
                    type="text"
                    placeholder="Найти пиццу..."
                    onFocus={() => setFocused(true)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {!!products.length && (
                    <div
                        className={cn(
                            'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
                            focused && 'visible opacity-100 top-12',
                        )}
                    >
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                className="flex items-center gap-5 px-3 pe-2 hover:bg-primary/10"
                                onClick={returnInDefaultState}
                                href={`/product/${product.id}`}
                            >
                                <img
                                    className="rounded-sm h-8 w-8"
                                    src={product.imageUrl}
                                    alt={product.name}
                                />
                                <span>{product.name}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export { SearchInput }
