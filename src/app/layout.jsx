import '@/styles/globals.scss'
import { JetBrains_Mono } from 'next/font/google'
import SmoothScroll from '@/components/ui/SmoothScroll'

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
})

export const metadata = {
    title: 'DREAM | Full Stack Engineer',
    description: 'Portfolio of Oluomachi Chimaobi Udezue',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
            <body>
                <SmoothScroll>
                    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
                        {children}
                    </main>
                </SmoothScroll>
            </body>
        </html>
    )
}
