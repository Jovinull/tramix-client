export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4">
      <h1 className="text-5xl font-bold text-indigo-700 mb-4">Bem-vindo à Plataforma</h1>
      <p className="text-gray-600 text-lg max-w-xl mb-6">
        Gerencie suas tarefas, acompanhe seu progresso e alcance seus objetivos. Faça login ou registre-se para começar agora mesmo.
      </p>
      <div className="flex gap-4">
        <a href="/login" className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Login
        </a>
        <a href="/register" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50">
          Registrar
        </a>
      </div>
    </div>
  )
}
