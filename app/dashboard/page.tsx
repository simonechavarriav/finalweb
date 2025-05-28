// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-white to-purple-300 p-6">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
                Bienvenido a GlamGiant
            </h1>
            <p className="text-center text-lg text-gray-600 max-w-xl mb-6">
                La marca de maquillaje más segura e inclusiva.
            </p>
            <div className="flex space-x-4">
                <Link href="/auth/register">
                    <Button size="lg">Regístrate</Button>
                </Link>
                <Link href="/auth/login">
                    <Button variant="outline" size="lg">Inicia sesión</Button>
                </Link>
            </div>
        </main>
    );
}
