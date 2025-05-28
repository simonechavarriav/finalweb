// app/(auth)/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/services/authService";
import Cookies from "js-cookie";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await login(email, password);
            Cookies.set("token", data.access_token);
            router.push("/users/list");
        } catch (err) {
            alert("Error al iniciar sesión");
        }
    };

    return (
        <form onSubmit={handleLogin} className="max-w-md mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
            <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full mb-2 p-2 border"
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full mb-4 p-2 border"
            />
            <button type="submit" className="bg-black text-white px-4 py-2">
                Entrar
            </button>
        </form>
    );
}
