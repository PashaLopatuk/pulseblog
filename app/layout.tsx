import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { Providers } from './components/Providers'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PulseBlog',
  description: 'Immerse yourself in a world of discoveries',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={
        `${inter.className} bg-white text-black dark:bg-black dark:selection:bg-gray-900 dark:text-white h-full selection:bg-gray-50`
      }>
        <Providers>
          <Navbar /> 
          <main className='
          max-w-3xl mx-auto px-4
          flex-1 flex-grow-1 flex-shrink-0 flex-basis-1
          '>
            {children}
          </main>
          <Footer />
        </Providers>
        </body>
    </html>
  )
}
