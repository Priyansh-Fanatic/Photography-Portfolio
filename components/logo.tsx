import Image from "next/image"

// Logo renders the image only — the Link wrapper must be in the parent
export function Logo() {
  return (
    <div className="relative h-20 w-64 md:h-24 md:w-80">
      <Image
        src="/images/priyansh-logo.png"
        alt="Priyansh Photography"
        fill
        className="object-contain object-left dark:invert"
        priority
        sizes="(max-width: 768px) 192px, 224px"
      />
    </div>
  )
}
