/**
 * i18n Configuration
 * Internationalization configuration and utilities
 * Following Single Responsibility Principle (SRP) and type safety
 */

import en from './locales/en';
import es from './locales/es';
import type { Language } from '../types/common.types';
import { SITE_CONFIG } from '../config/site.config';

export const translations = {
  en,
  es,
} as const;

export type TranslationKeys = typeof es;

/**
 * Get translation function for a specific language
 */
export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];

    for (const k of keys) {
      value = value?.[k];
    }

    // Fallback to default language if translation not found
    if (!value && lang !== SITE_CONFIG.defaultLanguage) {
      let fallback: any = translations[SITE_CONFIG.defaultLanguage];
      for (const k of keys) {
        fallback = fallback?.[k];
      }
      value = fallback;
    }

    return value || key;
  };
}

/**
 * Extract language from URL
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en' || lang === 'es') {
    return lang;
  }
  return SITE_CONFIG.defaultLanguage;
}

/**
 * Get available languages
 */
export function getLanguages() {
  return [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ] as const;
}
