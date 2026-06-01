import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Globe } from 'lucide-react'
import styles from './campus.module.css'

export default function CampusPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className="tag">Nos deux campus</span>
        <h2 className="sec-title">Nos <span>campus</span></h2>
        <p className="sec-sub">
          Deux environnements pensés pour chaque tranche d&apos;âge, réunis sous la même philosophie.
        </p>

        <div className={styles.campusGrid}>
          {/* Crèche */}
          <div className={styles.campusBlock} id="creche">
            <div className={`${styles.campusImg} ${styles.teal}`}>
              <Image src="/creche.jpg" fill style={{objectFit:'cover'}} alt="La P'tite Crèche Ingeri" />
              Photo – La P&apos;tite Crèche Ingeri
            </div>
            <div className={styles.campusBody}>
              <span className={`${styles.cbBadge} ${styles.teal}`}>Crèche</span>
              <h3>La P&apos;tite Crèche Ingeri</h3>
              <p>
                Un espace douillet et sécurisé pour les tout-petits de 6 à 24 mois — conçu pour soutenir
                chaque étape de leur développement avec amour et douceur.
              </p>
              <div className={styles.cDetail}><strong>Âges :</strong><span>6 – 24 mois</span></div>
              <div className={styles.cDetail}><MapPin size={13} /><span>Kigali, Rwanda – à compléter</span></div>
              <div className={styles.cDetail}><Mail size={13} /><span>creche@ingeri.rw</span></div>
              <Link href="/contact#creche" className="btn btn-teal" style={{ marginTop: 20, fontSize: 13, padding: '10px 20px' }}>
                Visiter le campus
              </Link>
            </div>
          </div>

          {/* Maternelle */}
          <div className={styles.campusBlock} id="maternelle">
            <div className={`${styles.campusImg} ${styles.pink}`}>
              <Image src="/maternelle.jpg" fill style={{objectFit:'cover'}} alt="La P'tite Crèche Ingeri" />
              Photo – Ingeri International School
            </div>
            <div className={styles.campusBody}>
              <span className={`${styles.cbBadge} ${styles.pink}`}>Maternelle · International</span>
              <div className={styles.intlStrip}>
                <Globe size={14} /> <span><strong>Programme national français</strong> · Pédagogie Montessori · Enseignement bilingue &amp; international</span>
              </div>
              <h3>Ingeri International School</h3>
              <p>
                Un campus dynamique pour les enfants de 3 à 5 ans. Nous suivons le programme national
                français tout en intégrant une pédagogie active et des valeurs chrétiennes dans un
                environnement international et ouvert.
              </p>
              <div className={styles.cDetail}><strong>Âges :</strong><span>3 – 5 ans</span></div>
              <div className={styles.cDetail}><MapPin size={13} /><span>Kigali, Rwanda – à compléter</span></div>
              <div className={styles.cDetail}><Mail size={13} /><span>maternelle@ingeri.rw</span></div>
              <Link href="/contact#maternelle" className="btn btn-pink" style={{ marginTop: 20, fontSize: 13, padding: '10px 20px' }}>
                Visiter le campus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}