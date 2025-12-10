/**
 * Site Configuration
 * Central configuration file for site-wide settings
 * Following Single Responsibility Principle (SRP)
 */

export const SITE_CONFIG = {
  name: 'CREXATIVE',
  url: 'https://crexative.com',
  title: 'CREXATIVE - Automation, Mobile Apps & Web Development',
  description: 'Intelligent automation with n8n & AI, cross-platform mobile apps with Kotlin Multiplatform, and modern web development worldwide',
  author: 'CREXATIVE',
  defaultLanguage: 'es' as const,
  supportedLanguages: ['en', 'es'] as const,
} as const;

export const SEO_CONFIG = {
  defaultImage: '/images/crexative-og.png',
  twitterHandle: '@crexative',
  geo: {
    region: 'CO',
    placename: 'Colombia',
  },
} as const;

export const CONTACT_INFO = {
  email: 'crexative@gmail.com',
  whatsapp: '+573207797762',
  whatsappNumber: '3207797762',
  address: 'Colombia',
  hours: 'Mon - Fri: 9:00 AM - 6:00 PM COT',
} as const;

// Web3Forms configuration
export const FORM_CONFIG = {
  web3formsAccessKey: '43c51b5d-14d7-4aa7-be8d-1fa069c0dbfc',
  redirectUrl: '',
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/crexative',
  twitter: 'https://twitter.com/crexative',
  github: 'https://github.com/crexative',
  instagram: 'https://instagram.com/crexative',
} as const;

export const COMPANY_INFO = {
  foundingDate: '2020',
  numberOfEmployees: '10-50',
  industry: 'Software Development',
  services: [
    'Intelligent Automation with n8n & AI',
    'Mobile App Development with Kotlin Multiplatform',
    'Web Development',
    'Custom Software Solutions',
  ],
} as const;
