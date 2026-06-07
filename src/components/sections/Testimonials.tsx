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

  // Duplicate items for seamless infinite loop
  const loopItems = [...items, ...items]

  return (
    <div id="temoignages" className={styles.wrapper}>
      <div className="container">
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title">
          {t('title')} <span>{t('titleSpan')}</span>
        </h2>
        <p className="sec-sub">{t('subtitle')}</p>
      </div>

      <div className={styles.carousel}>
        <div className={styles.track}>
          {loopItems.map((item, i) => (
            <div key={i} className={styles.echoBlock}>
              <div className={styles.echoAccent} />
              <div className={styles.echoBody}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} fill="var(--gold)" strokeWidth={0} />
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
