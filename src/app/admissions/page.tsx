'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DollarSign, ClipboardList, DoorOpen, ChevronDown, ChevronUp } from 'lucide-react'
import styles from './admissions.module.css'

const faqItems = [
  {
    q: "À partir de quel âge acceptez-vous les enfants ?",
    a: "À la crèche dès 6 mois, à la maternelle à partir de 3 ans révolus.",
  },
  {
    q: "Quelle langue est utilisée ?",
    a: "Ingeri International School suit le programme national français. Le français est la langue principale, avec une ouverture à l'anglais et au kinyarwanda.",
  },
  {
    q: "Y a-t-il une restauration sur place ?",
    a: "Oui, repas équilibrés, variés et locaux préparés chaque jour. Les enfants participent aux routines de table.",
  },
  {
    q: "Comment se déroule la période d'adaptation ?",
    a: "Adaptation progressive : visites préalables avec les parents, présences courtes qui s'allongent, respect du rythme de l'enfant.",
  },
  {
    q: "Des facilités de paiement sont-elles possibles ?",
    a: "Oui, nous examinons chaque situation. Contactez-nous confidentiellement.",
  },
]

const tuitionRows = [
  { programme: 'Crèche (6–24 mois)', frais: 'À compléter' },
  { programme: 'Petite section (3 ans)', frais: 'À compléter' },
  { programme: 'Moyenne section', frais: 'À compléter' },
  { programme: 'Grande section', frais: 'À compléter' },
  { programme: "Frais d'inscription", frais: 'À compléter' },
]

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className={styles.section} id="admissions">
      <div className="container">
        <span className="tag">Rejoindre Ingeri</span>
        <h2 className="sec-title"><span>Admissions</span></h2>
        <p className="sec-sub">Tout ce que vous devez savoir pour inscrire votre enfant.</p>

        <div className={styles.admTop}>
          {/* Tuition */}
          <div className={styles.admBlock} id="frais">
            <h3><DollarSign size={16} style={{ display:'inline', verticalAlign:'middle', marginRight:6 }} />Frais de scolarité</h3>
            <table className={styles.fraisTable}>
              <thead>
                <tr><th>Programme</th><th>Frais / mois</th></tr>
              </thead>
              <tbody>
                {tuitionRows.map((r) => (
                  <tr key={r.programme}>
                    <td>{r.programme}</td>
                    <td>{r.frais}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.note}>* Des facilités de paiement sont possibles.</p>
          </div>

          {/* Steps */}
          <div className={styles.admBlock} id="inscription">
            <h3><ClipboardList size={16} style={{ display:'inline', verticalAlign:'middle', marginRight:6 }} />Comment s&apos;inscrire</h3>
            <div className={styles.stepsList}>
              {[
                'Remplir le formulaire de contact',
                'RDV de visite du campus',
                "Déposer le dossier d'inscription",
                'Confirmation de la place',
                "Période d'adaptation progressive",
              ].map((step, i) => (
                <div key={i} className={styles.stepItem}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn btn-teal" style={{ marginTop: 18, fontSize: 13, padding: '10px 18px' }}>
              Commencer l&apos;inscription
            </Link>
          </div>

          {/* Open days */}
          <div className={styles.admBlock} id="portes">
            <h3><DoorOpen size={16} style={{ display:'inline', verticalAlign:'middle', marginRight:6 }} />Portes ouvertes</h3>
            <p className={styles.portesDesc}>Venez visiter nos campus et rencontrer l&apos;équipe.</p>
            <div className={styles.portesCard}>
              <p><strong>Prochaine date</strong></p>
              <p style={{ marginTop: 5 }}>
                Date à compléter<br />
                Heure à compléter<br />
                Adresse à compléter
              </p>
            </div>
            <Link href="/contact" className="btn btn-outline" style={{ fontSize: 13, padding: '9px 18px' }}>
              Réserver ma place
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 56 }} id="faq">
          <span className="tag">Questions fréquentes</span>
          <h2 className="sec-title" style={{ marginBottom: 8 }}>FAQ</h2>
          <div className={styles.faqList}>
            {faqItems.map((item, i) => (
              <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.open : ''}`}>
                <button
                  className={styles.faqQ}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {item.q}
                  {openFaq === i ? <ChevronUp size={14} className={styles.arrow} /> : <ChevronDown size={14} className={styles.arrow} />}
                </button>
                {openFaq === i && (
                  <div className={styles.faqA}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}