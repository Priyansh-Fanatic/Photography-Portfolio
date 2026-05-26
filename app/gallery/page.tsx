"use client"

import { useState, useMemo, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LightboxGallery, type GalleryImage } from "@/components/lightbox-gallery"
import { Volume2, VolumeX, Play } from "lucide-react"

/* ══════ PHOTOGRAPHY ══════ */
const wildlife: GalleryImage[] = [
  { src: "/images/bird-wading.jpeg",           alt: "Wading Bird",                       category: "Wildlife"      },
  { src: "/images/bird-kingfisher.jpeg",        alt: "Kingfisher",                        category: "Wildlife"      },
  { src: "/images/birds-flying.jpeg",           alt: "Birds in Flight",                   category: "Wildlife"      },
  { src: "/images/bird-sandpiper.jpeg",         alt: "Sandpiper on Sand",                 category: "Wildlife"      },
  { src: "/images/bird-duck.jpeg",              alt: "Duck in Shallow Water",             category: "Wildlife"      },
  { src: "/images/bird-stilt.jpeg",             alt: "Stilt Bird in Water",               category: "Wildlife"      },
  { src: "/images/animal-dog.jpeg",             alt: "Dog Through Fence",                 category: "Wildlife"      },
  { src: "/images/elephants-riverside.jpeg",    alt: "Elephants by the River",            category: "Wildlife"      },
  { src: "/images/turtle-rock.jpeg",            alt: "Turtle Sunbathing on Rock",         category: "Wildlife"      },
  { src: "/images/green-bird-wire.jpeg",        alt: "Green Bird on Wire",                category: "Wildlife"      },
  { src: "/images/ibis-blue.jpeg",              alt: "Ibis with Blue Feathers",           category: "Wildlife"      },
  { src: "/images/duck-ripples.jpeg",           alt: "Duck Swimming in Ripples",          category: "Wildlife"      },
  { src: "/images/monkey-tree.jpeg",            alt: "Monkey in Tree",                    category: "Wildlife"      },
  { src: "/images/small-brown-bird.jpeg",       alt: "Small Brown Bird at Sunset",        category: "Wildlife"      },
  { src: "/images/cat-peeking.jpeg",            alt: "Cat with Green Eyes",               category: "Wildlife"      },
]
const street: GalleryImage[] = [
  { src: "/images/street-boy-yellow.jpeg",      alt: "Boy in Yellow",                     category: "Street"        },
  { src: "/images/street-bicycle.jpeg",         alt: "Bicycle Through Archway",           category: "Street"        },
  { src: "/images/street-resting.jpeg",         alt: "Resting Worker",                    category: "Street"        },
  { src: "/images/street-smoking.jpeg",         alt: "Man Smoking",                       category: "Street"        },
  { src: "/images/street-mirror.jpeg",          alt: "Reflection in Mirror",              category: "Street"        },
  { src: "/images/portrait-elder.jpeg",         alt: "Elder Man with Cap",                category: "Street"        },
  { src: "/images/portrait-woman.jpeg",         alt: "Woman in Traditional Dress",        category: "Street"        },
  { src: "/images/portrait-child.jpeg",         alt: "Child with Parent",                 category: "Street"        },
  { src: "/images/police-officer-phone.jpeg",   alt: "Police Officer Checking Phone",     category: "Street"        },
  { src: "/images/elderly-plaid-cap.jpeg",      alt: "Elderly Man with Plaid Cap",        category: "Street"        },
  { src: "/images/man-vest-portrait.jpeg",      alt: "Man in White Shirt and Brown Vest", category: "Street"        },
]
const landscape: GalleryImage[] = [
  { src: "/images/landscape-himalayan.jpeg",    alt: "Himalayan Range at Sunset",         category: "Landscape"     },
  { src: "/images/landscape-mountains-bw.jpeg", alt: "Mountain Peaks in Black and White", category: "Landscape"     },
  { src: "/images/landscape-ropeway.jpeg",      alt: "Jakhu Ropeway at Sunset",           category: "Landscape"     },
  { src: "/images/adventure-paragliding.jpeg",  alt: "Paragliding Over Mountains",        category: "Landscape"     },
]
const spiritual: GalleryImage[] = [
  { src: "/images/spiritual-shiva-sunset.jpeg", alt: "Shiva Statue at Sunset",            category: "Spiritual"     },
  { src: "/images/spiritual-shiva-palms.jpeg",  alt: "Shiva Statue with Palm Trees",      category: "Spiritual"     },
  { src: "/images/spiritual-shiva-wide.jpeg",   alt: "Shiva Statue Landscape View",       category: "Spiritual"     },
  { src: "/images/spiritual-prayer.jpeg",        alt: "Prayer Hands with Incense",         category: "Spiritual"     },
  { src: "/images/travel-yoga-sign.jpeg",        alt: "The Abode of Yoga Sign",            category: "Spiritual"     },
  { src: "/images/peace-lamppost.jpeg",          alt: "Peace Lamppost with Birds",         category: "Spiritual"     },
]
const celestial: GalleryImage[] = [
  { src: "/images/celestial-moon.jpeg",          alt: "Full Moon",                         category: "Celestial"     },
  { src: "/images/celestial-moon-sepia.jpeg",    alt: "Full Moon in Sepia",                category: "Celestial"     },
  { src: "/images/celestial-moon-clouds.jpeg",   alt: "Moon Through Clouds",               category: "Celestial"     },
]
const abstract: GalleryImage[] = [
  { src: "/images/abstract-pillar.jpeg",         alt: "Orange Pillar Through Vines",       category: "Abstract"      },
  { src: "/images/golden-detail.jpeg",           alt: "Golden Sculptural Detail",          category: "Abstract"      },
  { src: "/images/vintage-lightbulb.jpeg",       alt: "Vintage Light Bulb",                category: "Abstract"      },
]
const architecture: GalleryImage[] = [
  { src: "/images/historical-dome.jpeg",         alt: "Historical Dome Building",          category: "Architecture"  },
  { src: "/images/colorful-ceiling.jpeg",        alt: "Colorful Ceiling with Flags",       category: "Architecture"  },
  { src: "/images/museum-illusions.jpeg",        alt: "Museum of Illusions",               category: "Architecture"  },
]
const travel: GalleryImage[] = [
  { src: "/images/travel-air-india.jpeg",        alt: "Air India Flight Through Clouds",   category: "Travel"        },
  { src: "/images/airplane-silhouette.jpeg",     alt: "Airplane Silhouette at Sunset",     category: "Travel"        },
  { src: "/images/city-sunset-silhouette.jpeg",  alt: "City Silhouette at Sunset",         category: "Travel"        },
]
const urban: GalleryImage[] = [
  { src: "/images/mercedes-parking.jpeg",        alt: "Mercedes in Parking Lot",           category: "Urban Life"    },
  { src: "/images/man-5g-sign.jpeg",             alt: "Man with 5G Sign",                  category: "Urban Life"    },
  { src: "/images/security-camera-sign.jpeg",    alt: "Security Camera Sign",              category: "Urban Life"    },
]
const night: GalleryImage[] = [
  { src: "/images/night-streetlamp.jpeg",        alt: "Street Lamp at Night",              category: "Night"         },
]
const allPhotos = [...street, ...wildlife, ...landscape, ...spiritual, ...celestial, ...abstract, ...architecture, ...travel, ...urban, ...night]

