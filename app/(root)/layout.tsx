import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { Header } from '@/shared/components'

export const metadata: Metadata = {
    title: 'Delicious Pizza | Главная',
}

export default function RootLayout({
    children,
    modal,
}: Readonly<{
    children: ReactNode
    modal: ReactNode
}>) {
    return (
        <main className="main-h-screen">
            <Header />
            {children}
            {modal}
        </main>
    )
}
