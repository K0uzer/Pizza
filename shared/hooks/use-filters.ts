import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { useSet } from 'react-use'

interface PricePizzaProps {
    priceFrom?: number
    priceTo?: number
}

interface QueryFilters extends PricePizzaProps {
    pizzaTypes: string
    sizesPizza: string
    ingredients: string
}

export interface Filters {
    sizesPizza: Set<string>
    typesPizza: Set<string>
    selectedIngredients: Set<string>
    prices: PricePizzaProps
}

export interface ReturnProps extends Filters {
    setPrices: (name: keyof PricePizzaProps, value: number) => void
    setIngredients: (key: string) => void
    setSizesPizza: (key: string) => void
    setTypesPizza: (key: string) => void
}

export const useFilters = () => {
    const searchParams = useSearchParams() as unknown as Map<
        keyof QueryFilters,
        string
    >

    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
        new Set<string>(searchParams.get('ingredients')?.split(',') ?? []),
    )

    const [prices, setPrices] = useState<PricePizzaProps>({
        priceFrom: Number(searchParams.get('priceFrom')),
        priceTo: Number(searchParams.get('priceTo')),
    })

    const [sizesPizza, { toggle: togglePizzaSizer }] = useSet<string>(
        new Set<string>(
            searchParams.has('sizesPizza')
                ? searchParams.get('sizesPizza')?.split(',')
                : [],
        ),
    )

    const [typesPizza, { toggle: togglePizzaTypes }] = useSet<string>(
        new Set<string>(
            searchParams.has('pizzaTypes')
                ? searchParams.get('pizzaTypes')?.split(',')
                : [],
        ),
    )

    const updatePrice = (name: keyof PricePizzaProps, value: number) => {
        setPrices((prevState) => ({ ...prevState, [name]: value }))
    }

    return {
        sizesPizza,
        typesPizza,
        selectedIngredients,
        prices,
        setPrices: updatePrice,
        setIngredients: toggleIngredients,
        setSizesPizza: togglePizzaSizer,
        setTypesPizza: togglePizzaTypes,
    }
}
