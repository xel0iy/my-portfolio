'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.education-title h2', 
        { opacity: 0, y: 60, filter: 'blur(10px)' }, 
        {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out',
          scrollTrigger: { trigger: '.education-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
      
      gsap.fromTo('.education-title p', 
        { opacity: 0, y: 30 }, 
        {
          opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.education-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )

      // Timeline line growing animation
      gsap.fromTo('.education-timeline', 
        { opacity: 0, scaleY: 0 }, 
        {
          opacity: 1, scaleY: 1, duration: 1, transformOrigin: 'top', ease: 'power3.out',
          scrollTrigger: { trigger: '.education-content', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
      
      // Timeline dot pulsing in
      gsap.fromTo('.timeline-dot', 
        { opacity: 0, scale: 0 }, 
        {
          opacity: 1, scale: 1, duration: 0.6, delay: 0.5, ease: 'back.out(2)',
          scrollTrigger: { trigger: '.education-content', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )

      // Card slide in from left with blur
      gsap.fromTo('.education-card', 
        { opacity: 0, x: -100, filter: 'blur(15px)' }, 
        {
          opacity: 1, x: 0, filter: 'blur(0px)', duration: 1, delay: 0.4, ease: 'power4.out',
          scrollTrigger: { trigger: '.education-content', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="py-16 sm:py-20 md:py-24 gradient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="education-title mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">Education</h2>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg">My academic journey</p>
        </div>
        <div className="education-content max-w-3xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-neutral-700 education-timeline">
            <div className="timeline-dot absolute w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full -left-[7px] sm:-left-[9px] top-0 animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
            <div className="education-card glass-card card-neon-hover rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-500">
              <span className="inline-block glass text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full mb-4">
                2022 - Present
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-neutral-300 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                Colegio De San Gabriel Arcangel Inc
              </p>
              <p className="text-neutral-500 mb-3 sm:mb-4 text-xs sm:text-sm">
                Fatima V Area E, Sapang Palay, City of San Jose Del Monte, Bulacan
              </p>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Focusing on UI/UX design and interface development while building a strong 
                foundation in IT fundamentals. Combining design thinking with technical 
                knowledge to create functional digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
