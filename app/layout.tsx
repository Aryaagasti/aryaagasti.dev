import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import ScrollObserver from "@/components/scroll-observer"
import SplashCursor from "@/components/splash-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arya Agasti | Full Stack Developer",
  description: "Portfolio website of Arya Agasti, a MERN stack specialist with a backend focus",
    generator: 'v0.dev',
  applicationName: "Arya Agasti Portfolio",
  icons:{
    icon: "/favicon.svg"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollObserver>
            <SmoothScrollProvider>
              <SplashCursor />
              {children}
            </SmoothScrollProvider>
          </ScrollObserver>
        </ThemeProvider>
      </body>
    </html>
  )
}
