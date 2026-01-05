import { useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Sparkles, Code2, Coffee, Heart } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]), {
    stiffness: 100,
    damping: 30
  })
  
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), {
    stiffness: 100,
    damping: 30
  })
  
  const imageY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]), {
    stiffness: 100,
    damping: 30
  })

  // GSAP animations - Optimized for performance
  useEffect(() => {
    if (!isInView) return

    const ctx = gsap.context(() => {
      // Simplified animations for better performance
      if (imageRef.current) {
        gsap.fromTo(imageRef.current, 
          { 
            x: 50, 
            opacity: 0, 
            scale: 0.9
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Text content animation
      if (textRef.current) {
        gsap.fromTo(textRef.current, 
          { 
            x: -50, 
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const stats = [
    { number: "10+", label: "Projects Built", icon: Code2, color: "primary-orange" },
    { number: "+", label: "Learning", icon: Sparkles, color: "primary-violet" },
    { number: "100+", label: "Commits", icon: Coffee, color: "primary-blue" },
    { number: "∞", label: "Passion", icon: Heart, color: "primary-orange" }
  ]

  return (
    <section id="about" ref={sectionRef} className="py-12 md:py-16 relative">
      {/* Enhanced Background Elements with Parallax */}
      <motion.div 
        className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-primary-violet/8 to-primary-blue/8 rounded-full blur-3xl"
        style={{ y: backgroundY }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-r from-primary-orange/8 to-primary-violet/8 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]) }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header with Parallax */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]) }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-violet/30 mb-4">
              <Sparkles size={16} className="text-primary-violet" />
              <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                Get to Know Me
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Passionate developer crafting digital experiences with precision and creativity
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"
            style={{ y }}
          >
            
            {/* Enhanced Image Side with Perfect Sizing and Parallax */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="relative group max-w-sm mx-auto lg:max-w-md">
                {/* Perfect Glow Effect with Parallax */}
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-primary-orange via-primary-violet to-primary-blue opacity-20 blur-2xl rounded-full group-hover:opacity-40"
                  style={{ y: imageY }}
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Image Container with Enhanced Effects and Parallax */}
                <motion.div 
                  ref={imageRef}
                  className="relative transform-gpu"
                  style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]) }}
                  whileHover={{ 
                    rotateY: 3,
                    rotateX: 3,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden glass-strong border border-white/20 shadow-xl">
                    {/* Premium overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 via-transparent to-transparent z-10" />
                    
                    {/* Animated border glow */}
                    <motion.div 
                      className="absolute -inset-0.5 bg-gradient-to-r from-primary-orange via-primary-violet to-primary-blue rounded-2xl blur opacity-30"
                      animate={{
                        background: [
                          "linear-gradient(45deg, #FF6B35, #8B5CF6, #00D4FF)",
                          "linear-gradient(135deg, #FF6B35, #8B5CF6, #00D4FF)",
                          "linear-gradient(225deg, #FF6B35, #8B5CF6, #00D4FF)",
                          "linear-gradient(315deg, #FF6B35, #8B5CF6, #00D4FF)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <img
                      src="./images/icons/phto2.png"
                      alt="Zubair Portfolio"
                      className="relative w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Floating particles */}
                    <motion.div 
                      className="absolute top-4 right-4 w-2 h-2 bg-primary-orange rounded-full"
                      animate={{ 
                        y: [0, -6, 0],
                        opacity: [1, 0.6, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-primary-violet rounded-full"
                      animate={{ 
                        y: [0, -4, 0],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Text Content with Precise Sizing and Parallax */}
            <motion.div 
              ref={textRef}
              variants={itemVariants} 
              className="space-y-6 order-1 lg:order-2"
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "5%"]) }}
            >
              <Card className="glass-strong border-white/10 hover:border-white/20 transition-all duration-500 hover-lift">
               <CardContent className="p-6 space-y-4">
  <motion.div 
    variants={itemVariants}
    className="space-y-4"
  >
    <div className="space-y-3">
      <p className="text-base text-gray-200 leading-relaxed">
        Hi, I’m <span className="text-primary-orange font-bold">Zubair Ibne Zahir</span>, 
        a Computer Science student at North South University, currently in my 3rd year, 
        with a strong interest in frontend and full-stack web development.
      </p>
      
      <p className="text-sm text-gray-300 leading-relaxed">
        My programming journey started with a simple curiosity about how websites are built 
        and how user interactions work behind the scenes. Over time, that curiosity turned 
        into a passion for creating clean, responsive, and meaningful web experiences. 
        I enjoy working with modern JavaScript and React, and I’m steadily building my 
        skills toward becoming a confident full-stack developer using the MERN stack.
      </p>

      <p className="text-sm text-gray-300 leading-relaxed">
        I enjoy turning ideas into functional interfaces, focusing on usability, clean UI, 
        and writing readable, maintainable code. I believe consistency, practice, and a 
        willingness to learn are key to growth in tech.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary-orange rounded-full animate-pulse" />
          <h4 className="text-white font-semibold text-sm">Beyond Coding</h4>
        </div>
        <p className="text-gray-400 text-xs leading-relaxed pl-4">
          Outside of programming, I enjoy playing football, traveling to new places, 
          and spending quality time with my family and loved ones. These activities help 
          me stay balanced and motivated.
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary-violet rounded-full animate-pulse" />
          <h4 className="text-white font-semibold text-sm">What Drives Me</h4>
        </div>
        <p className="text-gray-400 text-xs leading-relaxed pl-4">
          I enjoy sharing knowledge and occasionally teaching A-Level students, which has 
          helped me strengthen my communication skills and patience. I’m driven by growth, 
          meaningful work, and the goal of building solutions that positively impact people.
        </p>
      </div>
    </div>
  </motion.div>
</CardContent>

              </Card>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center p-4 glass rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift group"
              >
                <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-${stat.color} to-${stat.color}/70 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon size={16} className="text-white" />
                </div>
                <div className={`text-xl font-bold text-${stat.color} mb-1`}>
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About