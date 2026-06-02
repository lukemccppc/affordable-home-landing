'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ArrowLeft, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { services } from '@/lib/services'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  zip: string
}

interface LandingHeroProps {
  selectedService: string
  setSelectedService: (slug: string) => void
  showForm: boolean
  setShowForm: (v: boolean) => void
}

export default function LandingHero({
  selectedService,
  setSelectedService,
  showForm,
  setShowForm,
}: LandingHeroProps) {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const handleGetStarted = () => {
    if (selectedService) setShowForm(true)
  }

  const onSubmit = (data: FormData) => {
    console.log('Lead submitted:', { service: selectedService, ...data })
    setSubmitted(true)
  }

  const selectedName = services.find(s => s.slug === selectedService)?.name ?? ''

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[580px] pt-[72px]"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-2.jpg"
          alt="Modern home exterior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center py-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-secondary text-xs font-semibold uppercase tracking-[0.15em] mb-4"
        >
          Trusted by thousands of homeowners
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-[56px] font-extrabold text-white leading-tight mb-4"
        >
          Find the Right Pro for Your Home and Budget
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-lg sm:text-xl font-light mb-8 opacity-90"
        >
          Get matched with trusted local professionals who deliver quality work at fair prices.
        </motion.p>

        {/* Step: Select service or show form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl mx-auto w-full"
        >
          <AnimatePresence mode="wait">
            {!showForm && !submitted && (
              <motion.div
                key="select"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col sm:flex-row bg-white rounded-full overflow-hidden shadow-lg"
              >
                <select
                  value={selectedService}
                  onChange={e => setSelectedService(e.target.value)}
                  className="flex-1 px-5 py-4 text-sm text-[#161616] focus:outline-none bg-white appearance-none cursor-pointer"
                  aria-label="Select a home service"
                >
                  <option value="">Select a service...</option>
                  {services.map(s => (
                    <option key={s.slug} value={s.slug}>{s.name}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={handleGetStarted}
                  className="flex items-center justify-center gap-2 bg-secondary text-primary font-bold px-7 py-4 text-sm hover:brightness-105 transition-all"
                  aria-label="Get started"
                >
                  Get Started
                  <ChevronRight size={15} aria-hidden="true" />
                </button>
              </motion.div>
            )}

            {showForm && !submitted && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl shadow-xl p-6 text-left"
              >
                {/* Back + service label */}
                <div className="flex items-center justify-between mb-5">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors"
                    aria-label="Back to service selection"
                  >
                    <ArrowLeft size={13} aria-hidden="true" />
                    Back
                  </button>
                  <span className="text-xs font-semibold bg-secondary text-primary px-3 py-1 rounded-full">
                    {selectedName}
                  </span>
                </div>

                <h3 className="text-base font-bold text-primary mb-4">
                  Tell us a bit about yourself and we'll get you matched.
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <input
                        type="text"
                        placeholder="First name"
                        {...register('firstName', { required: true })}
                        className={`w-full border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors ${errors.firstName ? 'border-red-400' : 'border-[#D8D8D8]'}`}
                        aria-label="First name"
                      />
                      {errors.firstName && <p className="text-xs text-red-500 mt-1">Required</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last name"
                        {...register('lastName', { required: true })}
                        className={`w-full border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors ${errors.lastName ? 'border-red-400' : 'border-[#D8D8D8]'}`}
                        aria-label="Last name"
                      />
                      {errors.lastName && <p className="text-xs text-red-500 mt-1">Required</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <input
                        type="email"
                        placeholder="Email address"
                        {...register('email', {
                          required: true,
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        })}
                        className={`w-full border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors ${errors.email ? 'border-red-400' : 'border-[#D8D8D8]'}`}
                        aria-label="Email address"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">Valid email required</p>}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone number"
                        {...register('phone', { required: true })}
                        className={`w-full border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors ${errors.phone ? 'border-red-400' : 'border-[#D8D8D8]'}`}
                        aria-label="Phone number"
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">Required</p>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="ZIP code"
                      maxLength={5}
                      {...register('zip', {
                        required: true,
                        pattern: /^\d{5}$/,
                      })}
                      className={`w-full border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors ${errors.zip ? 'border-red-400' : 'border-[#D8D8D8]'}`}
                      aria-label="ZIP code"
                    />
                    {errors.zip && <p className="text-xs text-red-500 mt-1">Valid 5-digit ZIP required</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary text-primary font-bold py-3 rounded-md text-sm hover:brightness-105 transition-all"
                  >
                    Get My Free Quotes
                  </button>
                </form>
              </motion.div>
            )}

            {submitted && (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">You're all set.</h3>
                <p className="text-sm text-accent leading-relaxed">
                  We're matching you with top-rated {selectedName.toLowerCase()} pros in your area. Expect to hear back shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Popular links — only show on select step */}
        {!showForm && !submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-4 text-white text-[13px]"
          >
            Popular:{' '}
            {['Roofing', 'Windows', 'HVAC', 'Remodeling'].map((item, i) => (
              <span key={item}>
                <button
                  onClick={() => { setSelectedService(item.toLowerCase()); setShowForm(true) }}
                  className="underline underline-offset-2 hover:text-secondary transition-colors"
                >
                  {item}
                </button>
                {i < 3 && <span className="mx-1.5 opacity-50">·</span>}
              </span>
            ))}
          </motion.p>
        )}
      </div>
    </section>
  )
}
