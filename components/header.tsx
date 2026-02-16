"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Instagram, Menu } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 md:h-22 lg:h-24 items-center justify-between">
        <div className="flex-shrink-0 mr-4 -ml-2 md:-ml-3 lg:-ml-4">
          <div className="h-24 w-24 transform md:scale-[1.6] scale-100 md:translate-y-2 translate-y-0 transition-transform duration-300">
            <Logo />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/80 hover:text-brand-blue dark:hover:text-brand-orange transition-colors px-2 py-1"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium text-foreground/80 hover:text-brand-blue dark:hover:text-brand-orange transition-colors px-2 py-1"
            >
              Gallery
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-foreground/80 hover:text-brand-blue dark:hover:text-brand-orange transition-colors px-2 py-1"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-foreground/80 hover:text-brand-blue dark:hover:text-brand-orange transition-colors px-2 py-1"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/80 hover:text-brand-blue dark:hover:text-brand-orange transition-colors px-2 py-1"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center ml-2">
            <ThemeToggle />
            <Link
              href="https://www.instagram.com/thepriyansh.raw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-brand-orange transition-colors ml-2"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                <Link href="/" className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/gallery" className="text-lg font-medium">
                  Gallery
                </Link>
                <Link href="/projects" className="text-lg font-medium">
                  Projects
                </Link>
                <Link href="/#about" className="text-lg font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium">
                  Contact
                </Link>
                <div className="flex items-center gap-4 pt-4">
                  <ThemeToggle />
                  <Link href="https://www.instagram.com/thepriyansh.raw/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
