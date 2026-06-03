// src/components/sections/HeroSection.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Compass } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const { t } = useTranslation('hero')

  return (
    <section id="accueil" className={styles.heroBanner}>
      <div className={styles.deco1} />
      <div className={styles.deco2} />
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <p className={styles.eyebrow}>{t('eyebrow')}</p>
          <h1 className={styles.heroTitle}>
            {t('title1')}<br />
            <span className={styles.hlTeal}>{t('title2')}</span>{t('title3')}<br />
            {t('title4')} <span className={styles.hlPink}>{t('title5')}</span>
          </h1>
          <p className={styles.heroSubtitle}>{t('subtitle')}</p>
          <div className={styles.heroBtns}>
            <Link href="/admissions" className="btn btn-teal">
              <BookOpen size={16} />
              {t('btnEnrol')}
            </Link>
            <Link href="/presentation" className="btn btn-outline">
              <Compass size={16} />
              {t('btnDiscover')}
            </Link>
          </div>
        </div>
        <div className={styles.heroImg}>
          <Image
            src="/at-school.jpg"
            alt={t('imgAlt')}
            fill
            style={{ objectFit: 'cover', borderRadius: 'var(--r-xl)' }}
          />
          <span>{t('imgCaption')}<br /><small>Remplacer par une image</small></span>
        </div>
      </div>
    </section>
  )
}
