import { TechnologyList } from '@/types/Technology'

const pythonTechnologies: TechnologyList = {
  /**
   * WEB FRAMEWORKS
   */
  Flask: {
    package: 'Flask',
    name: 'Flask',
    description:
      'A micro web framework for Python that allows you to easily build web applications.',
  },
  Django: {
    package: 'Django',
    name: 'Django',
    description:
      'A high-level Python web framework that follows the model-view-controller (MVC) architectural pattern.',
  },

  /**
   * DATA SCIENCE
   */
  numpy: {
    package: 'numpy',
    name: 'numpy',
    description:
      'A popular numerical computing library for Python that provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions.',
  },
  pandas: {
    package: 'pandas',
    name: 'pandas',
    description:
      'A powerful data manipulation and analysis library for Python that provides data structures like DataFrame and Series for handling and analyzing data in a flexible and efficient way.',
  },
  matplotlib: {
    package: 'matplotlib',
    name: 'matplotlib',
    description:
      'A plotting library for Python that provides an object-oriented API for embedding plots into applications and creating static, animated, and interactive visualizations in Python.',
  },

  /**
   * MACHINE LEARNING
   */
  tensorflow: {
    package: 'tensorflow',
    name: 'tensorflow',
    description:
      'A popular open-source machine learning framework for Python that provides a flexible platform for building and training machine learning models across a wide range of tasks and platforms.',
  },
  'scikit-learn': {
    package: 'scikit-learn',
    name: 'scikit-learn',
    description:
      'A powerful machine learning library for Python that provides a range of supervised and unsupervised learning algorithms for tasks such as classification, regression, clustering, and dimensionality reduction.',
  },

  /**
   * WEB SCRAPING
   */
  beautifulsoup4: {
    package: 'beautifulsoup4',
    name: 'beautifulsoup4',
    description:
      'A powerful library for web scraping in Python that provides tools for parsing HTML and XML documents, searching for elements, and extracting data from websites.',
  },

  /**
   * DATABASES
   */
  sqlalchemy: {
    package: 'sqlalchemy',
    name: 'sqlalchemy',
    description:
      'A popular Object Relational Mapper (ORM) library for Python that provides a set of high-level API for connecting and interacting with relational databases, making it easier to work with databases in Python applications.',
  },

  /**
   * TESTING
   */
  pytest: {
    package: 'pytest',
    name: 'pytest',
    description:
      'A popular testing framework for Python that makes it easy to write small, scalable, and maintainable tests for your code.',
  },

  /**
   * NETWORKING
   */
  requests: {
    package: 'requests',
    name: 'requests',
    description:
      'A popular library for making HTTP requests in Python, providing a simple and convenient API for sending HTTP/1.1 requests with various methods like GET, POST, PUT, DELETE, etc.',
  },

  /**
   * AUTOMATION
   */
  robotframework: {
    package: 'robotframework',
    name: 'Robot Framework',
    description:
      'A keyword-driven test automation framework for Python that allows for easy automation of web, desktop, and mobile applications.',
  },
  selenium: {
    package: 'selenium',
    name: 'Selenium',
    description:
      'A popular web testing framework for Python that provides a convenient API for automating web browsers and performing web testing tasks.',
  },
  pyautogui: {
    package: 'pyautogui',
    name: 'PyAutoGUI',
    description:
      'A cross-platform GUI automation library for Python that allows for automating GUI interactions, such as mouse and keyboard actions, screenshots, and more.',
  },

  /**
   * GUI
   */
  tkinter: {
    package: 'tkinter',
    name: 'Tkinter',
    description:
      'The standard Python interface to the Tk GUI toolkit, which allows for creating desktop applications with graphical user interfaces.',
  },
  kivy: {
    package: 'kivy',
    name: 'Kivy',
    description:
      'An open-source Python framework for developing multitouch applications and user interfaces for desktop and mobile platforms.',
  },
  pyqt: {
    package: 'PyQt',
    name: 'PyQt',
    description:
      'A set of Python bindings for the Qt application framework, which allows for creating desktop applications with rich graphical user interfaces.',
  },

  /**
   * GAME DEVELOPMENT
   */
  pygame: {
    package: 'pygame',
    name: 'Pygame',
    description:
      'A set of Python modules for developing video games, including functions for handling graphics, sound, and user input.',
  },
  panda3d: {
    package: 'panda3d',
    name: 'Panda3D',
    description:
      'A powerful 3D game engine for Python that provides a wide range of tools and features for creating games with complex graphics and physics simulations.',
  },
}

export default pythonTechnologies
