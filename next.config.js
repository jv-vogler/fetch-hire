/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
  },
}

module.exports = nextConfig
