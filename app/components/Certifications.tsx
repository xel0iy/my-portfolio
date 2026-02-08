'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const certifications = [
    { title: 'UI/UX Design Fundamentals', type: 'Self-paced Learning', symbol: '✦' },
    { title: 'HTML, CSS, Basic Scripts Training', type: '2 Hours Training (2024)', symbol: '◈' },
    { title: 'Unmasking Cybersecurity: Protecting Your Digital World', type: '2025', symbol: '⬡' },
    { title: 'Excel: Advanced End-User Spreadsheet', type: '2025', symbol: '◉' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.cert-title h2', 
        { opacity: 0, y: 60, filter: 'blur(10px)' }, 
        {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out',
          scrollTrigger: { trigger: '.cert-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
      
      gsap.fromTo('.cert-title p', 
        { opacity: 0, y: 30 }, 
        {
          opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.cert-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )

      // Cards with horizontal slide-in animation
      gsap.fromTo('.cert-card', 
        { 
          opacity: 0, 
          x: (i) => i % 2 === 0 ? -80 : 80,
          scale: 0.9,
          filter: 'blur(10px)'
        }, 
        {
          opacity: 1, 
          x: 0, 
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8, 
          stagger: { amount: 0.5, from: 'start' }, 
          ease: 'back.out(1.2)',
          scrollTrigger: { trigger: '.cert-grid', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="certifications" ref={sectionRef} className="py-16 sm:py-20 md:py-24 gradient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="cert-title mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">Certifications</h2>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg">Professional achievements and credentials</p>
        </div>
        <div className="cert-grid grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card glass-card card-neon-hover rounded-xl sm:rounded-2xl p-5 sm:p-6 flex gap-4 cursor-default group transition-all duration-500"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 glass rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 text-neutral-300 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg sm:rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"
                     style={{ background: 'linear-gradient(135deg, rgba(0,245,255,0.4), rgba(139,92,246,0.4))' }}></div>
                <span className="relative text-xl sm:text-2xl group-hover:scale-125 transition-transform duration-300">{cert.symbol}</span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base mb-1 group-hover:text-white transition-colors">{cert.title}</h3>
                <p className="text-neutral-500 text-xs sm:text-sm">{cert.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
