import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone, Instagram } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 lg:pt-36 pb-24">
        <div className="container">
          <div className="mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-brand-blue dark:text-brand-orange mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              Have a question about my photography services or interested in collaborating on a project? Feel free to
              reach out using the contact form below or through any of the provided contact methods.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-brand-blue dark:text-brand-orange">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-brand-orange dark:text-brand-blue mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:officialpriyansh25@gmail.com"
                        className="text-sm text-muted-foreground hover:text-brand-blue dark:hover:text-brand-orange transition-colors"
                      >
                        officialpriyansh25@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand-orange dark:text-brand-blue mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:+919520270341"
                        className="text-sm text-muted-foreground hover:text-brand-blue dark:hover:text-brand-orange transition-colors"
                      >
                        +91 9520270341
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-brand-orange dark:text-brand-blue mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Bulandshar, UP, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Instagram className="h-5 w-5 text-brand-orange dark:text-brand-blue mt-0.5" />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <a
                        href="https://instagram.com/priyansh_h_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-brand-blue dark:hover:text-brand-orange transition-colors"
                      >
                        @priyansh_h_
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
