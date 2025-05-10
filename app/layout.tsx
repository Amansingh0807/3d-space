import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import CustomCursor from "@/components/CustomCursor"
// import {ThemeToggle} from "@/components/layout/ThemeToggle"
// import { Navbar } from "@/components/layout/Navbar"
// import {Footer} from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aman Singh | Portfolio",
  description: "3D Portfolio site built with Next.js and Three.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="custom-scrollbar">
      <body className={inter.className}>
             <CustomCursor />
        {/* <ThemeToggle/> */}
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
