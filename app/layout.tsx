import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight:['400','500','600','700'],
  variable: '--font-poppings',
})

export const metadata: Metadata = {
  title: 'Evently',
  description: 'Evently es una plataforma para administrar eventos',
  icons: {
    icon: ''
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  )
}
