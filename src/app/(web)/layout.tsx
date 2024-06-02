import type { Metadata } from 'next'
import { Nanum_Gothic } from 'next/font/google'
import '@/styles/globals.css'

const NanumFont = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Codicaster Privarcy Policy',
  description: 'Codicaster Privarcy Policy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={NanumFont.className}>{children}</body>
    </html>
  )
}
