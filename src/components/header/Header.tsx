'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Detecta se o token está presente via cookie
    const hasToken = document.cookie.includes('token=')
    setIsLoggedIn(hasToken)
  }, [pathname]) // Revalida quando a rota muda

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link href="/" className="text-xl font-bold text-indigo-600">Minha Plataforma</Link>
      <nav className="flex gap-4">
        {!isLoggedIn ? (
          <>
            <Link href="/login" className="text-indigo-600 hover:underline">Login</Link>
            <Link href="/register" className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700">
              Registrar
            </Link>
          </>
        ) : (
          <>
            <Link href="/dashboard" className="text-indigo-600 hover:underline">Dashboard</Link>
            <button
              onClick={() => {
                document.cookie = 'token=; Max-Age=0; path=/'
                location.href = '/'
              }}
              className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Sair
            </button>
          </>
        )}
      </nav>
    </header>
  )
}
