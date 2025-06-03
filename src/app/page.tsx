import Header from "@/components/header/Header"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h2 className="text-4xl font-semibold mb-4">Bem-vindo à Plataforma</h2>
        <p className="text-lg text-gray-600 mb-6">
          Acesse sua conta ou registre-se para começar.
        </p>
        <div className="flex gap-4">
          <a href="/login" className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Login
          </a>
          <a href="/register" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50">
            Registrar
          </a>
        </div>
      </section>
    </main>
  )
}
