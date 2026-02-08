'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with blur reveal
      gsap.fromTo('.about-title p', 
        { opacity: 0, y: 30, filter: 'blur(8px)' }, 
        {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8,
          scrollTrigger: { trigger: '.about-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
      
      gsap.fromTo('.about-title h2', 
        { opacity: 0, y: 60, filter: 'blur(10px)' }, 
        {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, delay: 0.2, ease: 'power4.out',
          scrollTrigger: { trigger: '.about-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )

      // Cards with 3D flip animation
      gsap.fromTo('.about-card', 
        { 
          opacity: 0, 
          y: 50, 
          scale: 0.8, 
          rotationY: -45,
          filter: 'blur(10px)'
        }, 
        {
          opacity: 1, 
          y: 0, 
          scale: 1, 
          rotationY: 0,
          filter: 'blur(0px)',
          duration: 0.8, 
          stagger: { amount: 0.5, from: 'random' }, 
          ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.about-cards', start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )

      // Text with staggered slide-in from right
      gsap.fromTo('.about-text', 
        { opacity: 0, x: 80, filter: 'blur(8px)' }, 
        {
          opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.9, stagger: 0.25, ease: 'power4.out',
          scrollTrigger: { trigger: '.about-text-container', start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-20 md:py-24 gradient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="about-title text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-neutral-500 font-medium mb-2 sm:mb-3 tracking-widest uppercase text-xs sm:text-sm">Get To Know</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="about-cards glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8" style={{ perspective: '1000px' }}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="about-card glass card-neon-hover rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center transition-all duration-500 cursor-default group">
                <span className="text-xl sm:text-2xl mb-2 sm:mb-3 block opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125">✦</span>
                <h3 className="font-semibold text-white text-xs sm:text-sm">Education</h3>
                <p className="text-neutral-500 text-[10px] sm:text-xs mt-1">BSIT Student</p>
              </div>
              <div className="about-card glass card-neon-hover rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center transition-all duration-500 cursor-default group">
                <span className="text-xl sm:text-2xl mb-2 sm:mb-3 block opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125">◈</span>
                <h3 className="font-semibold text-white text-xs sm:text-sm">Design</h3>
                <p className="text-neutral-500 text-[10px] sm:text-xs mt-1">UI/UX Focus</p>
              </div>
              <div className="about-card glass card-neon-hover rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center transition-all duration-500 cursor-default group">
                <span className="text-xl sm:text-2xl mb-2 sm:mb-3 block opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125">⬡</span>
                <h3 className="font-semibold text-white text-xs sm:text-sm">Technical</h3>
                <p className="text-neutral-500 text-[10px] sm:text-xs mt-1">HTML & CSS</p>
              </div>
              <div className="about-card glass card-neon-hover rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center transition-all duration-500 cursor-default group">
                <span className="text-xl sm:text-2xl mb-2 sm:mb-3 block opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125">◉</span>
                <h3 className="font-semibold text-white text-xs sm:text-sm">Location</h3>
                <p className="text-neutral-500 text-[10px] sm:text-xs mt-1">Bulacan, PH</p>
              </div>
            </div>
          </div>
          <div className="about-text-container mt-6 md:mt-0">
            <p className="about-text text-neutral-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
              I combine IT fundamentals with design thinking to build functional and intuitive 
              digital interfaces. Through academic and personal projects, I&apos;ve developed 
              experience in creating clean, user-centered designs using Figma.
            </p>
            <p className="about-text text-neutral-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
              I have basic knowledge of IT fundamentals such as HTML and CSS and am willing 
              to improve my coding skills through hands-on experience. I&apos;m eager to gain 
              real work exposure, learn from different technical tasks, and apply my skills 
              in a professional environment.
            </p>
            <p className="about-text text-neutral-400 leading-relaxed text-sm sm:text-base md:text-lg">
              I communicate well with supervisors and colleagues, follow instructions properly, 
              and work effectively in a team. I&apos;m passionate about creating designs that 
              not only look great but also provide excellent user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
