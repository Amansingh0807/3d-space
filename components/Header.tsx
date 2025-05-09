import React from "react";

export default function Header() {
  return (
 <div className="w-full bg-pink-950 ">
      <header className="fixed top-0 w-full text-white bg-pink-950 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b dark:border-gray-700">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-left space-x-4">
        My Logo 
        </div>
        <div>
            <a href="/">Home</a>
        </div>
        <div>
            <a href="/">Home</a>
        </div>
        <div>
            <a href="/">Home</a>
        </div>
      </nav>
    </header>
  </div>
  );
}
