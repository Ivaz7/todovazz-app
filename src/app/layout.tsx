import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/lib/queryClient";

export const metadata: Metadata = {
  title: "Todovazz App",
  description: "A full-stack Todo App built with Next.js App Router, TypeScript, MongoDB (via Mongoose), and JWT authentication. Supports user registration, login, and personal todo management with secure password hashing and token-based auth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
