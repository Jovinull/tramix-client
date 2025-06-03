"use client";

import { useRef, useState } from "react";
import { login } from "./action";

const LoginPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    try {
      await login(formData);
    } catch {
      setError("Usuário ou senha inválidos.");
    }
  }

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
