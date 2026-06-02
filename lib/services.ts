import type { LucideIcon } from 'lucide-react'

export interface Service {
  name: string
  slug: string
  icon: string
  descriptor: string
  pairings: string[]
}

export const services: Service[] = [
  { name: 'Windows', slug: 'windows', icon: 'Square', descriptor: 'Installation & replacement', pairings: ['doors', 'siding'] },
  { name: 'Roofing', slug: 'roofing', icon: 'Home', descriptor: 'Repair & full replacement', pairings: ['gutters', 'siding'] },
  { name: 'Gutters', slug: 'gutters', icon: 'Droplets', descriptor: 'Cleaning, repair & installation', pairings: ['roofing', 'siding'] },
  { name: 'Doors', slug: 'doors', icon: 'DoorOpen', descriptor: 'Entry, storm & patio doors', pairings: ['windows', 'siding'] },
  { name: 'Siding', slug: 'siding', icon: 'Layers', descriptor: 'Vinyl, fiber cement & wood', pairings: ['windows', 'roofing'] },
  { name: 'Remodeling', slug: 'remodeling', icon: 'Hammer', descriptor: 'Kitchen, bath & whole-home', pairings: ['hvac', 'windows'] },
  { name: 'HVAC', slug: 'hvac', icon: 'Thermometer', descriptor: 'Heating, cooling & air quality', pairings: ['remodeling', 'windows'] },
  { name: 'Mattresses', slug: 'mattresses', icon: 'Bed', descriptor: 'Top brands at lower prices', pairings: [] },
  { name: 'Cookware', slug: 'cookware', icon: 'UtensilsCrossed', descriptor: 'Sets, pans & kitchen essentials', pairings: [] },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}
