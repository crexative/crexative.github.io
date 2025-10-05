/**
 * Site Configuration
 * Central configuration file for site-wide settings
 * Following Single Responsibility Principle (SRP)
 */

export const SITE_CONFIG = {
  name: 'CREXATIVE',
  url: 'https://crexative.com',
  title: 'CREXATIVE - Premium Software Development Agency',
  description: 'Expert web development, mobile apps, UI/UX design, and e-commerce solutions in Medellín, Colombia',
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
  phone: '+57-300-123-4567',
  email: 'hello@crexative.com',
  address: 'Medellín, Colombia',
  hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
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
    'Web Application Development',
    'Mobile App Development',
    'UI/UX Design',
    'E-commerce Solutions',
  ],
} as const;
