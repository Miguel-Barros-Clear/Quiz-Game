import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quiz Game',
  description: "It's a quiz game made with Next.js, TailwindCSS, and back-end with Ruby on Rails.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#222222]`}>{children}</body>
    </html>
  )
}
