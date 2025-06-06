"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ImageModalProps {
  src: string
  alt: string
}

export function ImageModal({ src, alt }: ImageModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="cursor-pointer" onClick={() => setOpen(true)}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={800}
          height={600}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10 rounded-full bg-black/50 text-white hover:bg-black/70"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          <div className="relative">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={1200}
              height={900}
              className="w-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
