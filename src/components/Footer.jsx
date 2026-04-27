import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleScrollToTop()
              }}
              whileHover={{ scale: 1.05 }}
              className="font-display font-bold text-2xl gradient-text"
            >
              SM.
            </motion.a>
            <p className="text-white/40 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-red-400 fill-red-400" /> by Shams Mohammed
            </p>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(link.toLowerCase())
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="text-white/40 hover:text-white text-sm transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={handleScrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-dark-700/50 border border-white/10 flex items-center justify-center hover:bg-accent-primary/20 hover:border-accent-primary/30 transition-all duration-300"
          >
            <ArrowUp size={18} className="text-white/60" />
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Shams Mohammed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
