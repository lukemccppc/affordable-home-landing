'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
// Menu/X kept for potential future use

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_8px_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-[72px]">

        {/* Logo — absolutely positioned so we can transition left ↔ center smoothly */}
        <Link
          href="/landing"
          aria-label="Affordable Home homepage"
          style={{
            position: 'absolute',
            top: '50%',
            left: scrolled ? '0%' : '50%',
            transform: scrolled
              ? 'translateX(0%) translateY(-50%)'
              : 'translateX(-50%) translateY(-50%)',
            transition: 'left 0.45s ease, transform 0.45s ease',
          }}
        >
          <Image
            src="/images/logo-green.svg"
            alt="Affordable Home"
            width={270}
            height={60}
            style={{
              height: scrolled ? '27px' : '31px',
              width: 'auto',
              transition: 'height 0.45s ease',
            }}
            priority
          />
        </Link>

        {/* CTA — fades in on scroll for ALL screen sizes, replaces hamburger on mobile */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 flex"
          style={{
            opacity: scrolled ? 1 : 0,
            pointerEvents: scrolled ? 'auto' : 'none',
            transform: `translateY(-50%) translateX(${scrolled ? '0px' : '12px'})`,
            transition: 'opacity 0.35s ease, transform 0.35s ease',
          }}
        >
          <a
            href="#hero"
            onClick={scrollToHero}
            className="text-sm font-bold bg-secondary text-primary rounded-md px-5 py-2.5 hover:brightness-105 transition-all"
          >
            Get Started
          </a>
        </div>
      </div>

    </header>
  )
}
