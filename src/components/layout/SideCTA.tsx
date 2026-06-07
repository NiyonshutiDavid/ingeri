// src/components/layout/SideCTA.tsx
'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import styles from './SideCTA.module.css'

export default function SideCTA() {
  const { t } = useTranslation('sideCta')

  return (
    <div className={styles.sideCta}>
      <Link href="/contact" className={`${styles.sideBtn} ${styles.teal}`}>
        {t('contact')}
      </Link>
      <Link href="/admissions" className={`${styles.sideBtn} ${styles.pink}`}>
        {t('apply')}
      </Link>
      <Link href="/presentation#localisations" className={`${styles.sideBtn} ${styles.gold}`}>
        {t('visit')}
      </Link>
    </div>
  )
}
