"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LightboxGallery, type GalleryImage } from "@/components/lightbox-gallery"

export default function GalleryPage() {
  // Updated categories with better organization
  const categories = [
    { id: "all", name: "All", count: 0 },
    { id: "street", name: "Street", count: 0 },
    { id: "wildlife", name: "Wildlife", count: 0 },
    { id: "landscape", name: "Landscape", count: 0 },
    { id: "spiritual", name: "Spiritual", count: 0 },
    { id: "celestial", name: "Celestial", count: 0 },
    { id: "abstract", name: "Abstract", count: 0 },
    { id: "architecture", name: "Architecture", count: 0 },
    { id: "travel", name: "Travel", count: 0 },
    { id: "urban", name: "Urban Life", count: 0 },
    { id: "night", name: "Night", count: 0 },
  ]

  // Define primary categories for each image to avoid duplication
  const streetImages: GalleryImage[] = [
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
      src: "/images/street-mirror.jpeg",
      alt: "Reflection in Mirror",
      category: "Street",
    },
    {
      src: "/images/portrait-elder.jpeg",
      alt: "Elder Man with Cap",
      category: "Street",
    },
    {
      src: "/images/portrait-woman.jpeg",
      alt: "Woman in Traditional Dress",
      category: "Street",
    },
    {
      src: "/images/portrait-child.jpeg",
      alt: "Child with Parent",
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
  ]

  const wildlifeImages: GalleryImage[] = [
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
      src: "/images/elephants-riverside.jpeg",
      alt: "Elephants by the River",
      category: "Wildlife",
    },
    {
      src: "/images/turtle-rock.jpeg",
      alt: "Turtle Sunbathing on Rock",
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
    {
      src: "/images/duck-ripples.jpeg",
      alt: "Duck Swimming in Ripples",
      category: "Wildlife",
    },
    {
      src: "/images/monkey-tree.jpeg",
      alt: "Monkey in Tree",
      category: "Wildlife",
    },
    {
      src: "/images/small-brown-bird.jpeg",
      alt: "Small Brown Bird at Sunset",
      category: "Wildlife",
    },
    {
      src: "/images/cat-peeking.jpeg",
      alt: "Cat with Green Eyes Peeking Over Wall",
      category: "Wildlife",
    },
    {
      src: "/images/wildlife-cat-yellow-eyes.jpeg",
      alt: "Cat with Striking Yellow Eyes",
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
  ]

  const landscapeImages: GalleryImage[] = [
    {
      src: "/images/landscape-himalayan.jpeg",
      alt: "Himalayan Range at Sunset",
      category: "Landscape",
    },
    {
      src: "/images/landscape-mountains-bw.jpeg",
      alt: "Mountain Peaks in Black and White",
      category: "Landscape",
    },
    {
      src: "/images/landscape-ropeway.jpeg",
      alt: "Jakhu Ropeway at Sunset",
      category: "Landscape",
    },
    {
      src: "/images/adventure-paragliding.jpeg",
      alt: "Paragliding Over Mountains",
      category: "Landscape",
    },
  ]

  const spiritualImages: GalleryImage[] = [
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
      src: "/images/peace-lamppost.jpeg",
      alt: "Peace Lamppost with Birds",
      category: "Spiritual",
    },
  ]

  const celestialImages: GalleryImage[] = [
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
  ]

  const abstractImages: GalleryImage[] = [
    {
      src: "/images/abstract-pillar.jpeg",
      alt: "Orange Pillar Through Vines",
      category: "Abstract",
    },
    {
      src: "/images/golden-detail.jpeg",
      alt: "Golden Sculptural Detail",
      category: "Abstract",
    },
    {
      src: "/images/vintage-lightbulb.jpeg",
      alt: "Vintage Light Bulb with Visible Filament",
      category: "Abstract",
    },
  ]

  const architectureImages: GalleryImage[] = [
    {
      src: "/images/historical-dome.jpeg",
      alt: "Historical Dome Building",
      category: "Architecture",
    },
    {
      src: "/images/colorful-ceiling.jpeg",
      alt: "Colorful Ceiling with Flags",
      category: "Architecture",
    },
    {
      src: "/images/museum-illusions.jpeg",
      alt: "Museum of Illusions",
      category: "Architecture",
    },
    {
      src: "/images/architecture-historical-dome.jpeg",
      alt: "Historical Dome Through Trees",
      category: "Architecture",
    },
  ]

  const travelImages: GalleryImage[] = [
    {
      src: "/images/travel-air-india.jpeg",
      alt: "Air India Flight Through Clouds",
      category: "Travel",
    },
    {
      src: "/images/airplane-silhouette.jpeg",
      alt: "Airplane Silhouette at Sunset",
      category: "Travel",
    },
  ]

  const urbanImages: GalleryImage[] = [
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
    {
      src: "/images/security-camera-sign.jpeg",
      alt: "Security Camera with Green B Sign",
      category: "Urban Life",
    },
  ]

  const nightImages: GalleryImage[] = [
    {
      src: "/images/night-streetlamp.jpeg",
      alt: "Street Lamp Between Trees at Night",
      category: "Night",
    },
  ]

  // Combine all images for the "All" category
  const allImages: GalleryImage[] = [
    ...streetImages,
    ...wildlifeImages,
    ...landscapeImages,
    ...spiritualImages,
    ...celestialImages,
    ...abstractImages,
    ...architectureImages,
    ...travelImages,
    ...urbanImages,
    ...nightImages,
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 lg:pt-36 pb-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-brand-blue dark:text-brand-orange mb-4">Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my collection of photographs across various styles and subjects.
            </p>
          </div>

          {/* Updated Category Selection with Modern Design */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="group relative px-6 py-3 rounded-full border border-muted-foreground/20 bg-background/50 backdrop-blur-sm hover:border-brand-blue dark:hover:border-brand-orange hover:bg-brand-blue/5 dark:hover:bg-brand-orange/5 transition-all duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => {
                    // Handle category selection
                    const element = document.getElementById(`category-${category.id}`)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-brand-blue dark:group-hover:text-brand-orange transition-colors">
                    {category.name}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Sections */}
          <div className="space-y-16">
            <section id="category-all">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-orange mb-2">All Photography</h2>
                <p className="text-muted-foreground">Complete collection of my work</p>
              </div>
              <LightboxGallery images={allImages} masonry />
            </section>

            <section id="category-street">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-orange mb-2">Street Photography</h2>
                <p className="text-muted-foreground">Candid moments from urban life</p>
              </div>
              <LightboxGallery images={streetImages} masonry />
            </section>

            <section id="category-wildlife">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-orange mb-2">Wildlife</h2>
                <p className="text-muted-foreground">Nature and animals in their natural habitat</p>
              </div>
              <LightboxGallery images={wildlifeImages} masonry />
            </section>

            <section id="category-landscape">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-orange mb-2">Landscape</h2>
                <p className="text-muted-foreground">Scenic views and natural beauty</p>
              </div>
              <LightboxGallery images={landscapeImages} masonry />
            </section>

            <section id="category-spiritual">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-orange mb-2">Spiritual</h2>
                <p className="text-muted-foreground">Sacred places and spiritual practices</p>
              </div>
              <LightboxGallery images={spiritualImages} masonry />
            </section>

            <section id="category-celestial">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-orange mb-2">Celestial</h2>
                <p className="text-muted-foreground">Moon, stars, and astronomical phenomena</p>
              </div>
              <LightboxGallery images={celestialImages} masonry />
            </section>

            <section id="category-abstract">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-orange mb-2">Abstract</h2>
                <p className="text-muted-foreground">Creative compositions and artistic interpretations</p>
              </div>
              <LightboxGallery images={abstractImages} masonry />
            </section>

            <section id="category-architecture">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-orange mb-2">Architecture</h2>
                <p className="text-muted-foreground">Buildings, structures, and architectural details</p>
              </div>
              <LightboxGallery images={architectureImages} masonry />
            </section>

            <section id="category-travel">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-orange mb-2">Travel</h2>
                <p className="text-muted-foreground">Journey documentation and exploration</p>
              </div>
              <LightboxGallery images={travelImages} masonry />
            </section>

            <section id="category-urban">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-orange mb-2">Urban Life</h2>
                <p className="text-muted-foreground">City life and human interactions</p>
              </div>
              <LightboxGallery images={urbanImages} masonry />
            </section>

            <section id="category-night">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue dark:text-brand-orange mb-2">Night Photography</h2>
                <p className="text-muted-foreground">Low-light and evening captures</p>
              </div>
              <LightboxGallery images={nightImages} masonry />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
