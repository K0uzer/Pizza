'use client'
import { FC, useEffect, useState } from 'react'

import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import { Title, RangeSlider, CheckboxFiltersGroup } from './index'
import { useSet } from 'react-use'
import { Input } from '../ui'
import QueryString from 'qs'
import { useRouter, useSearchParams } from 'next/navigation'

interface FiltersProps {
    className?: string
}

interface PricePizzaProps {
    priceFrom?: number
    priceTo?: number
}
interface SizerPizzaProps {
    sizes: number
}
interface TypesPizzaProps {
    pizzaTypes: number
}

interface QueryFilters extends PricePizzaProps {
    pizzaTypes: string
    sizesPizza: string
    ingredients: string
}

const MIN_PRICE = 0
const MAX_PRICE = 5000
const STEP_RANGE_SLIDER = 10
const MIN_LIMIT_SHOWED_ITEMS = 0
const MAX_LIMIT_SHOWED_ITEMS = 6

const Filters: FC<FiltersProps> = ({ className }) => {
    const searchParams = useSearchParams() as unknown as Map<
        keyof QueryFilters,
        string
    >
    const router = useRouter()
    const { ingredients, isLoading, toggleTypes, selectedIngredients } =
        useFilterIngredients()

    const [prices, setPrice] = useState<PricePizzaProps>({
        priceFrom: Number(searchParams.get('priceFrom')),
        priceTo: Number(searchParams.get('priceTo')),
    })

    const [sizesPizza, { toggle: togglePizzaSizer }] = useSet<SizerPizzaProps>(
        new Set<string>(
            searchParams.get('sizesPizza')
                ? searchParams.get('sizesPizza')?.split(',')
                : [],
        ),
    )

    const [typesPizza, { toggle: togglePizzaTypes }] = useSet<TypesPizzaProps>(
        new Set<string>((
            searchParams.get('pizzaTypes')
                ? searchParams.get('pizzaTypes')?.split(',')
                : [],
        )),
    )

    const filtersArray = ingredients.map(({ id, name }) => ({
        value: String(id),
        text: name,
    }))

    const updatePrice = (name: keyof PricePizzaProps, value: number) => {
        setPrice({ ...prices, [name]: value })
    }

    useEffect(() => {
        const filters = {
            ...prices,
            sizesPizza: Array.from(sizesPizza),
            typesPizza: Array.from(typesPizza),
            ingredients: Array.from(selectedIngredients),
        }

        const query = QueryString.stringify(filters, { arrayFormat: 'comma' })
        router.push(`?${query}`, { scroll: false })
    }, [prices, router, selectedIngredients, sizesPizza, typesPizza])

    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <CheckboxFiltersGroup
                title="Тип теста"
                name="typesPizzas"
                className="mt-5"
                items={[
                    { text: 'Тонкое', value: '1' },
                    { text: 'Традиционное', value: '2' },
                ]}
                onClickCheckBox={togglePizzaTypes}
                selectedIds={selectedIngredients}
            />

            <CheckboxFiltersGroup
                title="Размеры"
                name="sizesPizzas"
                className="mt-5"
                items={[
                    { text: '20 см', value: '20' },
                    { text: '30 см', value: '30' },
                    { text: '40 см', value: '40' },
                ]}
                onClickCheckBox={togglePizzaSizer}
                selectedIds={selectedIngredients}
            />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        value={String(prices.priceFrom)}
                        placeholder={`${MIN_PRICE}`}
                        onChange={(event) =>
                            updatePrice('priceFrom', Number(event.target.value))
                        }
                    />
                    <Input
                        type="number"
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        value={String(prices.priceTo)}
                        placeholder={`${MAX_PRICE}`}
                        onChange={(event) =>
                            updatePrice('priceTo', Number(event.target.value))
                        }
                    />
                </div>

                <RangeSlider
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step={STEP_RANGE_SLIDER}
                    value={[
                        prices.priceFrom || MIN_PRICE,
                        prices.priceTo || MAX_PRICE,
                    ]}
                    onValueChange={([from, to]) =>
                        setPrice({ priceFrom: from, priceTo: to })
                    }
                />
            </div>

            <CheckboxFiltersGroup
                title="Ингредиенты"
                name="ingredientsPizzas"
                className="mt-5"
                limit={MAX_LIMIT_SHOWED_ITEMS}
                loading={isLoading}
                defaultItems={filtersArray.slice(
                    MIN_LIMIT_SHOWED_ITEMS,
                    MAX_LIMIT_SHOWED_ITEMS,
                )}
                items={filtersArray}
                onClickCheckBox={toggleTypes}
                selectedIds={selectedIngredients}
            />
        </div>
    )
}

export { Filters }
