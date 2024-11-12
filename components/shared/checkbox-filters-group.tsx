'use client'
import React, { useState } from 'react'

import { Input } from '../ui'
import { FilterCheckbox } from './index'
import { FilterCheckboxProps } from './filter-checkbox'

type Item = FilterCheckboxProps

interface CheckboxFiltersGroupProps {
    title: string
    items: Item[]
    defaultItems: Item[]
    limit: number
    searchInputPlaceholder?: string
    onChange?: (value: string[]) => void
    defaultValue?: string[]
    className?: string
}

const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    className,
    onChange,
    defaultValue,
}) => {
    const [showAll, setShowAll] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const listItems = showAll
        ? items.filter((item) =>
              item.text.toLowerCase().includes(searchValue.toLowerCase()),
          )
        : defaultItems?.slice(0, limit)

    const onChangeSearchInput = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {showAll && (
                <div className="mb-5">
                    <Input
                        onChange={onChangeSearchInput}
                        placeholder={searchInputPlaceholder}
                        className="bg-gray-50 border-none"
                    />
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {listItems.map((item, index) => (
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

            {items.length > limit && (
                <div
                    className={
                        showAll ? 'border-t border-t-neutral-100 mt-4' : ''
                    }
                >
                    <button
                        onClick={() => setShowAll((prevState) => !prevState)}
                        className="text-primary mt-3"
                    >
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    )
}

export { CheckboxFiltersGroup }
