/**
 * Theme Constants
 * Centralized theme-related constants
 * Following DRY principle
 */

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export const THEME_STORAGE_KEY = 'theme';

export type ThemeType = typeof THEME.LIGHT | typeof THEME.DARK;
