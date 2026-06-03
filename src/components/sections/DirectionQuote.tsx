// src/components/sections/DirectionQuote.tsx
'use client'

import { Quote } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import styles from './DirectionQuote.module.css'

export default function DirectionQuote() {
  const { t } = useTranslation('directionQuote')

  return (
    <div id="direction" className={styles.wrapper}>
      <div className="container">
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title">
          {t('title')} <span>{t('titleSpan')}</span>
        </h2>
        <div className={styles.strip}>
          <div className={styles.photo}>
            <Image
              src="/principal.jpg"
              alt={t('photoAlt')}
              fill
              style={{ objectFit: 'cover' }}
            />
            {t('photoAlt')}
          </div>
          <div className={styles.text}>
            <div className={styles.quoteMark}>
              <Quote size={48} strokeWidth={1} />
            </div>
            <blockquote>{t('quote')}</blockquote>
            <p className={styles.dirName}>{t('name')}</p>
            <p className={styles.dirRole}>{t('role')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
