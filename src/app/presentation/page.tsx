import Link from 'next/link'
import Image from 'next/image'
import {
  Target, Eye, Leaf, Church, Handshake, TreePine, Sparkles,
  MessageSquare, Hash, Palette, Hand, Globe, Dumbbell, Music4,
  MapPin, Phone, Clock, Star, Briefcase, GraduationCap,
  Users, Quote
} from 'lucide-react'
import styles from './presentation.module.css'

export default function PresentationPage() {
  return (
    <>
      {/* Intro */}
      <section className={styles.intro}>
        <div className="container">
          <span className="tag">Qui sommes-nous</span>
          <h2 className="sec-title">Notre <span>présentation</span></h2>
          <p className="sec-sub">
            Tout ce qui fait l&apos;identité profonde d&apos;Ingeri : notre philosophie, notre équipe et nos engagements.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`${styles.section} alt`} id="mission">
        <div className="container">
          <span className="tag">Notre raison d&apos;être</span>
          <h2 className="sec-title">Mission &amp; <span>Vision</span></h2>
          <div className={styles.mvGrid}>
            <div className={styles.mvBlock}>
              <h3><Target size={16} style={{ display:'inline', verticalAlign:'middle', marginRight:8 }} />Notre mission</h3>
              <p>Semer les graines de l&apos;excellence dès la petite enfance. Nous accompagnons chaque enfant dans son développement global — spirituel, affectif, intellectuel, social et moteur — dans un environnement sécurisé, aimant et stimulant.</p>
            </div>
            <div className={`${styles.mvBlock} ${styles.pk}`}>
              <h3><Eye size={16} style={{ display:'inline', verticalAlign:'middle', marginRight:8 }} />Notre vision</h3>
              <p>Devenir un réseau d&apos;espaces éducatifs de référence au Rwanda et en Afrique, reconnus pour la qualité pédagogique, l&apos;ancrage chrétien et l&apos;innovation adaptée à notre contexte local.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grands principes */}
      <section className={styles.section} id="principes">
        <div className="container">
          <span className="tag">Notre philosophie</span>
          <h2 className="sec-title">Nos grands <span>principes</span></h2>
          <div className={styles.principesGrid}>
            {[
              { icon: Leaf, title: 'Centré sur l\'enfant', desc: 'Chaque enfant est unique. L\'adulte observe, encourage et soutient sans imposer.' },
              { icon: Church, title: 'Fondation chrétienne', desc: 'Patience, respect, humilité, joie et pardon au cœur de chaque journée.' },
              { icon: Handshake, title: 'Le lien', desc: 'Enfant–éducateur, enfant–famille : la confiance partagée sécurise.' },
              { icon: TreePine, title: 'Lien à la nature', desc: 'Jardinage, objets naturels : la nature nourrit l\'émerveillement.' },
              { icon: Sparkles, title: 'Autonomie et dignité', desc: 'L\'enfant apprend à « faire seul » et à se faire confiance.' },
            ].map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className={styles.ppBlock}>
                  <div className={styles.pbIcon}><Icon size={24} strokeWidth={1.5} /></div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Domaines */}
      <section className={`${styles.section} ${styles.altBg}`} id="domaines">
        <div className="container">
          <span className="tag">Ce que nous cultivons</span>
          <h2 className="sec-title">Domaines d&apos;<span>apprentissage</span></h2>
          <div className={styles.domainesGrid}>
            {[
              { icon: MessageSquare, title: 'Langage & expression' },
              { icon: Hash, title: 'Logique & premiers nombres' },
              { icon: Palette, title: 'Créativité & sens' },
              { icon: Hand, title: 'Vie pratique & autonomie' },
              { icon: Users, title: 'Vivre ensemble & foi' },
              { icon: Globe, title: 'Éveil à la nature' },
              { icon: Dumbbell, title: 'Développement moteur' },
              { icon: Music4, title: 'Musique & rythme' },
            ].map((d) => {
              const Icon = d.icon
              return (
                <div key={d.title} className={styles.domBlock}>
                  <div className={styles.di}><Icon size={26} strokeWidth={1.5} /></div>
                  <h4>{d.title}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.section} id="leadership">
        <div className="container">
          <span className="tag">Direction</span>
          <h2 className="sec-title">Le <span>Leadership</span></h2>
          <div className={styles.ldGrid}>
            <div className={styles.ldPhoto}>
              <Image src="/principal.jpg" fill style={{objectFit:'cover'}} alt="Fondatrice" />
              Photo de la fondatrice / directrice
            </div>
            <div className={styles.ldText}>
              <p>Chez Ingeri, le leadership est au service de l&apos;enfant. Chaque décision pédagogique est guidée par une seule question : est-ce le meilleur pour l&apos;enfant ?</p>
              <p>Notre équipe dirigeante croit profondément que l&apos;éducation précoce est l&apos;investissement le plus précieux que l&apos;on puisse faire pour une génération.</p>
              <div className={styles.ldQuote}>
                <Quote size={18} style={{ marginBottom: 8, color: 'var(--teal-d)' }} />
                <p>&ldquo;Chaque enfant est une promesse d&apos;avenir. Notre rôle est d&apos;honorer cette promesse.&rdquo;</p>
                <cite>— Fondatrice, Ingeri Schools</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className={`${styles.section} ${styles.altBg}`} id="equipe">
        <div className="container">
          <span className="tag">Les visages d&apos;Ingeri</span>
          <h2 className="sec-title">Notre <span>équipe</span></h2>
          <p className="sec-sub">Des femmes engagées, mères et professionnelles, au service de vos enfants.</p>
          <div className={styles.equipeGrid}>
            {[
              { photo: <Image src="/teacher-1.jpg" fill style={{objectFit:'cover'}} alt="Fondatrice" />, name: 'Prénom Nom', role: 'Directrice pédagogique' },
              { photo: <Image src="/teacher-2.jpg" fill style={{objectFit:'cover'}} alt="Éducatrice crèche" />, name: 'Prénom Nom', role: 'Éducatrice crèche' },
              { photo: <Image src="/teacher-3.jpg" fill style={{objectFit:'cover'}} alt="Enseignante maternelle" />, name: 'Prénom Nom', role: 'Enseignante maternelle' },
              { photo: <Image src="/teacher-4.jpg" fill style={{objectFit:'cover'}} alt="Coordinatrice" />, name: 'Prénom Nom', role: 'Coordinatrice' },
            ].map((m, i) => (
              <div key={i} className={styles.teamBlock}>
                <div className={styles.teamPhoto}>{m.photo}</div>
                <div className={styles.teamInfo}>
                  <h4>{m.name}</h4>
                  <p>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localisations */}
      <section className={styles.section} id="localisations">
        <div className="container">
          <span className="tag">Nous trouver</span>
          <h2 className="sec-title">Nos <span>localisations</span></h2>
          <div className={styles.locsGrid}>
            <div className={styles.locBlock}>
              <div className={styles.locInfo}>
                <h3>La P&apos;tite Crèche Ingeri</h3>
                <p className={styles.locDetail}><MapPin size={13} style={{ display:'inline', verticalAlign:'middle', marginRight:4 }} /> Adresse à compléter – Kigali</p>
                <p className={styles.locDetail}><Phone size={13} style={{ display:'inline', verticalAlign:'middle', marginRight:4 }} /> Tél : à compléter</p>
                <p className={styles.locDetail}><Clock size={13} style={{ display:'inline', verticalAlign:'middle', marginRight:4 }} /> Lun–Ven : 7h00–18h00</p>
                <Link href="/contact#creche" className="btn btn-teal" style={{ marginTop: 14, fontSize: 13, padding: '9px 18px' }}>Nous contacter</Link>
              </div>
            </div>
            <div className={styles.locBlock}>
              <div className={styles.locInfo}>
                <h3 style={{ color: 'var(--pink-d)' }}>Ingeri International School</h3>
                <p className={styles.locDetail}><MapPin size={13} style={{ display:'inline', verticalAlign:'middle', marginRight:4 }} /> Adresse à compléter – Kigali</p>
                <p className={styles.locDetail}><Phone size={13} style={{ display:'inline', verticalAlign:'middle', marginRight:4 }} /> Tél : à compléter</p>
                <p className={styles.locDetail}><Clock size={13} style={{ display:'inline', verticalAlign:'middle', marginRight:4 }} /> Lun–Ven : 7h00–17h30</p>
                <Link href="/contact#maternelle" className="btn btn-pink" style={{ marginTop: 14, fontSize: 13, padding: '9px 18px' }}>Nous contacter</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carrières */}
      <section className={`${styles.section} ${styles.altBg}`} id="carrieres">
        <div className="container">
          <span className="tag">Rejoignez-nous</span>
          <h2 className="sec-title">Carrières chez <span>Ingeri</span></h2>
          <div className={styles.carGrid}>
            <div className={styles.carJobs}>
              <h3 className={styles.jobsTitle}>Postes vacants</h3>
              {[
                { title: 'Éducatrice de crèche', location: "La P'tite Crèche · Kigali", badge: 'Temps plein', badgeClass: 'teal', icon: GraduationCap },
                { title: 'Enseignante maternelle', location: 'Ingeri International School', badge: 'Temps plein', badgeClass: 'teal', icon: GraduationCap },
                { title: 'Stagiaire pédagogique', location: 'Les deux campus', badge: 'Stage', badgeClass: 'pink', icon: Briefcase },
              ].map((job, i) => {
                const Icon = job.icon
                return (
                  <div key={i} className={styles.jobRow}>
                    <div style={{ display:'flex', gap:10, alignItems:'center' }}>
                      <Icon size={16} color="var(--mid)" />
                      <div>
                        <h4>{job.title}</h4>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <span className={`${styles.jBadge} ${job.badgeClass === 'pink' ? styles.pk : ''}`}>{job.badge}</span>
                  </div>
                )
              })}
              <div className={styles.teamQuote}>
                <p>&ldquo;Travailler chez Ingeri, c&apos;est sentir chaque jour que son travail a du sens.&rdquo;</p>
                <p className={styles.tqAuthor}>— Membre de l&apos;équipe</p>
              </div>
            </div>
            <div className={styles.carCta}>
              <Star size={32} color="#fff" strokeWidth={1.5} />
              <h3>Rejoignez la famille Ingeri</h3>
              <p>Vous partagez nos valeurs de bienveillance, d&apos;excellence et de foi ? Envoyez-nous votre candidature.</p>
              <a href="mailto:carrieres@ingeri.rw" className="btn btn-white">Envoyer ma candidature</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}