import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion'
import { Download, ExternalLink, Github, Linkedin, Mail, Facebook, ArrowDown, Sparkles } from 'lucide-react'
import { Button } from './ui/button'

// Animated Role Component
const AnimatedRole = () => {
  const roles = ['Frontend', 'MERN Stack',  'React.js']
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRole}
          initial={{ y: 30, opacity: 0, rotateX: 90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -30, opacity: 0, rotateX: -90 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="absolute inset-0 flex items-center"
        >
          {roles[currentRole]} 
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

const Hero = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  // Enhanced parallax transforms with spring physics
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "50%"]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), {
    stiffness: 100,
    damping: 30
  })
  
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.95]), {
    stiffness: 100,
    damping: 30
  })
  
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), {
    stiffness: 100,
    damping: 30
  })

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zubairz40-z', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/zubair-ibne-zahir', label: 'LinkedIn', color: 'hover:text-primary-blue' },
    { icon: Mail, href: 'mailto:zahirzubair740@gmail.com', label: 'Email', color: 'hover:text-primary-orange' },
    { icon: Facebook, href: 'https://www.facebook.com/zubair.zahir.714', label: 'Facebook', color: 'hover:text-primary-violet' },
  ]

  // Enhanced floating tech icons with parallax
  const floatingTechs = [
    { icon: "⚛️", name: "React", delay: 0, x: -120, y: -80, duration: 4.5, scale: 1.0 },
    { icon: "🟢", name: "Node.js", delay: 1, x: 140, y: -70, duration: 5.2, scale: 0.9 },
    { icon: "🔥", name: "Firebase", delay: 2, x: -110, y: 100, duration: 4.8, scale: 0.8 },
    { icon: "💨", name: "Tailwind", delay: 3, x: 150, y: 90, duration: 3.8, scale: 0.9 }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  }

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
      {/* Logo in top-left corner - Always visible */}
      <motion.div 
        className="absolute top-6 left-6 z-30"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ 
          duration: 1.5, 
          delay: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
      >
        <motion.a
          href="#home"
          className="flex items-center gap-3 group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="relative w-12 h-12 border-2 border-primary-orange flex items-center justify-center text-lg font-bold text-primary-orange rounded-xl bg-gradient-to-br from-primary-orange/10 to-primary-violet/10 backdrop-blur-sm shadow-lg"
            whileHover={{ 
              rotate: 5,
              boxShadow: "0 15px 40px rgba(255, 107, 53, 0.4)"
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 107, 53, 0.2)",
                "0 0 30px rgba(255, 107, 53, 0.4)",
                "0 0 20px rgba(255, 107, 53, 0.2)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span
              className="relative z-10"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(255, 107, 53, 0.5)",
                  "0 0 20px rgba(255, 107, 53, 0.8)",
                  "0 0 10px rgba(255, 107, 53, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Z.
            </motion.span>
            
            {/* Animated border */}
            <motion.div 
              className="absolute inset-0 border-2 border-primary-violet rounded-xl opacity-0 group-hover:opacity-100"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <motion.div 
            className="hidden sm:block"
            whileHover={{ x: 2 }}
          >
            <motion.span 
              className="font-mono text-sm text-white font-bold tracking-wider"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255, 255, 255, 0.3)",
                  "0 0 20px rgba(139, 92, 246, 0.5)",
                  "0 0 10px rgba(255, 255, 255, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              &lt;Dev.Zubair /&gt;
            </motion.span>
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Enhanced Parallax Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary-orange/15 to-primary-violet/15 rounded-full blur-3xl"
        style={{ y: backgroundY }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-primary-blue/15 to-primary-violet/15 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10 h-full flex items-center">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full max-w-7xl mx-auto"
          style={{ y, opacity, scale }}
        >
          
          {/* Enhanced Text Content - Perfect Spacing */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 relative order-2 lg:order-1 text-center lg:text-left"
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
          >
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-primary-orange/40 backdrop-blur-xl"
            >
              <motion.div 
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={14} className="text-primary-orange" />
              </motion.div>
              <span className="text-xs font-medium text-white uppercase tracking-wider">
                Available for Opportunities
              </span>
            </motion.div>
            
            {/* Perfect Main Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.span 
                  className="block text-white mb-2"
                  initial={{ x: -100, opacity: 0, rotateX: -90 }}
                  animate={{ x: 0, opacity: 1, rotateX: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.7,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span 
                  className="block gradient-text text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-primary-violet to-primary-blue"
                  initial={{ x: 100, opacity: 0, rotateX: 90 }}
                  animate={{ x: 0, opacity: 1, rotateX: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.9,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(255, 107, 53, 0.5)"
                  }}
                >
                  Zubair
                </motion.span>
              </motion.h1>
            </motion.div>
            
            {/* Perfect Subtitle */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-primary-orange to-primary-violet rounded-full" />
              <div className="pl-6 leading-tight">
                <motion.div 
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <AnimatedRole />
                </motion.div>
                <motion.span 
                  className="block text-primary-orange text-xl md:text-2xl lg:text-3xl font-semibold"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                >
                  Developer
                </motion.span>
              </div>
            </motion.div>
            
            {/* Perfect Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-lg"
            >
              Crafting exceptional digital experiences with modern web technologies. 
              Passionate about creating <span className="text-primary-orange font-semibold">scalable</span>, 
              <span className="text-primary-violet font-semibold"> user-centric</span> applications 
              that make a difference.
            </motion.p>
            
            {/* Perfect Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button variant="primary" size="lg" className="group" asChild>
                <a 
                  href="https://drive.google.com/file/d/1G7QhyaS512dhrHrlUZPnbJ641QYPc_pc/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Download size={18} className="group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              
              <Button variant="glass" size="lg" className="group" asChild>
                <a href="#projects" className="flex items-center justify-center gap-2">
                  <ExternalLink size={18} className="group-hover:rotate-45 transition-transform" />
                  View My Work
                </a>
              </Button>
            </motion.div>

            {/* Perfect Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-3 pt-4 justify-center sm:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 glass-strong rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover-lift group ${social.color}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </motion.div>

            {/* Perfect Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 text-gray-400 pt-6 justify-center sm:justify-start"
            >
              <span className="text-sm font-mono uppercase tracking-wider">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-6 rounded-full glass flex items-center justify-center"
              >
                <ArrowDown size={12} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Hero Image Section - Perfect Spacing */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="relative h-[450px] lg:h-[550px] flex items-center justify-center order-1 lg:order-2"
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]) }}
          >
            {/* Enhanced Floating Tech Icons */}
            {floatingTechs.map((tech) => (
              <motion.div
                key={tech.name}
                variants={floatingVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 2 + tech.delay * 0.15 }}
                className="absolute z-20 hidden lg:block"
                style={{
                  left: `calc(50% + ${tech.x}px)`,
                  top: `calc(50% + ${tech.y}px)`,
                  transform: `scale(${tech.scale})`,
                  y: useTransform(scrollYProgress, [0, 1], ["0%", `${-tech.delay * 8}%`])
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 6, -6, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: tech.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: tech.delay * 0.3
                  }}
                  className="relative w-12 h-12 glass-strong rounded-xl flex items-center justify-center text-xl border border-white/20 hover:border-primary-orange/60 transition-all duration-500 cursor-pointer group shadow-lg"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 15,
                    boxShadow: "0 15px 35px rgba(255, 107, 53, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.span className="relative z-10">{tech.icon}</motion.span>
                </motion.div>
              </motion.div>
            ))}

            {/* Enhanced Animated Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-72 h-72 lg:w-96 lg:h-96 border border-primary-orange/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
              />
              <motion.div 
                className="absolute w-96 h-96 lg:w-[450px] lg:h-[450px] border border-primary-violet/15 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]) }}
              />
            </div>
            
            {/* Enhanced Glow Effects */}
            <motion.div 
              className="absolute -inset-8 bg-gradient-to-r from-primary-orange/20 via-primary-violet/20 to-primary-blue/20 blur-3xl rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "5%"]) }}
            />
            
            {/* Enhanced Image Container */}
            <motion.div 
              className="relative w-72 h-96 lg:w-80 lg:h-[450px] rounded-3xl overflow-hidden glass-strong border border-primary-orange/30 z-10 group shadow-2xl mx-auto"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]) }}
            >
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 via-transparent to-transparent z-10" />
              
              {/* Animated border */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-primary-orange via-primary-violet to-primary-blue rounded-3xl blur opacity-30 group-hover:opacity-60"
                animate={{
                  background: [
                    "linear-gradient(0deg, #FF6B35, #8B5CF6, #00D4FF)",
                    "linear-gradient(120deg, #FF6B35, #8B5CF6, #00D4FF)",
                    "linear-gradient(240deg, #FF6B35, #8B5CF6, #00D4FF)",
                    "linear-gradient(360deg, #FF6B35, #8B5CF6, #00D4FF)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.img 
                src="./images/icons/phto1.jpg" 
                alt="Md Zubair Ibne Zahir - Frontend Developer" 
                className="relative w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-4 right-4 w-3 h-3 bg-primary-orange rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-6 left-6 w-2 h-2 bg-primary-violet rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero