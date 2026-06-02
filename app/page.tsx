'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Search, Users, CheckCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import LandingNav from '@/components/landing/LandingNav'
import LandingHero from '@/components/landing/LandingHero'
import LandingServiceGrid from '@/components/landing/LandingServiceGrid'
import TrustSignals from '@/components/home/TrustSignals'

export default function LandingPage() {
  const [selectedService, setSelectedService] = useState('')
  const [showForm, setShowForm] = useState(false)

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleServiceSelect = (slug: string) => {
    setSelectedService(slug)
    setShowForm(true)
    setTimeout(() => {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 50)
  }

  return (
    <>
      <LandingNav />

      <LandingHero
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        showForm={showForm}
        setShowForm={setShowForm}
      />

      <LandingServiceGrid onServiceSelect={handleServiceSelect} />

      {/* Popular Services — landing version */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={14} className="text-secondary" aria-hidden="true" />
                <p className="text-xs text-secondary font-semibold uppercase tracking-[0.1em]">Popular Right Now</p>
              </div>
              <h2 className="text-3xl sm:text-[40px] font-bold text-white leading-tight">
                Services homeowners<br className="hidden sm:block" /> are booking this season
              </h2>
            </div>
            <a
              href="#hero"
              onClick={scrollToHero}
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              View All Services
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {[
              { title: 'Roofing', slug: 'roofing', description: 'Storm season is here. Get ahead of damage with a free inspection and quotes from local roofing pros.', imageUrl: '/images/popular-roofing.jpg', highlight: false },
              { title: 'Windows', slug: 'windows', description: 'Energy-efficient windows cut heating and cooling costs year-round. Compare top installers near you.', imageUrl: '/images/popular-windows.jpg', highlight: true },
              { title: 'Gutters', slug: 'gutters', description: 'Clogged or failing gutters lead to foundation damage. Find a gutter pro before the next big rain.', imageUrl: '/images/popular-gutters.jpg', highlight: false },
            ].map((card, i) => (
              <motion.div
                key={card.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <button
                  onClick={() => handleServiceSelect(card.slug)}
                  className={`group block rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-1 w-full text-left ${card.highlight ? 'bg-secondary' : 'bg-white/10'}`}
                  aria-label={`Get quotes for ${card.title}`}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className={`object-cover transition-all duration-300 ${!card.highlight ? 'grayscale group-hover:grayscale-0' : ''}`}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${card.highlight ? 'text-primary' : 'text-white'}`}>{card.title}</h3>
                    <p className={`text-sm leading-relaxed mb-5 ${card.highlight ? 'text-primary/80' : 'text-white/70'}`}>{card.description}</p>
                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${card.highlight ? 'text-primary' : 'text-secondary'}`}>
                      Get Quotes <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals / scrolling reviews */}
      <TrustSignals />

      {/* How It Works — landing version */}
      <section className="py-20 bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs text-accent uppercase tracking-[0.1em] font-medium mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-[40px] font-bold text-primary mb-4">
              We make it easy to finish your next project under budget.
            </h2>
            <p className="text-accent text-base max-w-xl mx-auto">
              Three steps between you and a pro you can trust.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-stretch gap-5">
            {[
              { number: 'STEP 1', icon: Search, title: 'Tell us about your project', description: 'Select a service and share a few details about what you need.' },
              { number: 'STEP 2', icon: Users, title: 'Get matched instantly', description: 'We connect you with qualified, vetted local pros.' },
              { number: 'STEP 3', icon: CheckCircle, title: 'Book with confidence', description: 'Compare, choose, and schedule — all in one place.' },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative flex-1 flex items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: i * 0.12 }}
                    className="w-full bg-white border border-[#D8D8D8] rounded-xl p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#D6EAE5] flex items-center justify-center mb-5">
                      <Icon size={24} className="text-primary" aria-hidden="true" />
                    </div>
                    <p className="text-xs font-semibold text-accent uppercase tracking-[0.1em] mb-2">{step.number}</p>
                    <h3 className="text-lg font-semibold text-primary mb-3 leading-snug">{step.title}</h3>
                    <p className="text-sm text-accent leading-relaxed">{step.description}</p>
                  </motion.div>
                  {i < 2 && (
                    <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-[#D8D8D8] items-center justify-center shadow-sm">
                      <ArrowRight size={14} className="text-accent" aria-hidden="true" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="#hero"
              onClick={scrollToHero}
              className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-4 rounded-md text-base hover:brightness-105 transition-all"
            >
              Get Started Today
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA — landing version */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-[40px] font-bold text-white mb-3">Ready to get started?</h2>
            <p className="text-secondary text-base mb-8">
              Tell us about your project and we&apos;ll match you with the right pros today.
            </p>
            <a
              href="#hero"
              onClick={scrollToHero}
              className="inline-flex items-center justify-center bg-secondary text-primary font-bold px-10 py-4 rounded-md text-base hover:brightness-105 transition-all"
            >
              Find My Pro
            </a>
          </motion.div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-[#161616] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image src="/images/logo-v3.png" alt="Affordable Home" width={160} height={36} className="h-9 w-auto bg-[#FDFDFD] rounded-lg px-3 py-1" />
          <p className="text-xs text-accent">&copy; {new Date().getFullYear()} Affordable Home. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-accent hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-accent hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
