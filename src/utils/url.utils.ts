/**
 * URL Utilities
 * Helper functions for URL manipulation
 * Following Single Responsibility Principle (SRP) and DRY
 */

import type { Language } from '../types/common.types';
import { SITE_CONFIG } from '../config/site.config';

/**
 * Get the base path for a given language
 */
export function getLanguageBasePath(lang: Language): string {
  return lang === SITE_CONFIG.defaultLanguage ? '/' : `/${lang}/`;
}

/**
 * Build a localized URL
 */
export function buildLocalizedUrl(lang: Language, path: string = ''): string {
  const basePath = getLanguageBasePath(lang);
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}${cleanPath}`;
}

/**
 * Get full canonical URL
 */
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}

/**
 * Check if a URL is external
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}
