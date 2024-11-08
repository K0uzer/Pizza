import React from 'react'

import { Input } from '../ui'
import { FilterCheckbox } from './index'
import { FilterCheckboxProps } from './filter-checkbox'

type Item = FilterCheckboxProps

interface CheckboxFiltersGroupProps {
    title: string
    items: Item[]
    defaultItems?: Item[]
    limit: number
    searchInputPlaceholder?: string
    onChange?: (value: string[]) => void
    defaultValue?: string[]
    className?: string
}

const checkboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    className,
    onChange,
    defaultValue,
}) => {
    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>
            <div className="mb-5">
                <Input
                    placeholder={searchInputPlaceholder}
                    className="bg-gray-50 border-none"
                />
            </div>

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {items.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={() => item.onCheckedChange}
                    />
                ))}
            </div>
        </div>
    )
}

export { checkboxFiltersGroup }
