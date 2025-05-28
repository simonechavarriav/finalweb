// app/layout.tsx
import "@/app/globals.css";
import { ReactNode } from "react";
import Sidebar from "@/app/components/sidebar";

export const metadata = {
  title: "GlamGiant",
  description: "Dashboard de administración",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
