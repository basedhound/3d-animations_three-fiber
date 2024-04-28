import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const inter = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata: Metadata = {
  title: "Horizontal Scrolling Animation",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
