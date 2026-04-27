# Shams Mohammed - Frontend Developer Portfolio

A modern, responsive, and animated personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## Live Demo

**https://kogrvgc5viz6e.kimi.show**

## Features

- Dark mode theme with animated particle background
- Smooth scroll navigation with active section highlighting
- Framer Motion animations and hover effects
- Glassmorphism design cards
- Fully responsive layout
- Interactive skills section with animated progress bars
- Project showcase with generated AI thumbnails
- Contact form with copy-to-clipboard functionality

## Tech Stack

- React 18
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Vite

## Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.jsx  # Canvas particle animation
│   ├── Navbar.jsx              # Responsive navigation
│   ├── Hero.jsx                # Hero section
│   ├── About.jsx               # About me section
│   ├── Skills.jsx              # Skills with progress bars
│   ├── Projects.jsx            # Project cards grid
│   ├── Contact.jsx             # Contact info & form
│   └── Footer.jsx              # Footer
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Build Workaround

If you encounter esbuild permission errors during build on certain systems, use:

```bash
ESBUILD_BINARY_PATH=/tmp/esbuild npm run build
```

## Customization

- Update personal info in component files
- Replace project images in the `public/` folder
- Modify color scheme in `tailwind.config.js`
- Adjust animations in component files using Framer Motion props

## Sections

1. **Hero** - Name, title, animated avatar, CTA buttons
2. **About** - Bio, education, stats cards
3. **Skills** - HTML, CSS, JavaScript, React, Tailwind, Git with animated bars
4. **Projects** - Egypt Through The Ages, Solea, TraiBlaze with live demo & GitHub links
5. **Contact** - Email, phone, social links, contact form

## License

MIT - feel free to use this template for your own portfolio.
