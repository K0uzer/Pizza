import { FC } from 'react'

import {
    Title,
    FilterCheckbox,
    RangeSlider,
    CheckboxFiltersGroup,
} from './index'
import { Input } from '../ui'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import { Ingredient } from '@prisma/client'

interface FiltersProps {
    className?: string
}

const Filters: FC<FiltersProps> = ({ className }) => {
    const { ingredients } = useFilterIngredients()

    const filtersArray = ingredients.map(({id, name}) => {value: id, text: name})

    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" min={0} max={30000} defaultValue={0} />
                    <Input type="number" min={100} placeholder="5000" />
                </div>

                <RangeSlider min={0} max={5000} step={100} value={[0, 5000]} />
            </div>

            <CheckboxFiltersGroup
                title="Ингредиенты"
                className="mt-5"
                limit={4}
                defaultItems={filtersArray.slice(0,6)}
                items={filtersArray}
            />
        </div>
    )
}

export { Filters }
