// src/components/sections/CampusStrip.tsx
'use client'

import Link from 'next/link'
import { Baby, GraduationCap, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './CampusStrip.module.css'

type CampusStripBackground = 'off' | 'white' | 'transparent'

interface CampusStripProps {
  /** Set to false when the parent already renders a `.container` wrapper */
  withContainer?: boolean
  /** Controls the strip's own background — use 'transparent' when the parent section already has a bg */
  background?: CampusStripBackground
}

export default function CampusStrip({
  withContainer = true,
  background = 'off',
}: CampusStripProps) {
  const { t } = useTranslation('campusStrip')
  const { t: s } = useTranslation('presentation')

  const grid = (
    <div className={styles.campusGrid}>

      <Link href="/campus#creche" className={`${styles.csBlock} ${styles.teal}`}>
        <div className={styles.csAccent}>
          <div className={`${styles.csThumb} ${styles.teal}`}>
            <Baby size={22} />
          </div>
        </div>
        <div className={styles.csText}>
          <span className={`${styles.csBadge} ${styles.teal}`}>{t('creche.badge')}</span>
          <h3>{s('campus.creche.name')}</h3>
          <p>{s('campus.creche.message')}</p>
          <span className={`${styles.csAge} ${styles.teal}`}>{t('creche.ages')}</span>
        </div>
        <ArrowRight size={18} className={`${styles.csArrow} ${styles.teal}`} />
      </Link>

      <Link href="/campus#maternelle" className={`${styles.csBlock} ${styles.teal}`}>
        <div className={styles.csAccent}>
          <div className={`${styles.csThumb} ${styles.pink}`}>
            <GraduationCap size={22} />
          </div>
        </div>
        <div className={styles.csText}>
          <span className={`${styles.csBadge} ${styles.pink}`}>{t('maternelle.badge')}</span>
          <h3>{s('campus.maternelle.name')}</h3>
          <p>{s('campus.maternelle.message')}</p>
          <span className={`${styles.csAge} ${styles.pink}`}>{t('maternelle.ages')}</span>
        </div>
        <ArrowRight size={18} className={`${styles.csArrow} ${styles.pink}`} />
      </Link>

    </div>
  )

  const wrapperClass = `${styles.campusStrip} ${styles[background] ?? ''}`

  if (!withContainer) {
    return <div className={wrapperClass}>{grid}</div>
  }

  return (
    <div className={wrapperClass}>
      <div className="container">
        {grid}
      </div>
    </div>
  )
}