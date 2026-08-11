// src/components/sections/MissionVision.tsx
'use client'

import { CheckCircle2, Target, Eye } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './MissionVision.module.css'

type MissionVisionBackground = 'off' | 'white' | 'transparent'

interface MissionVisionProps {
  /** Set to false when the parent already renders a `.container` wrapper */
  withContainer?: boolean
  /** Controls the wrapper's own background — use 'transparent' when the parent section already has a bg */
  background?: MissionVisionBackground
  /** Set to false when the parent already renders its own tag/title above the grid */
  showHeader?: boolean
  /** Only set this if nothing else on the page already owns the #mission anchor */
  id?: string
}

export default function MissionVision({
  withContainer = true,
  background = 'white',
  showHeader = true,
  id,
}: MissionVisionProps) {
  const { t } = useTranslation('missionVision')
  const visionItems = t('vision.items', { returnObjects: true }) as string[]
  const missionItems = t('mission.items', { returnObjects: true }) as string[]

  const content = (
    <>
      {showHeader && (
        <>
          <span className="tag">{t('tag')}</span>
          <h2 className="sec-title">
            {t('title')} <span>{t('titleSpan')}</span>
          </h2>
        </>
      )}

      <div className={styles.mvGrid}>
        <div className={styles.mvBlock}>
          <div className={styles.mvAccent} />
          <div className={styles.mvBody}>
            <h3>
              <Target size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
              {t('mission.heading')}
            </h3>
            <p>{t('mission.body')}</p>
            <ul className={styles.mvList}>
              {missionItems.map((item, i) => (
                <li key={i}>
                  <CheckCircle2
                    size={14}
                    color="var(--teal-d)"
                    style={{ flexShrink: 0, marginTop: 4 }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${styles.mvBlock} ${styles.pink}`}>
          <div className={styles.mvAccent} />
          <div className={styles.mvBody}>
            <h3>
              <Eye size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
              {t('vision.heading')}
            </h3>
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
    </>
  )

  const wrapperClass = `${styles.wrapper} ${styles[background] ?? ''}`

  if (!withContainer) {
    return (
      <div {...(id ? { id } : {})} className={wrapperClass}>
        {content}
      </div>
    )
  }

  return (
    <div {...(id ? { id } : {})} className={wrapperClass}>
      <div className="container">{content}</div>
    </div>
  )
}