// src/components/sections/Valeurs.tsx
'use client'

import { Heart, Cross, Star, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './Valeurs.module.css'

const ICONS = [Heart, Cross, Star, Users]

export default function Valeurs() {
  const { t } = useTranslation('valeurs')
  const items = t('items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>

  return (
    <div id="valeurs" className={styles.wrapper}>
      <div className="container">
        {/* headers on texture → white globals */}
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title">
          {t('title')} <span>{t('titleSpan')}</span>
        </h2>

        <div className={styles.valeursGrid}>
          {items.map((v, i) => {
            const Icon = ICONS[i]
            return (
              <div key={v.title} className={styles.vBlock}>
                <div className={styles.vIcon}>
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h4>{v.title}</h4>
                <p>{v.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}