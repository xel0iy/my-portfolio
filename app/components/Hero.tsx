'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a master timeline for sequenced animations
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      
      // Set initial states with blur
      gsap.set('.hero-greeting', { opacity: 0, y: 40, filter: 'blur(10px)' })
      gsap.set('.hero-name-line-1', { opacity: 0, y: 80, filter: 'blur(20px)' })
      gsap.set('.hero-name-line-2', { opacity: 0, y: 80, filter: 'blur(20px)' })
      gsap.set('.hero-title', { opacity: 0, y: 30, filter: 'blur(10px)' })
      gsap.set('.hero-desc', { opacity: 0, y: 30, filter: 'blur(8px)' })
      gsap.set('.hero-btn', { opacity: 0, y: 40, scale: 0.9 })
      gsap.set('.hero-image-container', { opacity: 0, scale: 0.85, y: 40 })
      gsap.set('.hero-ring-1', { opacity: 0, scale: 0.8 })
      gsap.set('.hero-ring-2', { opacity: 0, scale: 0.8 })
      gsap.set('.hero-ring-3', { opacity: 0, scale: 0.8 })
      gsap.set('.hero-status', { opacity: 0, y: 20, scale: 0.9 })
      gsap.set('.hero-line', { scaleX: 0 })
      gsap.set('.hero-orb', { opacity: 0, scale: 0.5 })

      // Orb ambient animation
      tl.to('.hero-orb', { 
        opacity: 1, 
        scale: 1,
        duration: 2, 
        ease: 'power2.out' 
      })

      // Animate image with elegant entrance
      .to('.hero-image-container', { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        duration: 1.2, 
        ease: 'power3.out' 
      }, '-=1.5')
      .to('.hero-ring-1', { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, '-=0.8')
      .to('.hero-ring-2', { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, '-=0.7')
      .to('.hero-ring-3', { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, '-=0.6')
      
      // Text animations with elegant stagger
      .to('.hero-greeting', { 
        opacity: 1, y: 0, filter: 'blur(0px)', 
        duration: 0.8 
      }, '-=0.6')
      .to('.hero-line', { 
        scaleX: 1, 
        duration: 0.6,
        ease: 'power2.inOut'
      }, '-=0.4')
      .to('.hero-name-line-1', { 
        opacity: 1, y: 0, filter: 'blur(0px)', 
        duration: 1,
        ease: 'power4.out'
      }, '-=0.3')
      .to('.hero-name-line-2', { 
        opacity: 1, y: 0, filter: 'blur(0px)', 
        duration: 1,
        ease: 'power4.out'
      }, '-=0.8')
      .to('.hero-title', { 
        opacity: 1, y: 0, filter: 'blur(0px)', 
        duration: 0.8 
      }, '-=0.5')
      .to('.hero-desc', { 
        opacity: 1, y: 0, filter: 'blur(0px)', 
        duration: 0.8 
      }, '-=0.4')
      .to('.hero-btn', { 
        opacity: 1, y: 0, scale: 1, 
        duration: 0.6, 
        stagger: 0.12,
        ease: 'back.out(1.7)' 
      }, '-=0.3')
      .to('.hero-status', { 
        opacity: 1, y: 0, scale: 1, 
        duration: 0.6,
        ease: 'back.out(2)' 
      }, '-=0.4')

      // Floating animation for image after entrance
      gsap.to('.hero-image-container', {
        y: -12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2
      })

      // Subtle rotation for rings
      gsap.to('.hero-ring-1', {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: 'none'
      })
      gsap.to('.hero-ring-2', {
        rotation: -360,
        duration: 50,
        repeat: -1,
        ease: 'none'
      })
      gsap.to('.hero-ring-3', {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: 'none'
      })

      // Orb floating
      gsap.to('.hero-orb', {
        y: -30,
        x: 20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center relative bg-[#0a0a0a] overflow-hidden">
      {/* Minimal grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }}></div>
      
      {/* Subtle white ambient glow */}
      <div className="hero-orb absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none bg-white/[0.02]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="flex items-center gap-4 justify-center lg:justify-start mb-8">
            <p className="hero-greeting text-neutral-400 font-medium tracking-[0.25em] uppercase text-[11px] sm:text-xs font-[family-name:var(--font-inter)]">
              UI/UX Designer
            </p>
            <div className="hero-line h-[1px] w-16 bg-neutral-700 origin-left"></div>
          </div>
          
          <h1 className="mb-8 font-[family-name:var(--font-syne)]">
            <span className="hero-name-line-1 block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white tracking-[-0.02em] leading-[0.9]">
              Arcel
            </span>
            <span className="hero-name-line-2 block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-[-0.02em] leading-[0.9] text-neutral-800">
              Espiritu
            </span>
          </h1>
          
          <p className="hero-title text-lg sm:text-xl md:text-2xl text-neutral-400 mb-6 font-light tracking-wide font-[family-name:var(--font-inter)]">
            Crafting Digital Experiences
          </p>
          
          <p className="hero-desc text-neutral-500 mb-12 leading-[1.8] max-w-md mx-auto lg:mx-0 text-sm sm:text-[15px] font-[family-name:var(--font-inter)]">
            BSIT student passionate about creating intuitive, user-centered designs. 
            Transforming ideas into elegant digital solutions through thoughtful UI/UX design.
          </p>
          
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <a
              href="#contact"
              className="hero-btn group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-neutral-200 font-[family-name:var(--font-inter)]"
            >
              Get In Touch
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#projects"
              className="hero-btn group relative inline-flex items-center gap-3 px-8 py-4 text-white font-medium text-sm border border-neutral-800 hover:border-neutral-600 transition-all duration-300 hover:bg-white/[0.02] font-[family-name:var(--font-inter)]"
            >
              View Work
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div ref={imageRef} className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="hero-image-container relative group">
            {/* Elegant rings - pure white/gray */}
            <div className="hero-ring-1 absolute inset-0 -m-4 sm:-m-5 border border-neutral-800 rounded-full"></div>
            <div className="hero-ring-2 absolute inset-0 -m-8 sm:-m-10 border border-neutral-900 rounded-full"></div>
            <div className="hero-ring-3 absolute inset-0 -m-12 sm:-m-16 border border-neutral-900/50 rounded-full"></div>
            
            {/* Subtle white glow on hover */}
            <div className="absolute -inset-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-3xl bg-white/[0.03]"></div>
            
            {/* Image container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] rounded-full overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-all duration-700">
              <Image
                src="/arcel-profile.jpg"
                alt="Arcel Espiritu"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                priority
              />
              
              {/* Simple vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#0a0a0a_100%)] opacity-50 pointer-events-none"></div>
              
              {/* Subtle shine on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
            
            {/* Status badge - with green indicator */}
            <div className="hero-status absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2.5 flex items-center gap-2.5 bg-[#0a0a0a] border border-neutral-800 rounded-full">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
              <span className="text-xs sm:text-sm text-neutral-300 font-medium tracking-wide font-[family-name:var(--font-inter)]">Available</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
    </section>
  )
}

export default Hero
