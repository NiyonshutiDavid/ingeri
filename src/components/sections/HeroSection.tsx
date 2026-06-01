import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Compass } from 'lucide-react'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section id="accueil" className={styles.heroBanner}>
      <div className={styles.deco1} />
      <div className={styles.deco2} />
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <p className={styles.eyebrow}>Bienvenue chez Ingeri</p>
          <h1 className={styles.heroTitle}>
            Grandir avec<br />
            <span className={styles.hlTeal}>amour</span>, foi<br />
            et <span className={styles.hlPink}>excellence</span>
          </h1>
          <p className={styles.heroSubtitle}>Un cocon d&apos;amour et d&apos;éveil pour vos enfants</p>
          <div className={styles.heroBtns}>
            <Link href="/admissions" className="btn btn-teal">
              <BookOpen size={16} />
              Inscrire mon enfant
            </Link>
            <Link href="/presentation" className="btn btn-outline">
              <Compass size={16} />
              Découvrir Ingeri
            </Link>
          </div>
        </div>
        <div className={styles.heroImg}>
          <Image 
            src="/at-school.jpg" 
            alt="Enfants Ingeri" 
            fill 
            style={{objectFit:'cover', borderRadius:'var(--r-xl)'}} />
          <span>📷 Photo principale<br /><small>Remplacer par une image</small></span>
        </div>
      </div>
    </section>
  )
}