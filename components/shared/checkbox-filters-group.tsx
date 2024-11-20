'use client'
import { useState, FC } from 'react'

import { Input, Skeleton } from '../ui'
import { FilterCheckbox } from './index'
import { FilterCheckboxProps } from './filter-checkbox'

type Item = FilterCheckboxProps

interface CheckboxFiltersGroupProps {
    title: string
    items: Item[]
    defaultItems?: Item[]
    limit?: number
    loading?: boolean
    searchInputPlaceholder?: string
    onClickCheckBox?: (id: string) => void
    defaultValue?: string[]
    selectedIds: Set<string>
    className?: string
    name: string
}

const CheckboxFiltersGroup: FC<CheckboxFiltersGroupProps> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    loading,
    className,
    onClickCheckBox,
    selectedIds,
    name,
}) => {
    const [showAll, setShowAll] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const listItems = showAll
        ? items.filter((item) =>
              item.text.toLowerCase().includes(searchValue.toLowerCase()),
          )
        : (defaultItems || items)?.slice(0, limit)

    const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) =>
        setSearchValue(event.target.value)

    if (loading) {
        return (
            <div className={className}>
                <p className="font-bold mb-3">{title}</p>
                {Array(limit)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton
                            key={index}
                            className="h-6 mb-4 rounded-[10px]"
                        />
                    ))}
            </div>
        )
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
                        name={name}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={selectedIds.has(item.value ?? '')}
                        onCheckedChange={() =>
                            onClickCheckBox?.(item.value || '')
                        }
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
