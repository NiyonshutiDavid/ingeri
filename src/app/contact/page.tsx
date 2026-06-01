'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { FaFacebook as Facebook, FaInstagram as Instagram } from 'react-icons/fa'
import styles from './contact.module.css'

type Tab = 'creche' | 'maternelle'

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<Tab>('creche')

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <span className="tag">Parlons-nous</span>
        <h2 className="sec-title">Contactez-<span>nous</span></h2>
        <p className="sec-sub">Choisissez le campus que vous souhaitez contacter.</p>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'creche' ? styles.actTeal : ''}`}
            onClick={() => setActiveTab('creche')}
          >
            La P&apos;tite Crèche Ingeri
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'maternelle' ? styles.actPink : ''}`}
            onClick={() => setActiveTab('maternelle')}
          >
            Ingeri International School
          </button>
        </div>

        {activeTab === 'creche' && (
          <div className={styles.panel} id="creche">
            <div className={styles.formWrap}>
              <h3>Message – La P&apos;tite Crèche</h3>
              <ContactForm campus="creche" accentClass="btn-teal" />
            </div>
            <ContactInfo
              campus="La P'tite Crèche Ingeri"
              email="creche@ingeri.rw"
              hours="Lun–Ven : 7h00–18h00"
              bgStyle={{}}
              headingColor="var(--teal-d)"
              socialBg="var(--teal-l)"
              socialHeadingColor="var(--teal-d)"
              socialBorderColor="var(--teal)"
            />
          </div>
        )}

        {activeTab === 'maternelle' && (
          <div className={styles.panel} id="maternelle">
            <div className={styles.formWrap}>
              <h3 style={{ color: 'var(--pink-d)' }}>Message – Ingeri International School</h3>
              <ContactForm campus="maternelle" accentClass="btn-pink" />
            </div>
            <ContactInfo
              campus="Ingeri International School"
              email="maternelle@ingeri.rw"
              hours="Lun–Ven : 7h00–17h30"
              bgStyle={{ background: '#fff8fb' }}
              headingColor="var(--pink-d)"
              socialBg="var(--pink-l)"
              socialHeadingColor="var(--pink-d)"
              socialBorderColor="var(--pink)"
            />
          </div>
        )}
      </div>
    </section>
  )
}

function ContactForm({ campus, accentClass }: { campus: string; accentClass: string }) {
  const isCreche = campus === 'creche'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const body = Object.fromEntries(formData.entries())
    console.log('Form submitted:', { campus, ...body })
    alert('Message envoyé ! Nous vous répondrons sous peu.')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.fg}>
          <label>Prénom</label>
          <input type="text" name="prenom" placeholder="Votre prénom" required />
        </div>
        <div className={styles.fg}>
          <label>Nom</label>
          <input type="text" name="nom" placeholder="Votre nom" required />
        </div>
      </div>
      <div className={styles.fg}>
        <label>Email</label>
        <input type="email" name="email" placeholder="votre@email.com" required />
      </div>
      <div className={styles.fg}>
        <label>Téléphone</label>
        <input type="tel" name="tel" placeholder="+250 xxx xxx xxx" />
      </div>
      <div className={styles.fg}>
        <label>{isCreche ? "Âge de l'enfant" : 'Section souhaitée'}</label>
        <select name={isCreche ? 'age' : 'section'}>
          <option value="">Sélectionner…</option>
          {isCreche ? (
            <>
              <option>6–12 mois</option>
              <option>12–18 mois</option>
              <option>18–24 mois</option>
            </>
          ) : (
            <>
              <option>Petite section (3 ans)</option>
              <option>Moyenne section</option>
              <option>Grande section</option>
            </>
          )}
        </select>
      </div>
      <div className={styles.fg}>
        <label>Message</label>
        <textarea name="message" placeholder="Votre message…" />
      </div>
      <button type="submit" className={`btn ${accentClass}`}>Envoyer le message</button>
    </form>
  )
}

function ContactInfo({
  campus, email, hours, bgStyle, headingColor, socialBg, socialHeadingColor, socialBorderColor,
}: {
  campus: string; email: string; hours: string;
  bgStyle: React.CSSProperties; headingColor: string;
  socialBg: string; socialHeadingColor: string; socialBorderColor: string;
}) {
  return (
    <div className={styles.cfInfo} style={bgStyle}>
      <div>
        <h3 style={{ color: headingColor }}>{campus}</h3>
        <div className={styles.ciRow}><MapPin size={15} /><div><strong>Adresse</strong>À compléter – Kigali, Rwanda</div></div>
        <div className={styles.ciRow}><Phone size={15} /><div><strong>Téléphone</strong>À compléter</div></div>
        <div className={styles.ciRow}><Mail size={15} /><div><strong>Email</strong>{email}</div></div>
        <div className={styles.ciRow}><Clock size={15} /><div><strong>Horaires</strong>{hours}</div></div>
      </div>
      <div className={styles.ciSoc} style={{ background: socialBg }}>
        <p style={{ color: socialHeadingColor }}>Réseaux sociaux</p>
        <div className={styles.socLinks}>
          {[
            { label: 'Facebook', icon: Facebook },
            { label: 'Instagram', icon: Instagram },
            { label: 'WhatsApp', icon: MessageCircle },
          ].map(({ label, icon: Icon }) => (
            <a
              key={label}
              href="#"
              className={styles.socLink}
              style={{ borderColor: socialBorderColor, color: socialHeadingColor }}
            >
              <Icon size={12} /> {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}