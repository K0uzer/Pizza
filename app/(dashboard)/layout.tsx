import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import '../globals.css'

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
    title: 'Delicious Pizza | Главная страница',
    description: 'Generated by create next app',
}

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                <main className="main-h-screen">
                    <h1>DASHBOADR</h1>
                    {children}
                </main>
            </body>
        </html>
    )
}
