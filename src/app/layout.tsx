import './globals.css'
import type { Metadata } from 'next'
import { poppins, pressStart } from "./fonts"

export const metadata: Metadata = {
  title: "Geeks - IFRN",
  description: "Projeto de Extensão"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${pressStart.variable}`}>{children}</body>
    </html>
  )
}
