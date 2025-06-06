import Link from "next/link"
import { Instagram } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="text-center lg:text-left max-w-full lg:max-w-[40%]">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">Capturing moments through the lens</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-brand-blue dark:hover:text-brand-orange transition-colors"
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className="text-sm text-muted-foreground hover:text-brand-blue dark:hover:text-brand-orange transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/projects"
                className="text-sm text-muted-foreground hover:text-brand-blue dark:hover:text-brand-orange transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/#about"
                className="text-sm text-muted-foreground hover:text-brand-blue dark:hover:text-brand-orange transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-brand-blue dark:hover:text-brand-orange transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com/priyansh_h_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-orange transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Priyansh Photography. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
