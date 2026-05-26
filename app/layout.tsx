import type React from "react"
import "@/app/globals.css"
import { Inter, Syne } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const syne  = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400","500","600","700","800"] })

export const metadata = {
  title: "Priyansh — Photographer · Graphic Designer · Video Editor",
  description:
    "Portfolio of Priyansh — street & wildlife photographer, bold graphic designer, and cinematic video editor based in India.",
  generator: "v0.dev",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable} ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
