// src/components/sections/CampusStrip.tsx
'use client'

import Link from 'next/link'
import { Baby, GraduationCap, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './CampusStrip.module.css'

export default function CampusStrip() {
  const { t } = useTranslation('campusStrip')

  return (
    <div className={styles.campusStrip}>
      <div className="container">
        <div className={styles.campusGrid}>

          <Link href="/campus#creche" className={`${styles.csBlock} ${styles.teal}`}>
            <div className={styles.csAccent}>
              <div className={`${styles.csThumb} ${styles.teal}`}>
                <Baby size={22} />
              </div>
            </div>
            <div className={styles.csText}>
              <span className={`${styles.csBadge} ${styles.teal}`}>{t('creche.badge')}</span>
              <h3>{t('creche.name')}</h3>
              <p>{t('creche.desc')}</p>
              <span className={`${styles.csAge} ${styles.teal}`}>{t('creche.ages')}</span>
            </div>
            <ArrowRight size={18} className={`${styles.csArrow} ${styles.teal}`} />
          </Link>

          <Link href="/campus#maternelle" className={`${styles.csBlock} ${styles.pink}`}>
            <div className={styles.csAccent}>
              <div className={`${styles.csThumb} ${styles.pink}`}>
                <GraduationCap size={22} />
              </div>
            </div>
            <div className={styles.csText}>
              <span className={`${styles.csBadge} ${styles.pink}`}>{t('maternelle.badge')}</span>
              <h3>{t('maternelle.name')}</h3>
              <p>{t('maternelle.desc')}</p>
              <span className={`${styles.csAge} ${styles.pink}`}>{t('maternelle.ages')}</span>
            </div>
            <ArrowRight size={18} className={`${styles.csArrow} ${styles.pink}`} />
          </Link>

        </div>
      </div>
    </div>
  )
}