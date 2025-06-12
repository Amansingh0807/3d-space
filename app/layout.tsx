import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import CustomCursor from "@/components/CustomCursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "3D Space",
  description: "3D Portfolio site built with Next.js and Three.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="custom-scrollbar">
      <body className={inter.className}>
             <CustomCursor />
        {children}
      </body>
    </html>
  )
}
