import { TechnologyList } from '@/types/Technology'

const rubyTechnologies: TechnologyList = {
  /**
   * WEB FRAMEWORK
   */
  rails: {
    package: 'rails',
    name: 'rails',
    description: 'A full-stack web application framework for Ruby.',
  },

  /**
   * AUTHENTICATION
   */
  devise: {
    package: 'devise',
    name: 'devise',
    description: 'A flexible authentication solution for Rails with Warden.',
  },

  /**
   * TESTING
   */
  capybara: {
    package: 'capybara',
    name: 'capybara',
    description:
      'Capybara is an integration testing tool for rack-based web applications. It simulates how a user would interact with a website.',
  },
  rspec: {
    package: 'rspec',
    name: 'rspec',
    description:
      'A popular testing framework for Ruby that provides a behavior-driven development (BDD) approach.',
  },

  /**
   * GUI
   */
  shoes: {
    package: 'shoes',
    name: 'shoes',
    description:
      'A GUI toolkit for Ruby that allows you to create desktop applications with native look and feel.',
  },

  /**
   * AUTOMATION
   */
  cucumber: {
    package: 'cucumber',
    name: 'cucumber',
    description:
      'A tool for behavior-driven development (BDD) that allows you to write tests in a natural language format.',
  },

  /**
   * NETWORKING
   */
  net_http: {
    package: 'net_http',
    name: 'net_http',
    description: 'A standard library in Ruby for making HTTP requests and handling HTTP responses.',
  },

  /**
   * GAME DEVELOPMENT
   */
  gosu: {
    package: 'gosu',
    name: 'gosu',
    description:
      'A 2D game development library for Ruby that provides an easy-to-use interface for creating games.',
  },

  /**
   * WEB SCRAPING
   */
  nokogiri: {
    package: 'nokogiri',
    name: 'nokogiri',
    description:
      'A powerful HTML parsing and manipulation library for Ruby that makes web scraping tasks easier.',
  },

  /**
   * SECURITY
   */
  brakeman: {
    package: 'brakeman',
    name: 'brakeman',
    description:
      'A static analysis tool for Ruby on Rails applications that detects security vulnerabilities.',
  },

  /**
   * ADMINISTRATION
   */
  activeadmin: {
    package: 'activeadmin',
    name: 'activeadmin',
    description: 'A flexible and customizable administration framework for Rails applications.',
  },

  /**
   * DATABASE
   */
  pg: {
    package: 'pg',
    name: 'pg',
    description:
      'A Ruby interface to the PostgreSQL database, allowing interaction with PostgreSQL databases.',
  },

  /**
   * FRONT-END STYLING
   */
  bootstrap: {
    package: 'bootstrap',
    name: 'bootstrap',
    description:
      'A popular front-end CSS framework for building responsive and mobile-first web pages.',
  },

  /**
   * BACKGROUND JOB PROCESSING
   */
  sidekiq: {
    package: 'sidekiq',
    name: 'sidekiq',
    description:
      'A background job processing library for Ruby that uses threads to handle concurrent processing.',
  },

  /**
   * FILE HANDLING
   */
  carrierwave: {
    package: 'carrierwave',
    name: 'carrierwave',
    description:
      'A file upload library for Ruby that provides a simple and flexible way to handle file uploads in web applications.',
  },
  paperclip: {
    package: 'paperclip',
    name: 'paperclip',
    description:
      'A file attachment library for ActiveRecord in Ruby that simplifies handling of file uploads to models.',
  },

  fileutils: {
    package: 'fileutils',
    name: 'fileutils',
    description:
      'A standard library in Ruby for manipulating files and directories, providing file-related utilities.',
  },

  /**
   * EMAIL
   */
  mail: {
    package: 'mail',
    name: 'mail',
    description:
      'A library for sending and receiving email in Ruby, supporting various protocols and MIME types.',
  },

  /**
   * API CLIENTS
   */
  rest_client: {
    package: 'rest-client',
    name: 'rest-client',
    description:
      'A simple HTTP and REST client for Ruby that makes it easy to interact with RESTful APIs.',
  },

  /**
   * IMAGE PROCESSING
   */
  mini_magick: {
    package: 'mini_magick',
    name: 'mini_magick',
    description:
      'A wrapper around the ImageMagick command line tools for processing images in Ruby.',
  },

  /**
   * UTILITIES
   */
  pry: {
    package: 'pry',
    name: 'pry',
    description:
      'A powerful and extensible REPL (Read-Eval-Print Loop) for Ruby that provides enhanced debugging and exploration features.',
  },

  /**
   * CODE FORMATTING
   */
  rubocop: {
    package: 'rubocop',
    name: 'rubocop',
    description:
      'A popular static code analyzer and formatter for Ruby that enforces a consistent code style.',
  },
}

export default rubyTechnologies
