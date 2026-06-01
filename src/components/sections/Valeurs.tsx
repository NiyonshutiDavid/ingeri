import { Heart, Cross, Star, Users } from 'lucide-react'
import styles from './Valeurs.module.css'

const valeurs = [
  {
    icon: Heart,
    title: 'Amour',
    description: 'Chaque enfant est accueilli inconditionnellement, comme un don précieux.',
  },
  {
    icon: Cross,
    title: 'Foi',
    description: 'La foi chrétienne inspire chaque interaction, chaque geste du quotidien.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Toujours viser le meilleur — pour chaque enfant, chaque famille.',
  },
  {
    icon: Users,
    title: 'Communauté',
    description: 'Parents, enfants et éducateurs, ensemble pour grandir sereinement.',
  },
]

export default function Valeurs() {
  return (
    <div id="valeurs" className={styles.wrapper}>
      <div className="container">
        <span className="tag">Ce en quoi nous croyons</span>
        <h2 className="sec-title">Nos <span>valeurs</span></h2>
        <div className={styles.valeursGrid}>
          {valeurs.map((v) => {
            const Icon = v.icon
            return (
              <div key={v.title} className={styles.vBlock}>
                <div className={styles.vIcon}><Icon size={28} strokeWidth={1.5} /></div>
                <h4>{v.title}</h4>
                <p>{v.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}