/* ══════ DESIGNS ══════ */
const designs: GalleryImage[] = [
  { src: "/images/graphic-seller.jpeg",          alt: "Seller — Brand Identity Poster",    category: "Branding"   },
  { src: "/images/graphic-machine-magnets.jpeg", alt: "Machine Magnets — Event Banner",    category: "Event"      },
  { src: "/images/graphic-air-india.jpeg",       alt: "Air India A320 — Typography",       category: "Editorial"  },
  { src: "/images/graphic-time-stops.jpeg",      alt: "Time Stops For No One",             category: "Album Art"  },
  { src: "/images/graphic-star-gazing.jpeg",     alt: "Star Gazing in Chopta",             category: "Editorial"  },
  { src: "/images/graphic-bird.jpeg",            alt: "Udyog Darshan — Editorial",         category: "Editorial"  },
  { src: "/images/graphic-chhat-puja.jpeg",      alt: "Chhath Puja — Festival Poster",     category: "Festival"   },
  { src: "/images/graphic-diwali.jpeg",          alt: "Diwali Celebration Design",         category: "Festival"   },
  { src: "/images/graphic-game-a-code.jpeg",     alt: "Game-a-Code — Tech Event",          category: "Event"      },
  { src: "/images/graphic-himalayan-range.jpeg", alt: "The Himalayan Range",               category: "Editorial"  },
  { src: "/images/graphic-tech-tatva.jpeg",      alt: "Tech-Tatva — Youth Festival",       category: "Festival"   },
  { src: "/images/graphic-live-post.jpeg",       alt: "We Are Live — Digital Launch",      category: "Digital"    },
]

