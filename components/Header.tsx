import React from "react";

export default function Header() {
  return (
 
      <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b dark:border-gray-700">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        My Logo 
        </div>
        <div>
            <a href="/">Home</a>
        </div>
      </nav>
    </header>
  
  );
}
