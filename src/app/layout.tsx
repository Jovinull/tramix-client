import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header/Header'

export const metadata: Metadata = {
  title: 'Minha Plataforma',
  description: 'Aplicação com login, tarefas e dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
