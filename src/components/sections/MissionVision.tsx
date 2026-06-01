import { Target, Eye, CheckCircle2 } from 'lucide-react'
import styles from './MissionVision.module.css'

export default function MissionVision() {
  return (
    <div id="mission" className={styles.wrapper}>
      <div className="container">
        <span className="tag">Notre raison d&apos;être</span>
        <h2 className="sec-title">Mission &amp; <span>Vision</span></h2>
        <div className={styles.mvGrid}>
          <div className={styles.mvBlock}>
            <h3>
              <Target size={18} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
              Notre mission
            </h3>
            <p>
              Semer les graines de l&apos;excellence dès la petite enfance. Nous accompagnons chaque enfant
              dans son développement global — spirituel, affectif, intellectuel, social et moteur — dans
              un environnement sécurisé, aimant et stimulant.
            </p>
          </div>
          <div className={`${styles.mvBlock} ${styles.pink}`}>
            <h3>
              <Eye size={18} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
              Notre vision
            </h3>
            <p>
              Devenir un réseau d&apos;espaces éducatifs de référence au Rwanda et en Afrique, reconnus pour
              la qualité pédagogique, l&apos;ancrage chrétien et l&apos;innovation adaptée à notre contexte local.
            </p>
            <ul className={styles.mvList}>
              <li><CheckCircle2 size={14} style={{ flexShrink: 0, marginTop: 3 }} />Excellence de l&apos;accompagnement pédagogique</li>
              <li><CheckCircle2 size={14} style={{ flexShrink: 0, marginTop: 3 }} />Ancrage dans les valeurs chrétiennes</li>
              <li><CheckCircle2 size={14} style={{ flexShrink: 0, marginTop: 3 }} />Innovation éducative au service du contexte local</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}