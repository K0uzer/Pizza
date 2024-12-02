'use client'
import { FC } from 'react'

import {
    Title,
    RangeSlider,
    CheckboxFiltersGroup,
    Input,
} from '@/shared/components'
import { useFilters, useIngredients, useQueryFilters } from '@/shared/hooks'
import {
    MAX_LIMIT_SHOWED_ITEMS,
    MAX_PRICE,
    MIN_LIMIT_SHOWED_ITEMS,
    MIN_PRICE,
    STEP_RANGE_SLIDER,
} from '@/shared/constants'

interface FiltersProps {
    className?: string
}

const Filters: FC<FiltersProps> = ({ className }) => {
    const { ingredients, isLoading } = useIngredients()
    const filters = useFilters()

    useQueryFilters(filters)

    const updatePrices = (prices: number[]) => {
        filters.setPrices('priceFrom', prices[0])
        filters.setPrices('priceTo', prices[1])
    }

    const filtersArray = ingredients.map(({ id, name }) => ({
        value: String(id),
        text: name,
    }))

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
                onClickCheckBox={filters.setTypesPizza}
                selectedIds={filters.typesPizza}
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
                onClickCheckBox={filters.setSizesPizza}
                selectedIds={filters.sizesPizza}
            />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        value={String(filters.prices.priceFrom)}
                        placeholder={`${MIN_PRICE}`}
                        onChange={(event) =>
                            filters.setPrices(
                                'priceFrom',
                                Number(event.target.value),
                            )
                        }
                    />
                    <Input
                        type="number"
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        value={String(filters.prices.priceTo)}
                        placeholder={`${MAX_PRICE}`}
                        onChange={(event) =>
                            filters.setPrices(
                                'priceTo',
                                Number(event.target.value),
                            )
                        }
                    />
                </div>

                <RangeSlider
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step={STEP_RANGE_SLIDER}
                    value={[
                        filters.prices.priceFrom || MIN_PRICE,
                        filters.prices.priceTo || MAX_PRICE,
                    ]}
                    onValueChange={updatePrices}
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
                onClickCheckBox={filters.setIngredients}
                selectedIds={filters.selectedIngredients}
            />
        </div>
    )
}

export { Filters }
