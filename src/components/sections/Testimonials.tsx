// src/components/sections/Testimonials.tsx
'use client'

import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const { t } = useTranslation('testimonials')
  const items = t('items', { returnObjects: true }) as Array<{
    quote: string
    initials: string
    name: string
    detail: string
  }>

  return (
    <div id="temoignages" className={styles.wrapper}>
      <div className="container">
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title">
          {t('title')} <span>{t('titleSpan')}</span>
        </h2>
        <p className="sec-sub">{t('subtitle')}</p>

        <div className={styles.echoesGrid}>
          {items.map((item) => (
            <div key={item.name} className={styles.echoBlock}>
              <div className={styles.echoAccent} />
              <div className={styles.echoBody}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="var(--gold)" strokeWidth={0} />
                  ))}
                </div>
                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                <div className={styles.author}>
                  <div className={styles.avatar}>{item.initials}</div>
                  <div>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.detail}>{item.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}