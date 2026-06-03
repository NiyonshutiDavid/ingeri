// src/components/layout/SideCTA.tsx
'use client'

import Link from 'next/link'
import { MessageSquare, ClipboardList, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './SideCTA.module.css'

export default function SideCTA() {
  const { t } = useTranslation('sideCta')

  return (
    <div className={styles.sideCta}>
      <Link href="/contact" className={`${styles.sideBtn} ${styles.teal}`}>
        <MessageSquare size={14} />
        {t('contact')}
      </Link>
      <Link href="/admissions" className={`${styles.sideBtn} ${styles.pink}`}>
        <ClipboardList size={14} />
        {t('apply')}
      </Link>
      <Link href="/presentation#localisations" className={`${styles.sideBtn} ${styles.gold}`}>
        <MapPin size={14} />
        {t('visit')}
      </Link>
    </div>
  )
}
