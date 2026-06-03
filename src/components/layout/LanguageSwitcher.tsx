// src/components/layout/LanguageSwitcher.tsx
'use client'

import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, type SupportedLang } from '@/i18n/config'
import styles from './LanguageSwitcher.module.css'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language?.slice(0, 2) as SupportedLang

  const handleChange = (code: SupportedLang) => {
    i18n.changeLanguage(code)
    // Persist in cookie for SSR-aware detection
    document.cookie = `i18next=${code}; path=/; max-age=31536000; SameSite=Lax`
  }

  return (
    <div className={styles.switcher} role="group" aria-label="Language switcher">
      {SUPPORTED_LANGUAGES.map(({ code, label, flag }) => (
        <button
          key={code}
          onClick={() => handleChange(code as SupportedLang)}
          className={`${styles.btn} ${currentLang === code ? styles.active : ''}`}
          aria-current={currentLang === code ? 'true' : undefined}
          title={label}
        >
          <span className={styles.flag}>{flag}</span>
          <span className={styles.code}>{code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  )
}
