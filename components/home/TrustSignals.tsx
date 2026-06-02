'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const stats = [
  { value: '10,000+', label: 'Verified Pros' },
  { value: '4.8 / 5', label: 'Average Rating' },
  { value: '50 States', label: 'Nationwide Coverage' },
  { value: 'Free to Use', label: 'No Subscription Required' },
]

const testimonials = [
  {
    quote: "I had three roofers come out within two days. The whole process was easy and I felt like I was comparing apples to apples. Ended up saving about $2,000 from my original quote.",
    name: "Sandra T.",
    service: "Roof Replacement — Columbus, OH",
  },
  {
    quote: "After replacing our windows through Affordable Home, the heating bill dropped noticeably the first month. The contractor showed up on time and cleaned up after themselves too.",
    name: "Marcus R.",
    service: "Window Replacement — Denver, CO",
  },
  {
    quote: "I was skeptical about using a marketplace, but they only sent me contractors who were actually licensed in my state. My HVAC install went perfectly.",
    name: "Janet W.",
    service: "HVAC Installation — Charlotte, NC",
  },
  {
    quote: "Got four quotes for new gutters in less than 24 hours. The pro I chose finished the job in a day and the price was exactly what they quoted — no surprises.",
    name: "Derek H.",
    service: "Gutter Installation — Nashville, TN",
  },
  {
    quote: "We needed a full kitchen remodel and weren't sure where to start. Affordable Home matched us with a contractor who walked us through every step. Couldn't be happier.",
    name: "Priya M.",
    service: "Kitchen Remodel — Austin, TX",
  },
  {
    quote: "The siding on my house was 30 years old. Found a crew through Affordable Home who replaced the whole thing in three days. Neighbors keep asking who did the work.",
    name: "Tom B.",
    service: "Siding Replacement — Minneapolis, MN",
  },
  {
    quote: "Our furnace died in January. Affordable Home connected me with an HVAC company that came out the same day. Had heat back by that evening. Lifesavers.",
    name: "Rachel S.",
    service: "Furnace Replacement — Cleveland, OH",
  },
  {
    quote: "I used to dread home improvement projects. This site made it actually manageable — real pros, real prices, no runaround.",
    name: "Chris D.",
    service: "Door Replacement — Portland, OR",
  },
  {
    quote: "Three bids on a new roof within 48 hours. The contractors were professional and the quotes were detailed. Saved me a lot of research time.",
    name: "Linda K.",
    service: "Roof Replacement — Phoenix, AZ",
  },
]

// Duplicate for seamless loop
const doubled = [...testimonials, ...testimonials]

export default function TrustSignals() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#D8D8D8] rounded-lg overflow-hidden mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-8 px-4 ${i < stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#D8D8D8]' : ''}`}
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-accent">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite scrolling testimonials — full bleed */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex gap-5 w-max animate-marquee">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-80 flex-shrink-0 bg-white border border-[#D8D8D8] rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center gap-0.5 mb-3" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} className="text-secondary fill-secondary" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-[#161616] italic leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-xs font-semibold text-accent">{t.name}</p>
              <p className="text-xs text-accent">{t.service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
