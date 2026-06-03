// src/i18n/I18nProvider.tsx
// ---------------------------------------------------------------------------
// Client component that initialises i18next and wraps the app.
// Import this in your root layout INSTEAD of importing config.ts directly,
// to avoid "window is not defined" errors during Next.js SSR.
// ---------------------------------------------------------------------------
'use client'

import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './config'

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  // Re-hydrate language from storage on mount (client only)
  useEffect(() => {
    const stored =
      document.cookie.match(/i18next=([^;]+)/)?.[1] ||
      localStorage.getItem('i18nextLng')
    if (stored && ['fr', 'en'].includes(stored) && i18n.language !== stored) {
      i18n.changeLanguage(stored)
    }
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
