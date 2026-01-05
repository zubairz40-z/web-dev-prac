import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen, FileText, Sparkles, Code2 } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const Education = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]), {
    stiffness: 100,
    damping: 30
  })
  
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "22%"]), {
    stiffness: 100,
    damping: 30
  })

const educationData = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "North South University",
    location: "Dhaka, Bangladesh",
    period: "2023 - Present",
    status: "Currently Enrolled",
    highlights: [
      "MERN Stack & Web Development",
      "Data Structures & Algorithms",
      "Projects: E-commerce Platform, Task Management System"
    ],
    color: "primary-orange",
    icon: GraduationCap
  }
  ,
  {
    id: 2,
    degree: "Cambridge A Levels",
    institution: "Manarat Dhaka International School & College",
    location: "Dhaka, Bangladesh",
    period: "2020 - 2022",
    status: "Completed",
    highlights: [
      "Mathematics, Physics, Computer Science",
      "Logical Thinking & Problem Solving"
    ],
    color: "primary-blue",
    icon: BookOpen
  },
  {
    id: 3,
    degree: "Web Development Certification",
    institution: "Programming Hero",
    location: "Online",
    period: "2024 - Present",
    status: "Professional Certificate",
    highlights: [
      "Full-stack MERN Development",
      "Real Projects: Portfolio & Web Apps",
      "Best Practices: Clean Code & Deployment"
    ],
    color: "primary-violet",
    icon: FileText,
    badge: "Certificate",
    isSpecial: true
  }
]

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

  return (
    <section id="education" ref={sectionRef} className="py-16 md:py-20 relative overflow-hidden">
      {/* Enhanced Background Elements with Parallax */}
      <motion.div 
        className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-primary-violet/8 to-primary-blue/8 rounded-full blur-3xl"
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
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-primary-orange/8 to-primary-violet/8 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]) }}
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
        
        {/* Section Header with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "6%"]) }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-primary-violet/40 mb-4 hover-lift"
            whileHover={{ scale: 1.05 }}
          >
            <GraduationCap size={18} className="text-primary-violet" />
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
              Academic Journey
            </span>
            <Sparkles size={14} className="text-primary-orange" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Education & <span className="gradient-text">Learning Path</span>
          </motion.h2>
          
          <motion.p 
            className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building a strong foundation in computer science while continuously expanding knowledge through 
            practical projects, professional certifications, and modern technologies.
          </motion.p>
        </motion.div>

        {/* Education Timeline with Parallax */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
          style={{ y }}
        >
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-orange via-primary-violet to-primary-blue opacity-40 rounded-full"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              style={{ transformOrigin: "top" }}
            />

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex-row items-center`}
              >
                {/* Timeline Node */}
                <motion.div 
                  className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-20"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className={`relative w-12 h-12 rounded-full glass-strong border-2 border-${edu.color} flex items-center justify-center shadow-lg ${
                      edu.isSpecial ? 'animate-pulse-glow' : ''
                    }`}
                  >
                    <edu.icon size={20} className={`text-${edu.color} relative z-10`} />
                  </motion.div>
                </motion.div>

                {/* Content Card with Individual Parallax */}
                <motion.div 
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
                  }`}
                  style={{ 
                    y: useTransform(scrollYProgress, [0, 1], [`${index * -2}%`, `${index * 2}%`])
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`glass-strong border-white/10 hover:border-${edu.color}/30 transition-all duration-500 hover-lift relative overflow-hidden`}>
                    
                    <CardContent className="p-6 relative z-10">
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <motion.span 
                          className={`px-3 py-1 rounded-xl text-xs font-bold bg-${edu.color}/20 text-${edu.color} border border-${edu.color}/40`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {edu.status}
                          {edu.badge && (
                            <span className="ml-1 text-xs">✨</span>
                          )}
                        </motion.span>
                        
                        <motion.div 
                          className="flex items-center gap-2 text-xs text-gray-400 px-2 py-1 glass rounded-lg"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar size={12} />
                          {edu.period}
                        </motion.div>
                      </div>

                      {/* Institution */}
                      <motion.h3 
                        className="text-lg font-bold text-white mb-2 hover:text-primary-orange transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      
                      <motion.div 
                        className="flex items-center gap-2 text-gray-300 mb-2"
                        whileHover={{ x: 2 }}
                      >
                        <Award size={14} />
                        <span className="font-medium text-base">{edu.institution}</span>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center gap-2 text-gray-400 mb-4"
                        whileHover={{ x: 2 }}
                      >
                        <MapPin size={12} />
                        <span className="text-xs">{edu.location}</span>
                      </motion.div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <motion.h4 
                          className="text-xs font-bold text-white flex items-center gap-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          <Code2 size={12} className={`text-${edu.color}`} />
                          Key Highlights:
                        </motion.h4>
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start gap-2 text-xs text-gray-300"
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.7 + index * 0.2 + idx * 0.1 }}
                              whileHover={{ x: 2, scale: 1.01 }}
                            >
                              <motion.span 
                                className={`w-1 h-1 rounded-full bg-${edu.color} mt-1.5 flex-shrink-0`}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                              />
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Self-Learning & Skills Development */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* MERN Stack Learning */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass-strong border-primary-violet/20 hover:border-primary-violet/40 transition-all duration-500 h-full relative overflow-hidden">
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-violet to-primary-blue flex items-center justify-center shadow-lg"
                    >
                      <Code2 size={20} className="text-white" />
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-lg font-bold text-white mb-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        MERN Stack Mastery
                      </motion.h3>
                      <motion.span 
                        className="px-2 py-1 rounded-lg bg-primary-violet/20 text-primary-violet text-xs font-medium border border-primary-violet/30"
                      >
                        Self-Taught Developer
                      </motion.span>
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-4 text-sm"
                  >
                    Dedicated self-learner with hands-on experience in modern web development. 
                    Building real-world projects and continuously expanding skillset.
                  </motion.p>
                  
                  <div className="space-y-3">
                    <h4 className="text-white font-bold flex items-center gap-2 text-sm">
                      <Sparkles size={12} className="text-primary-violet" />
                      Core Technologies:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: 'React.js', icon: '⚛️', level: 'Advanced' },
                        { name: 'Node.js', icon: '🟢', level: 'Advanced' },
                        { name: 'MongoDB', icon: '🍃', level: 'Intermediate' },
                        { name: 'Express.js', icon: '🚀', level: 'Advanced' }
                      ].map((tech, idx) => (
                        <motion.div
                          key={tech.name}
                          className="flex items-center gap-2 p-2 glass rounded-lg border border-white/10 hover:border-primary-violet/30 transition-all duration-300"
                          whileHover={{ scale: 1.02, x: 2 }}
                        >
                          <span className="text-sm">{tech.icon}</span>
                          <div>
                            <div className="text-xs font-medium text-white">{tech.name}</div>
                            <div className="text-xs text-primary-violet">{tech.level}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Continuous Learning */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass-strong border-primary-orange/20 hover:border-primary-orange/40 transition-all duration-500 h-full relative overflow-hidden">
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-orange to-primary-blue flex items-center justify-center shadow-lg"
                    >
                      <BookOpen size={20} className="text-white" />
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-lg font-bold text-white mb-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        Continuous Learning
                      </motion.h3>
                      <motion.span 
                        className="px-2 py-1 rounded-lg bg-primary-orange/20 text-primary-orange text-xs font-medium border border-primary-orange/30"
                      >
                        Always Growing
                      </motion.span>
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-4 text-sm"
                  >
                    Passionate about staying current with emerging technologies and industry trends. 
                    Actively learning new frameworks and tools.
                  </motion.p>
                  
                  <div className="space-y-3">
                    <h4 className="text-white font-bold flex items-center gap-2 text-sm">
                      <Sparkles size={12} className="text-primary-orange" />
                      Currently Exploring:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'Next.js', color: 'text-gray-300' },
                        { name: 'TypeScript', color: 'text-blue-400' },
                        { name: 'GraphQL', color: 'text-pink-400' },
                        { name: 'Docker', color: 'text-blue-500' },
                        { name: 'AWS', color: 'text-orange-400' },
                        { name: 'Redux Toolkit', color: 'text-purple-400' }
                      ].map((tech, idx) => (
                        <motion.span 
                          key={tech.name}
                          className={`px-2 py-1 glass rounded-lg border border-white/10 hover:border-primary-orange/30 text-xs font-medium ${tech.color} transition-all duration-300 hover-lift cursor-default`}
                          whileHover={{ scale: 1.05, y: -1 }}
                        >
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education