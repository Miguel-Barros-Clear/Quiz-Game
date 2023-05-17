import './globals.css'

import { AuthProvider } from '@/hooks/auth'

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
    <AuthProvider>
      <html lang="pt-BR">
        <body className={`bg-[#222222]`}>{children}</body>
      </html>
    </AuthProvider>
  )
}