/* ══════ VIDEOS ══════ */
const videos = [
  { id: "cinematic_reel", title: "Cinematic Reel",  label: "Main Showreel", url: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779777768/cinematic_reel_2_an4rs7.mp4",  thumb: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779777768/cinematic_reel_2_an4rs7.jpg"  },
  { id: "cinematic_edit", title: "Cinematic Edit",  label: "Travel Film",   url: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776719/cinematic_edit_srkvgh.mp4",   thumb: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776719/cinematic_edit_srkvgh.jpg"   },
  { id: "instagram_reel", title: "Instagram Reel",  label: "Short-Form",    url: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776715/instagram_reel_zvtk7g.mp4",   thumb: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776715/instagram_reel_zvtk7g.jpg"   },
  { id: "launch_video",   title: "Launch Video",    label: "Event",         url: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776714/launch_video_gzzdpm.mp4",    thumb: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776714/launch_video_gzzdpm.jpg"    },
  { id: "specs_video",    title: "Specs Video",     label: "Commercial",    url: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776722/specs_video_fmyccj.mp4",    thumb: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776722/specs_video_fmyccj.jpg"    },
  { id: "short_clip",     title: "Short Clip",      label: "Reel",          url: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776712/short_clip_l2fe3s.mp4",    thumb: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776712/short_clip_l2fe3s.jpg"    },
]

/* ══════ FILTER CONFIG ══════ */
const PHOTO_FILTERS = [
  { id: "all",          label: "All",          count: allPhotos.length    },
  { id: "street",       label: "Street",       count: street.length       },
  { id: "wildlife",     label: "Wildlife",     count: wildlife.length     },
  { id: "landscape",    label: "Landscape",    count: landscape.length    },
  { id: "spiritual",    label: "Spiritual",    count: spiritual.length    },
  { id: "celestial",    label: "Celestial",    count: celestial.length    },
  { id: "abstract",     label: "Abstract",     count: abstract.length     },
  { id: "architecture", label: "Architecture", count: architecture.length },
  { id: "travel",       label: "Travel",       count: travel.length       },
  { id: "urban",        label: "Urban Life",   count: urban.length        },
  { id: "night",        label: "Night",        count: night.length        },
]
const photoMap: Record<string, GalleryImage[]> = {
  all: allPhotos, street, wildlife, landscape, spiritual, celestial, abstract, architecture, travel, urban, night,
}

const SECTIONS = [
  { id: "photos",  label: "Photography",    count: allPhotos.length },
  { id: "designs", label: "Graphic Design", count: designs.length   },
  { id: "videos",  label: "Video Editing",  count: videos.length    },
]

/* ══════ HEIGHTS (must match CSS values exactly) ══════
  header     : h-24  = 96px
  section bar: py-2 + text ≈ 40px
  filter bar : py-3 + pill ≈ 52px
══════════════════════════════════════════════════════ */
const H_HEADER  = 96
const H_SECTION = 40
const H_FILTER  = 52

