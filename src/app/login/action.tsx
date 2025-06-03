"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(formdata: FormData) {
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;

  const res = await fetch(`${process.env.API_URL}/api/sessions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Falha no login. Verifique seu email e senha.");
  }

  const { token } = await res.json();

  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/dashboard");
}
