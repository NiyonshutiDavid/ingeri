// src/app/presentation/page.tsx
// NOTE: Only className changes on <section> tags — all content/logic identical
'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Target, Eye, Leaf, Church, Handshake, TreePine, Sparkles,
  MessageSquare, Hash, Palette, Hand, Globe, Dumbbell, Music4,
  MapPin, Phone, Clock, Star, Briefcase, GraduationCap, Users, Quote,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './presentation.module.css'

const PRINCIPE_ICONS = [Leaf, Church, Handshake, TreePine, Sparkles]
const DOMAINE_ICONS = [MessageSquare, Hash, Palette, Hand, Users, Globe, Dumbbell, Music4]
const TEAM_PHOTOS = ['/teacher-1.jpg', '/teacher-2.jpg', '/teacher-3.jpg', '/teacher-4.jpg']

export default function PresentationPage() {
  const { t } = useTranslation('presentation')

  const principes = t('principes.items', { returnObjects: true }) as Array<{ title: string; desc: string }>
  const domaines  = t('domaines.items',  { returnObjects: true }) as string[]
  const members   = t('equipe.members',  { returnObjects: true }) as Array<{ name: string; role: string }>
  const jobs      = t('carrieres.jobs',  { returnObjects: true }) as Array<{
    title: string; location: string; badge: string; type: string
  }>

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
          <span className="tag">{t('missionVision.tag')}</span>
          <h2 className="sec-title">{t('missionVision.title')} <span>{t('missionVision.titleSpan')}</span></h2>
          <div className={styles.mvGrid}>
            <div className={styles.mvBlock}>
              <h3><Target size={16} style={{ display:'inline', verticalAlign:'middle', marginRight:8 }} />{t('missionVision.mission.heading')}</h3>
              <p>{t('missionVision.mission.body')}</p>
            </div>
            <div className={`${styles.mvBlock} ${styles.pk}`}>
              <h3><Eye size={16} style={{ display:'inline', verticalAlign:'middle', marginRight:8 }} />{t('missionVision.vision.heading')}</h3>
              <p>{t('missionVision.vision.body')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principes — white */}
      <section className={styles.section} id="principes">
        <div className="container">
          <span className="tag">{t('principes.tag')}</span>
          <h2 className="sec-title">{t('principes.title')} <span>{t('principes.titleSpan')}</span></h2>
          <div className={styles.principesGrid}>
            {principes.map((p, i) => {
              const Icon = PRINCIPE_ICONS[i]
              return (
                <div key={i} className={styles.ppBlock}>
                  <div className={styles.pbIcon}><Icon size={24} strokeWidth={1.5} /></div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Domaines — off-white */}
      <section className={`${styles.section} ${styles.alt}`} id="domaines">
        <div className="container">
          <span className="tag">{t('domaines.tag')}</span>
          <h2 className="sec-title">{t('domaines.title')}<span>{t('domaines.titleSpan')}</span></h2>
          <div className={styles.domainesGrid}>
            {domaines.map((label, i) => {
              const Icon = DOMAINE_ICONS[i]
              return (
                <div key={i} className={styles.domBlock}>
                  <div className={styles.di}><Icon size={26} strokeWidth={1.5} /></div>
                  <h4>{label}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership — white */}
      <section className={styles.section} id="leadership">
        <div className="container">
          <span className="tag">{t('leadership.tag')}</span>
          <h2 className="sec-title">{t('leadership.title')} <span>{t('leadership.titleSpan')}</span></h2>
          <div className={styles.ldGrid}>
            <div className={styles.ldPhoto}>
              <Image src="/principal.jpg" fill style={{ objectFit:'cover' }} alt={t('leadership.photoAlt')} />
            </div>
            <div className={styles.ldText}>
              <p>{t('leadership.p1')}</p>
              <p>{t('leadership.p2')}</p>
              <div className={styles.ldQuote}>
                <Quote size={18} style={{ marginBottom:8, color:'var(--teal-d)' }} />
                <p>&ldquo;{t('leadership.quote')}&rdquo;</p>
                <cite>{t('leadership.quoteCite')}</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe — off-white */}
      <section className={`${styles.section} ${styles.alt}`} id="equipe">
        <div className="container">
          <span className="tag">{t('equipe.tag')}</span>
          <h2 className="sec-title">{t('equipe.title')} <span>{t('equipe.titleSpan')}</span></h2>
          <p className="sec-sub">{t('equipe.subtitle')}</p>
          <div className={styles.equipeGrid}>
            {members.map((m, i) => (
              <div key={i} className={styles.teamBlock}>
                <div className={styles.teamPhoto}>
                  <Image src={TEAM_PHOTOS[i]} fill style={{ objectFit:'cover' }} alt={m.name} />
                </div>
                <div className={styles.teamInfo}>
                  <h4>{m.name}</h4>
                  <p>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localisations — white */}
      <section className={styles.section} id="localisations">
        <div className="container">
          <span className="tag">{t('localisations.tag')}</span>
          <h2 className="sec-title">{t('localisations.title')} <span>{t('localisations.titleSpan')}</span></h2>
          <div className={styles.locsGrid}>
            {(['creche', 'maternelle'] as const).map((key) => (
              <div key={key} className={styles.locBlock}>
                <div className={styles.locInfo}>
                  <h3 style={key === 'maternelle' ? { color:'var(--pink-d)' } : undefined}>
                    {t(`localisations.${key}.name`)}
                  </h3>
                  <p className={styles.locDetail}><MapPin size={13} style={{ display:'inline', verticalAlign:'middle', marginRight:4 }} />{t(`localisations.${key}.address`)}</p>
                  <p className={styles.locDetail}><Phone size={13} style={{ display:'inline', verticalAlign:'middle', marginRight:4 }} />{t(`localisations.${key}.phone`)}</p>
                  <p className={styles.locDetail}><Clock size={13} style={{ display:'inline', verticalAlign:'middle', marginRight:4 }} />{t(`localisations.${key}.hours`)}</p>
                  <Link href={`/contact#${key}`} className={`btn ${key === 'creche' ? 'btn-teal' : 'btn-pink'}`} style={{ marginTop:14, fontSize:13, padding:'9px 18px' }}>
                    {t(`localisations.${key}.btn`)}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrières — off-white */}
      <section className={`${styles.section} ${styles.alt}`} id="carrieres">
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
                    <div style={{ display:'flex', gap:10, alignItems:'center' }}>
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
              <a href="mailto:carrieres@ingeri.rw" className="btn btn-white">{t('carrieres.ctaBtn')}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}