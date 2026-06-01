import { Star } from 'lucide-react'
import styles from './Testimonials.module.css'

// TODO: fetch from backend API (e.g. GET /api/testimonials)
const testimonials = [
  {
    quote: "Depuis que notre fille est à la P'tite Crèche Ingeri, elle s'épanouit chaque jour. L'équipe est à l'écoute, bienveillante, et nous sentons vraiment que notre enfant est entre de bonnes mains.",
    initials: 'AM',
    name: 'Amina M.',
    detail: 'Parent – Crèche',
  },
  {
    quote: "L'approche Montessori combinée aux valeurs chrétiennes — c'est exactement ce que nous cherchions pour notre fils. Il rentre de l'école heureux, curieux et confiant.",
    initials: 'JK',
    name: 'Jean K.',
    detail: 'Parent – Maternelle',
  },
  {
    quote: "Ce qui m'a séduite, c'est la vraie attention portée à chaque enfant. Pas un numéro, mais une personne unique. Ingeri, c'est une famille.",
    initials: 'GN',
    name: 'Gisèle N.',
    detail: 'Parent – Crèche',
  },
]

export default function Testimonials() {
  return (
    <div id="temoignages" className={styles.wrapper}>
      <div className="container">
        <span className="tag">Notre communauté</span>
        <h2 className="sec-title">Echoes of our <span>community</span></h2>
        <p className="sec-sub">Ce que les familles Ingeri disent de leur expérience.</p>
        <div className={styles.echoesGrid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.echoBlock}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.detail}>{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}