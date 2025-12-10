import '@/styles/globals.scss'
import { Outfit, Syncopate } from 'next/font/google'

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap',
})

const syncopate = Syncopate({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-header',
    display: 'swap',
})

export const metadata = {
    title: 'DREAM | The Architect',
    description: 'Immersive 3D Portfolio of Oluomachi Chimaobi Udezue',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${outfit.variable} ${syncopate.variable}`}>
            <body>
                <div id="canvas-container"></div>
                <main id="ui-layer">
                    {children}
                </main>
            </body>
        </html>
    )
}
