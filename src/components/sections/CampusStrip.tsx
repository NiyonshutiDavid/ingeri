import Link from 'next/link'
import { Baby, GraduationCap, ArrowRight } from 'lucide-react'
import styles from './CampusStrip.module.css'

export default function CampusStrip() {
  return (
    <div className={styles.campusStrip}>
      <Link href="/campus#creche" className={styles.csBlock}>
        <div className={`${styles.csThumb} ${styles.teal}`}>
          <Baby size={32} />
        </div>
        <div className={styles.csText}>
          <span className={`${styles.csBadge} ${styles.teal}`}>Crèche</span>
          <h3>La P&apos;tite Crèche Ingeri</h3>
          <p>Un espace douillet pour les tout-petits — sécurité affective, autonomie et stimulation douce.</p>
          <span className={`${styles.csAge} ${styles.teal}`}>6 – 24 mois</span>
        </div>
        <ArrowRight size={18} className={`${styles.csArrow} ${styles.teal}`} />
      </Link>

      <Link href="/campus#maternelle" className={styles.csBlock}>
        <div className={`${styles.csThumb} ${styles.pink}`}>
          <GraduationCap size={32} />
        </div>
        <div className={styles.csText}>
          <span className={`${styles.csBadge} ${styles.pink}`}>Maternelle · International</span>
          <h3>Ingeri International School</h3>
          <p>Programme national français · Pédagogie Montessori · Valeurs chrétiennes · Ouverture internationale.</p>
          <span className={`${styles.csAge} ${styles.pink}`}>3 – 5 ans</span>
        </div>
        <ArrowRight size={18} className={`${styles.csArrow} ${styles.pink}`} />
      </Link>
    </div>
  )
}