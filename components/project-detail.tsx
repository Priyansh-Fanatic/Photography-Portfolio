"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { LightboxGallery, type GalleryImage } from "@/components/lightbox-gallery"

// Update the ProjectDetails interface to have locations as an array
export interface ProjectDetails {
  title: string
  description: string
  longDescription: string
  coverImage: string
  images: GalleryImage[]
  techniques?: string[]
  equipment?: string[]
  date?: string
  location?: string
  locations?: string[] // Add this new field for location bubbles
}

interface ProjectDetailProps {
  project: ProjectDetails
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="container py-24">
      <Link
        href="/projects"
        className="inline-flex items-center text-brand-blue dark:text-brand-orange hover:text-brand-orange dark:hover:text-brand-blue transition-colors mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-brand-blue dark:text-brand-orange mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">{project.description}</p>
      </div>

      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg mb-12">
        <Image
          src={project.coverImage || "/placeholder.png"}
          alt={project.title}
          fill
          className="object-cover"
          priority
          onError={() => setImageError(true)}
        />
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <p className="text-muted-foreground">Image could not be loaded</p>
          </div>
        )}
      </div>

      <div className="grid gap-12 md:grid-cols-3 mb-16">
        <div className="md:col-span-2">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{project.longDescription}</p>
          </div>
        </div>
        <div>
          <div className="bg-muted/50 p-6 rounded-lg">
            {project.date && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Date</h3>
                <p className="text-foreground">{project.date}</p>
              </div>
            )}
            {project.location && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Location</h3>
                <p className="text-foreground">{project.location}</p>
              </div>
            )}
            {project.locations && project.locations.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Locations</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.locations.map((location, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-brand-blue/10 dark:bg-brand-orange/10 px-3 py-1 text-xs font-medium text-brand-blue dark:text-brand-orange"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techniques && project.techniques.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Techniques</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techniques.map((technique, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-brand-blue/10 dark:bg-brand-orange/10 px-3 py-1 text-xs font-medium text-brand-blue dark:text-brand-orange"
                    >
                      {technique}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.equipment && project.equipment.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Equipment</h3>
                <ul className="list-disc list-inside text-foreground text-sm space-y-1">
                  {project.equipment.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-brand-blue dark:text-brand-orange mb-6">
          Project Gallery
        </h2>
      </div>

      <LightboxGallery images={project.images} masonry />
    </div>
  )
}
