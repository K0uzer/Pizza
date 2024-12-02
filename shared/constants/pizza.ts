export const mapPizzaSize = {
    20: 'Маленькая',
    30: 'Средняя',
    40: 'Большая',
}

export const mapPizzaType = {
    1: 'Традиционная',
    2: 'Тонкая',
}

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
    name,
    value,
}))
