import Link from "next/link"
import { Instagram } from "lucide-react"
import { Logo } from "@/components/logo"

const footerLinks = [
  { label: "Home",           href: "/"                },
  { label: "Photography",    href: "/gallery"         },
  { label: "Graphic Design", href: "/#graphic-design" },
  { label: "Video Editing",  href: "/#video-editing"  },
  { label: "Projects",       href: "/projects"        },
  { label: "About",          href: "/#about"          },
  { label: "Contact",        href: "/contact"         },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex mb-4">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Photographer · Graphic Designer · Video Editor.<br />
              Capturing stories that move people.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://www.instagram.com/thepriyansh.raw/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-brand-orange hover:border-brand-orange transition-all duration-200"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">Navigation</p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-brand-orange transition-colors duration-200 hover-line w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services + Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">Services</p>
            <div className="flex flex-col gap-3 mb-8">
              {[
                "Street & Wildlife Photography",
                "Graphic Design & Branding",
                "Poster & Event Graphics",
                "Video Editing & Reels",
                "Cinematic Short Films",
                "Album Art & Covers",
              ].map(service => (
                <span key={service} className="text-sm text-muted-foreground">{service}</span>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-orange-dark transition-all duration-200 hover:scale-105"
            >
              Get in Touch →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Priyansh. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Photography · Graphic Design · Video Editing
          </p>
        </div>

      </div>
    </footer>
  )
}
