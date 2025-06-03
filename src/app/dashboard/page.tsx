import { cookies } from 'next/headers'

type Task = {
  id: number
  title: string
  description?: string
  done: boolean
  createdAt?: string
}

function formatDate(dateString?: string) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  if (!token) {
    return (
      <div className="p-10 text-red-500 font-semibold">
        Usuário não autenticado. Faça login para acessar o dashboard.
      </div>
    )
  }

  const res = await fetch(`${process.env.API_URL}/api/my-tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  })

  const responseData = await res.json()
  console.log('Resposta da API /my-tasks:', responseData)

  const tasks: Task[] = Array.isArray(responseData)
    ? responseData
    : Array.isArray(responseData.data)
      ? responseData.data
      : []

  if (!res.ok || !Array.isArray(tasks)) {
    return (
      <div className="p-10 text-red-500 font-semibold">
        Erro ao buscar tarefas ou formato inesperado na resposta.
      </div>
    )
  }

  const sortedTasks = [...tasks].sort((a, b) =>
    (b.createdAt ?? '').localeCompare(a.createdAt ?? '')
  )

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {sortedTasks.length === 0 ? (
        <p className="text-gray-600">Nenhuma tarefa registrada.</p>
      ) : (
        <ul className="space-y-4">
          {sortedTasks.map((task) => (
            <li key={task.id} className="border p-4 rounded shadow-sm">
              <h2 className="text-lg font-semibold">{task.title}</h2>
              {task.description && (
                <p className="text-gray-600">{task.description}</p>
              )}
              <p className="text-sm mt-2 text-gray-500">
                Criada em: {formatDate(task.createdAt)}
              </p>
              <p className="text-sm mt-1">
                Status:{' '}
                <span className={task.done ? 'text-green-600' : 'text-yellow-600'}>
                  {task.done ? 'Concluída' : 'Pendente'}
                </span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
