// src/i18n/config.ts  —  FINAL (Batches 1 + 2 + 3)
// ---------------------------------------------------------------------------

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// ── Batch 1: global components ───────────────────────────────────────────────
import enCommon        from '../../public/locales/en/common.json'
import enHeader        from '../../public/locales/en/header.json'
import enFooter        from '../../public/locales/en/footer.json'
import enSideCta       from '../../public/locales/en/sideCta.json'
import frCommon        from '../../public/locales/fr/common.json'
import frHeader        from '../../public/locales/fr/header.json'
import frFooter        from '../../public/locales/fr/footer.json'
import frSideCta       from '../../public/locales/fr/sideCta.json'

// ── Batch 2: home page sections ──────────────────────────────────────────────
import enHero           from '../../public/locales/en/hero.json'
import enCampusStrip    from '../../public/locales/en/campusStrip.json'
import enMissionVision  from '../../public/locales/en/missionVision.json'
import enValeurs        from '../../public/locales/en/valeurs.json'
import enDirectionQuote from '../../public/locales/en/directionQuote.json'
import enTestimonials   from '../../public/locales/en/testimonials.json'
import frHero           from '../../public/locales/fr/hero.json'
import frCampusStrip    from '../../public/locales/fr/campusStrip.json'
import frMissionVision  from '../../public/locales/fr/missionVision.json'
import frValeurs        from '../../public/locales/fr/valeurs.json'
import frDirectionQuote from '../../public/locales/fr/directionQuote.json'
import frTestimonials   from '../../public/locales/fr/testimonials.json'

// ── Batch 3: pages ───────────────────────────────────────────────────────────
import enAdmissions    from '../../public/locales/en/admissions.json'
import enCampus        from '../../public/locales/en/campus.json'
import enContact       from '../../public/locales/en/contact.json'
import enProgrammes    from '../../public/locales/en/programmes.json'
import enPresentation  from '../../public/locales/en/presentation.json'
import frAdmissions    from '../../public/locales/fr/admissions.json'
import frCampus        from '../../public/locales/fr/campus.json'
import frContact       from '../../public/locales/fr/contact.json'
import frProgrammes    from '../../public/locales/fr/programmes.json'
import frPresentation  from '../../public/locales/fr/presentation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon, header: enHeader, footer: enFooter, sideCta: enSideCta,
        hero: enHero, campusStrip: enCampusStrip, missionVision: enMissionVision,
        valeurs: enValeurs, directionQuote: enDirectionQuote, testimonials: enTestimonials,
        admissions: enAdmissions, campus: enCampus, contact: enContact,
        programmes: enProgrammes, presentation: enPresentation,
      },
      fr: {
        common: frCommon, header: frHeader, footer: frFooter, sideCta: frSideCta,
        hero: frHero, campusStrip: frCampusStrip, missionVision: frMissionVision,
        valeurs: frValeurs, directionQuote: frDirectionQuote, testimonials: frTestimonials,
        admissions: frAdmissions, campus: frCampus, contact: frContact,
        programmes: frProgrammes, presentation: frPresentation,
      },
    },
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en'],
    defaultNS: 'common',
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
      cookieMinutes: 525600,
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  })

export default i18n
export const SUPPORTED_LANGUAGES = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English',  flag: '🇬🇧' },
] as const
export type SupportedLang = 'fr' | 'en'
