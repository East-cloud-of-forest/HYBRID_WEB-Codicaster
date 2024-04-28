import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Context from './Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Codicaster',
  description: 'Codicaster',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Context className={inter.className}>{children}</Context>
    </html>
  )
}
