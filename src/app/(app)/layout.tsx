import type { Metadata } from 'next'
import { Nanum_Gothic, Outfit } from 'next/font/google'
import '@/styles/globals.css'
import Context from './Context'

const NanumFont = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})
const OutfitFont = Outfit({
  subsets: ['latin'],
  variable: '--outfit',
})

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
      <Context className={`${NanumFont.className} ${OutfitFont.variable}`}>
        {children}
      </Context>
    </html>
  )
}
