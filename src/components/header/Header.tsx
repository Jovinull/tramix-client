'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">Minha Plataforma</h1>
      <nav className="flex gap-4">
        <Link href="/login" className="text-indigo-600 hover:underline">
          Login
        </Link>
        <Link href="/register" className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700">
          Registrar
        </Link>
      </nav>
    </header>
  )
}
