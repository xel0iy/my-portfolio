'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: 'HARVEST HUB',
      category: 'AGRI-TECH E-COMMERCE PLATFORM',
      description: 'A comprehensive e-commerce platform bridging farmers directly to buyers. Empowers agricultural producers with digital tools to reach wider markets, manage inventory, and streamline sales.',
      link: 'https://harvesthubdemo.vercel.app/',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.projects-title p', 
        { opacity: 0, y: 30, filter: 'blur(8px)' }, 
        {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8,
          scrollTrigger: { trigger: '.projects-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
      
      gsap.fromTo('.projects-title h2', 
        { opacity: 0, y: 60, filter: 'blur(10px)' }, 
        {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, delay: 0.2, ease: 'power4.out',
          scrollTrigger: { trigger: '.projects-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )

      // Project card with dramatic scale and slide
      gsap.fromTo('.project-card', 
        { 
          opacity: 0, 
          y: 100, 
          scale: 0.9,
          filter: 'blur(15px)'
        }, 
        {
          opacity: 1, 
          y: 0, 
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.2, 
          stagger: 0.3, 
          ease: 'power4.out',
          scrollTrigger: { trigger: '.projects-grid', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-16 sm:py-20 md:py-24 gradient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="projects-title mb-12 sm:mb-16 md:mb-20">
          <p className="text-neutral-500 font-medium mb-2 sm:mb-3 tracking-widest uppercase text-xs sm:text-sm">My Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Featured Projects</h2>
        </div>
        
        <div className="projects-grid space-y-8 sm:space-y-10 md:space-y-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card block group"
            >
              {/* Live Website Preview - Clear by default, blur on hover */}
              <div className="relative aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800/50 bg-neutral-900">
                <iframe
                  src={project.link}
                  title={project.title}
                  className="absolute top-0 left-0 w-[200%] h-[200%] pointer-events-none transition-all duration-500"
                  style={{ 
                    transform: 'scale(0.5)', 
                    transformOrigin: 'top left',
                  }}
                  loading="lazy"
                />
                
                {/* Blur overlay - appears on hover */}
                <div className="absolute inset-0 backdrop-blur-0 bg-black/0 group-hover:backdrop-blur-sm group-hover:bg-black/40 transition-all duration-500"></div>
                
                {/* Center link icon - appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Info Card */}
              <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 -mt-8 sm:-mt-10 md:-mt-12 relative z-10 mx-3 sm:mx-6 md:mx-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-2 sm:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[#7F5CFF] text-xs sm:text-sm font-semibold tracking-wider mb-3 sm:mb-4">
                      {project.category}
                    </p>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Arrow icon */}
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
