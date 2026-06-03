// src/app/programmes/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Sprout, Sparkles, MessageSquare, Hash, Palette, Hand, Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './programmes.module.css'

type Tab = 'creche' | 'maternelle'

// Pillar icons are positional — order must match locale arrays
const CRECHE_ICONS = [Heart, Sprout, Sparkles]
const MAT_ICONS = [MessageSquare, Hash, Palette, Hand]

export default function ProgrammesPage() {
  const { t } = useTranslation('programmes')
  const [activeTab, setActiveTab] = useState<Tab>('creche')

  const crechePillars = t('creche.pillars', { returnObjects: true }) as Array<{ title: string; desc: string }>
  const matPillars = t('maternelle.pillars', { returnObjects: true }) as Array<{ title: string; desc: string }>
  const matLevels = t('maternelle.levels', { returnObjects: true }) as string[]

  return (
    <section className={styles.section} id="programmes">
      <div className="container">
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title">
          {t('title')} <span>{t('titleSpan')}</span>
        </h2>
        <p className="sec-sub">{t('subtitle')}</p>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'creche' ? styles.actTeal : ''}`}
            onClick={() => setActiveTab('creche')}
          >
            {t('tabs.creche')}
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'maternelle' ? styles.actPink : ''}`}
            onClick={() => setActiveTab('maternelle')}
          >
            {t('tabs.maternelle')}
          </button>
        </div>

        {activeTab === 'creche' && (
          <div className={styles.progLayout} id="creche">
            <div className={`${styles.progImg} ${styles.teal}`}>
              <Image src="/creche.jpg" fill style={{ objectFit: 'cover' }} alt={t('creche.imgAlt')} />
              {t('creche.imgLabel')}
            </div>
            <div className={styles.progInfo}>
              <h2>{t('creche.name')}</h2>
              <p className={`${styles.ages} ${styles.teal}`}>{t('creche.ages')}</p>
              <p>{t('creche.intro')}</p>
              <div className={styles.pillars}>
                {crechePillars.map((p, i) => {
                  const Icon = CRECHE_ICONS[i]
                  return (
                    <div key={i} className={styles.ppRow}>
                      <span className={styles.ppIcon}><Icon size={18} strokeWidth={1.5} /></span>
                      <div>
                        <h4>{p.title}</h4>
                        <p>{p.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className={styles.calCard}>
                <Calendar size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
                <strong>{t('calendarLabel')}</strong> {t('creche.calendar')}
              </div>
              <Link href="/admissions" className="btn btn-teal">{t('creche.btn')}</Link>
            </div>
          </div>
        )}

        {activeTab === 'maternelle' && (
          <div className={styles.progLayout} id="maternelle">
            <div className={`${styles.progImg} ${styles.pink}`}>
              <Image src="/maternelle.jpg" fill style={{ objectFit: 'cover' }} alt={t('maternelle.imgAlt')} />
              {t('maternelle.imgLabel')}
            </div>
            <div className={styles.progInfo}>
              <h2 style={{ color: 'var(--pink-d)' }}>{t('maternelle.name')}</h2>
              <p className={`${styles.ages} ${styles.pink}`}>{t('maternelle.ages')}</p>
              <p>{t('maternelle.intro')}</p>
              <div className={styles.pillars}>
                {matPillars.map((p, i) => {
                  const Icon = MAT_ICONS[i]
                  return (
                    <div key={i} className={styles.ppRow}>
                      <span className={styles.ppIcon}><Icon size={18} strokeWidth={1.5} /></span>
                      <div>
                        <h4 style={{ color: 'var(--pink-d)' }}>{p.title}</h4>
                        <p>{p.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className={styles.levels}>
                {matLevels.map((level, i) => (
                  <span
                    key={i}
                    className={i === 0 ? styles.lvPink : i === 1 ? styles.lvTeal : styles.lvGold}
                  >
                    {level}
                  </span>
                ))}
              </div>
              <Link href="/admissions" className="btn btn-pink">{t('maternelle.btn')}</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
