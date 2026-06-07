// src/app/admissions/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './admissions.module.css'

export default function AdmissionsPage() {
  const { t } = useTranslation('admissions')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const tuitionRows = t('tuition.rows', { returnObjects: true }) as Array<{
    programme: string
    frais: string
  }>
  const steps = t('steps.items', { returnObjects: true }) as string[]
  const faqItems = t('faq.items', { returnObjects: true }) as Array<{
    q: string
    a: string
  }>

  return (
    <section className={styles.section} id="admissions">
      <div className="container">
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title"><span>{t('title')}</span></h2>
        <p className="sec-sub">{t('subtitle')}</p>

        <div className={styles.admTop}>
          {/* Tuition */}
          <div className={styles.admBlock} id="frais">
            <h3>
              {t('tuition.heading')}
            </h3>
            <table className={styles.fraisTable}>
              <thead>
                <tr>
                  <th>{t('tuition.colProgramme')}</th>
                  <th>{t('tuition.colFees')}</th>
                </tr>
              </thead>
              <tbody>
                {tuitionRows.map((r) => (
                  <tr key={r.programme}>
                    <td>{r.programme}</td>
                    <td>{r.frais}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.note}>{t('tuition.note')}</p>
          </div>

          {/* Steps */}
          <div className={styles.admBlock} id="inscription">
            <h3>
              {t('steps.heading')}
            </h3>
            <div className={styles.stepsList}>
              {steps.map((step, i) => (
                <div key={i} className={styles.stepItem}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="btn btn-teal"
              style={{ marginTop: 18, fontSize: 13, padding: '10px 18px' }}
            >
              {t('steps.btn')}
            </Link>
          </div>

          {/* Open days */}
          <div className={styles.admBlock} id="portes">
            <h3>
              {t('openDays.heading')}
            </h3>
            <p className={styles.portesDesc}>{t('openDays.desc')}</p>
            <div className={styles.portesCard}>
              <p><strong>{t('openDays.nextDate')}</strong></p>
              <p style={{ marginTop: 5, whiteSpace: 'pre-line' }}>
                {t('openDays.placeholder')}
              </p>
            </div>
            <Link href="/contact" className="btn btn-outline" style={{ fontSize: 13, padding: '9px 18px' }}>
              {t('openDays.btn')}
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 56 }} id="faq">
          <span className="tag">{t('faq.tag')}</span>
          <h2 className="sec-title" style={{ marginBottom: 8 }}>{t('faq.title')}</h2>
          <div className={styles.faqList}>
            {faqItems.map((item, i) => (
              <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.open : ''}`}>
                <button
                  className={styles.faqQ}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {item.q}
                  {openFaq === i
                    ? <ChevronUp size={14} className={styles.arrow} />
                    : <ChevronDown size={14} className={styles.arrow} />}
                </button>
                {openFaq === i && (
                  <div className={styles.faqA}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
