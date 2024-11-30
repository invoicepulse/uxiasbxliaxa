'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import { Logo } from "./logo"
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="flex items-center justify-between py-6 relative">
      <div className="flex items-center">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      
      <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-lg ${
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : ''
      }`}>
        <div className="bg-[#2A2A2A] rounded-lg px-8 py-3">
          <nav className="flex items-center space-x-1">
            <Link 
              href="/" 
              className={`text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-md ${
                pathname === '/' ? 'bg-[#8751f4] text-white' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className={`text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-md ${
                pathname === '/features' ? 'bg-[#8751f4] text-white' : ''
              }`}
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className={`text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-md ${
                pathname === '/pricing' ? 'bg-[#8751f4] text-white' : ''
              }`}
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className={`text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-md ${
                pathname === '/contact' ? 'bg-[#8751f4] text-white' : ''
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      <div>
        <a
          href="https://welcome.modelcanvas.site/"
          className="inline-flex items-center rounded-lg px-6 py-2 
            bg-gradient-to-r from-[#65a9f0] via-[#d552d8] to-[#f896ab] 
            text-white hover:opacity-90 transition-opacity"
        >
          <span>Get Started</span>
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </nav>
  )
}
