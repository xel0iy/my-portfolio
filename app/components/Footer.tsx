'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-content', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: footerRef.current, start: 'top 90%', toggleActions: 'play none none reverse' }
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="glass text-white py-8 sm:py-12 border-t border-white/5">
      <div className="footer-content max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl sm:text-2xl font-bold tracking-tight">
              <span className="text-white">XEL</span>
              <span className="text-neutral-500">folio</span>
              <span className="text-white">.</span>
            </a>
            <p className="text-neutral-500 mt-2 text-sm sm:text-base">UI/UX Designer & Front End Developer</p>
          </div>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-neutral-500 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 sm:gap-4">
            <a
              href="mailto:arcelespiritu012004@gmail.com"
              className="w-9 h-9 sm:w-10 sm:h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a
              href="https://dribbble.com/xel-zyv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-white/5 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-neutral-600 text-xs sm:text-sm">
            © 2026 XELfolio. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
