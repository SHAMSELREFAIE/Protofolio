import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Palette, GitBranch, Layers, Zap, Terminal } from 'lucide-react'

const skills = [
  {
    name: 'HTML5',
    level: 95,
    icon: Code,
    color: '#e34c26',
    description: 'Semantic markup & accessibility',
  },
  {
    name: 'CSS3',
    level: 90,
    icon: Palette,
    color: '#264de4',
    description: 'Flexbox, Grid, Animations',
  },
  {
    name: 'JavaScript',
    level: 85,
    icon: Zap,
    color: '#f7df1e',
    description: 'ES6+, DOM, Async programming',
  },
  {
    name: 'React',
    level: 80,
    icon: Layers,
    color: '#61dafb',
    description: 'Hooks, Components, State management',
  },
  {
    name: 'Tailwind CSS',
    level: 88,
    icon: Palette,
    color: '#06b6d4',
    description: 'Utility-first styling',
  },
  {
    name: 'Git',
    level: 75,
    icon: GitBranch,
    color: '#f05032',
    description: 'Version control & collaboration',
  },
]

function SkillBar({ skill, index }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${skill.color}20` }}
        >
          <skill.icon size={24} style={{ color: skill.color }} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
            <span className="text-white/60 font-mono text-sm">{skill.level}%</span>
          </div>
          <p className="text-white/40 text-sm">{skill.description}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: 0.3 + index * 0.1, duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: skill.color }}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  )
}

function Skills() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
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
            <Terminal size={16} />
            <span>My Skills</span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            I'm constantly learning and expanding my toolkit to build better web experiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
