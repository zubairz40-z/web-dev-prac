import { useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function App() {
  // Initialize smooth scroll
  useLenis()
  
  // Optimized global parallax scroll progress
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  // Optimized background parallax
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"])
  const gridOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.02, 0.01, 0.005])

  useEffect(() => {
    // Optimized GSAP setup for performance
    gsap.set("*", { 
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden"
    })

    // Performance-optimized scroll animations
    gsap.utils.toArray("section").forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0.9,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
            // Performance optimization
            fastScrollEnd: true,
            preventOverlaps: true
          }
        }
      )
    })

    // Optimized cursor effect (desktop only)
    let cursor = null
    if (window.innerWidth >= 1024) {
      cursor = document.createElement('div')
      cursor.className = 'fixed w-3 h-3 bg-primary-orange/50 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-200 ease-out'
      cursor.style.transform = 'translate(-50%, -50%)'
      document.body.appendChild(cursor)

      const moveCursor = (e) => {
        if (cursor) {
          gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
            ease: "power2.out"
          })
        }
      }

      const scaleCursor = () => {
        if (cursor) {
          gsap.to(cursor, {
            scale: 2,
            duration: 0.2,
            ease: "back.out(1.7)"
          })
        }
      }

      const resetCursor = () => {
        if (cursor) {
          gsap.to(cursor, {
            scale: 1,
            duration: 0.2,
            ease: "back.out(1.7)"
          })
        }
      }

      document.addEventListener('mousemove', moveCursor, { passive: true })
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', scaleCursor, { passive: true })
        el.addEventListener('mouseleave', resetCursor, { passive: true })
      })

      return () => {
        document.removeEventListener('mousemove', moveCursor)
        if (cursor && document.body.contains(cursor)) {
          document.body.removeChild(cursor)
        }
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden relative">
      {/* Optimized Background Grid with Parallax */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-[-1] bg-grid h-screen w-full"
        style={{ 
          y: backgroundY,
          opacity: gridOpacity
        }}
      />
      
      {/* Optimized Parallax Background Elements */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-2] overflow-hidden"
        style={{ y: useTransform(smoothProgress, [0, 1], ["0%", "20%"]) }}
      >
        {/* Primary optimized orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-primary-orange/15 to-primary-violet/15 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-primary-blue/15 to-primary-orange/15 rounded-full blur-[100px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -25, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Secondary optimized accent orbs */}
        <motion.div 
          className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-r from-primary-violet/10 to-primary-blue/10 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 90, 180]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-primary-orange/10 to-primary-violet/10 rounded-full blur-[110px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
            rotate: [180, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />
      </motion.div>
      
      {/* Optimized ambient glow overlay */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{ 
          background: `radial-gradient(circle at 50% 50%, 
            rgba(255, 107, 53, 0.02) 0%, 
            rgba(139, 92, 246, 0.015) 35%, 
            rgba(0, 212, 255, 0.01) 70%, 
            transparent 100%)`
        }}
        animate={{
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App