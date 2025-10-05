/**
 * Common Type Definitions
 * Centralized type definitions for better type safety
 * Following Interface Segregation Principle (ISP)
 */

import type { SITE_CONFIG } from '../config/site.config';

export type Language = typeof SITE_CONFIG.supportedLanguages[number];

export interface BaseComponentProps {
  lang: Language;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  lang?: Language;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}
