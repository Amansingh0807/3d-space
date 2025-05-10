"use client"

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">Aman</Link>
        <nav className="space-x-6 hidden md:block">
          <Link href="#about" className="text-white hover:text-primary">About</Link>
          <Link href="#skills" className="text-white hover:text-primary">Skills</Link>
          <Link href="#projects" className="text-white hover:text-primary">Projects</Link>
          <Link href="#contact" className="text-white hover:text-primary">Contact</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
