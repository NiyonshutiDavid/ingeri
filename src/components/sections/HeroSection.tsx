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
      <div className="container" style={{ width: '100%' }}>
        <div className={styles.heroCard}>

          {/* Left — white content panel */}
          <div className={styles.heroLeft}>
            <p className={styles.eyebrow}>{t('eyebrow')}</p>
            <h1 className={styles.heroTitle}>
              {t('title1')}<br />
              <span className={styles.hlTeal}>{t('title2')}</span>{t('title3')}<br />
              {t('title4')} <span className={styles.hlTeal}>{t('title5')}</span>
            </h1>
            <p className={styles.heroSubtitle}>{t('subtitle')}</p>
            <div className={styles.heroBtns}>
              <Link href="/admissions" className="btn btn-any">
                <BookOpen size={16} />
                {t('btnEnrol')}
              </Link>
              <Link href="/presentation" className="btn btn-any">
                <Compass size={16} />
                {t('btnDiscover')}
              </Link>
            </div>
          </div>

          {/* Right — teal image panel */}
          <div className={styles.heroImg}>
            <Image
              src="/at-school.jpg"
              alt={t('imgAlt')}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.heroImgInner}>
              <span>{t('imgCaption')}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}