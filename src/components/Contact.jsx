import { useState, useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import { Mail, Phone, MessageCircle, Github, Linkedin, Facebook, Send } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const Contact = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]), {
    stiffness: 100,
    damping: 30
  })
  
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "15%"]), {
    stiffness: 100,
    damping: 30
  })

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "zahirzubair740@gmail.com",
      href: "mailto:zahirzubair740@gmail.com",
      color: "neon-blue"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "01954273593",
      href: "tel:+8801954273593",
      color: "neon-violet"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/8801954273593",
      color: "neon-teal"
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zubairz40-z', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/zubair-ibne-zahir', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:zahirzubair740@gmail.com', label: 'Email' },
    { icon: Facebook, href: 'https://www.facebook.com/zubair.zahir.714', label: 'Facebook' },
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    }, 1500)
  }

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
    <section id="contact" ref={sectionRef} className="py-12 md:py-16 relative overflow-hidden">
      {/* Enhanced Background Effects with Parallax */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none"
        style={{ y: backgroundY }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-neon-violet/5 rounded-full blur-[120px] pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]) }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "4%"]) }}
        >
          <span className="text-neon-blue font-mono text-sm uppercase tracking-widest">
            Let's Connect
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I am always open to discussing new projects, opportunities, or just having a chat about technology and development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
          style={{ y }}
        >
          <Card className="glass border-white/10 p-8 lg:p-16">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Contact Information */}
                <motion.div variants={itemVariants} className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Let's start a conversation
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Whether you have a project in mind, want to collaborate, or just want to say hello, 
                      I'd love to hear from you. Feel free to reach out through any of the channels below.
                    </p>
                  </div>

                  {/* Enhanced Contact Methods */}
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <motion.a
                        key={contact.title}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-5 glass-strong rounded-2xl border border-white/10 hover:border-primary-orange/30 transition-all duration-500 group hover-lift relative overflow-hidden"
                        variants={itemVariants}
                        whileHover={{ x: 10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Enhanced background effect */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-primary-orange/5 via-primary-violet/5 to-primary-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          whileHover={{ scale: 1.05 }}
                        />
                        
                        {/* Enhanced icon container */}
                        <motion.div 
                          className={`relative w-14 h-14 bg-gradient-to-br from-${contact.color}/20 to-${contact.color}/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-${contact.color} group-hover:shadow-lg group-hover:shadow-${contact.color}/20 transition-all duration-500 border border-${contact.color}/20`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          {/* Glow effect */}
                          <motion.div 
                            className={`absolute inset-0 bg-${contact.color}/20 rounded-2xl blur opacity-0 group-hover:opacity-60`}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                          />
                          <contact.icon size={22} className="relative z-10" />
                        </motion.div>
                        
                        <div className="relative z-10">
                          <motion.h4 
                            className="text-white font-bold mb-1 group-hover:text-primary-orange transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            {contact.title}
                          </motion.h4>
                          <motion.p 
                            className="text-gray-400 text-sm font-mono group-hover:text-gray-300 transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                          >
                            {contact.value}
                          </motion.p>
                        </div>
                        
                        {/* Shimmer effect */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.a>
                    ))}
                  </div>

                  {/* Enhanced Social Links */}
                  <motion.div variants={itemVariants} className="pt-8">
                    <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></span>
                      Follow me on
                    </h4>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-14 h-14 glass-strong rounded-2xl flex items-center justify-center text-gray-400 hover:text-primary-orange transition-all duration-500 border border-white/10 hover:border-primary-orange/30 group overflow-hidden hover-lift"
                          whileHover={{ scale: 1.15, rotate: 10, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                          transition={{ 
                            delay: 1 + index * 0.1,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                        >
                          {/* Enhanced glow effect */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-primary-orange/20 to-primary-violet/20 rounded-2xl opacity-0 group-hover:opacity-100 blur"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Icon with enhanced effects */}
                          <motion.div
                            className="relative z-10"
                            whileHover={{ scale: 1.2, rotate: -10 }}
                          >
                            <social.icon size={22} />
                          </motion.div>
                          
                          {/* Shimmer effect */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          
                          {/* Tooltip */}
                          <motion.div 
                            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                            initial={{ y: 10, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                          >
                            <div className="px-3 py-2 glass-strong rounded-xl border border-primary-orange/30 shadow-xl">
                              <span className="text-xs font-mono text-white whitespace-nowrap font-semibold">
                                {social.label}
                              </span>
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-primary-orange rotate-45"></div>
                            </div>
                          </motion.div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div variants={itemVariants}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider">
                          Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                          className="bg-dark-bg/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider">
                          Email
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-dark-bg/50"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or just say hello..."
                        rows={6}
                        required
                        className="bg-dark-bg/50 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="neon" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send size={20} />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>

                  {/* Success Message */}
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-4 p-4 glass rounded-lg border border-green-500/30 bg-green-500/10"
                    >
                      <p className="text-green-400 text-sm font-mono flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact