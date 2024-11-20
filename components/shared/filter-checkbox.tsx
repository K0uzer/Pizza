import { FC } from 'react'
import { Checkbox } from '../ui'

export interface FilterCheckboxProps {
    text: string
    value?: string
    endAdornment?: React.ReactNode
    onCheckedChange?: (checked: boolean) => void
    checked?: boolean
    name?: string
}

const FilterCheckbox: FC<FilterCheckboxProps> = ({
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked,
    name,
}) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className="rounded-[8px] w-6 h-6"
                id={`checkbox-${String(value)}-${String(name)}`}
            />
            <label
                htmlFor={`checkbox-${String(value)}-${String(name)}`}
                className="leading-none cursor-pointer flex-1 select-none"
            >
                {text}
            </label>
            {endAdornment}
        </div>
    )
}

export { FilterCheckbox }
