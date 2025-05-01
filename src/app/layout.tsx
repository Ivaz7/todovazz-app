import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todovazz App",
  description: "todo app using login authentication",
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
        {children}
      </body>
    </html>
  );
}
