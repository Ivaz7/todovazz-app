import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/lib/queryClient";
import Footer from "@/components/ui/footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Todovazz App",
  description: "A full-stack Todo App built with Next.js App Router, TypeScript, MongoDB (via Mongoose), and JWT authentication. Supports user registration, login, and personal todo management with secure password hashing and token-based auth.",
  icons: '/todo.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="dark"
      >
        <ReactQueryProvider>
          {children}
          <Toaster />
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
