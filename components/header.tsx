"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Instagram, Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { label: "Home",           href: "/"                },
  { label: "Photography",    href: "/gallery"         },
  { label: "Design",         href: "/#graphic-design" },
  { label: "Video",          href: "/#video-editing"  },
  { label: "Projects",       href: "/projects"        },
  { label: "About",          href: "/#about"          },
  { label: "Contact",        href: "/contact"         },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      {/* ── Main header bar ── */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-background/96 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="container flex h-24 items-center justify-between gap-4">

          {/* Logo — Link lives here, NOT inside Logo component */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 md:gap-4 absolute left-1/2 -translate-x-1/2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-semibold px-4 py-2 rounded-lg transition-all duration-200
                  ${isScrolled
                    ? "text-foreground/80 hover:text-brand-orange hover:bg-brand-orange/8"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <ThemeToggle />
            <Link
              href="https://www.instagram.com/thepriyansh.raw/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200
                hover:text-brand-orange hover:border-brand-orange
                ${isScrolled ? "border-border text-foreground/60" : "border-white/30 text-white/70"}`}
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Button
              size="sm"
              asChild
              className="bg-brand-orange hover:bg-brand-orange-dark text-white border-0 rounded-full px-5 font-bold text-sm ml-1"
            >
              <Link href="/contact">Hire Me</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-200
              hover:border-brand-orange hover:text-brand-orange
              ${isScrolled ? "border-border text-foreground" : "border-white/30 text-white"}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      <div
        className={`fixed inset-0 z-[100] bg-background transition-all duration-400 flex flex-col ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-border flex-shrink-0">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
            <Logo />
          </Link>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-border text-foreground hover:border-brand-orange hover:text-brand-orange transition-all duration-200"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col flex-1 overflow-y-auto px-6 pt-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between py-5 border-b border-border text-2xl font-black hover:text-brand-orange transition-colors duration-200"
            >
              <span>{link.label}</span>
              <span className="text-brand-orange text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
            </Link>
          ))}
        </nav>

        {/* Bottom of mobile menu */}
        <div className="px-6 py-6 border-t border-border flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="https://www.instagram.com/thepriyansh.raw/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-brand-orange hover:border-brand-orange transition-all duration-200"
          >
            <Instagram className="h-4 w-4" />
          </Link>
          <Button
            asChild
            className="ml-auto bg-brand-orange hover:bg-brand-orange-dark text-white border-0 rounded-full px-6 font-bold"
          >
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Hire Me</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
