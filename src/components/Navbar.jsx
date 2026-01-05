import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef(null)
  const indicatorRef = useRef(null)

  useEffect(() => {
    // GSAP entrance animation
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power3.out",
        delay: 0.5
      }
    )
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Enhanced active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 150
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          if (activeSection !== sections[i]) {
            setActiveSection(sections[i])
            // GSAP animation for active indicator
            gsap.to(indicatorRef.current, {
              scale: 1.2,
              duration: 0.3,
              ease: "back.out(1.7)",
              yoyo: true,
              repeat: 1
            })
          }
          break
        }
      }
    }
    
    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [activeSection])

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      // GSAP smooth scroll
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: targetElement,
          offsetY: 120
        },
        ease: "power2.inOut"
      })
    }
  }

  return (
    <motion.header
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <motion.nav 
          className={`relative mx-auto max-w-2xl bg-white/8 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 shadow-2xl transition-all duration-700 ease-out ${
            scrolled ? 'bg-white/12 border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.4)] scale-95' : ''
          }`}
          whileHover={{ 
            scale: scrolled ? 0.96 : 1.01,
            boxShadow: "0 25px 50px rgba(255, 107, 53, 0.15), 0 0 40px rgba(139, 92, 246, 0.1)"
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Enhanced Glow Effect */}
          <motion.div 
            className="absolute -inset-0.5 bg-gradient-to-r from-primary-orange/20 via-primary-violet/20 to-primary-blue/20 rounded-2xl blur opacity-0 group-hover:opacity-60"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(255,107,53,0.2), rgba(139,92,246,0.2), rgba(0,212,255,0.2))",
                "linear-gradient(135deg, rgba(255,107,53,0.2), rgba(139,92,246,0.2), rgba(0,212,255,0.2))",
                "linear-gradient(225deg, rgba(255,107,53,0.2), rgba(139,92,246,0.2), rgba(0,212,255,0.2))",
                "linear-gradient(315deg, rgba(255,107,53,0.2), rgba(139,92,246,0.2), rgba(0,212,255,0.2))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="flex items-center justify-between relative z-10">
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-1 text-sm font-medium text-white mx-auto">
              {navItems.map((item, index) => (
                <motion.li key={item.name}>
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative hover:text-white/80 transition-all duration-500 ease-out px-4 py-2 rounded-xl ${
                      activeSection === item.id ? 'text-white bg-white/10' : 'text-white/90'
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      backgroundColor: "rgba(255, 107, 53, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.8 + index * 0.1,
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {item.name}
                    
                    {/* Enhanced Active indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        ref={indicatorRef}
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-primary-orange to-primary-violet rounded-full"
                        layoutId="activeIndicator"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7],
                          boxShadow: [
                            "0 0 10px rgba(255, 107, 53, 0.5)",
                            "0 0 20px rgba(255, 107, 53, 0.8)",
                            "0 0 10px rgba(255, 107, 53, 0.5)"
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    
                    {/* Enhanced Hover glow effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-primary-orange/10 via-primary-violet/10 to-primary-blue/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"
                      whileHover={{ scale: 1.1 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center mx-auto">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-primary-orange transition-colors duration-300 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 107, 53, 0.1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="absolute top-20 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
          >
            {/* Mobile menu glow effect */}
            <motion.div 
              className="absolute -inset-0.5 bg-gradient-to-r from-primary-orange/20 via-primary-violet/20 to-primary-blue/20 rounded-2xl blur opacity-60"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(255,107,53,0.2), rgba(139,92,246,0.2), rgba(0,212,255,0.2))",
                  "linear-gradient(135deg, rgba(255,107,53,0.2), rgba(139,92,246,0.2), rgba(0,212,255,0.2))",
                  "linear-gradient(225deg, rgba(255,107,53,0.2), rgba(139,92,246,0.2), rgba(0,212,255,0.2))"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <ul className="flex flex-col space-y-3 relative z-10">
              {navItems.map((item, index) => (
                <motion.li key={item.name}>
                  <motion.a
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href)
                      setIsOpen(false)
                    }}
                    className={`block text-sm font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-primary-orange/20 to-primary-violet/20 border border-primary-orange/30' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar