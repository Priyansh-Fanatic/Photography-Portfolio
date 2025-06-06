import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  image: string
  link: string
}

export function FeaturedProjects() {
  const projects: Project[] = [
    {
      title: "Street Life",
      description: "A documentary exploration of urban environments, capturing authentic moments of daily life.",
      image: "/images/street-mirror.jpeg",
      link: "/projects/street-life",
    },
    {
      title: "Sacred India",
      description: "An in-depth photographic study of India's spiritual heritage and religious architecture.",
      image: "/images/spiritual-shiva-sunset.jpeg",
      link: "/projects/sacred-india",
    },
    {
      title: "Wildlife Encounters",
      description: "Documenting diverse species in their natural habitats with a focus on conservation awareness.",
      image: "/images/elephants-riverside.jpeg",
      link: "/projects/wildlife-encounters",
    },
    {
      title: "Urban Perspectives",
      description: "Examining the relationship between architecture, space, and human interaction in cities.",
      image: "/images/museum-illusions.jpeg",
      link: "/projects/urban-perspectives",
    },
  ]

  return (
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

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
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
  )
}
