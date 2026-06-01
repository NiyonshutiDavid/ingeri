import Link from 'next/link'
import { MessageSquare, ClipboardList, MapPin } from 'lucide-react'
import styles from './SideCTA.module.css'

export default function SideCTA() {
  return (
    <div className={styles.sideCta}>
      <Link href="/contact" className={`${styles.sideBtn} ${styles.teal}`}>
        <MessageSquare size={14} />
        Nous contacter
      </Link>
      <Link href="/admissions" className={`${styles.sideBtn} ${styles.pink}`}>
        <ClipboardList size={14} />
        Candidater
      </Link>
      <Link href="/presentation#localisations" className={`${styles.sideBtn} ${styles.gold}`}>
        <MapPin size={14} />
        Nous visiter
      </Link>
    </div>
  )
}