// src/components/sections/DirectionQuote.tsx
'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import styles from './DirectionQuote.module.css'

export default function DirectionQuote() {
  const { t } = useTranslation('directionQuote')

  return (
    <div id="direction" className={styles.wrapper}>
      <div className="container">
        {/* headers on texture → white globals */}
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title">
          {t('title')} <span>{t('titleSpan')}</span>
        </h2>

        <div className={styles.strip}>

          {/* Photo panel — image fills it, frosted label at bottom-left */}
          <div className={styles.photo}>
            <Image
              src="/principal.jpg"
              alt={t('photoAlt')}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.photoLabel}>
              {t('name')}
              <span>{t('role')}</span>
            </div>
          </div>

          {/* Quote panel */}
          <div className={styles.text}>
            <div className={styles.quoteMark}>&ldquo;</div>
            <blockquote>{t('quote')}</blockquote>
            {/* <p className={styles.dirName}>{t('name')}</p>
            <p className={styles.dirRole}>{t('role')}</p> */}
            <div className={styles.quoteMarkEnd}>&ldquo;</div>
          </div>

        </div>
      </div>
    </div>
  )
}