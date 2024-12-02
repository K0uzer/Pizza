import { useEffect, useState } from 'react'
import { Api } from '@/shared/services/api-client'

import { Ingredient } from '@prisma/client'

const useIngredients = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function fetchIngredients() {
            try {
                setIsLoading(true)
                const ingredients = await Api.ingredients.getAll()
                setIngredients(ingredients)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchIngredients()
    }, [])
    return { ingredients, isLoading }
}

export { useIngredients }
