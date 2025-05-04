import React from 'react'

export default function Header() {
  return (
    <div>
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">My Website</h1>
            <nav className="space-x-4">
            <a href="/" className="hover:text-gray-400">Home</a>
            <a href="/about" className="hover:text-gray-400">About</a>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
            </nav>
        </header>
      
    </div>
  )
}
