"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Playfair_Display } from "next/font/google"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LightboxGallery, type GalleryImage } from "@/components/lightbox-gallery"
import { ContactForm } from "@/components/contact-form"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function Home() {
  // Featured images using the new photos
  const featuredImages: GalleryImage[] = [
    {
      src: "/images/landscape-mountains-bw.jpeg",
      alt: "Mountain Peaks in Black and White",
      category: "Landscape",
    },
    {
      src: "/images/elephants-riverside.jpeg",
      alt: "Elephants by the River",
      category: "Wildlife",
    },
    {
      src: "/images/spiritual-shiva-sunset.jpeg",
      alt: "Shiva Statue at Sunset",
      category: "Spiritual",
    },
    {
      src: "/images/vintage-lightbulb.jpeg",
      alt: "Vintage Light Bulb with Visible Filament",
      category: "Abstract",
    },
    {
      src: "/images/cat-peeking.jpeg",
      alt: "Cat with Green Eyes Peeking Over Wall",
      category: "Wildlife",
    },
    {
      src: "/images/man-vest-portrait.jpeg",
      alt: "Man in White Shirt and Brown Vest",
      category: "Street",
    },
  ]

  const projects = [
    {
      title: "Urban Perspectives",
      description: "Examining the relationship between architecture, space, and human interaction in cities.",
      image: "/images/museum-illusions.jpeg",
      link: "/projects/urban-perspectives",
    },
    {
      title: "Wildlife Encounters",
      description: "Documenting diverse species in their natural habitats with a focus on conservation awareness.",
      image: "/images/elephants-riverside.jpeg",
      link: "/projects/wildlife-encounters",
    },
    {
      title: "Sacred India",
      description: "An in-depth photographic study of India's spiritual heritage and religious architecture.",
      image: "/images/spiritual-shiva-sunset.jpeg",
      link: "/projects/sacred-india",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative h-screen overflow-hidden">
          <Image src="/images/landscape-mountains-bw.jpeg" alt="Hero image" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1
              className={`${playfair.className} text-5xl font-bold tracking-wider sm:text-6xl md:text-7xl max-w-4xl italic leading-tight text-shadow`}
            >
              Capturing moments through the lens
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-white/90">
              Fine art photography that tells stories and evokes emotions
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white border-0">
                <Link href="/gallery">Explore Gallery</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24">
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-blue dark:text-brand-orange mb-4">
                Featured Work
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A selection of my best photographs showcasing my style and artistic vision.
              </p>
            </div>

            <LightboxGallery images={featuredImages} />

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-brand-blue dark:border-brand-orange text-brand-blue dark:text-brand-orange hover:bg-brand-blue/5 dark:hover:bg-brand-orange/5"
              >
                <Link href="/gallery" className="inline-flex items-center">
                  View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 bg-muted/50">
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-blue dark:text-brand-orange mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore my curated collections of thematic photography projects, each telling a unique visual story.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-blue dark:text-brand-orange">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-brand-orange dark:text-brand-blue font-medium hover:underline"
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-brand-blue dark:border-brand-orange text-brand-blue dark:text-brand-orange hover:bg-brand-blue/5 dark:hover:bg-brand-orange/5"
              >
                <Link href="/projects" className="inline-flex items-center">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/photographer-portrait.jpeg"
                  alt="Photographer portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-brand-blue dark:text-brand-orange mb-6">
                  About Me
                </h2>
                <p className="text-muted-foreground mb-4">
                  Hi! I&apos;m a passionate photographer with 4 years of experience capturing the world through diverse
                  lenses. My journey has taken me through various types of cameras, each one helping me discover new
                  techniques and perspectives. I specialize in street photography, wildlife, and spiritual imagery,
                  blending documentary style with artistic flair to create images that are both expressive and
                  thought-provoking.
                </p>
                <p className="text-muted-foreground mb-4">
                  Among all genres, street photography has been my greatest teacher. It&apos;s taught me to observe,
                  connect, and frame the unseen emotions in everyday life. My dedication and eye for detail have earned
                  me several awards in college photography competitions, fueling my commitment to grow and explore
                  deeper stories through my lens.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="bg-muted px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Street</span>
                  </div>
                  <div className="bg-muted px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Wildlife</span>
                  </div>
                  <div className="bg-muted px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Spiritual</span>
                  </div>
                  <div className="bg-muted px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Travel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-muted/50">
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-blue dark:text-brand-orange mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a question or interested in my work? Feel free to reach out.
              </p>
            </div>

            <div className="mx-auto max-w-2xl rounded-lg border bg-card p-8 shadow-sm">
              <ContactForm />
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact" className="text-sm text-brand-blue dark:text-brand-orange hover:underline">
                View more contact options
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <style jsx>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  )
}
