import { ReactNode } from 'react'
import { Nunito } from 'next/font/google'

import './globals.css'

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
})

export default function GlobalLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en">
            <header>
                <link data-rh="true" rel="icon" href="/logo.png" />
            </header>
            <body className={nunito.className}>
                <main className={nunito.className}>{children}</main>
            </body>
        </html>
    )
}
