// src/app/admissions/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './admissions.module.css'

interface CrecheRow {
  schedule: string
  private: string
  company: string
}

interface CrecheGroup {
  ageGroup: string
  rows: CrecheRow[]
}

interface MaternelleRate {
  label: string
  company: string
  parent: string
}

interface MaternelleData {
  heading: string
  rates: MaternelleRate[]
  registrationLabel: string
  registrationNote: string
  registrationFee: string
}

interface FaqItem {
  q: string
  a: string | string[]
}

export default function AdmissionsPage() {
  const { t } = useTranslation('admissions')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const crecheGroups = t('tuition.creche.groups', { returnObjects: true }) as CrecheGroup[]
  const maternelle = t('tuition.maternelle', { returnObjects: true }) as MaternelleData
  const steps = t('steps.items', { returnObjects: true }) as string[]
  const faqItems = t('faq.items', { returnObjects: true }) as FaqItem[]

  return (
    <section className={styles.section} id="admissions">
      <div className="container">
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title"><span>{t('title')}</span></h2>
        <p className="sec-sub">{t('subtitle')}</p>

        <div className={styles.admTop}>
          {/* Tuition Creche — full width row, age groups side by side */}
          <div className={`${styles.admBlock} ${styles.crecheBlock}`} id="frais-creche">
            <h3>{t('tuition.heading-creche')}</h3>

            <div className={styles.crecheGroups}>
              {crecheGroups.map((group) => (
                <div className={styles.crecheGroupCol} key={group.ageGroup}>
                  <div className={styles.ageGroupBar}>{group.ageGroup}</div>
                  <table className={styles.fraisTable}>
                    <thead>
                      <tr>
                        <th>{t('tuition.colSchedule')}</th>
                        <th>{t('tuition.colPrivate')}</th>
                        <th>{t('tuition.colCompany')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.rows.map((r) => (
                        <tr key={r.schedule}>
                          <td>{r.schedule}</td>
                          <td>{r.private}</td>
                          <td>{r.company}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>

            <p className={styles.note}>{t('tuition.note-creche')}</p>
          </div>

          {/* Tuition Maternelle */}
          <div className={styles.admBlock} id="frais-maternelle">
            <h3>{t('tuition.heading-maternelle')}</h3>

            <table className={styles.fraisTable}>
              <thead>
                <tr>
                  <th>{t('tuition.colType')}</th>
                  <th>{t('tuition.colCompanyRate')}</th>
                  <th>{t('tuition.colParentRate')}</th>
                </tr>
              </thead>
              <tbody>
                {maternelle.rates.map((r) => (
                  <tr key={r.label}>
                    <td>{r.label}</td>
                    <td>{r.company}</td>
                    <td>{r.parent}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.regFee}>
              <div>
                <strong>{maternelle.registrationLabel}</strong>
                <p className={styles.note} style={{ marginTop: 2 }}>
                  {maternelle.registrationNote}
                </p>
              </div>
              <span className={styles.rateAmount}>{maternelle.registrationFee}</span>
            </div>
          </div>

          {/* Steps */}
          <div className={styles.admBlock} id="inscription">
            <h3>{t('steps.heading')}</h3>
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
                  <div className={styles.faqA}>
                    {Array.isArray(item.a) ? (
                      <ul className={styles.faqBringList}>
                        {item.a.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      item.a
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}