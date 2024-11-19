import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || ''
    const decodedQuery = decodeURIComponent(query)

    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: decodedQuery,
                mode: 'insensitive',
            },
        },
        take: 10,
    })

    return NextResponse.json(products)
}
