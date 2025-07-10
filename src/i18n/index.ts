import en from './locales/en';
import es from './locales/es';

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'es';

export const translations = {
  en,
  es,
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Fallback to English if translation not found
    if (!value) {
      let fallback: any = translations[defaultLang];
      for (const k of keys) {
        fallback = fallback?.[k];
      }
      value = fallback;
    }
    
    return value || key;
  };
}

export type TranslationKey = 
  | 'nav.home'
  | 'nav.services'
  | 'nav.about'
  | 'nav.contact'
  | 'nav.portfolio'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.description'
  | 'hero.cta'
  | 'hero.ctaSecondary'
  | 'services.title'
  | 'services.subtitle'
  | 'services.web.title'
  | 'services.web.description'
  | 'services.mobile.title'
  | 'services.mobile.description'
  | 'services.uiux.title'
  | 'services.uiux.description'
  | 'services.ecommerce.title'
  | 'services.ecommerce.description'
  | 'services.custom.title'
  | 'services.custom.description'
  | 'services.consulting.title'
  | 'services.consulting.description'
  | 'about.title'
  | 'about.subtitle'
  | 'about.description'
  | 'about.mission'
  | 'about.vision'
  | 'about.stats.experience'
  | 'about.stats.projects'
  | 'about.stats.clients'
  | 'about.stats.team'
  | 'about.values.innovation'
  | 'about.values.innovationDesc'
  | 'about.values.quality'
  | 'about.values.qualityDesc'
  | 'about.values.partnership'
  | 'about.values.partnershipDesc'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.description'
  | 'contact.form.name'
  | 'contact.form.namePlaceholder'
  | 'contact.form.email'
  | 'contact.form.emailPlaceholder'
  | 'contact.form.phone'
  | 'contact.form.phonePlaceholder'
  | 'contact.form.company'
  | 'contact.form.companyPlaceholder'
  | 'contact.form.service'
  | 'contact.form.servicePlaceholder'
  | 'contact.form.message'
  | 'contact.form.messagePlaceholder'
  | 'contact.form.submit'
  | 'contact.form.sending'
  | 'contact.form.success'
  | 'contact.form.error'
  | 'contact.info.phone'
  | 'contact.info.email'
  | 'contact.info.address'
  | 'contact.info.hours'
  | 'contact.details.phone'
  | 'contact.details.email'
  | 'contact.details.address'
  | 'contact.details.hours'
  | 'footer.description'
  | 'footer.sections.company'
  | 'footer.sections.services'
  | 'footer.sections.contact'
  | 'footer.sections.follow'
  | 'footer.links.home'
  | 'footer.links.about'
  | 'footer.links.services'
  | 'footer.links.portfolio'
  | 'footer.links.contact'
  | 'footer.links.privacy'
  | 'footer.links.terms'
  | 'footer.servicesList.web'
  | 'footer.servicesList.mobile'
  | 'footer.servicesList.uiux'
  | 'footer.servicesList.ecommerce'
  | 'footer.servicesList.custom'
  | 'footer.servicesList.consulting'
  | 'footer.social.linkedin'
  | 'footer.social.twitter'
  | 'footer.social.github'
  | 'footer.social.instagram'
  | 'footer.copyright'
  | 'footer.madeWith'
  | 'sticky.title'
  | 'sticky.subtitle'
  | 'sticky.cta'
  | 'sticky.ctaSecondary'
  | 'seo.title'
  | 'seo.description'
  | 'seo.keywords'
  | 'common.learnMore'
  | 'common.getStarted'
  | 'common.viewMore'
  | 'common.readMore'
  | 'common.close'
  | 'common.back'
  | 'common.next'
  | 'common.previous'
  | 'common.loading'
  | 'common.error'
  | 'common.success';