import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface Project {
  id: string
  title: string
  description: string
  coverImage: string
  category: string
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: "street-life",
      title: "Street Life",
      description: "A documentary exploration of urban environments, capturing authentic moments of daily life.",
      coverImage: "/images/street-mirror.jpeg",
      category: "Documentary",
    },
    {
      id: "sacred-india",
      title: "Sacred India",
      description: "An in-depth photographic study of India's spiritual heritage and religious architecture.",
      coverImage: "/images/spiritual-shiva-sunset.jpeg",
      category: "Spiritual",
    },
    {
      id: "wildlife-encounters",
      title: "Wildlife Encounters",
      description: "Documenting diverse species in their natural habitats with a focus on conservation awareness.",
      coverImage: "/images/elephants-riverside.jpeg",
      category: "Wildlife",
    },
    {
      id: "urban-perspectives",
      title: "Urban Perspectives",
      description: "Examining the relationship between architecture, space, and human interaction in cities.",
      coverImage: "/images/museum-illusions.jpeg",
      category: "Urban",
    },
    {
      id: "celestial-wonders",
      title: "Celestial Wonders",
      description: "Astrophotography series exploring the moon, stars, and astronomical phenomena.",
      coverImage: "/images/celestial-moon.jpeg",
      category: "Celestial",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 lg:pt-36 pb-24">
        <div className="container">
          <div className="mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-brand-blue dark:text-brand-orange mb-4">
              Photography Projects
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              Explore my curated collections of thematic photography projects. Each project represents a unique visual
              narrative, capturing moments and stories through my lens.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.coverImage || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-sm font-medium text-brand-orange dark:text-brand-blue">{project.category}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-brand-blue dark:text-brand-orange group-hover:text-brand-orange dark:group-hover:text-brand-blue transition-colors">
                  {project.title}
                </h2>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <span className="inline-flex items-center text-brand-blue dark:text-brand-orange font-medium group-hover:text-brand-orange dark:group-hover:text-brand-blue transition-colors">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
