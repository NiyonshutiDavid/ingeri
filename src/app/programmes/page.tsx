'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Sprout, Sparkles, MessageSquare, Hash, Palette, Hand, Calendar } from 'lucide-react'
import styles from './programmes.module.css'

type Tab = 'creche' | 'maternelle'

export default function ProgrammesPage() {
  const [activeTab, setActiveTab] = useState<Tab>('creche')

  return (
    <section className={styles.section} id="programmes">
      <div className="container">
        <span className="tag">Ce que nous enseignons</span>
        <h2 className="sec-title">Nos <span>programmes</span></h2>
        <p className="sec-sub">Des expériences pédagogiques adaptées à chaque âge.</p>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'creche' ? styles.actTeal : ''}`}
            onClick={() => setActiveTab('creche')}
          >
            Crèche — 6 à 24 mois
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'maternelle' ? styles.actPink : ''}`}
            onClick={() => setActiveTab('maternelle')}
          >
            Maternelle — 3 à 5 ans
          </button>
        </div>

        {activeTab === 'creche' && (
          <div className={styles.progLayout} id="creche">
            <div className={`${styles.progImg} ${styles.teal}`}>
              <Image src="/creche.jpg" fill style={{objectFit:'cover'}} alt="La P'tite Crèche Ingeri" />
              Photo activité crèche
            </div>
            <div className={styles.progInfo}>
              <h2>La P&apos;tite Crèche Ingeri</h2>
              <p className={`${styles.ages} ${styles.teal}`}>Enfants de 6 à 24 mois</p>
              <p>La première étape d&apos;une aventure d&apos;éveil unique. Accueil individualisé, respect du rythme de chaque enfant.</p>
              <div className={styles.pillars}>
                <div className={styles.ppRow}>
                  <span className={styles.ppIcon}><Heart size={18} strokeWidth={1.5} /></span>
                  <div>
                    <h4>L&apos;amour et la sécurité affective</h4>
                    <p>Lien stable et bienveillant dans la continuité du cocon familial.</p>
                  </div>
                </div>
                <div className={styles.ppRow}>
                  <span className={styles.ppIcon}><Sprout size={18} strokeWidth={1.5} /></span>
                  <div>
                    <h4>L&apos;autonomie dès le plus jeune âge</h4>
                    <p>Boire à la tasse, explorer, choisir une activité, se déplacer librement.</p>
                  </div>
                </div>
                <div className={styles.ppRow}>
                  <span className={styles.ppIcon}><Sparkles size={18} strokeWidth={1.5} /></span>
                  <div>
                    <h4>Stimulation douce et progressive</h4>
                    <p>Jeux sensoriels, comptines, exploration motrice, premières interactions.</p>
                  </div>
                </div>
              </div>
              <div className={styles.calCard}>
                <Calendar size={14} style={{ display:'inline', verticalAlign:'middle', marginRight:6 }} />
                <strong>Calendrier :</strong> Lun–Ven. Réunions parents &amp; mini-ateliers réguliers.
              </div>
              <Link href="/admissions" className="btn btn-teal">Inscrire mon enfant</Link>
            </div>
          </div>
        )}

        {activeTab === 'maternelle' && (
          <div className={styles.progLayout} id="maternelle">
            <div className={`${styles.progImg} ${styles.pink}`}>
              <Image src="/maternelle.jpg" fill style={{objectFit:'cover'}} alt="La P'tite Crèche Ingeri" />
              Photo activité maternelle
            </div>
            <div className={styles.progInfo}>
              <h2 style={{ color: 'var(--pink-d)' }}>Ingeri International School</h2>
              <p className={`${styles.ages} ${styles.pink}`}>Enfants de 3 à 5 ans</p>
              <p>Programme national français + pédagogie Montessori + approche biblique pour un épanouissement harmonieux et international.</p>
              <div className={styles.pillars}>
                <div className={styles.ppRow}>
                  <span className={styles.ppIcon}><MessageSquare size={18} strokeWidth={1.5} /></span>
                  <div>
                    <h4 style={{ color: 'var(--pink-d)' }}>Langage &amp; Expression</h4>
                    <p>Histoires, chansons, prières et échanges guidés.</p>
                  </div>
                </div>
                <div className={styles.ppRow}>
                  <span className={styles.ppIcon}><Hash size={18} strokeWidth={1.5} /></span>
                  <div>
                    <h4 style={{ color: 'var(--pink-d)' }}>Logique &amp; Premiers nombres</h4>
                    <p>Objets, formes et quantités pour découvrir l&apos;ordre du monde.</p>
                  </div>
                </div>
                <div className={styles.ppRow}>
                  <span className={styles.ppIcon}><Palette size={18} strokeWidth={1.5} /></span>
                  <div>
                    <h4 style={{ color: 'var(--pink-d)' }}>Créativité &amp; Sens</h4>
                    <p>Peinture, chant, modelage, danse.</p>
                  </div>
                </div>
                <div className={styles.ppRow}>
                  <span className={styles.ppIcon}><Hand size={18} strokeWidth={1.5} /></span>
                  <div>
                    <h4 style={{ color: 'var(--pink-d)' }}>Vie Pratique &amp; Autonomie</h4>
                    <p>S&apos;habiller, ranger, servir, prendre soin de soi et des autres.</p>
                  </div>
                </div>
              </div>
              <div className={styles.levels}>
                <span className={styles.lvPink}>Petite section (3 ans)</span>
                <span className={styles.lvTeal}>Moyenne section (3–4 ans)</span>
                <span className={styles.lvGold}>Grande section (4–5 ans)</span>
              </div>
              <Link href="/admissions" className="btn btn-pink">Inscrire mon enfant</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}