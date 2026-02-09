'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: 'Harvest Hub',
      category: 'WEB DESIGN',
      description: 'A comprehensive agri-tech e-commerce platform bridging farmers directly to buyers with modern digital tools.',
      link: 'https://harvesthubdemo.vercel.app/',
      isDribbble: false,
      isCapstone: true,
      image: '/HarvestHub.jpg',
    },
    {
      title: 'Furnix',
      category: 'WEB DESIGN',
      description: 'Modern furniture e-commerce UI with elegant product showcases and refined shopping experience.',
      link: 'https://dribbble.com/shots/26997970-FURNIX-Modern-Furniture-E-commerce-Website-UI',
      isDribbble: true,
      isCapstone: false,
      image: '/Page Design.jpg',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.projects-subtitle', 
        { opacity: 0, y: 20, filter: 'blur(5px)' }, 
        {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5,
          scrollTrigger: { trigger: '.projects-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
      
      gsap.fromTo('.projects-heading', 
        { opacity: 0, y: 40, filter: 'blur(8px)' }, 
        {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, delay: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )

      // Project cards stagger animation
      gsap.fromTo('.project-card', 
        { 
          opacity: 0, 
          y: 60, 
          scale: 0.95,
        }, 
        {
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.7, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-grid', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-16 sm:py-20 md:py-28 gradient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="projects-title mb-10 sm:mb-14 md:mb-16">
          <h2 className="projects-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">Selected Work</h2>
          <p className="projects-subtitle text-neutral-500 text-sm sm:text-base md:text-lg max-w-xl">A collection of projects that showcase my design approach</p>
        </div>
        
        {/* Projects Grid - Two columns on larger screens */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block"
            >
              {/* Card Container */}
              <div className="relative bg-[#111111] rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800/40 hover:border-neutral-700/60 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50">
                {/* Image Preview */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <Image
                    src={project.image || '/placeholder.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-40"></div>
                  
                  {/* Capstone Badge */}
                  {project.isCapstone && (
                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#2a2a2a] rounded-full border border-neutral-700/50 shadow-lg">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                      </svg>
                      <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">Capstone Project</span>
                    </div>
                  )}
                  
                  {/* Concept Badge - Dribbble style */}
                  {project.isDribbble && (
                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#2a2a2a] rounded-full border border-neutral-700/50 shadow-lg">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#EA4C89]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"/>
                      </svg>
                      <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">Concept</span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-5 sm:p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Category */}
                      <p className="text-neutral-500 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
                        {project.category}
                      </p>
                      
                      {/* Title with icon */}
                      <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                        <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold text-white tracking-tight group-hover:text-neutral-100 transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.isCapstone && (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                          </svg>
                        )}
                        {project.isDribbble && (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#EA4C89] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"/>
                          </svg>
                        )}
                      </div>
                      
                      {/* Description */}
                      <p className="text-neutral-400 text-sm sm:text-[15px] leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Arrow Button - Black and White */}
                    <div className="shrink-0 mt-4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center group-hover:bg-neutral-200 group-hover:scale-105 transition-all duration-300 shadow-lg">
                        <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"/>
                          <polyline points="7 7 17 7 17 17"/>
                        </svg>
                      </div>
                    </div>
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
