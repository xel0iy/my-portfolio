'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    {
      title: 'Figma',
      description: 'UI Design & Prototyping',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
        </svg>
      ),
    },
    {
      title: 'Design System',
      description: 'Component Libraries',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      ),
    },
    {
      title: 'Frontend',
      description: 'Tailwind CSS, React, Next.js (AI-Enhanced Workflow)',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
    },
    {
      title: 'User Research',
      description: 'Testing & Analytics',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
    },
    {
      title: 'Interaction Design',
      description: 'Animation & Flows',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6"/>
          <line x1="8" y1="12" x2="21" y2="12"/>
          <line x1="8" y1="18" x2="21" y2="18"/>
          <line x1="3" y1="6" x2="3.01" y2="6"/>
          <line x1="3" y1="12" x2="3.01" y2="12"/>
          <line x1="3" y1="18" x2="3.01" y2="18"/>
        </svg>
      ),
    },
    {
      title: 'Collaboration',
      description: 'Team Workshops',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with split effect
      gsap.fromTo('.skills-title h2', 
        { opacity: 0, y: 80, filter: 'blur(10px)' }, 
        {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out',
          scrollTrigger: { trigger: '.skills-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
      
      gsap.fromTo('.skills-title p', 
        { opacity: 0, y: 30 }, 
        {
          opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.skills-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )

      // Cards with 3D rotation entrance
      gsap.fromTo('.skill-card', 
        { 
          opacity: 0, 
          y: 60, 
          scale: 0.8, 
          rotationX: 45,
          filter: 'blur(10px)'
        }, 
        {
          opacity: 1, 
          y: 0, 
          scale: 1, 
          rotationX: 0,
          filter: 'blur(0px)',
          duration: 0.8, 
          stagger: { amount: 0.6, from: 'start' },
          ease: 'back.out(1.2)',
          scrollTrigger: { trigger: '.skills-grid', start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-16 sm:py-20 md:py-24 gradient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="skills-title mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">Skills & Tools</h2>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg">Technologies and methodologies I use to bring ideas to life</p>
        </div>
        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6" style={{ perspective: '1000px' }}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card glass-card card-neon-hover rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 cursor-default group transition-all duration-500"
            >
              {/* Icon with neon glow effect */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-5">
                <div className="absolute inset-0 rounded-lg sm:rounded-xl blur-xl opacity-0 group-hover:opacity-80 transition-all duration-500"
                     style={{ background: 'linear-gradient(135deg, rgba(0,245,255,0.4), rgba(139,92,246,0.4))' }}></div>
                <div className="relative w-full h-full glass rounded-lg sm:rounded-xl flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                  {skill.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-semibold text-white text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-white transition-colors">
                {skill.title}
              </h3>
              
              {/* Description */}
              <p className="text-neutral-500 text-xs sm:text-sm group-hover:text-neutral-400 transition-colors">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
