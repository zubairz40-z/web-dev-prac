import { useState, useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'

const Projects = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(null)
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]), {
    stiffness: 100,
    damping: 30
  })
  
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "20%"]), {
    stiffness: 100,
    damping: 30
  })

  const projects = [
    {
      id: 1,
      title: "TravelEase - Car Rental App",
      category: "MERN Stack",
      description: "A full-stack rent-a-car application with responsive UI and authentication.",
      image: "https://github.com/zubairz40-z/zubairz40-z/raw/main/Screenshot%202025-12-31%20185425.png",
      technologies: [
        { name: "React", icon: "⚛️", color: "text-blue-400" },
        { name: "Node.js", icon: "🟢", color: "text-green-400" },
        { name: "Express", icon: "🚀", color: "text-gray-300" },
        { name: "MongoDB", icon: "🍃", color: "text-green-500" },
        { name: "Firebase", icon: "🔥", color: "text-orange-400" }
      ],
      liveUrl: "https://travelease-fec80.web.app",
      githubUrl: "https://github.com/zubairz40-z",
      challenges: "Managing state of complex booking forms was difficult. I also struggled a bit with connecting MongoDB database securely.",
      improvements: "I hope to learn how to integrate a secure payment gateway (Stripe) and improve UI animations in the future.",
      features: [
        "User authentication with Firebase",
        "Car booking system with date validation",
        "Responsive design for all devices",
        "Real-time availability checking",
        "Admin dashboard for car management"
      ]
    },
    {
      id: 2,
      title: "Blood Drop - Donation Platform",
      category: "MERN Stack",
      description: "A donation platform connecting donors and recipients with clean UI and auth.",
      image: "https://github.com/zubairz40-z/zubairz40-z/raw/main/Screenshot%202025-12-31%20185012.png ",
      technologies: [
        { name: "React", icon: "⚛️", color: "text-blue-400" },
        { name: "Node.js", icon: "🟢", color: "text-green-400" },
        { name: "Express", icon: "🚀", color: "text-gray-300" },
        { name: "MongoDB", icon: "🍃", color: "text-green-500" },
        { name: "Firebase", icon: "🔥", color: "text-orange-400" }
      ],
      liveUrl: "https://blood-drop-b7711.web.app",
      githubUrl: "https://github.com/zubairz40-z",
      challenges: "Ensuring real-time updates for urgent blood requests was a challenge without WebSockets. I had to implement efficient polling strategies.",
      improvements: "I want to add geolocation features to find donors nearby and add SMS notifications for urgent requests.",
      features: [
        "Blood donor registration system",
        "Emergency request posting",
        "Location-based donor search",
        "Real-time notifications",
        "Donation history tracking"
      ]
    },
    {
      id: 3,
      title: "Z Game Hub - Game Discovery",
      category: "Frontend",
      description: "A responsive game discovery UI built with React, Tailwind, and JSON data.",
      image: "https://github.com/zubairz40-z/zubairz40-z/raw/main/Screenshot%202025-12-31%20185125ss.png",
      technologies: [
        { name: "React", icon: "⚛️", color: "text-blue-400" },
        { name: "Tailwind CSS", icon: "💨", color: "text-cyan-400" },
        { name: "JavaScript", icon: "⚡", color: "text-yellow-400" },
        { name: "Firebase", icon: "🔥", color: "text-orange-400" }
      ],
      liveUrl: "https://z-game-hub.netlify.app",
      githubUrl: "https://github.com/zubairz40-z",
      challenges: "Handling large JSON datasets efficiently without causing lag in browser was a learning curve.",
      improvements: "I plan to add a feature where users can log in and save their favorite games to a list.",
      features: [
        "Game search and filtering",
        "Responsive grid layout",
        "Game details modal",
        "Category-based browsing",
        "Smooth animations and transitions"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const projectVariants = {
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
    <section id="projects" ref={sectionRef} className="py-12 md:py-16 relative">
      {/* Enhanced Background Elements with Parallax */}
      <motion.div 
        className="absolute top-1/3 left-0 w-72 h-72 bg-gradient-to-r from-primary-blue/8 to-primary-violet/8 rounded-full blur-3xl"
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
        className="absolute bottom-1/3 right-0 w-80 h-80 bg-gradient-to-r from-primary-orange/8 to-primary-blue/8 rounded-full blur-3xl"
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
      
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "5%"]) }}
        >
          <div>
            <span className="text-neon-blue font-mono text-sm uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
              My Projects
            </h2>
          </div>
          <Button variant="glass" asChild>
            <a 
              href="https://github.com/zubairz40-z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 md:mt-0"
            >
              View GitHub <ExternalLink size={16} />
            </a>
          </Button>
        </motion.div>

        {/* Projects Grid with Parallax */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ y }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={projectVariants}>
              <Card className="group relative rounded-xl overflow-hidden border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                
                {/* Project Image */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button
                        variant="neon"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <Eye size={16} className="mr-1" />
                        Details
                      </Button>
                      <Button
                        variant="glass"
                        size="sm"
                        asChild
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-neon-blue uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-neon-blue transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Enhanced Tech Stack with Icons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <motion.div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-1.5 glass rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift group"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform">
                          {tech.icon}
                        </span>
                        <span className={`text-xs font-mono ${tech.color} group-hover:text-white transition-colors`}>
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1.5 text-xs font-mono text-gray-500 glass rounded-xl border border-gray-700">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <Button 
                    variant="glass" 
                    className="w-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-neon-blue">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-400 flex items-center gap-2 flex-wrap">
                    <span>{selectedProject.category}</span>
                    <span>•</span>
                    <div className="flex items-center gap-2 flex-wrap">
                      {selectedProject.technologies.map((tech) => (
                        <div key={tech.name} className="flex items-center gap-1">
                          <span className="text-sm">{tech.icon}</span>
                          <span className={`text-sm ${tech.color}`}>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="w-full h-64 rounded-lg overflow-hidden border border-white/10">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">About This Project</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <span className="text-neon-blue mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges & Improvements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass p-4 rounded-lg border border-white/10">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <span className="text-red-400">⚠️</span>
                        Challenges
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {selectedProject.challenges}
                      </p>
                    </div>
                    <div className="glass p-4 rounded-lg border border-white/10">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <span className="text-green-400">🚀</span>
                        Future Improvements
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {selectedProject.improvements}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button variant="neon" asChild className="flex-1">
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="glass" asChild className="flex-1">
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default Projects