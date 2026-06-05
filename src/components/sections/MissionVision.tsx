// src/components/sections/MissionVision.tsx
'use client'

import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './MissionVision.module.css'

export default function MissionVision() {
  const { t } = useTranslation('missionVision')
  const visionItems = t('vision.items', { returnObjects: true }) as string[]

  return (
    <div id="mission" className={styles.wrapper}>
      <div className="container">
        {/* tag + titles are on texture → use default white global classes */}
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title">
          {t('title')} <span>{t('titleSpan')}</span>
        </h2>

        <div className={styles.mvGrid}>
          <div className={styles.mvBlock}>
            <h3>{t('mission.heading')}</h3>
            <p>{t('mission.body')}</p>
          </div>

          <div className={`${styles.mvBlock} ${styles.pink}`}>
            <h3>{t('vision.heading')}</h3>
            <p>{t('vision.body')}</p>
            <ul className={styles.mvList}>
              {visionItems.map((item, i) => (
                <li key={i}>
                  <CheckCircle2
                    size={14}
                    color="var(--pink-d)"
                    style={{ flexShrink: 0, marginTop: 4 }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}