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
          {/* Creche */}
          <div className={styles.admBlock} id="frais-creche">
            <h3>{t('tuition.heading-creche')}</h3>

            <div className={styles.crecheGroups}>
              {crecheGroups.map((group, i) => {
                const isOpen = !!openCreche[i]
                return (
                  <div className={styles.crecheGroupCol} key={group.ageGroup}>
                    <button
                      type="button"
                      className={styles.ageGroupBar}
                      aria-expanded={isOpen}
                      onClick={() => toggleCreche(i)}
                    >
                      <span>{group.ageGroup}</span>
                      {isOpen
                        ? <ChevronUp size={14} className={styles.arrow} />
                        : <ChevronDown size={14} className={styles.arrow} />}
                    </button>
                    <div
                      className={`${styles.collapseWrap} ${isOpen ? styles.collapseOpen : ''}`}
                    >
                      <div className={styles.collapseInner}>
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
                    </div>
                  </div>
                )
              })}
            </div>

            <p className={styles.note}>{t('tuition.note-creche')}</p>

            <div className={styles.enrollBtnWrap}>
              <Link href="/contact" className="btn btn-teal">
                {t('steps.btn')}
              </Link>
            </div>
          </div>

          {/* Maternelle */}
          <div className={styles.admBlock} id="frais-maternelle">
            <h3 className={styles.toggleHeading}>
              <button
                type="button"
                className={styles.blockToggle}
                aria-expanded={maternelleOpen}
                onClick={() => setMaternelleOpen((v) => !v)}
              >
                <span>{t('tuition.heading-maternelle')}</span>
                {maternelleOpen
                  ? <ChevronUp size={16} className={styles.arrow} />
                  : <ChevronDown size={16} className={styles.arrow} />}
              </button>
            </h3>

            <div
              className={`${styles.collapseWrap} ${maternelleOpen ? styles.collapseOpen : ''}`}
            >
              <div className={styles.collapseInner}>
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
            </div>

            <div className={styles.enrollBtnWrap}>
              <Link href="/contact" className="btn btn-teal">
                {t('steps.btn')}
              </Link>
            </div>
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

            {/* How To Enroll — moved here from the right column, rendered
                as one more FAQ accordion entry with its numbered-steps
                layout in place of plain text/list answer content. */}
            <div
              id="inscription"
              className={`${styles.faqItem} ${openFaq === enrollFaqIndex ? styles.open : ''}`}
            >
              <button
                className={styles.faqQ}
                onClick={() => setOpenFaq(openFaq === enrollFaqIndex ? null : enrollFaqIndex)}
              >
                {t('steps.heading')}
                {openFaq === enrollFaqIndex
                  ? <ChevronUp size={14} className={styles.arrow} />
                  : <ChevronDown size={14} className={styles.arrow} />}
              </button>
              {openFaq === enrollFaqIndex && (
                <div className={styles.faqA}>
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}