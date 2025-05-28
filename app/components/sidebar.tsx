'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronDown, ChevronRight, Home, ShoppingBasket, TestTubeDiagonal, Users } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const [usersOpen, setUsersOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [testResultsOpen, setTestResultsOpen] = useState(false);

  return (
    <aside className="w-64 min-h-screen bg-gray-100 p-4 border-r">
      <h1 className="text-2xl font-bold mb-6">GlamGiant</h1>
      <nav className="space-y-2">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2 p-2 rounded-md transition-colors",
            pathname === "/" ? "bg-primary text-white" : "hover:bg-gray-200"
          )}
        >
          <Home size={20} />
          Inicio
        </Link>

        {/* Usuarios con submenú */}
        <div>
          <button
            onClick={() => setUsersOpen(!usersOpen)}
            className="flex items-center gap-2 p-2 w-full rounded-md hover:bg-gray-200 transition-colors"
          >
            <Users size={20} />
            <span>Usuarios</span>
            <span className="ml-auto">
              {usersOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </span>
          </button>

          {usersOpen && (
            <div className="ml-6 mt-1 space-y-1">
              <Link
                href="/user/list"
                className={cn(
                  "block px-2 py-1 rounded-md",
                  pathname === "/user/list"
                    ? "bg-primary text-white"
                    : "hover:bg-gray-200"
                )}
              >
                Ver lista
              </Link>
              <Link
                href="/auth/register"
                className={cn(
                  "block px-2 py-1 rounded-md",
                  pathname === "/auth/register"
                    ? "bg-primary text-white"
                    : "hover:bg-gray-200"
                )}
              >
                Crear nuevo
              </Link>
            </div>
          )}
        </div>
        {/* Productos */}
        <div>
          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className="flex items-center gap-2 p-2 w-full rounded-md hover:bg-gray-200 transition-colors"
          >
            <ShoppingBasket size={20} />
            <span>Productos</span>
            <span className="ml-auto">
              {productsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </span>
          </button>

          {productsOpen && (
            <div className="ml-6 mt-1 space-y-1">
              <Link
                href="/product/create"
                className={cn(
                  "block px-2 py-1 rounded-md",
                  pathname === "/product/create"
                    ? "bg-primary text-white"
                    : "hover:bg-gray-200"
                )}
              >
                Crear producto
              </Link>
              <Link
                href="/product/list"
                className={cn(
                  "block px-2 py-1 rounded-md",
                  pathname === "/product/list"
                    ? "bg-primary text-white"
                    : "hover:bg-gray-200"
                )}
              >
                Ver lista de productos
              </Link>
            </div>
          )}
        </div>
        {/* Resultados de pruebas */}
        <div>
          <button
            onClick={() => setTestResultsOpen(!testResultsOpen)}
            className="flex items-center gap-2 p-2 w-full rounded-md hover:bg-gray-200 transition-colors"
          >
            <TestTubeDiagonal size={20} />
            <span>Resultados pruebas</span>
            <span className="ml-auto">
              {testResultsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </span>
          </button>

          {testResultsOpen && (
            <div className="ml-6 mt-1 space-y-1">
              <Link
                href="/testResults/create"
                className={cn(
                  "block px-2 py-1 rounded-md",
                  pathname === "/testResults/create"
                    ? "bg-primary text-white"
                    : "hover:bg-gray-200"
                )}
              >
                Crear resultado de prueba
              </Link>
              <Link
                href="/testResults/list"
                className={cn(
                  "block px-2 py-1 rounded-md",
                  pathname === "/testResults/list"
                    ? "bg-primary text-white"
                    : "hover:bg-gray-200"
                )}
              >
                Ver resultados de pruebas
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}
