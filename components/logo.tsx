import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div
        className="relative
             // Updated dimensions for increased mobile size and scaled up breakpoints
             h-16 w-64          // Mobile: Increased size
             sm:h-18 sm:w-72    // SM: Scaled up
             md:h-20 md:w-80     // MD (Tablet): Scaled up
             lg:h-22 lg:w-88    // LG: Scaled up (new larger size)

             // Transform and translation classes for vertical alignment
             transform
             translate-y-[8px]    // Mobile: Push DOWN by 8px
             sm:translate-y-0     // SM screens: Reset translation
             md:translate-y-[2px] // MD: Slight adjustment
             lg:translate-y-0     // LG screens and up: Reset translation
             transition-transform duration-300"
      >
        <Image
          src="/images/priyansh-logo.png"
          alt="Priyansh Photography"
          fill
          className="object-contain object-left dark:invert"
          priority
        />
      </div>
    </Link>
  )
}
