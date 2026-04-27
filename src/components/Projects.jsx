import React from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Folder, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Egypt Through The Ages',
    description: 'An interactive web experience showcasing the rich history of Egypt from ancient civilizations to modern times. Features beautiful visuals and engaging storytelling.',
    image: '/egypt-project.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    color: '#f59e0b',
  },
  {
    title: 'Solea',
    description: 'A modern e-commerce platform focused on footwear. Clean UI design with smooth interactions, product filtering, and a seamless shopping experience.',
    image: 'https://i.pinimg.com/webp85/736x/36/b1/9d/36b19d001486cdb7667feb13532bee44.webp',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://shamselrefaie.github.io/Sol-a/',
    githubUrl: 'https://github.com/SHAMSELREFAIE/Sol-a',
    color: '#e375bf',
  },
  {
    title: 'TraiBlaze',
    description: 'A travel exploration platform that helps users discover new destinations. Features interactive maps, itinerary planning, and travel guides.',
    image: '/traiblaze-project.jpg',
    tags: ['React', 'CSS', 'JavaScript'],
    liveUrl: 'https://shamselrefaie.github.io/TRAIBLAZE/',
    githubUrl: 'https://github.com/SHAMSELREFAIE/TRAIBLAZE',
    color: '#10b981',
  },
  {
  title: 'Captcha System',
  description: 'A simple and interactive captcha verification system to enhance form security. Generates random codes and validates user input with smooth UI feedback.',
  image: 'https://i.pinimg.com/736x/26/86/1c/26861ce966c34c51445b5bcdd2a7d1ee.jpg', 
  tags: ['JavaScript', 'HTML', 'CSS'],
  liveUrl: 'https://shamselrefaie.github.io/Captcha-System/',
  githubUrl: 'https://github.com/SHAMSELREFAIE/Captcha-System',
  color: '#4ade80',
}
]

function ProjectCard({ project, index }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="glass-card overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent-primary/10">
        {/* Project Image */}
        <div className="relative h-52 sm:h-60 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
          
          {/* Floating arrow icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ArrowUpRight size={18} className="text-white" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${project.color}20` }}
            >
              <Folder size={20} style={{ color: project.color }} />
            </div>
            <h3 className="text-white font-display font-bold text-xl group-hover:text-accent-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.liveUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-primary/25 transition-shadow duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/5 transition-colors duration-300"
            >
              <Github size={16} />
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
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
            <Folder size={16} />
            <span>My Projects</span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've built. Each one taught me something new and helped me grow as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

