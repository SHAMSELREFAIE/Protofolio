import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { User, BookOpen, Target, Heart } from 'lucide-react'

function About() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: BookOpen, label: 'Study Period', value: '2023 - 2026' },
    { icon: Target, label: 'Expected Graduation', value: '2026' },
    { icon: Heart, label: 'Passion', value: 'Frontend Dev' },
  ]

  return (
    <section id="about" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
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
            <User size={16} />
            <span>About Me</span>
          </motion.div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let Me <span className="gradient-text">Introduce</span> Myself
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="glass-card p-8 lg:p-10">
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                I am a <span className="text-accent-primary font-semibold">frontend developer student</span> passionate about building 
                modern and responsive websites. I work with HTML, CSS, JavaScript, React, and Tailwind CSS to create 
                beautiful and functional web experiences.
              </p>
              
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Currently studying at <span className="text-accent-secondary font-semibold">WE School for Applied Technology</span> in the 
                Programming Department, I have worked on multiple real-world projects and I am continuously 
                improving my skills to stay up-to-date with the latest technologies.
              </p>
              
              <p className="text-white/70 text-lg leading-relaxed">
                I love transforming creative ideas into interactive digital experiences. 
                My goal is to become a professional frontend developer who builds products that make a difference.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="glass-card p-6 flex items-center gap-5 group cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center group-hover:from-accent-primary/30 group-hover:to-accent-secondary/30 transition-all duration-300">
                  <stat.icon size={24} className="text-accent-primary" />
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">{stat.label}</p>
                  <p className="text-white font-display font-semibold text-xl">{stat.value}</p>
                </div>
              </motion.div>
            ))}

            {/* School info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center shrink-0">
                  <BookOpen size={22} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Education</p>
                  <p className="text-white font-semibold">WE School for Applied Technology</p>
                  <p className="text-white/60 text-sm mt-1">Programming Department • 2023 - 2026</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
