"use client";

import { useRef, useState } from "react";

export default function RegisterPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleRegister(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (!formRef.current) return;
    const formData = new FormData(formRef.current);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (!res.ok) {
      setError("Erro ao registrar usuário");
      return;
    }

    setSuccess(true);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Registrar</h2>
        <form ref={formRef} onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Registrar
          </button>
        </form>
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-sm mt-4">
            Registro realizado com sucesso!
          </p>
        )}
      </div>
    </div>
  );
}
