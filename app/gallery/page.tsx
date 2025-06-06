import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LightboxGallery, type GalleryImage } from "@/components/lightbox-gallery"

export default function GalleryPage() {
  // Update the categories array to include a new "Night" category
  const categories = [
    { id: "all", name: "All" },
    { id: "street", name: "Street" },
    { id: "wildlife", name: "Wildlife" },
    { id: "landscape", name: "Landscape" },
    { id: "spiritual", name: "Spiritual" },
    { id: "celestial", name: "Celestial" },
    { id: "abstract", name: "Abstract" },
    { id: "architecture", name: "Architecture" },
    { id: "travel", name: "Travel" },
    { id: "urban", name: "Urban Life" },
    { id: "night", name: "Night" },
  ]

  // Update the wildlifeImages array to include new wildlife images
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
  ]

  // Update the streetImages array
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
      src: "/images/police-officer-phone.jpeg",
      alt: "Police Officer Checking Phone",
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
  ]

  // Update the landscapeImages array
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

  // Add new spiritual images category
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

  // Add new celestial images category
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
  ]

  // Add new abstract images category
  const abstractImages: GalleryImage[] = [
    {
      src: "/images/abstract-pillar.jpeg",
      alt: "Orange Pillar Through Vines",
      category: "Abstract",
    },
    {
      src: "/images/travel-air-india.jpeg",
      alt: "Air India Flight Through Clouds",
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

  // Add new architecture images category
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
  ]

  // Add new travel images category
  const travelImages: GalleryImage[] = [
    {
      src: "/images/city-sunset-silhouette.jpeg",
      alt: "City Silhouette at Sunset",
      category: "Travel",
    },
    {
      src: "/images/travel-air-india.jpeg",
      alt: "Air India Flight Through Clouds",
      category: "Travel",
    },
    {
      src: "/images/travel-yoga-sign.jpeg",
      alt: "The Abode of Yoga Sign",
      category: "Travel",
    },
    {
      src: "/images/airplane-silhouette.jpeg",
      alt: "Airplane Silhouette at Sunset",
      category: "Travel",
    },
  ]

  // Add new urban life images category
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
      src: "/images/museum-illusions.jpeg",
      alt: "Museum of Illusions",
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

  // Create a new nightImages array
  const nightImages: GalleryImage[] = [
    {
      src: "/images/night-streetlamp.jpeg",
      alt: "Street Lamp Between Trees at Night",
      category: "Night",
    },
    {
      src: "/images/vintage-lightbulb.jpeg",
      alt: "Vintage Light Bulb with Visible Filament",
      category: "Night",
    },
    {
      src: "/images/celestial-moon.jpeg",
      alt: "Full Moon",
      category: "Night",
    },
    {
      src: "/images/celestial-moon-sepia.jpeg",
      alt: "Full Moon in Sepia",
      category: "Night",
    },
    {
      src: "/images/celestial-moon-clouds.jpeg",
      alt: "Moon Through Clouds",
      category: "Night",
    },
    {
      src: "/images/city-sunset-silhouette.jpeg",
      alt: "City Silhouette at Sunset",
      category: "Night",
    },
  ]

  // Update the allImages array to include ALL images from all categories
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

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="mx-auto flex w-full max-w-3xl justify-between overflow-x-auto">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-12">
              <LightboxGallery images={allImages} masonry />
            </TabsContent>

            <TabsContent value="street" className="mt-12">
              <LightboxGallery images={streetImages} masonry />
            </TabsContent>

            <TabsContent value="wildlife" className="mt-12">
              <LightboxGallery images={wildlifeImages} masonry />
            </TabsContent>

            <TabsContent value="landscape" className="mt-12">
              <LightboxGallery images={landscapeImages} masonry />
            </TabsContent>

            <TabsContent value="spiritual" className="mt-12">
              <LightboxGallery images={spiritualImages} masonry />
            </TabsContent>

            <TabsContent value="celestial" className="mt-12">
              <LightboxGallery images={celestialImages} masonry />
            </TabsContent>

            <TabsContent value="abstract" className="mt-12">
              <LightboxGallery images={abstractImages} masonry />
            </TabsContent>

            <TabsContent value="architecture" className="mt-12">
              <LightboxGallery images={architectureImages} masonry />
            </TabsContent>

            <TabsContent value="travel" className="mt-12">
              <LightboxGallery images={travelImages} masonry />
            </TabsContent>

            <TabsContent value="urban" className="mt-12">
              <LightboxGallery images={urbanImages} masonry />
            </TabsContent>

            <TabsContent value="night" className="mt-12">
              <LightboxGallery images={nightImages} masonry />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
