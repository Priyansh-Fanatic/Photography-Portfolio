"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ImageOff } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface GalleryImage {
  src: string
  alt: string
  category?: string
}

interface LightboxGalleryProps {
  images: GalleryImage[]
  className?: string
  masonry?: boolean
}

export function LightboxGallery({ images, className, masonry = false }: LightboxGalleryProps) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loaded, setLoaded] = useState<Record<number, boolean>>({})
  const [errors, setErrors] = useState<Record<number, boolean>>({})

  const handleOpen = useCallback((index: number) => {
    setCurrentIndex(index)
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }, [images.length])

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious()
      } else if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "Escape") {
        handleClose()
      }
    },
    [handlePrevious, handleNext, handleClose],
  )

  const handleImageLoad = useCallback((index: number) => {
    setLoaded((prev) => ({
      ...prev,
      [index]: true,
    }))
  }, [])

  const handleImageError = useCallback((index: number) => {
    setErrors((prev) => ({
      ...prev,
      [index]: true,
    }))
    // Still mark as loaded to remove loading state
    setLoaded((prev) => ({
      ...prev,
      [index]: true,
    }))
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === "ArrowLeft") {
        handlePrevious()
      } else if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "Escape") {
        handleClose()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [open, handlePrevious, handleNext, handleClose])

  // Verify all image URLs are valid and accessible
  const validImages = images.map((img) => ({
    ...img,
    // Ensure the src is a valid URL or a local path
    src: img.src && (img.src.startsWith("http") || img.src.startsWith("/")) ? img.src : "/placeholder.png",
  }))

  if (masonry) {
    return (
      <>
        <div className={cn("columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4", className)}>
          {validImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid relative overflow-hidden rounded-lg cursor-pointer group mb-4"
              onClick={() => handleOpen(index)}
            >
              <div className="relative aspect-auto">
                {errors[index] ? (
                  <div className="w-full aspect-[4/3] bg-muted flex items-center justify-center">
                    <ImageOff className="h-8 w-8 text-muted-foreground" />
                  </div>
                ) : (
                  <Image
                    src={image.src || "/placeholder.png"}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className={cn(
                      "w-full object-cover transition-transform duration-500 group-hover:scale-105",
                      !loaded[index] && "blur-sm",
                    )}
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-medium">{image.alt}</h3>
                {image.category && <p className="text-sm text-white/80">{image.category}</p>}
              </div>
            </div>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-7xl p-0 overflow-hidden bg-black/95 border-none" onKeyDown={handleKeyDown}>
            <div className="relative h-[90vh] flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handleClose}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">Previous</span>
              </Button>

              <div className="h-full w-full flex items-center justify-center p-4">
                {errors[currentIndex] ? (
                  <div className="flex flex-col items-center justify-center text-white">
                    <ImageOff className="h-16 w-16 mb-4" />
                    <p>Image could not be loaded</p>
                  </div>
                ) : (
                  <Image
                    src={validImages[currentIndex].src || "/placeholder.png"}
                    alt={validImages[currentIndex].alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    priority
                    onError={() => handleImageError(currentIndex)}
                  />
                )}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handleNext}
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">Next</span>
              </Button>

              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-sm">
                  {currentIndex + 1} / {validImages.length}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <>
      <div className={cn("grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
        {validImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleOpen(index)}
          >
            {errors[index] ? (
              <div className="aspect-[4/3] w-full bg-muted flex items-center justify-center">
                <ImageOff className="h-8 w-8 text-muted-foreground" />
              </div>
            ) : (
              <Image
                src={image.src || "/placeholder.png"}
                alt={image.alt}
                width={800}
                height={600}
                className={cn(
                  "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105",
                  !loaded[index] && "blur-sm",
                )}
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-lg font-medium">{image.alt}</h3>
              {image.category && <p className="text-sm text-white/80">{image.category}</p>}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-7xl p-0 overflow-hidden bg-black/95 border-none" onKeyDown={handleKeyDown}>
          <div className="relative h-[90vh] flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={handleClose}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous</span>
            </Button>

            <div className="h-full w-full flex items-center justify-center p-4">
              {errors[currentIndex] ? (
                <div className="flex flex-col items-center justify-center text-white">
                  <ImageOff className="h-16 w-16 mb-4" />
                  <p>Image could not be loaded</p>
                </div>
              ) : (
                <Image
                  src={validImages[currentIndex].src || "/placeholder.png"}
                  alt={validImages[currentIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority
                  onError={() => handleImageError(currentIndex)}
                />
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next</span>
            </Button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-sm">
                {currentIndex + 1} / {validImages.length}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
