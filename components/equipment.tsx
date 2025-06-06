import type React from "react"
import { Camera, Aperture, Layers, Zap } from "lucide-react"

interface EquipmentItem {
  icon: React.ReactNode
  title: string
  items: string[]
}

export function Equipment() {
  const equipment: EquipmentItem[] = [
    {
      icon: <Camera className="h-8 w-8 text-brand-orange" />,
      title: "Cameras",
      items: ["Sony Alpha a7 III", "Canon EOS R5", "Fujifilm X-T4", "Leica Q2"],
    },
    {
      icon: <Aperture className="h-8 w-8 text-brand-orange" />,
      title: "Lenses",
      items: [
        "Sony FE 24-70mm f/2.8 GM",
        "Canon RF 50mm f/1.2L USM",
        "Sigma 85mm f/1.4 DG HSM Art",
        "Tamron 17-28mm f/2.8",
      ],
    },
    {
      icon: <Layers className="h-8 w-8 text-brand-orange" />,
      title: "Accessories",
      items: ["Peak Design Travel Tripod", "Profoto B10 Plus", "DJI Ronin-S Gimbal", "Lee Filters System"],
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-orange" />,
      title: "Post-Processing",
      items: ["Adobe Lightroom Classic", "Adobe Photoshop", "Capture One Pro", "DxO PhotoLab"],
    },
  ]

  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue dark:text-brand-orange mb-4">
            My Equipment
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools I use to bring my creative vision to life. Quality equipment is essential for capturing those
            perfect moments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {equipment.map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-brand-blue dark:text-brand-orange">{item.title}</h3>
              <ul className="space-y-2">
                {item.items.map((equip, idx) => (
                  <li key={idx} className="text-muted-foreground">
                    {equip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
