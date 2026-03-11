import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ViewProvider } from '@/components/ViewContext'
import ViewSwitcher from '@/components/ViewSwitcher'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Portfolio | Scrollytelling',
  description: 'A high-end "Scrollytelling" Personal Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-[#121212] text-white antialiased font-sans min-h-screen">
        <ViewProvider>
          {children}
          <ViewSwitcher />
        </ViewProvider>
      </body>
    </html>
  )
}
