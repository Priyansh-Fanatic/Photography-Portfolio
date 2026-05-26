"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Camera, Palette, Video, Star, Award, Layers, Volume2, VolumeX } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LightboxGallery, type GalleryImage } from "@/components/lightbox-gallery"
import { ContactForm } from "@/components/contact-form"

export default function Home() {

  /* ─── Photography gallery ─── */
  const featuredImages: GalleryImage[] = [
    { src: "/images/landscape-mountains-bw.jpeg",  alt: "Mountain Peaks in Black and White", category: "Landscape" },
    { src: "/images/elephants-riverside.jpeg",      alt: "Elephants by the River",            category: "Wildlife"  },
    { src: "/images/spiritual-shiva-sunset.jpeg",   alt: "Shiva Statue at Sunset",            category: "Spiritual" },
    { src: "/images/vintage-lightbulb.jpeg",        alt: "Vintage Light Bulb",                category: "Abstract"  },
    { src: "/images/cat-peeking.jpeg",              alt: "Cat with Green Eyes",               category: "Wildlife"  },
    { src: "/images/man-vest-portrait.jpeg",        alt: "Man in Brown Vest",                 category: "Street"    },
  ]

  /* ─── Graphic Design work ─── */
  const graphicDesigns = [
    {
      title: "Seller.",
      description: "Bold brand identity & promotional poster with dynamic 3D elements and strong typographic hierarchy.",
      image: "/images/graphic-seller.jpeg",
      fallback: "/images/museum-illusions.jpeg",
      tags: ["Branding", "Poster Design", "3D"],
    },
    {
      title: "Machine Magnets",
      description: "Event banner for a core team reveal — editorial bold typography meets industrial aesthetic.",
      image: "/images/graphic-machine-magnets.jpeg",
      fallback: "/images/street-mirror.jpeg",
      tags: ["Event Design", "Typography"],
    },
    {
      title: "Air India A320",
      description: "Cinematic aviation poster blending Hindi calligraphy with vintage travel photography.",
      image: "/images/graphic-air-india.jpeg",
      fallback: "/images/travel-air-india.jpeg",
      tags: ["Typography", "Editorial"],
    },
    {
      title: "Time Stops For No One",
      description: "Motion-blur album cover art capturing the feeling of time slipping through your fingers.",
      image: "/images/graphic-time-stops.jpeg",
      fallback: "/images/street-smoking.jpeg",
      tags: ["Album Art", "Cinematic"],
    },
    {
      title: "Star Gazing in Chopta",
      description: "Astrophotography meets bold editorial typography — a night sky narrative in Chopta.",
      image: "/images/graphic-star-gazing.jpeg",
      fallback: "/images/celestial-moon.jpeg",
      tags: ["Night Sky", "Typography"],
    },
    {
      title: "Udyog Darshan",
      description: "Editorial poster exploring commercial concepts and visual metaphors.",
      image: "/images/graphic-bird.jpeg",
      fallback: "/images/street-boy-yellow.jpeg",
      tags: ["Editorial", "Concept Art"],
    },
    {
      title: "Chhath Puja",
      description: "Festive poster celebrating the traditional Chhath Puja with cultural elements.",
      image: "/images/graphic-chhat-puja.jpeg",
      fallback: "/images/portrait-woman.jpeg",
      tags: ["Festival", "Culture"],
    },
    {
      title: "Diwali Celebration",
      description: "Vibrant and celebratory design for the festival of lights.",
      image: "/images/graphic-diwali.jpeg",
      fallback: "/images/cat-peeking.jpeg",
      tags: ["Festival", "Typography"],
    },
    {
      title: "Game-a-Code",
      description: "Dynamic promotional graphic for a tech and coding event.",
      image: "/images/graphic-game-a-code.jpeg",
      fallback: "/images/museum-illusions.jpeg",
      tags: ["Tech Event", "Dynamic"],
    },
    {
      title: "The Himalayan Range",
      description: "Aesthetic typographic poster highlighting the beauty of the Himalayas.",
      image: "/images/graphic-himalayan-range.jpeg",
      fallback: "/images/landscape-himalayan.jpeg",
      tags: ["Landscape", "Editorial"],
    },
    {
      title: "Tech-Tatva",
      description: "High-energy youth festival poster with bold typography and imagery.",
      image: "/images/graphic-tech-tatva.jpeg",
      fallback: "/images/street-mirror.jpeg",
      tags: ["Festival", "High Energy"],
    },
    {
      title: "We Are Live",
      description: "Clean and eye-catching promotional post for a digital launch.",
      image: "/images/graphic-live-post.jpeg",
      fallback: "/images/vintage-lightbulb.jpeg",
      tags: ["Digital", "Promo"],
    },
  ]

  /* ─── Projects ─── */
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

  /* ─── Skills marquee ─── */
  const skills = [
    "Street Photography", "Wildlife", "Graphic Design", "Video Editing",
    "Poster Design", "Album Art", "Brand Identity", "Astrophotography",
    "Motion Graphics", "Cinematic Edits", "Spiritual", "Travel",
  ]

  /* ─── Video showcase
   *  NOTE: f_auto is intentionally removed from video URLs.
   *  f_auto on videos changes the container format (e.g. mp4→webm) which breaks
   *  HTTP range requests → causes 416 "Range Not Satisfiable" errors in browsers.
   *  Use q_auto only for quality optimisation without format-switching.
   * ────────────────────────────────────────────────────────────── */
  const videos = [
    {
      id: "cinematic_reel",
      title: "Cinematic Reel",
      label: "Main Showreel",
      url:   "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779777768/cinematic_reel_2_an4rs7.mp4",
      thumb: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779777768/cinematic_reel_2_an4rs7.jpg",
    },
    {
      id: "cinematic_edit",
      title: "Cinematic Edit",
      label: "Travel Film",
      url:   "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776719/cinematic_edit_srkvgh.mp4",
      thumb: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776719/cinematic_edit_srkvgh.jpg",
    },
    {
      id: "instagram_reel",
      title: "Instagram Reel",
      label: "Short-Form",
      url:   "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776715/instagram_reel_zvtk7g.mp4",
      thumb: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776715/instagram_reel_zvtk7g.jpg",
    },
    {
      id: "launch_video",
      title: "Launch Video",
      label: "Event",
      url:   "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776714/launch_video_gzzdpm.mp4",
      thumb: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776714/launch_video_gzzdpm.jpg",
    },
    {
      id: "specs_video",
      title: "Specs Video",
      label: "Commercial",
      url:   "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776722/specs_video_fmyccj.mp4",
      thumb: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776722/specs_video_fmyccj.jpg",
    },
    {
      id: "short_clip",
      title: "Short Clip",
      label: "Reel",
      url:   "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776712/short_clip_l2fe3s.mp4",
      thumb: "https://res.cloudinary.com/drh7yrowp/video/upload/q_auto/v1779776712/short_clip_l2fe3s.jpg",
    },
  ]

  // Video grid state
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [soundOn, setSoundOn] = useState<number | null>(null)
  const [modalVideo, setModalVideo] = useState<typeof videos[0] | null>(null)

  // Hover → unmute (video keeps playing always, never paused)
  const handleMouseEnter = (i: number) => {
    const v = videoRefs.current[i]
    if (!v) return
    v.play().catch(() => {})
    v.muted = false
    setSoundOn(i)
  }

  // Leave → just mute, video KEEPS PLAYING
  const handleMouseLeave = (i: number) => {
    const v = videoRefs.current[i]
    if (!v) return
    v.muted = true
    setSoundOn(null)
  }

  // Click → open modal
  const openModal = (vid: typeof videos[0]) => {
    setModalVideo(vid)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalVideo(null)
    document.body.style.overflow = ""
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Video Modal ─────────────────────────────────────────────────────── */}
      {modalVideo && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors font-bold text-sm"
            >
              <span>Close</span>
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-lg leading-none">&times;</span>
            </button>

            {/* Title */}
            <div className="mb-3">
              <span className="text-brand-orange text-[10px] font-black uppercase tracking-widest">{modalVideo.label}</span>
              <h3 className="text-white text-xl font-black">{modalVideo.title}</h3>
            </div>

            {/* Video player */}
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
              <video
                key={modalVideo.id}
                src={modalVideo.url}
                poster={modalVideo.thumb}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

            {/* Hint */}
            <p className="text-white/30 text-xs mt-3 text-center">Click outside or press Esc to close</p>
          </div>
        </div>
      )}

      {/* Escape key handler */}
      {modalVideo && (
        <EscapeHandler onEscape={closeModal} />
      )}

      <main>

        {/* ════════════════════════════════════
            HERO
        ════════════════════════════════════ */}
        <section className="relative h-screen overflow-hidden">
          <Image
            src="/images/landscape-mountains-bw.jpeg"
            alt="Hero image"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="container relative z-10 flex h-full flex-col items-start justify-center">
            <span className="section-label mb-8 animate-fade-in" style={{ color: "rgba(255,255,255,0.55)" }}>
              Welcome to my lens
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight text-shadow max-w-4xl animate-fade-up">
              Visual<br /><span className="text-brand-orange">Storyteller</span>
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg text-white/65 animate-fade-up delay-200 font-medium tracking-wide">
              Photographer &nbsp;·&nbsp; Graphic Designer &nbsp;·&nbsp; Video Editor
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
              <Button size="lg" asChild className="bg-brand-orange hover:bg-brand-orange-dark text-white border-0 rounded-full px-8 font-bold transition-all duration-300 hover:scale-105">
                <Link href="/gallery">Explore Gallery</Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="border-white/35 text-white bg-white/10 hover:bg-white/20 hover:border-white/50 rounded-full px-8 font-bold backdrop-blur-sm transition-all duration-300">
                <Link href="#graphic-design" className="inline-flex items-center gap-2">
                  View Design Work <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
              <span className="text-white/35 text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
              <div className="w-px h-8 bg-white/25" />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            SKILLS MARQUEE STRIP
        ════════════════════════════════════ */}
        <div className="bg-brand-orange overflow-hidden py-3 border-y border-brand-orange-dark">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((skill, i) => (
              <span key={i} className="inline-flex items-center gap-4 text-white text-[11px] font-black uppercase tracking-[0.2em] px-6">
                {skill}
                <span className="w-1 h-1 rounded-full bg-white/50 inline-block flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════
            WHAT I DO — 3 PILLARS
        ════════════════════════════════════ */}
        <section className="bg-[#0D0D0D] py-24 overflow-hidden">
          <div className="px-6 lg:px-16 max-w-[1600px] mx-auto">

            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <span className="inline-flex items-center gap-2 text-brand-orange text-[11px] font-black uppercase tracking-[0.25em] mb-6">
                  <span className="w-6 h-px bg-brand-orange" /> What I Do
                </span>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.92] tracking-tight">
                  Three crafts.<br />
                  <span className="text-brand-orange">One vision.</span>
                </h2>
              </div>
              <p className="text-white/35 text-sm max-w-xs leading-relaxed md:text-right md:mb-1">
                Photography, design and cinema — the three tools I use to shape stories that leave a mark.
              </p>
            </div>

            {/* Three tall cards */}
            <div className="grid md:grid-cols-3 gap-3">
              {[
                {
                  num: "01",
                  icon: <Camera className="h-5 w-5" />,
                  title: "Photography",
                  sub: "Street · Wildlife · Spiritual · Travel",
                  desc: "Every frame is a frozen emotion. I shoot the untamed, the quiet, and the raw — one shutter click at a time.",
                  href: "/gallery",
                  cta: "Explore Gallery",
                  bg: "/images/landscape-mountains-bw.jpeg",
                },
                {
                  num: "02",
                  icon: <Palette className="h-5 w-5" />,
                  title: "Graphic Design",
                  sub: "Posters · Branding · Event Visuals",
                  desc: "Bold, unapologetic design work — from editorial posters to full brand identities that command attention.",
                  href: "#graphic-design",
                  cta: "See Designs",
                  bg: "/images/graphic-seller.jpeg",
                },
                {
                  num: "03",
                  icon: <Video className="h-5 w-5" />,
                  title: "Video Editing",
                  sub: "Reels · Cinematic Films · Events",
                  desc: "Stories told frame by frame — cinematic colour grading, tight cuts, and sound design that hits hard.",
                  href: "#video-editing",
                  cta: "Watch Reels",
                  bg: "/images/landscape-himalayan.jpeg",
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-[4/5] block"
                >
                  {/* Background image */}
                  <Image
                    src={item.bg}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Dark overlay — lighter on hover */}
                  <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-all duration-500" />

                  {/* Orange bottom line — grows on hover */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-brand-orange group-hover:w-full transition-all duration-500 ease-out" />

                  {/* Content */}
                  <div className="absolute inset-0 p-7 flex flex-col justify-between">

                    {/* Top row — number + icon */}
                    <div className="flex items-start justify-between">
                      <span className="text-[5rem] font-black leading-none text-white/10 group-hover:text-white/20 transition-colors duration-500 select-none">
                        {item.num}
                      </span>
                      <div className="p-2.5 rounded-xl bg-white/10 text-white backdrop-blur-sm border border-white/10 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
                        {item.icon}
                      </div>
                    </div>

                    {/* Bottom — text */}
                    <div>
                      <span className="text-brand-orange text-[10px] font-black uppercase tracking-widest mb-2 block">
                        {item.sub}
                      </span>
                      <h3 className="text-3xl font-black text-white mb-3 leading-tight">{item.title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                        {item.desc}
                      </p>
                      <span className="inline-flex items-center gap-2 text-white font-bold text-sm border-b border-white/30 pb-0.5 group-hover:border-brand-orange group-hover:text-brand-orange transition-all duration-300">
                        {item.cta} <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>


        {/* ════════════════════════════════════
            PHOTOGRAPHY
        ════════════════════════════════════ */}
        <section id="photography" className="py-24 bg-muted/40">
          <div className="container">
            <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="section-label mb-5">Photography</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-5">Through<br />the Lens</h2>
              </div>
              <p className="text-muted-foreground max-w-xs text-sm leading-relaxed md:text-right">
                Raw emotion, untamed wildlife, and the quiet spirituality of India — captured one frame at a time.
              </p>
            </div>
            <LightboxGallery images={featuredImages} />
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white rounded-full px-8 font-bold transition-all duration-300">
                <Link href="/gallery" className="inline-flex items-center gap-2">View Full Gallery <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            GRAPHIC DESIGN
        ════════════════════════════════════ */}
        <section id="graphic-design" className="py-24">
          <div className="px-6 lg:px-16 max-w-[1600px] mx-auto">
            <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="section-label mb-5">Graphic Design</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-5">Design that<br />Speaks Loud</h2>
              </div>
              <p className="text-muted-foreground max-w-xs text-sm leading-relaxed md:text-right">
                Posters, brand identities, event banners and editorial compositions — bold and unapologetic.
              </p>
            </div>

            {/* Masonry Layout for all images */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {graphicDesigns.map((item, idx) => (
                <DesignCard key={idx} item={item} />
              ))}
            </div>

            {/* View More */}
            <div className="mt-10 text-center">
              <Button asChild variant="outline" size="lg" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white rounded-full px-8 font-bold transition-all duration-300">
                <Link href="/gallery" className="inline-flex items-center gap-2">View More Designs <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
              {[
                { num: "50+", label: "Designs Created" },
                { num: "3+",  label: "Years Designing"  },
                { num: "15+", label: "Clients Served"   },
                { num: "∞",   label: "Ideas in Queue"   },
              ].map((s, i) => (
                <div key={i} className="bg-card px-4 py-8 text-center hover:bg-brand-orange/5 transition-colors duration-300">
                  <div className="text-3xl md:text-4xl font-black text-brand-orange mb-1">{s.num}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            VIDEO EDITING — Auto-play showcase
        ════════════════════════════════════ */}
        <section id="video-editing" className="py-24 bg-[#0D0D0D]">
          <div className="container">
            <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="section-label mb-5" style={{ color: "#FF6B0E" }}>Video Editing</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-5 text-white">Frames that<br />Tell Stories</h2>
              </div>
              <p className="text-white/45 max-w-xs text-sm leading-relaxed md:text-right">
                Click or hover any clip to hear it.
              </p>
            </div>

            {/* ── Autoplay video grid ──────────────────────────────────────────────
                • All videos autoplay muted (browser requirement for autoplay)
                • mouseEnter → play + unmute  |  mouseLeave → mute
                • Fixed aspect-video ratio grid — no layout shift
                • Cloudinary JPG thumbnails as poster frames
            ───────────────────────────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
              {videos.map((vid, i) => (
                <div
                  key={vid.id}
                  className="group relative overflow-hidden rounded-2xl bg-[#141414] border border-white/8 cursor-pointer aspect-video"
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={() => handleMouseLeave(i)}
                  onClick={() => openModal(vid)}
                >
                  {/* Video — autoplay muted, loop */}
                  <video
                    ref={el => { videoRefs.current[i] = el }}
                    src={vid.url}
                    poster={vid.thumb}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Sound icon — top right */}
                  <div className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-300 pointer-events-none ${
                    soundOn === i
                      ? "bg-brand-orange border-brand-orange text-white"
                      : "bg-black/50 border-white/10 text-white/40"
                  }`}>
                    {soundOn === i ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
                  </div>

                  {/* Label — top left */}
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 pointer-events-none ${
                    soundOn === i ? "bg-brand-orange text-white" : "bg-black/50 backdrop-blur-sm text-white/60 border border-white/10"
                  }`}>
                    {vid.label}
                  </div>

                  {/* Bottom — title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                    <p className="text-white font-black text-sm leading-tight">{vid.title}</p>
                    <p className={`text-brand-orange text-[10px] font-bold mt-0.5 transition-all duration-300 ${
                      soundOn === i ? "opacity-100" : "opacity-0"
                    }`}>&#9834; Audio on</p>
                  </div>

                  {/* Expand icon — center on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                  </div>

                  {/* Orange border on hover */}
                  <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 pointer-events-none ${
                    soundOn === i ? "border-brand-orange/70" : "border-transparent group-hover:border-white/20"
                  }`} />
                </div>
              ))}
            </div>

            <p className="text-center text-white/25 text-[11px] mb-10 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
              <VolumeX className="h-3 w-3" /> Hover any clip to hear audio
            </p>

            {/* Capabilities */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { icon: <Layers className="h-5 w-5" />, title: "Cinematic Edits",  desc: "Travel films & documentaries cut with colour grading, sound design and pacing that creates pure emotion." },
                { icon: <Star className="h-5 w-5" />,   title: "Short-Form Reels", desc: "Instagram & YouTube Shorts — fast-paced, trend-aware edits that stop the scroll instantly."             },
                { icon: <Award className="h-5 w-5" />,  title: "Event Coverage",   desc: "Highlight films for college fests, cultural events & brand activations with professional polish."          },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-brand-orange/40 hover:bg-brand-orange/5 transition-all duration-300 group">
                  <div className="inline-flex p-2.5 rounded-lg bg-brand-orange/12 text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">{item.icon}</div>
                  <h3 className="text-white text-lg font-black mb-2">{item.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Tools — removed Filmora, LumaFusion, DaVinci Resolve */}
            <div className="flex flex-wrap gap-2">
              {["Premiere Pro", "After Effects", "CapCut"].map(tool => (
                <span key={tool} className="px-4 py-2 rounded-full border border-white/10 text-white/45 text-sm font-medium hover:border-brand-orange/40 hover:text-brand-orange transition-colors duration-200 cursor-default">{tool}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            PROJECTS
        ════════════════════════════════════ */}
        <section id="projects" className="py-24 bg-muted/40">
          <div className="container">
            <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="section-label mb-5">Projects</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-5">Featured<br />Collections</h2>
              </div>
              <p className="text-muted-foreground max-w-xs text-sm leading-relaxed md:text-right">
                Thematic photography series — each collection a cohesive visual narrative.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {projects.map((project, i) => (
                <Link key={i} href={project.link} className="group block">
                  <div className="overflow-hidden rounded-2xl mb-4 border border-border aspect-[4/3] bg-muted">
                    <Image src={project.image} alt={project.title} width={600} height={450} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-black mb-1 group-hover:text-brand-orange transition-colors duration-300">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <div className="mt-0.5 w-9 h-9 rounded-full border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
                      <ArrowRight className="h-4 w-4 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white rounded-full px-8 font-bold transition-all duration-300">
                <Link href="/projects" className="inline-flex items-center gap-2">View All Projects <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            ABOUT
        ════════════════════════════════════ */}
        <section id="about" className="py-24">
          <div className="container">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                  <Image src="/images/photographer-portrait.jpeg" alt="Priyansh" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-brand-orange text-white rounded-2xl px-5 py-4 shadow-xl">
                  <div className="text-2xl font-black leading-none">4+</div>
                  <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest mt-0.5">Years Exp.</div>
                </div>
              </div>
              <div>
                <span className="section-label mb-6">About Me</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-5 mb-6">
                  Priyansh —<br /><span className="text-brand-orange">Creator</span>
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  I&apos;m a multi-disciplinary creative with 4+ years of experience in photography, graphic design, and video editing. My work spans raw street moments to bold brand identities — always driven by one goal: make people feel something.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                  Street photography taught me to observe, connect, and frame the unseen emotions in everyday life. That same eye for detail carries into every design I create and every video I edit — precise, intentional, and alive.
                </p>
                <div className="mb-6">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Specialisations</p>
                  <div className="flex flex-wrap gap-2">
                    {["Street Photography", "Wildlife", "Graphic Design", "Video Editing", "Spiritual", "Travel", "Branding", "Astrophotography"].map(s => (
                      <span key={s} className="tag-pill">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  {/* Figma removed — design tools only for what's actively used */}
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Tools I Use</p>
                  <div className="flex flex-wrap gap-2">
                    {["Lightroom", "Photoshop", "Illustrator", "Premiere Pro", "After Effects"].map(t => (
                      <span key={t} className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-xs font-semibold border border-border">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            CONTACT
        ════════════════════════════════════ */}
        <section id="contact" className="py-24 bg-muted/40">
          <div className="container">

            {/* Mobile: centred heading + form */}
            <div className="lg:hidden">
              <div className="mb-10 text-center">
                <span className="section-label justify-center mx-auto mb-5">Contact</span>
                <h2 className="text-4xl font-black tracking-tight mt-5">Let&apos;s Create<br />Something Great</h2>
                <p className="text-muted-foreground max-w-sm mx-auto mt-4 text-sm leading-relaxed">
                  Open for photography, graphic design &amp; video editing projects.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                <ContactForm />
              </div>
              <div className="mt-6 text-center">
                <Link href="/contact" className="text-sm text-brand-orange font-semibold">More contact options →</Link>
              </div>
            </div>

            {/* Desktop: two-column — info left, sticky form right */}
            <div className="hidden lg:grid lg:grid-cols-[1fr_480px] gap-14 xl:gap-20 items-start">

              {/* Left — heading + contact info */}
              <div>
                <span className="section-label mb-6">Contact</span>
                <h2 className="text-5xl xl:text-6xl font-black tracking-tight mt-5 mb-6 leading-[0.95]">
                  Let&apos;s Create<br /><span className="text-brand-orange">Something</span><br />Great.
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-sm">
                  Open for photography, graphic design &amp; video editing projects. Based in Bulandshar, India — working worldwide.
                </p>

                {/* Quick contact info */}
                <div className="space-y-4 mb-10">
                  {[
                    { label: "Email",     value: "officialpriyansh25@gmail.com", href: "mailto:officialpriyansh25@gmail.com" },
                    { label: "Phone",     value: "+91 9520270341",               href: "tel:+919520270341"                 },
                    { label: "Instagram", value: "@thepriyansh.raw",             href: "https://www.instagram.com/thepriyansh.raw/" },
                    { label: "Location",  value: "Bulandshar, UP, India",        href: null                                },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground w-20 flex-shrink-0">{item.label}</span>
                      {item.href ? (
                        <Link href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm font-bold hover:text-brand-orange transition-colors">{item.value}</Link>
                      ) : (
                        <span className="text-sm font-bold text-muted-foreground">{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Availability badge */}
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-green-500/30 bg-green-500/5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-green-600 dark:text-green-400">Available for new projects</span>
                </div>
              </div>

              {/* Right — sticky form */}
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <h3 className="text-xl font-black mb-1">Send a Message</h3>
                  <p className="text-muted-foreground text-sm mb-6">I&apos;ll reply within 24 hours.</p>
                  <ContactForm />
                </div>
                <div className="mt-4 text-center">
                  <Link href="/contact" className="text-sm text-brand-orange font-semibold">More contact options →</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

/* ── Reusable design card ── */
function DesignCard({ item }: {
  item: { title: string; description: string; image: string; fallback: string; tags: string[] }
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-muted shadow-sm hover:shadow-xl transition-all duration-300 break-inside-avoid shadow-black/5">
      <Image
         src={item.image}
         alt={item.title}
         width={1000}
         height={1000}
         className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
         onError={(e) => { (e.target as HTMLImageElement).src = item.fallback }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="absolute inset-0 p-3 sm:p-5 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
        <div className="flex flex-wrap gap-1 mb-1.5">{item.tags.map(t => <span key={t} className="tag-pill text-[9px] sm:text-[10px] px-1.5 py-0.5">{t}</span>)}</div>
        <h3 className="text-sm sm:text-lg font-black text-white mb-0.5 leading-tight">{item.title}</h3>
        <p className="text-white/80 text-[10px] sm:text-xs leading-relaxed hidden sm:block">{item.description}</p>
      </div>
    </div>
  )
}

/* ── Escape key handler — closes modal on Esc ── */
function EscapeHandler({ onEscape }: { onEscape: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onEscape()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onEscape])
  return null
}

