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

interface Items {
  q: string
  a: string | string[]
}

export default function AdmissionsPage() {
  const { t } = useTranslation('admissions')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const crecheGroups = t('tuition.creche.groups', { returnObjects: true }) as CrecheGroup[]
  const maternelle = t('tuition.maternelle', { returnObjects: true }) as MaternelleData
  const steps = t('steps.items', { returnObjects: true }) as Items[]
  const faqItems = t('faq.items', { returnObjects: true }) as Items[]

  // Accordion state — one entry per crèche age group, keyed by index.
  // Start with the first group open so the section isn't empty on load;
  // change to {} if every group should start collapsed.
  const [openCreche, setOpenCreche] = useState<Record<number, boolean>>({ 0: true })
  const toggleCreche = (i: number) =>
    setOpenCreche((prev) => ({ ...prev, [i]: !prev[i] }))

  // Single toggle for the whole maternelle table + registration fee box
  const [maternelleOpen, setMaternelleOpen] = useState(true)

  // "How To Enroll" now lives as the final entry in the FAQ accordion list.
  // Using faqItems.length as its index keeps it after all translated FAQ
  // entries without needing to merge it into the i18n faq.items array.
  const enrollFaqIndex = faqItems.length

  return (
    <section className={styles.section} id="admissions">
      <div className="container">
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title"><span>{t('title')}</span></h2>
        <p className="sec-sub">{t('subtitle')}</p>

        <div className={styles.admTop}>
          {/* Steps */}
          <div className={styles.admBlock} id="frais-maternelle">
            <h3 className={styles.admBlockTitle}>{t('steps.heading')}</h3>
            <ol className={styles.stepsList}>
              {steps.map((step, i) => (
                <li key={i} className={styles.stepItem}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <p>
                    <strong>{step.q}</strong>
                    {step.a}
                  </p>
                </li>
              ))}
            </ol>
            <Link
              href="/contact"
              className="btn btn-teal"
              style={{ marginTop: 16, alignSelf: 'center' }}
            >
              <p>
              {t('steps.btn')}
              </p>
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