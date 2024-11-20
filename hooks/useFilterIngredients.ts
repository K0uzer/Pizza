'use client'
import { Api } from '@/services/api-client'
import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'

interface useFilterIngredientsProps {
    ingredients: Ingredient[]
    isLoading: boolean
    selectedIngredients: Set<string>
    toggleTypes: (id: string) => void
}

export const useFilterIngredients = (): useFilterIngredientsProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const [selectedIngredients, { toggle }] = useSet(new Set<string>([]))

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
    return { ingredients, isLoading, toggleTypes: toggle, selectedIngredients }
}
