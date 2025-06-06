import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectDetail, type ProjectDetails } from "@/components/project-detail"

interface ProjectParams {
  params: {
    projectId: string
  }
}

export default function ProjectPage({ params }: ProjectParams) {
  const { projectId } = params
  const project = getProjectById(projectId)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 lg:pt-36">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </div>
  )
}

function getProjectById(projectId: string): ProjectDetails | undefined {
  const projects: Record<string, ProjectDetails> = {
    "street-life": {
      title: "Street Life",
      description: "A documentary exploration of urban environments, capturing authentic moments of daily life.",
      longDescription:
        "Street Life is an ongoing documentary project that captures the essence of daily life in urban settings. Through candid photography, I aim to reveal the beauty in ordinary moments and the character of public spaces. This project began in 2024 and focuses on the vibrant streets of Delhi, particularly Chandni Chowk and Connaught Place. The majority of the photography was conducted during photowalks organized by my college's photography club, 'Megapixels'. Each image tells a story of its own, contributing to a larger narrative about urban existence and the shared human experience within city environments.",
      coverImage: "/images/street-mirror.jpeg",
      images: [
        {
          src: "/images/street-mirror.jpeg",
          alt: "Reflection in Mirror",
          category: "Street",
        },
        {
          src: "/images/street-boy-yellow.jpeg",
          alt: "Boy in Yellow",
          category: "Street",
        },
        {
          src: "/images/street-bicycle.jpeg",
          alt: "Bicycle Through Archway",
          category: "Street",
        },
        {
          src: "/images/street-resting.jpeg",
          alt: "Resting Worker",
          category: "Street",
        },
        {
          src: "/images/street-smoking.jpeg",
          alt: "Man Smoking",
          category: "Street",
        },
        {
          src: "/images/police-officer-phone.jpeg",
          alt: "Police Officer Checking Phone",
          category: "Street",
        },
      ],
      techniques: ["Candid Photography", "Black & White", "Documentary", "Available Light"],
      equipment: ["Nikon D3200", "Nikon B500"],
      date: "2024 - Present",
      location: "Delhi, India",
      locations: ["Chandni Chowk", "Connaught Place"],
    },
    "sacred-india": {
      title: "Sacred India",
      description: "An in-depth photographic study of India's spiritual heritage and religious architecture.",
      longDescription:
        "Sacred India is a photographic exploration of spirituality and religious practices across India. This project documents the rich tapestry of faith, rituals, and sacred architecture that defines the spiritual landscape of the country. From ancient temples to modern devotional practices, these images capture the profound connection between people and their spiritual traditions. The project aims to convey the sense of reverence, devotion, and transcendence that permeates these sacred spaces and practices, offering viewers a glimpse into the spiritual heart of India.",
      coverImage: "/images/spiritual-shiva-sunset.jpeg",
      images: [
        {
          src: "/images/spiritual-shiva-sunset.jpeg",
          alt: "Shiva Statue at Sunset",
          category: "Spiritual",
        },
        {
          src: "/images/spiritual-shiva-palms.jpeg",
          alt: "Shiva Statue with Palm Trees",
          category: "Spiritual",
        },
        {
          src: "/images/spiritual-shiva-wide.jpeg",
          alt: "Shiva Statue Landscape View",
          category: "Spiritual",
        },
        {
          src: "/images/spiritual-prayer.jpeg",
          alt: "Prayer Hands with Incense",
          category: "Spiritual",
        },
        {
          src: "/images/travel-yoga-sign.jpeg",
          alt: "The Abode of Yoga Sign",
          category: "Spiritual",
        },
      ],
      techniques: ["Golden Hour Photography", "Silhouettes", "Architectural Photography"],
      equipment: ["Nikon B500"],
      date: "2024",
      location: "Karnataka, India",
      locations: ["Bangalore"],
    },
    "wildlife-encounters": {
      title: "Wildlife Encounters",
      description: "Documenting diverse species in their natural habitats with a focus on conservation awareness.",
      longDescription:
        "Wildlife Encounters is a collection of photographs documenting various species in their natural environments across Northern India. This project spans 2024-2025 and represents my passion for wildlife observation and conservation. In Rishikesh, I captured a rare and magical moment during the evening Aarti on the Ganga Ghat, where two elephants engaged in what appeared to be playful interaction - a sight rarely observed in the wild. The bird photography series was primarily developed during the 'Bird Marathon '25' event, where I documented various avian species in their natural habitats. From riverside elephants to birds in flight, these images aim to showcase the beauty, behavior, and sometimes the vulnerability of wildlife, fostering appreciation for biodiversity and inspiring conservation efforts.",
      coverImage: "/images/elephants-riverside.jpeg",
      images: [
        {
          src: "/images/elephants-riverside.jpeg",
          alt: "Elephants by the River",
          category: "Wildlife",
        },
        {
          src: "/images/bird-wading.jpeg",
          alt: "Wading Bird",
          category: "Wildlife",
        },
        {
          src: "/images/bird-kingfisher.jpeg",
          alt: "Kingfisher",
          category: "Wildlife",
        },
        {
          src: "/images/birds-flying.jpeg",
          alt: "Birds in Flight",
          category: "Wildlife",
        },
        {
          src: "/images/bird-sandpiper.jpeg",
          alt: "Sandpiper on Sand",
          category: "Wildlife",
        },
        {
          src: "/images/bird-duck.jpeg",
          alt: "Duck in Shallow Water",
          category: "Wildlife",
        },
        {
          src: "/images/bird-stilt.jpeg",
          alt: "Stilt Bird in Water",
          category: "Wildlife",
        },
        {
          src: "/images/animal-dog.jpeg",
          alt: "Dog Through Fence",
          category: "Wildlife",
        },
        {
          src: "/images/turtle-rock.jpeg",
          alt: "Turtle Sunbathing on Rock",
          category: "Wildlife",
        },
      ],
      techniques: ["Telephoto Photography", "Golden Hour", "Patience", "Natural Habitat"],
      equipment: ["Nikon B500"],
      date: "2024 - 2025",
      location: "Northern India",
      locations: ["Rishikesh", "Karanwas", "Manali"],
    },
    "urban-perspectives": {
      title: "Urban Perspectives",
      description: "Examining the relationship between architecture, space, and human interaction in cities.",
      longDescription:
        "Urban Perspectives examines the dynamic interplay of architecture, culture, and daily routines within Delhi. This project focuses on the visual patterns, architectural elements, and human interactions that define urban spaces in India's capital. Through a combination of street photography and architectural studies, these images reveal the complexity and energy of city life in Delhi. The project explores themes of urban design, public space usage, and the ways in which the city shapes human behavior and experience. From bustling markets to quiet side streets, these photographs document the diverse character of Delhi's urban environment and its inhabitants.",
      coverImage: "/images/museum-illusions.jpeg",
      images: [
        {
          src: "/images/museum-illusions.jpeg",
          alt: "Museum of Illusions",
          category: "Urban Life",
        },
        {
          src: "/images/police-officer-phone.jpeg",
          alt: "Police Officer Checking Phone",
          category: "Urban Life",
        },
        {
          src: "/images/mercedes-parking.jpeg",
          alt: "Mercedes in Parking Lot",
          category: "Urban Life",
        },
        {
          src: "/images/man-5g-sign.jpeg",
          alt: "Man with 5G Sign",
          category: "Urban Life",
        },
        {
          src: "/images/city-sunset-silhouette.jpeg",
          alt: "City Silhouette at Sunset",
          category: "Urban Life",
        },
      ],
      techniques: ["Urban Composition", "Leading Lines", "Juxtaposition", "Street Photography"],
      equipment: ["Nikon B500"],
      date: "2024",
      location: "Delhi, India",
      locations: ["Delhi"],
    },
    "celestial-wonders": {
      title: "Celestial Wonders",
      description: "Astrophotography series exploring the moon, stars, and astronomical phenomena.",
      longDescription:
        "Celestial Wonders is a project dedicated to astrophotography and the documentation of celestial events. This collection features images of the moon and other astronomical phenomena, showcasing the beauty and mystery of the night sky. Acknowledging the limitations of the Nikon B500 camera for astrophotography, this project embraces these constraints and aims to document as many celestial events as possible within these parameters. The project's scope is defined by the capabilities of the equipment, focusing on accessible celestial subjects like the moon in various phases and conditions. As opportunities arise, the collection will expand to include more celestial phenomena, demonstrating that meaningful astrophotography is possible even with modest equipment.",
      coverImage: "/images/celestial-moon.jpeg",
      images: [
        {
          src: "/images/celestial-moon.jpeg",
          alt: "Full Moon",
          category: "Celestial",
        },
        {
          src: "/images/celestial-moon-sepia.jpeg",
          alt: "Full Moon in Sepia",
          category: "Celestial",
        },
        {
          src: "/images/celestial-moon-clouds.jpeg",
          alt: "Moon Through Clouds",
          category: "Celestial",
        },
      ],
      techniques: ["Long Exposure", "Tripod Stabilization", "Night Photography", "Natural Light"],
      equipment: ["Nikon B500", "Tripod"],
      date: "2021 - Present",
      location: "Various Locations",
    },
  }

  return projects[projectId]
}
