// src/app/campus/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './campus.module.css'

export default function CampusPage() {
  const { t } = useTranslation('campus')

  return (
    <section className={styles.section}>
      <div className="container">
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title">
          {t('title')} <span>{t('titleSpan')}</span>
        </h2>
        <p className="sec-sub">{t('subtitle')}</p>

        <div className={styles.campusGrid}>
          {/* Crèche */}
          <div className={styles.campusBlock} id="creche">
            <div className={`${styles.campusImg} ${styles.teal}`}>
              <Image
                src="/creche.jpg"
                fill
                style={{ objectFit: 'cover' }}
                alt={t('creche.imgAlt')}
              />
              {t('creche.imgLabel')}
            </div>
            <div className={styles.campusBody}>
              <span className={`${styles.cbBadge} ${styles.teal}`}>{t('creche.badge')}</span>
              <h3>{t('creche.name')}</h3>
              <p>{t('creche.desc')}</p>
              <div className={styles.cDetail}>
                <strong>{t('labels.ages')}</strong>
                <span>{t('creche.ages')}</span>
              </div>
              <div className={styles.cDetail}>
                <MapPin size={13} /><span>{t('creche.address')}</span>
              </div>
              <div className={styles.cDetail}>
                <Mail size={13} /><span>{t('creche.email')}</span>
              </div>
              <Link
                href="/contact#creche"
                className="btn btn-teal"
                style={{ marginTop: 20, fontSize: 13, padding: '10px 20px' }}
              >
                {t('creche.btn')}
              </Link>
            </div>
          </div>

          {/* Maternelle */}
          <div className={styles.campusBlock} id="maternelle">
            <div className={`${styles.campusImg} ${styles.pink}`}>
              <Image
                src="/maternelle.jpg"
                fill
                style={{ objectFit: 'cover' }}
                alt={t('maternelle.imgAlt')}
              />
              {t('maternelle.imgLabel')}
            </div>
            <div className={styles.campusBody}>
              <span className={`${styles.cbBadge} ${styles.pink}`}>{t('maternelle.badge')}</span>
              <div className={styles.intlStrip}>
                <Globe size={14} />
                <span>{t('maternelle.intlStrip')}</span>
              </div>
              <h3>{t('maternelle.name')}</h3>
              <p>{t('maternelle.desc')}</p>
              <div className={styles.cDetail}>
                <strong>{t('labels.ages')}</strong>
                <span>{t('maternelle.ages')}</span>
              </div>
              <div className={styles.cDetail}>
                <MapPin size={13} /><span>{t('maternelle.address')}</span>
              </div>
              <div className={styles.cDetail}>
                <Mail size={13} /><span>{t('maternelle.email')}</span>
              </div>
              <Link
                href="/contact#maternelle"
                className="btn btn-pink"
                style={{ marginTop: 20, fontSize: 13, padding: '10px 20px' }}
              >
                {t('maternelle.btn')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
