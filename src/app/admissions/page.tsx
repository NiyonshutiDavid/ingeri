// src/app/admissions/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import ContactForm, { type Campus } from '@/components/sections/ContactForm'
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
  const { t: tContact } = useTranslation('contact')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Quick-apply side panel state
  const [applyOpen, setApplyOpen] = useState(false)
  const [activeCampus, setActiveCampus] = useState<Campus>('creche')
  const isCreche = activeCampus === 'creche'

  const crecheGroups = t('tuition.creche.groups', { returnObjects: true }) as CrecheGroup[]
  const maternelle = t('tuition.maternelle', { returnObjects: true }) as MaternelleData
  const steps = t('steps.items', { returnObjects: true }) as Items[]
  const faqItems = t('faq.items', { returnObjects: true }) as Items[]

  const [openCreche, setOpenCreche] = useState<Record<number, boolean>>({ 0: true })
  const toggleCreche = (i: number) =>
    setOpenCreche((prev) => ({ ...prev, [i]: !prev[i] }))

  const [maternelleOpen, setMaternelleOpen] = useState(true)
  const enrollFaqIndex = faqItems.length

  // Close on Escape, lock body scroll while open
  useEffect(() => {
    if (!applyOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setApplyOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [applyOpen])

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
            <div className={styles.enrollBtnWrap}>
              <button
                type="button"
                className="btn btn-teal"
                style={{ alignSelf: 'center' }}
                onClick={() => setApplyOpen(true)}
              >
                <p>{t('steps.btn')}</p>
              </button>
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
                <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {item.q}
                  {openFaq === i
                    ? <ChevronUp size={14} className={styles.arrow} />
                    : <ChevronDown size={14} className={styles.arrow} />}
                </button>
                {openFaq === i && (
                  <div className={styles.faqA}>
                    {Array.isArray(item.a) ? (
                      <ul className={styles.faqBringList}>
                        {item.a.map((line, idx) => <li key={idx}>{line}</li>)}
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

      {/* Quick-apply side modal */}
      <div
        className={`${styles.overlay} ${applyOpen ? styles.overlayOpen : ''}`}
        onClick={() => setApplyOpen(false)}
        aria-hidden={!applyOpen}
      />
      <aside
        className={`${styles.drawer} ${applyOpen ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!applyOpen}
      >
        <div className={styles.drawerHead}>
          <div className={styles.tabs} role="tablist">
            {(['creche', 'maternelle'] as Campus[]).map((campus) => {
              const active = activeCampus === campus
              return (
                <button
                  key={campus}
                  role="tab"
                  aria-selected={active}
                  className={`${styles.tab} ${active ? styles.tabActive : styles.tabInactive}`}
                  onClick={() => setActiveCampus(campus)}
                >
                  {campus === 'creche' ? tContact('info.crecheName') : tContact('info.maternelleName')}
                </button>
              )
            })}
          </div>
          <button
            type="button"
            className={styles.drawerClose}
            onClick={() => setApplyOpen(false)}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className={styles.drawerBody}>
          <h3 className={styles.quickApplyHeading}>{tContact('form.headingCreche')}</h3>
          <ContactForm campus={activeCampus} accentClass={isCreche ? 'btn-teal' : 'btn-pink'} />
        </div>
      </aside>
    </section>
  )
}