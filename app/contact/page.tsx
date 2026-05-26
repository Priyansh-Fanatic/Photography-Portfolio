import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone, Instagram, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-24">

        {/* ── Hero banner ── */}
        <div className="bg-[#0D0D0D] py-20 mb-16">
          <div className="container">
            <span className="inline-flex items-center gap-2 text-brand-orange text-[11px] font-black uppercase tracking-[0.25em] mb-6">
              <span className="w-6 h-px bg-brand-orange" /> Contact
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
              Let&apos;s Create<br />
              <span className="text-brand-orange">Something</span><br />
              Together.
            </h1>
            <p className="mt-6 text-white/45 text-base max-w-md">
              Available for photography, graphic design & video editing projects. Based in Bulandshar, India — working worldwide.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="grid lg:grid-cols-[1fr_480px] gap-10 xl:gap-16 items-start">

            {/* ── Left — Contact info ── */}
            <div className="space-y-6">

              {/* Quick contact cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Mail className="h-5 w-5" />,
                    label: "Email",
                    value: "officialpriyansh25@gmail.com",
                    href: "mailto:officialpriyansh25@gmail.com",
                    display: "officialpriyansh25\n@gmail.com",
                  },
                  {
                    icon: <Phone className="h-5 w-5" />,
                    label: "Phone",
                    value: "+91 9520270341",
                    href: "tel:+919520270341",
                    display: "+91 9520270341",
                  },
                  {
                    icon: <Instagram className="h-5 w-5" />,
                    label: "Instagram",
                    value: "@thepriyansh.raw",
                    href: "https://www.instagram.com/thepriyansh.raw/",
                    display: "@thepriyansh.raw",
                  },
                  {
                    icon: <MapPin className="h-5 w-5" />,
                    label: "Location",
                    value: "Bulandshar, UP, India",
                    href: null,
                    display: "Bulandshar, UP\nIndia",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group p-5 rounded-2xl border border-border bg-card hover:border-brand-orange/40 hover:bg-brand-orange/[0.03] transition-all duration-300"
                  >
                    <div className="inline-flex p-2 rounded-lg bg-brand-orange/10 text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-bold text-foreground hover:text-brand-orange transition-colors duration-200 flex items-start justify-between gap-2 group/link"
                      >
                        <span className="whitespace-pre-line leading-snug">{item.display}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </Link>
                    ) : (
                      <p className="text-sm font-bold whitespace-pre-line leading-snug">{item.display}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Availability badge */}
              <div className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-black text-green-500">Currently Available</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Open to new projects starting immediately. Typical response time is within 24 hours.
                </p>
              </div>

              {/* What I offer */}
              <div className="p-6 rounded-2xl border border-border bg-card">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">What I Offer</p>
                <div className="space-y-3">
                  {[
                    { service: "Photography Sessions", detail: "Street · Wildlife · Events · Portraits" },
                    { service: "Graphic Design",       detail: "Posters · Brand Identity · Event Graphics" },
                    { service: "Video Editing",        detail: "Reels · Cinematic Films · Event Coverage" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start justify-between gap-4 py-2.5 border-b border-border last:border-0">
                      <span className="font-bold text-sm">{s.service}</span>
                      <span className="text-muted-foreground text-xs text-right leading-relaxed">{s.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right — Form ── */}
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="mb-8">
                  <h2 className="text-2xl font-black mb-1">Send a Message</h2>
                  <p className="text-muted-foreground text-sm">Fill in the form and your email client will open ready to send.</p>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
