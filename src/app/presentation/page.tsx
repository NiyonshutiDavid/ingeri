// src/app/presentation/page.tsx
// NOTE: Only className changes on <section> tags — all content/logic identical
'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Leaf, Church, Handshake, TreePine, Sparkles,
  MessageSquare, Hash, Palette, Hand, Globe, Dumbbell, Music4, Star, Briefcase, GraduationCap, Users, ChevronLeft, ChevronRight, X
} from 'lucide-react'
import { JobApplicationForm, type JobOption } from '@/components/sections/ContactForm'
import { useTranslation } from 'react-i18next'
import styles from './presentation.module.css'
import CampusStrip from '@/components/sections/CampusStrip'
import MissionVision from '@/components/sections/MissionVision'
import { useRef, useState, useEffect, useCallback } from 'react'

const PRINCIPE_ICONS = [Leaf, Church, Handshake, TreePine, Sparkles]
const DOMAINE_ICONS = [MessageSquare, Hash, Palette, Hand, Users, Globe, Dumbbell, Music4]
const TEAM_PHOTOS = ['/teacher-1.jpg', '/teacher-2.jpg', '/teacher-3.jpg', '/teacher-4.jpg', '/principal.jpg']

function useResponsiveColumns(memberCount: number) {
  const [target, setTarget] = useState(4)

  useEffect(() => {
    const mqDesktop = window.matchMedia('(min-width: 961px)')
    const mqTablet = window.matchMedia('(min-width: 641px) and (max-width: 960px)')

    const update = () => {
      if (mqDesktop.matches) setTarget(4)
      else if (mqTablet.matches) setTarget(2)
      else setTarget(1)
    }

    update()
    mqDesktop.addEventListener('change', update)
    mqTablet.addEventListener('change', update)
    return () => {
      mqDesktop.removeEventListener('change', update)
      mqTablet.removeEventListener('change', update)
    }
  }, [])

  return Math.max(1, Math.min(target, memberCount))
}


export default function PresentationPage() {
  const { t } = useTranslation('presentation')

  const pillars = t('principes.pillars.items', { returnObjects: true }) as Array<{ title: string; desc: string }>
  const members   = t('equipe.members',  { returnObjects: true }) as Array<{ name: string; role: string }>
  const jobs      = t('carrieres.jobs',  { returnObjects: true }) as Array<{
    title: string; location: string; badge: string; type: string
  }>

  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const columns = useResponsiveColumns(members.length)

  const updateScrollState = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanScrollPrev(el.scrollLeft > 8)
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }, [])

  useEffect(() => {
    updateScrollState()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState, columns])

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>(`.${styles.teamBlock}`)
    const cardWidth = card ? card.offsetWidth + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: direction * cardWidth, behavior: 'smooth' })
  }

  const [applyOpen, setApplyOpen] = useState(false)

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

  const jobOptions: JobOption[] = jobs.map((j) => ({ title: j.title, location: j.location }))

  return (
    <>
      {/* Intro — white */}
      <section className={styles.intro}>
        <div className="container">
          <span className="tag">{t('intro.tag')}</span>
          <h2 className="sec-title">{t('intro.title')} <span>{t('intro.titleSpan')}</span></h2>
          <p className="sec-sub">{t('intro.subtitle')}</p>
        </div>
      </section>
      
      {/* Mission & Vision — off-white */}
      <section className={`${styles.section} ${styles.alt}`} id="mission">
        <div className="container">
          <MissionVision withContainer={false} background="transparent" />
        </div>
      </section>

      {/* Campus - white */}
      <section className={`${styles.section}`} id="campus">
        <div className="container">
          <span className="tag">{t('campus.tag')}</span>
          <h2 className="sec-title">{t('campus.title')} <span>{t('campus.titleSpan')}</span></h2>
          <CampusStrip withContainer={false} background="transparent"/>
        </div>
      </section>

      {/* Pillars — off-white */}
      <section className={`${styles.section} ${styles.alt}`} id="principes">
        <div className="container">
          <span className="tag">{t('principes.pillars.tag')}</span>
          <h2 className="sec-title">{t('principes.pillars.title')} <span>{t('principes.pillars.titleSpan')}</span></h2>
          <div className={styles.pillarsGrid}>
            {pillars.map((p, i) => {
              // const Icon = PRINCIPE_ICONS[i]
              return (
                <div key={i} className={styles.ppBlock}>
                  {/* <div className={styles.pbIcon}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div> */}
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Équipe — white */}
      {/* <section className={`${styles.section} `} id="equipe">
        <div className="container">
          <span className="tag">{t('equipe.tag')}</span>
          <h2 className="sec-title">{t('equipe.title')} <span>{t('equipe.titleSpan')}</span></h2>
          <p className="sec-sub">{t('equipe.subtitle')}</p>

          <div className={styles.equipeCarousel}>
            <button
              type="button"
              className={`${styles.equipeNav} ${styles.equipeNavPrev}`}
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollPrev}
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            <div
              className={styles.equipeGrid}
              ref={trackRef}
              style={{ '--cols': columns } as React.CSSProperties}
            >
              {members.map((m, i) => (
                <div key={i} className={`${styles.teamBlock} ${i % 2 === 1 ? styles.pink : ''}`}>
                  <div className={styles.teamPhoto}>
                    <Image src={TEAM_PHOTOS[i]} fill style={{ objectFit: 'cover' }} alt={m.name} />
                  </div>
                  <div className={styles.teamInfo}>
                    <h4>{m.name}</h4>
                    <p>{m.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={`${styles.equipeNav} ${styles.equipeNavNext}`}
              onClick={() => scrollByCard(1)}
              disabled={!canScrollNext}
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section> */}

      {/* Carrières — white */}
      <section className={`${styles.section} `} id="carrieres">
      <div className="container">
        <span className="tag">{t('carrieres.tag')}</span>
        <h2 className="sec-title">{t('carrieres.title')} <span>{t('carrieres.titleSpan')}</span></h2>
        <div className={styles.carGrid}>
          <div className={styles.carJobs}>
            <h3 className={styles.jobsTitle}>{t('carrieres.jobsTitle')}</h3>
            {jobs.map((job, i) => {
              const Icon = job.type === 'pink' ? Briefcase : GraduationCap
              return (
                <div key={i} className={styles.jobRow}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <Icon size={16} color="var(--hint)" />
                    <div><h4>{job.title}</h4><p>{job.location}</p></div>
                  </div>
                  <span className={`${styles.jBadge} ${job.type === 'pink' ? styles.pk : ''}`}>{job.badge}</span>
                </div>
              )
            })}
            <div className={styles.teamQuote}><p>&ldquo;{t('carrieres.teamQuote')}&rdquo;</p></div>
          </div>
          <div className={styles.carCta}>
            <Star size={32} color="#fff" strokeWidth={1.5} />
            <h3>{t('carrieres.ctaTitle')}</h3>
            <p>{t('carrieres.ctaDesc')}</p>
            <button type="button" className="btn btn-white" onClick={() => setApplyOpen(true)}>
              {t('carrieres.ctaBtn')}
            </button>
          </div>
        </div>
      </div>

      {/* Application side modal */}
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
          <h3 className={styles.quickApplyHeading} style={{ marginBottom: 0, border: 'none', paddingBottom: 0 }}>
            {t('carrieres.ctaTitle')}
          </h3>
          <button type="button" className={styles.drawerClose} onClick={() => setApplyOpen(false)} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <div className={styles.drawerBody}>
          <JobApplicationForm jobs={jobOptions} accentClass="btn-teal" />
        </div>
      </aside>
    </section>
    </>
  )
}