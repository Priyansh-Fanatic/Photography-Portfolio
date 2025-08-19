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
        "Street Life is an ongoing documentary project that captures the essence of daily life in urban settings. Through candid photography, I aim to reveal the beauty in ordinary moments and the character of public spaces. This project began in 2024 and focuses on the vibrant streets of Delhi, particularly Chandni Chowk and Connaught Place. The majority of the photography was conducted during photowalks organized by my college's photography club, 'Megapixels'. Each image tells a story of its own, contributing to a larger narrative about urban existence and the shared human experience within city environments. The collection now includes intimate night scenes and portraits of people from all walks of life, from rickshaw drivers working late into the night to soldiers maintaining security in public spaces.",
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
        {
          src: "/images/street-rickshaw-night.jpeg",
          alt: "Rickshaw Driver at Night",
          category: "Street",
        },
        {
          src: "/images/street-soldier-portrait.jpeg",
          alt: "Soldier on Duty",
          category: "Street",
        },
        {
          src: "/images/portrait-elder.jpeg",
          alt: "Elder Man with Cap",
          category: "Street",
        },
        {
          src: "/images/elderly-plaid-cap.jpeg",
          alt: "Elderly Man with Plaid Cap",
          category: "Street",
        },
        {
          src: "/images/man-vest-portrait.jpeg",
          alt: "Man in White Shirt and Brown Vest",
          category: "Street",
        },
      ],
      techniques: ["Candid Photography", "Black & White", "Documentary", "Available Light", "Night Photography"],
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
        {
          src: "/images/architecture-historical-dome.jpeg",
          alt: "Historical Dome Through Trees",
          category: "Spiritual",
        },
      ],
      techniques: ["Golden Hour Photography", "Silhouettes", "Architectural Photography"],
      equipment: ["Nikon B500"],
      date: "2024",
      location: "Karnataka, India",
      locations: ["Bangalore", "Delhi"],
    },
    "wildlife-encounters": {
      title: "Wildlife Encounters",
      description: "Documenting diverse species in their natural habitats with a focus on conservation awareness.",
      longDescription:
        "Wildlife Encounters is a collection of photographs documenting various species in their natural environments across Northern India. This project spans 2024-2025 and represents my passion for wildlife observation and conservation. In Rishikesh, I captured a rare and magical moment during the evening Aarti on the Ganga Ghat, where two elephants engaged in what appeared to be playful interaction - a sight rarely observed in the wild. The bird photography series was primarily developed during the 'Bird Marathon '25' event, where I documented various avian species in their natural habitats. The collection has expanded to include intimate portraits of domestic and wild cats, showcasing their striking eyes and natural behaviors. From riverside elephants to birds in flight, and from soaring raptors to small shorebirds, these images aim to showcase the beauty, behavior, and sometimes the vulnerability of wildlife, fostering appreciation for biodiversity and inspiring conservation efforts.",
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
        {
          src: "/images/wildlife-cat-yellow-eyes.jpeg",
          alt: "Cat with Striking Yellow Eyes",
          category: "Wildlife",
        },
        {
          src: "/images/cat-peeking.jpeg",
          alt: "Cat with Green Eyes Peeking Over Wall",
          category: "Wildlife",
        },
        {
          src: "/images/wildlife-bird-soaring.jpeg",
          alt: "Bird of Prey Soaring",
          category: "Wildlife",
        },
        {
          src: "/images/wildlife-shorebird-mudflats.jpeg",
          alt: "Shorebird on Mudflats",
          category: "Wildlife",
        },
        {
          src: "/images/nature-water-droplets.jpeg",
          alt: "Water Droplets on Leaves with Yellow Flower",
          category: "Wildlife",
        },
        {
          src: "/images/green-bird-wire.jpeg",
          alt: "Green Bird on Wire",
          category: "Wildlife",
        },
        {
          src: "/images/ibis-blue.jpeg",
          alt: "Ibis with Blue Feathers",
          category: "Wildlife",
        },
      ],
      techniques: ["Telephoto Photography", "Golden Hour", "Patience", "Natural Habitat", "Macro Photography"],
      equipment: ["Nikon B500"],
      date: "2024 - 2025",
      location: "Northern India",
      locations: ["Rishikesh", "Karanwas", "Manali", "Delhi"],
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
        "Celestial Wonders is a project dedicated to astrophotography and the documentation of celestial events. This collection features images of the moon and other astronomical phenomena, showcasing the beauty and mystery of the night sky. Acknowledging the limitations of the Nikon B500 camera for astrophotography, this project embraces these constraints and aims to document as many celestial events as possible within these parameters. The project's scope has expanded to include creative compositions where celestial bodies interact with architectural elements and human silhouettes, creating artistic interpretations of our relationship with the cosmos. From full moons in various phases to crescent moons positioned behind modern architecture, these images demonstrate that meaningful astrophotography is possible even with modest equipment, focusing on composition and timing rather than technical perfection.",
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
        {
          src: "/images/celestial-moon-architecture.jpeg",
          alt: "Crescent Moon Behind Architecture",
          category: "Celestial",
        },
        {
          src: "/images/celestial-silhouette-moon.jpeg",
          alt: "Silhouette Against Moon",
          category: "Celestial",
        },
      ],
      techniques: [
        "Long Exposure",
        "Tripod Stabilization",
        "Night Photography",
        "Natural Light",
        "Compositional Framing",
      ],
      equipment: ["Nikon B500", "Tripod"],
      date: "2021 - Present",
      location: "Various Locations",
    },
  }

  return projects[projectId]
}
