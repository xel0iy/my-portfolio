'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with blur
      gsap.fromTo('.contact-title h2', 
        { opacity: 0, y: 60, filter: 'blur(10px)' }, 
        {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power4.out',
          scrollTrigger: { trigger: '.contact-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
      
      gsap.fromTo('.contact-title p', 
        { opacity: 0, y: 30 }, 
        {
          opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-title', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )

      // Contact cards with 3D flip
      gsap.fromTo('.contact-card', 
        { 
          opacity: 0, 
          y: 60, 
          rotateX: 45,
          scale: 0.9,
          filter: 'blur(10px)'
        }, 
        {
          opacity: 1, 
          y: 0, 
          rotateX: 0, 
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.9, 
          stagger: { amount: 0.4, from: 'center' }, 
          ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.contact-grid', start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )

      gsap.fromTo('.contact-location', 
        { opacity: 0, y: 30, scale: 0.9 }, 
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.6, ease: 'back.out(2)',
          scrollTrigger: { trigger: '.contact-location', start: 'top 95%', toggleActions: 'play none none reverse' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 md:py-24 gradient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="contact-title mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg">Let&apos;s create something great together</p>
        </div>
        <div className="contact-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto" style={{ perspective: '1000px' }}>
          <a
            href="mailto:arcelespiritu012004@gmail.com"
            className="contact-card glass-card card-neon-hover rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center group transition-all duration-300"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 glass rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-all duration-300">
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-300"
                   style={{ background: 'linear-gradient(135deg, rgba(127,92,255,0.5), rgba(91,157,255,0.4))' }}></div>
              <svg className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-neutral-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Email</h3>
            <p className="text-neutral-500 text-xs sm:text-sm break-all group-hover:text-neutral-400 transition-colors">arcelespiritu012004@gmail.com</p>
          </a>

          <a
            href="tel:09510723614"
            className="contact-card glass-card card-neon-hover rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center group transition-all duration-300"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 glass rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-all duration-300">
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-300"
                   style={{ background: 'linear-gradient(135deg, rgba(91,157,255,0.5), rgba(255,92,240,0.4))' }}></div>
              <svg className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-neutral-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Phone</h3>
            <p className="text-neutral-500 text-xs sm:text-sm group-hover:text-neutral-400 transition-colors">0951-072-3614</p>
          </a>

          <a
            href="https://dribbble.com/xel-zyv"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card glass-card card-neon-hover rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center group transition-all duration-300 sm:col-span-2 lg:col-span-1"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 glass rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-all duration-300">
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-300"
                   style={{ background: 'linear-gradient(135deg, rgba(255,92,240,0.5), rgba(127,92,255,0.4))' }}></div>
              <svg className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-neutral-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Dribbble</h3>
            <p className="text-neutral-500 text-xs sm:text-sm group-hover:text-neutral-400 transition-colors">dribbble.com/xel-zyv</p>
          </a>
        </div>

        <div className="contact-location text-center mt-8 sm:mt-12">
          <p className="text-neutral-500 text-sm sm:text-base">Santa Maria, Bulacan, Philippines</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
