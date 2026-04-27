import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shamsalrifaie04@gmail.com',
    href: 'mailto:shamsalrifaie04@gmail.com',
    color: '#ea4335',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+20 155 839 0402',
    href: 'tel:+201558390402',
    color: '#34a853',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Egypt',
    href: '#',
    color: '#4285f4',
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shams-mohammed-3a0ba3322/',
    color: '#0a66c2',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/SHAMSELREFAIE',
    color: '#333',
  },
]

function ContactCard({ info, index }) {
  const [copied, setCopied] = useState(false)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const handleCopy = async () => {
    if (info.label === 'Email' || info.label === 'Phone') {
      await navigator.clipboard.writeText(info.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <a
        href={info.href}
        onClick={info.label === 'Location' ? (e) => e.preventDefault() : undefined}
        className="glass-card p-6 flex items-center gap-4 group hover:bg-dark-700/60 transition-all duration-300"
      >
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${info.color}15` }}
        >
          <info.icon size={24} style={{ color: info.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white/50 text-sm mb-0.5">{info.label}</p>
          <p className="text-white font-medium truncate">{info.value}</p>
        </div>
        {(info.label === 'Email' || info.label === 'Phone') && (
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleCopy()
            }}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            title="Copy to clipboard"
          >
            {copied ? (
              <Check size={18} className="text-green-400" />
            ) : (
              <Copy size={18} className="text-white/40" />
            )}
          </button>
        )}
      </a>
    </motion.div>
  )
}

function Contact() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-sm font-medium mb-6"
          >
            <Send size={16} />
            <span>Get In Touch</span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-white font-display font-semibold text-xl mb-6"
            >
              Contact Information
            </motion.h3>
            
            {contactInfo.map((info, index) => (
              <ContactCard key={info.label} info={info} index={index} />
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="pt-6"
            >
              <h4 className="text-white/50 text-sm mb-4">Social Links</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-dark-700/50 border border-white/10 flex items-center justify-center hover:bg-dark-600 transition-colors duration-300"
                    style={{ '--hover-color': social.color }}
                  >
                    <social.icon size={22} className="text-white/70 hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-white font-display font-semibold text-xl mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-white/50 text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/50 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-white/50 text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/50 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-white/50 text-sm mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Hi Shams, I'd like to discuss..."
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/50 transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-primary/25 transition-shadow duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