/* ══════ VIDEO CARD ══════ */
function VideoCard({ vid, onClick }: { vid: typeof videos[0]; onClick: () => void }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [soundOn, setSoundOn] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-[#141414] border border-white/8 cursor-pointer aspect-video"
      onMouseEnter={() => { ref.current?.play().catch(() => {}); if (ref.current) ref.current.muted = false; setSoundOn(true) }}
      onMouseLeave={() => { if (ref.current) ref.current.muted = true; setSoundOn(false) }}
      onClick={onClick}
    >
      <video ref={ref} src={vid.url} poster={vid.thumb} autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-300 pointer-events-none ${soundOn ? "bg-brand-orange border-brand-orange text-white" : "bg-black/50 border-white/10 text-white/40"}`}>
        {soundOn ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
      </div>
      <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 pointer-events-none ${soundOn ? "bg-brand-orange text-white" : "bg-black/50 backdrop-blur-sm text-white/60 border border-white/10"}`}>
        {vid.label}
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <Play className="h-5 w-5 text-white fill-white" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
        <p className="text-white font-black text-sm leading-tight">{vid.title}</p>
      </div>
      <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 pointer-events-none ${soundOn ? "border-brand-orange/70" : "border-transparent"}`} />
    </div>
  )
}

/* ══════ PAGE ══════ */
export default function GalleryPage() {
  const [section,     setSection]     = useState("photos")
  const [photoFilter, setPhotoFilter] = useState("all")
  const [modalVideo,  setModalVideo]  = useState<typeof videos[0] | null>(null)

  const photos = useMemo(() => photoMap[photoFilter] ?? allPhotos, [photoFilter])

  const openModal  = (vid: typeof videos[0]) => { setModalVideo(vid);  document.body.style.overflow = "hidden" }
  const closeModal = ()                       => { setModalVideo(null); document.body.style.overflow = "" }

  const showFilterBar = section === "photos"

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Video modal ── */}
      {modalVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative w-full max-w-5xl" onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute -top-12 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors font-bold text-sm">
              Close <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-lg">&times;</span>
            </button>
            <div className="mb-3">
              <span className="text-brand-orange text-[10px] font-black uppercase tracking-widest">{modalVideo.label}</span>
              <h3 className="text-white text-xl font-black">{modalVideo.title}</h3>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
              <video key={modalVideo.id} src={modalVideo.url} poster={modalVideo.thumb} controls autoPlay className="w-full h-full object-contain" />
            </div>
            <p className="text-white/30 text-xs mt-3 text-center">Click outside or press Esc to close</p>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════
          SCROLLABLE CONTENT — pushed below fixed bars
      ══════════════════════════════════════════════════ */}
      <main style={{ paddingTop: H_HEADER }}>

        {/* Section tab bar — scrolls with the page */}
        <div className="bg-[#0D0D0D] border-b border-white/10">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16 flex items-center overflow-x-auto scrollbar-hide">
            {SECTIONS.map(s => (
              <button
                key={s.id}
                onClick={() => setSection(s.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-200 flex-shrink-0 ${
                  section === s.id ? "text-white" : "text-white/35 hover:text-white/65"
                }`}
              >
                {s.label}
                <span className={`text-[9px] font-bold ${section === s.id ? "text-brand-orange" : "text-white/25"}`}>{s.count}</span>
                {section === s.id && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange" />}
              </button>
            ))}
          </div>
        </div>

        {/* Photo filter pills — scrolls with the page */}
        {showFilterBar && (
          <div className="bg-background/97 backdrop-blur-md border-b border-border">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
              <div className="flex items-center gap-2 py-2.5 overflow-x-auto scrollbar-hide">
                {PHOTO_FILTERS.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setPhotoFilter(f.id)}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-200 ${
                      photoFilter === f.id
                        ? "bg-brand-orange text-white shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-brand-orange/10 hover:text-brand-orange"
                    }`}
                  >
                    {f.label}
                    <span className={`text-[9px] ${photoFilter === f.id ? "text-white/70" : "text-muted-foreground/60"}`}>{f.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── PHOTOGRAPHY ── */}
        {section === "photos" && (
          <>
            {/* Hero banner — scrolls away, tabs stay pinned */}
            <div className="bg-[#0D0D0D] px-6 lg:px-16 py-12">
              <div className="max-w-[1600px] mx-auto">
                <span className="inline-flex items-center gap-2 text-brand-orange text-[11px] font-black uppercase tracking-[0.25em] mb-5">
                  <span className="w-6 h-px bg-brand-orange" /> Photography
                </span>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.92] tracking-tight">
                    The <span className="text-brand-orange">Gallery</span>
                  </h1>
                  <p className="text-white/35 text-sm max-w-xs leading-relaxed lg:text-right">
                    {allPhotos.length} photographs — street, wildlife, landscape & more.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 lg:px-8 pt-8 pb-24">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground text-sm">
                  Showing <span className="font-bold text-foreground">{photos.length}</span> photos
                  {photoFilter !== "all" && <> in <span className="font-bold text-brand-orange">{PHOTO_FILTERS.find(f => f.id === photoFilter)?.label}</span></>}
                </p>
                {photoFilter !== "all" && (
                  <button onClick={() => setPhotoFilter("all")} className="text-xs font-bold text-brand-orange hover:underline">
                    Clear ×
                  </button>
                )}
              </div>
              <LightboxGallery images={photos} masonry />
            </div>
          </>
        )}

        {/* ── GRAPHIC DESIGN ── */}
        {section === "designs" && (
          <>
            <div className="bg-[#0D0D0D] px-6 lg:px-16 py-12">
              <div className="max-w-[1600px] mx-auto">
                <span className="inline-flex items-center gap-2 text-brand-orange text-[11px] font-black uppercase tracking-[0.25em] mb-5">
                  <span className="w-6 h-px bg-brand-orange" /> Graphic Design
                </span>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.92] tracking-tight">
                    Design <span className="text-brand-orange">Work</span>
                  </h1>
                  <p className="text-white/35 text-sm max-w-xs leading-relaxed lg:text-right">
                    {designs.length} posters, brand identities & event graphics.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-[1600px] mx-auto px-4 lg:px-8 pt-8 pb-24">
              <LightboxGallery images={designs} masonry />
            </div>
          </>
        )}

        {/* ── VIDEO EDITING ── */}
        {section === "videos" && (
          <div className="bg-[#0D0D0D] min-h-[80vh]">
            <div className="px-6 lg:px-16 py-12">
              <div className="max-w-[1600px] mx-auto">
                <span className="inline-flex items-center gap-2 text-brand-orange text-[11px] font-black uppercase tracking-[0.25em] mb-5">
                  <span className="w-6 h-px bg-brand-orange" /> Video Editing
                </span>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.92] tracking-tight">
                    Video <span className="text-brand-orange">Reels</span>
                  </h1>
                  <p className="text-white/35 text-sm max-w-xs leading-relaxed lg:text-right">
                    {videos.length} cinematic edits — hover to hear, click to watch.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-[1600px] mx-auto px-4 lg:px-8 pb-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {videos.map(vid => (
                  <VideoCard key={vid.id} vid={vid} onClick={() => openModal(vid)} />
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  )
}
