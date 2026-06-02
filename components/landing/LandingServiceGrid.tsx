'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Square, Home, Droplets, DoorOpen, Layers, Hammer, Thermometer, Bed, UtensilsCrossed } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services } from '@/lib/services'

const iconMap: Record<string, LucideIcon> = {
  Square, Home, Droplets, DoorOpen, Layers, Hammer, Thermometer, Bed, UtensilsCrossed,
}

interface Props {
  onServiceSelect: (slug: string) => void
}

export default function LandingServiceGrid({ onServiceSelect }: Props) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs text-accent uppercase tracking-[0.1em] font-medium mb-2">Browse by Service</p>
          <h2 className="text-3xl sm:text-[40px] font-bold text-primary mb-3">What service are you looking for?</h2>
          <p className="text-accent text-base max-w-xl mx-auto">
            From roofing to remodeling — get matched with pros who specialize in exactly what you need.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {services.map(service => {
            const Icon = iconMap[service.icon] || Home
            return (
              <motion.button
                key={service.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                onClick={() => onServiceSelect(service.slug)}
                className="group flex items-center justify-between p-6 bg-white border border-[#D8D8D8] rounded-lg hover:border-secondary hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-left w-full"
                aria-label={`Get quotes for ${service.name}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FDFDFD] flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">{service.name}</p>
                    <p className="text-xs text-accent mt-0.5">{service.descriptor}</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-secondary flex-shrink-0" aria-hidden="true" />
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
