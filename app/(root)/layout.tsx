import type { Metadata } from 'next'

import { Header } from '@/components/shared'

export const metadata: Metadata = {
    title: 'Delicious Pizza | Главная страница',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main className="main-h-screen">
            <Header />
            {children}
        </main>
    )
}
