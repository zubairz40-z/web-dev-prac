import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Github, Linkedin, Mail, Facebook, Globe, Heart, ArrowUp, Code2 } from 'lucide-react'

const Footer = () => {
  const { scrollYProgress } = useScroll()
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]), {
    stiffness: 100,
    damping: 30
  })

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/zubairz40-z', 
      label: 'GitHub',
      color: 'hover:text-gray-300 hover:border-gray-300/30'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/zubair-ibne-zahir', 
      label: 'LinkedIn',
      color: 'hover:text-primary-blue hover:border-primary-blue/30'
    },
    { 
      icon: Mail, 
      href: 'mailto:zahirzubair740@gmail.com', 
      label: 'Email',
      color: 'hover:text-primary-orange hover:border-primary-orange/30'
    },
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/zubair.zahir.714', 
      label: 'Facebook',
      color: 'hover:text-primary-violet hover:border-primary-violet/30'
    },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Enhanced Background Effects with Parallax */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-orange/10 to-primary-violet/10 rounded-full blur-3xl"
        style={{ y }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-primary-blue/10 to-primary-orange/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Logo */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="relative w-12 h-12 border-2 border-primary-orange flex items-center justify-center text-lg font-bold text-primary-orange rounded-xl bg-gradient-to-br from-primary-orange/10 to-primary-violet/10 backdrop-blur-sm"
                    whileHover={{ 
                      rotate: 5,
                      scale: 1.05,
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
                    Z.
                  </motion.div>
                  <div>
                    <motion.span 
                      className="font-mono text-xl text-white font-bold tracking-wider block"
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
                  </div>
                </div>

                {/* Name and Title */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    Md Zubair Ibne Zahir
                  </h3>
                  <p className="text-primary-orange font-semibold text-lg mb-4">
                    Frontend & MERN Stack Developer
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed max-w-md text-base">
                  Passionate about crafting exceptional digital experiences with modern web technologies. 
                  Building scalable, user-centric applications that make a difference.
                </p>

                {/* Made with Love */}
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Code2 size={16} className="text-primary-violet" />
                  <span>Crafted with</span>
                  <Heart size={16} className="text-red-500 animate-pulse" />
                  <span>using React, Tailwind CSS & Framer Motion</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary-orange to-primary-violet rounded-full" />
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-gray-300 hover:text-primary-orange transition-all duration-300 text-base font-medium flex items-center gap-2 group"
                        whileHover={{ x: 8 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Connect Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary-violet to-primary-blue rounded-full" />
                  Let's Connect
                </h4>
                
                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  <motion.div 
                    className="text-gray-300 text-sm flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <Mail size={16} className="text-primary-orange" />
                    <span className="font-mono">zahirzubair740@gmail.com</span>
                  </motion.div>
                  <motion.div 
                    className="text-gray-300 text-sm flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <Globe size={16} className="text-primary-violet" />
                    <span>Dhaka, Bangladesh</span>
                  </motion.div>
                </div>
                
                {/* Social Links */}
                <div className="space-y-4">
                  <p className="text-gray-400 text-sm font-medium">Follow me on:</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 glass-strong rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover-lift group border border-white/10 ${social.color}`}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.3 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                        viewport={{ once: true }}
                      >
                        <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm font-mono">
                © 2026 Md Zubair Ibne Zahir. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed & Developed with passion for excellence
              </p>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-6 py-3 glass-strong rounded-xl text-gray-300 hover:text-primary-orange transition-all duration-300 hover-lift border border-white/10 hover:border-primary-orange/30 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp size={16} className="group-hover:animate-bounce" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer