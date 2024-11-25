import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import QueryString from 'qs'

import { Filters } from './use-filters'

const useQueryFilters = (filters: Filters) => {
    const router = useRouter()
    useEffect(() => {
        const params = {
            ...filters.prices,
            sizesPizza: [...filters.sizesPizza],
            typesPizza: [...filters.typesPizza],
            ingredients: [...filters.selectedIngredients],
        }
        const query = QueryString.stringify(params, { arrayFormat: 'comma' })

        router.push(`?${query}`, { scroll: false })
    }, [
        filters.prices,
        filters.selectedIngredients,
        filters.sizesPizza,
        filters.typesPizza,
        router,
    ])
}

export { useQueryFilters }
