/**
 * SEO Utilities
 * Helper functions for SEO-related operations
 * Following Single Responsibility Principle (SRP)
 */

import type { Language } from '../types/common.types';
import { SITE_CONFIG, SEO_CONFIG, CONTACT_INFO, SOCIAL_LINKS, COMPANY_INFO } from '../config/site.config';

/**
 * Get locale string for Open Graph
 */
export function getOGLocale(lang: Language): string {
  return lang === 'es' ? 'es_CO' : 'en_US';
}

/**
 * Get language name
 */
export function getLanguageName(lang: Language): string {
  return lang === 'es' ? 'Spanish' : 'English';
}

/**
 * Generate structured data for organization
 */
export function generateOrganizationSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "description": description,
    "url": SITE_CONFIG.url,
    "logo": `${SITE_CONFIG.url}/images/crexative.svg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT_INFO.phone,
      "contactType": "Customer Service",
      "areaServed": SEO_CONFIG.geo.region,
      "availableLanguage": ["Spanish", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": SEO_CONFIG.geo.region
    },
    "sameAs": Object.values(SOCIAL_LINKS),
    "foundingDate": COMPANY_INFO.foundingDate,
    "numberOfEmployees": COMPANY_INFO.numberOfEmployees,
    "industry": COMPANY_INFO.industry,
    "services": COMPANY_INFO.services
  };
}
