import React from 'react'

interface Props {
    className?: string
}

const FilterCheckbox: React.FC<Props> = ({ className }) => {
    return <div className={className}></div>
}

export { FilterCheckbox }
