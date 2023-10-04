import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/toaster'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Budega da Facisa - Sua compra é nossa alegria',
  description:
    'Aplicação desenvolvida para a competência de Desenvolvimento Web com REST da Unifacisa',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
