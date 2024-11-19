'use client'
import { Api } from '@/services/api-client'
import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'

interface useFilterIngredientsProps {
    ingredients: Ingredient[]
}

export const useFilterIngredients = (): useFilterIngredientsProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])

    useEffect(() => {
        async function fetchIngredients() {
            try {
                const ingredients = await Api.ingredients.getAll()
                setIngredients(ingredients)
            } catch (error) {
                console.error(error)
            }
        }

        fetchIngredients()
    }, [])
    return { ingredients }
}
