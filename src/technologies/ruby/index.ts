import { TechnologyList } from '@/types/Technology'

const rubyTechnologies: TechnologyList = {
  rails: {
    package: 'rails',
    name: 'rails',
    description: 'Full-stack web application framework.',
  },
  devise: {
    package: 'devise',
    name: 'devise',
    description: 'Flexible authentication solution for Rails with Warden',
  },
  capybara: {
    package: 'capybara',
    name: 'capybara',
    description:
      'Capybara is an integration testing tool for rack based web applications. It simulates how a user would interact with a website',
  },
  activeadmin: {
    package: 'activeadmin',
    name: 'activeadmin',
    description: '',
  },
  pg: {
    package: 'pg',
    name: 'pg',
    description: '',
  },
  bootstrap: {
    package: 'bootstrap',
    name: 'bootstrap',
    description: '',
  },
  rspec: {
    package: 'rspec',
    name: 'rspec',
    description: '',
  },
  sidekiq: {
    package: 'sidekiq',
    name: 'sidekiq',
    description: '',
  },
  carrierwave: {
    package: 'carrierwave',
    name: 'carrierwave',
    description: '',
  },
  paperclip: {
    package: 'paperclip',
    name: 'paperclip',
    description: '',
  },
}

export default rubyTechnologies
