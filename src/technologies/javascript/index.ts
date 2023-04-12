import { TechnologyList } from '@/types/Technology'

const javascriptTechnologies: TechnologyList = {
  /***
   * FRONTEND FRAMEWORKS
   */
  react: {
    package: 'react',
    name: 'React.js',
    description: 'React is a JavaScript library for creating user interfaces.',
  },
  vue: {
    package: 'vue',
    name: 'Vue.js',
    description: 'The progressive JavaScript framework for building modern web UI.',
  },
  '@angular/core': {
    package: '@angular/core',
    name: 'Angular',
    description: 'Angular is a platform for building mobile and desktop web applications.',
  },
  next: {
    package: 'next',
    name: 'Next.js',
    description: 'The React Framework',
  },
  astro: {
    package: 'astro',
    name: 'Astro',
    description:
      'Astro is a modern site builder with web best practices, performance, and DX front-of-mind.',
  },

  /***
   * BACKEND
   */
  express: {
    package: 'express',
    name: 'express',
    description: 'Fast, unopinionated, minimalist web framework',
  },
  mongodb: {
    package: 'mongodb',
    name: 'MongoDB',
    description: 'The official MongoDB driver for Node.js',
  },
  firebase: {
    package: 'firebase',
    name: 'Firebase',
    description: 'Firebase JavaScript library for web and Node.js',
  },

  /***
   * VISUALS
   */
  tailwindcss: {
    package: 'tailwindcss',
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
  },
  'styled-components': {
    package: 'styled-components',
    name: 'Styled Components',
    description:
      'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress',
  },
  '@mui/material': {
    package: '@mui/material',
    name: 'Material UI',
    description:
      'MUI Core contains foundational React UI component libraries for shipping new features faster.',
  },
  '@chakra-ui/react': {
    package: '@chakra-ui/react',
    name: 'Chakra UI',
    description: 'Responsive and accessible React UI components built with React and Emotion',
  },
  '@mantine/core': {
    package: '@mantine/core',
    name: 'Mantine',
    description:
      'React components library focused on usability, accessibility and developer experience',
  },

  /**
   * TESTING
   */
  jest: {
    package: 'jest',
    name: 'Jest',
    description: 'Delightful JavaScript Testing.',
  },
  mocha: {
    package: 'mocha',
    name: 'Mocha',
    description: 'Simple, flexible, fun test framework',
  },

  /**
   * STATE MANAGERS
   */
  redux: {
    package: 'redux',
    name: 'Redux',
    description: 'Predictable state container for JavaScript apps',
  },
  zustand: {
    package: 'zustand',
    name: 'Zustand',
    description: '🐻 Bear necessities for state management in React',
  },
  recoil: {
    package: 'recoil',
    name: 'Recoil',
    description: 'Recoil - A state management library for React',
  },
  jotai: {
    package: 'jotai',
    name: 'Jotai',
    description: '👻 Primitive and flexible state management for React',
  },

  /**
   * OTHER
   */
  jquery: {
    package: 'jquery',
    name: 'jQuery',
    description: 'JavaScript library for DOM operations',
  },
}

export default javascriptTechnologies
