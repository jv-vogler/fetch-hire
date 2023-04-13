import { TechnologyList } from '@/types/Technology'

const phpTechnologies: TechnologyList = {
  /**
   * WEB FRAMEWORKS
   */
  'laravel/framework': {
    package: 'laravel/framework',
    name: 'Laravel',
    description:
      'A popular PHP web application framework that follows the MVC pattern and provides a wide range of features for building modern web applications.',
  },

  /**
   * DATABASE AND ORM
   */
  'doctrine/orm': {
    package: 'doctrine/orm',
    name: 'Doctrine ORM',
    description:
      'A powerful and flexible object-relational mapper (ORM) for PHP that provides an abstraction layer for working with databases.',
  },

  /**
   * NETWORKING
   */
  'guzzlehttp/guzzle': {
    package: 'guzzlehttp/guzzle',
    name: 'Guzzle',
    description:
      'A popular HTTP client for PHP that makes it easy to send HTTP requests, handle responses, and interact with web services.',
  },

  /**
   * COMMAND-LINE INTERFACE
   */
  'symfony/console': {
    package: 'symfony/console',
    name: 'Symfony Console',
    description:
      'A component of the Symfony PHP framework that provides a powerful and flexible command-line interface for building CLI applications.',
  },

  /**
   * LOGGING
   */
  'monolog/monolog': {
    package: 'monolog/monolog',
    name: 'Monolog',
    description:
      'A logging library for PHP that provides a wide range of logging handlers, formatters, and processors for building robust logging solutions.',
  },

  /**
   * TESTING
   */
  'phpunit/phpunit': {
    package: 'phpunit/phpunit',
    name: 'PHPUnit',
    description:
      'A popular unit testing framework for PHP that provides a rich set of assertions, mocks, and test runners for writing and executing tests.',
  },
  'phpunit/dbunit': {
    package: 'phpunit/dbunit',
    name: 'PHPUnit DBUnit',
    description:
      'An extension for PHPUnit that provides additional functionality for database testing, including data fixtures and database state management.',
  },
  'phpunit/mock-objects': {
    package: 'phpunit/mock-objects',
    name: 'PHPUnit Mock Objects',
    description:
      'An extension for PHPUnit that provides tools for creating and working with mock objects in unit tests, allowing for isolated testing of code.',
  },
  'phpunit/code-coverage': {
    package: 'phpunit/code-coverage',
    name: 'PHPUnit Code Coverage',
    description:
      'An extension for PHPUnit that collects code coverage information during test execution, helping to measure the effectiveness of tests.',
  },

  /**
   * TEMPLATE ENGINES
   */
  'twig/twig': {
    package: 'twig/twig',
    name: 'Twig',
    description:
      'A flexible and powerful template engine for PHP that allows for separating logic from presentation and provides a clean syntax for building dynamic templates.',
  },

  /**
   * AUTHENTICATION AND AUTHORIZATION
   */
  'lucadegasperi/oauth2-server-laravel': {
    package: 'lucadegasperi/oauth2-server-laravel',
    name: 'OAuth2 Server for Laravel',
    description:
      'A package for Laravel that provides a complete OAuth2 server implementation for handling authentication and authorization in web applications.',
  },

  /**
   * MESSAGE QUEUE
   */
  'illuminate/queue': {
    package: 'illuminate/queue',
    name: 'Laravel Queue',
    description:
      'A powerful and scalable message queue system for Laravel that allows for offloading time-consuming tasks to be processed asynchronously in the background.',
  },
  'rabbitmq/rabbitmq-bundle': {
    package: 'rabbitmq/rabbitmq-bundle',
    name: 'RabbitMQ Bundle',
    description:
      'A Symfony bundle that provides integration with RabbitMQ, a popular message broker, for building scalable and distributed applications with asynchronous processing.',
  },

  /**
   * DOCUMENTATION
   */
  'phpdocumentor/phpdocumentor': {
    package: 'phpdocumentor/phpdocumentor',
    name: 'phpDocumentor',
    description:
      'A tool for generating documentation from PHP source code, including support for generating API documentation in various formats such as HTML, PDF, and Markdown.',
  },

  /**
   * PERFORMANCE OPTIMIZATION
   */
  'opcache/opcache': {
    package: 'opcache/opcache',
    name: 'OPcache',
    description:
      'A built-in PHP extension that provides opcode caching, which can greatly improve the performance of PHP applications by storing precompiled script bytecode in shared memory.',
  },
  'nikic/php-ast': {
    package: 'nikic/php-ast',
    name: 'PHP-AST',
    description:
      'A library that provides an abstract syntax tree (AST) for PHP code, which can be used for various code analysis and optimization tasks, such as static analysis and refactoring.',
  },

  /**
   * CACHING
   */
  'symfony/cache': {
    package: 'symfony/cache',
    name: 'Symfony Cache',
    description:
      'A caching component of the Symfony PHP framework that provides a simple and flexible API for caching data in various storage systems, such as file system, memcached, and Redis.',
  },
  'illuminate/cache': {
    package: 'illuminate/cache',
    name: 'Laravel Cache',
    description:
      'A caching system for Laravel that provides a unified API for caching data in various storage systems, such as file system, memcached, and Redis, and supports features such as cache tags and cache events.',
  },
}

export default phpTechnologies
