// src/app/contact/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { FaFacebook as Facebook, FaInstagram as Instagram } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import styles from './contact.module.css'

type Tab = 'creche' | 'maternelle'
const CONTACT_EMAIL = 'contact@ingeri.rw'

export default function ContactPage() {
  const { t } = useTranslation('contact')
  const [activeTab, setActiveTab] = useState<Tab>('creche')

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title">
          {t('title')}<span>{t('titleSpan')}</span>
        </h2>
        <p className="sec-sub">{t('subtitle')}</p>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'creche' ? styles.actTeal : ''}`}
            onClick={() => setActiveTab('creche')}
          >
            {t('tabs.creche')}
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'maternelle' ? styles.actPink : ''}`}
            onClick={() => setActiveTab('maternelle')}
          >
            {t('tabs.maternelle')}
          </button>
        </div>

        {activeTab === 'creche' && (
          <div className={styles.panel} id="creche">
            <div className={styles.formWrap}>
              <h3>{t('form.headingCreche')}</h3>
              <ContactForm campus="creche" accentClass="btn-teal" />
            </div>
            <div className={styles.infoCol}>
              <div className={`${styles.contactImg} ${styles.teal}`}>
                <Image
                  src="/campus.jpg"
                  fill
                  style={{ objectFit: 'cover' }}
                  alt={t('info.crecheImgAlt')}
                />
              </div>
              <ContactInfo
                campus="creche"
                headingColor="var(--teal-d)"
                socialBg="var(--teal-l)"
                socialHeadingColor="var(--teal-d)"
                socialBorderColor="var(--teal)"
                bgStyle={{}}
              />
            </div>
          </div>
        )}

        {activeTab === 'maternelle' && (
          <div className={styles.panel} id="maternelle">
            <div className={styles.formWrap}>
              <h3 style={{ color: 'var(--pink-d)' }}>{t('form.headingMaternelle')}</h3>
              <ContactForm campus="maternelle" accentClass="btn-pink" />
            </div>
            <div className={styles.infoCol}>
              <div className={`${styles.contactImg} ${styles.pink}`}>
                <Image
                  src="/campus.jpg"
                  fill
                  style={{ objectFit: 'cover' }}
                  alt={t('info.maternelleImgAlt')}
                />
              </div>
              <ContactInfo
                campus="maternelle"
                headingColor="var(--pink-d)"
                socialBg="var(--pink-l)"
                socialHeadingColor="var(--pink-d)"
                socialBorderColor="var(--pink)"
                bgStyle={{ background: '#fff8fb' }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function ContactForm({ campus, accentClass }: { campus: string; accentClass: string }) {
  const { t } = useTranslation('contact')
  const isCreche = campus === 'creche'

  const ageOptions = t('form.ageOptions', { returnObjects: true }) as string[]
  const sectionOptions = t('form.sectionOptions', { returnObjects: true }) as string[]
  const labels = t('form.emailBodyLabels', { returnObjects: true }) as Record<string, string>

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => (data.get(k) as string) || ''

    const subject = encodeURIComponent(
      isCreche ? t('form.subjectCreche') : t('form.subjectMaternelle')
    )
    const body = encodeURIComponent(
      [
        `${labels.firstName} : ${get('prenom')}`,
        `${labels.lastName} : ${get('nom')}`,
        `${labels.email} : ${get('email')}`,
        `${labels.phone} : ${get('tel') || '—'}`,
        isCreche
          ? `${labels.childAge} : ${get('age') || '—'}`
          : `${labels.section} : ${get('section') || '—'}`,
        ``,
        `${labels.message} :`,
        get('message') || '—',
      ].join('\n')
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.fg}>
          <label>{t('form.firstName')}</label>
          <input type="text" name="prenom" placeholder={t('form.firstNamePlaceholder')} required />
        </div>
        <div className={styles.fg}>
          <label>{t('form.lastName')}</label>
          <input type="text" name="nom" placeholder={t('form.lastNamePlaceholder')} required />
        </div>
      </div>
      <div className={styles.fg}>
        <label>{t('form.email')}</label>
        <input type="email" name="email" placeholder={t('form.emailPlaceholder')} required />
      </div>
      <div className={styles.fg}>
        <label>{t('form.phone')}</label>
        <input type="tel" name="tel" placeholder={t('form.phonePlaceholder')} />
      </div>
      <div className={styles.fg}>
        <label>{isCreche ? t('form.childAge') : t('form.section')}</label>
        <select name={isCreche ? 'age' : 'section'}>
          <option value="">{t('form.selectPlaceholder')}</option>
          {(isCreche ? ageOptions : sectionOptions).map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className={styles.fg}>
        <label>{t('form.message')}</label>
        <textarea name="message" placeholder={t('form.messagePlaceholder')} />
      </div>
      <button type="submit" className={`btn ${accentClass}`}>{t('form.submit')}</button>
    </form>
  )
}

function ContactInfo({
  campus, headingColor, socialBg, socialHeadingColor, socialBorderColor, bgStyle,
}: {
  campus: 'creche' | 'maternelle'
  headingColor: string
  socialBg: string
  socialHeadingColor: string
  socialBorderColor: string
  bgStyle: React.CSSProperties
}) {
  const { t } = useTranslation('contact')
  const isCreche = campus === 'creche'
  const campusName = isCreche ? t('info.crecheName') : t('info.maternelleName')
  const hours = isCreche ? t('info.hoursCreche') : t('info.hoursMaternelle')
  const email = isCreche ? 'creche@ingeri.rw' : 'maternelle@ingeri.rw'

  return (
    <div className={styles.cfInfo} style={bgStyle}>
      <div>
        <h3 style={{ color: headingColor }}>{campusName}</h3>
        <div className={styles.ciRow}>
          <MapPin size={15} />
          <div><strong>{t('info.address')}</strong>{t('info.addressValue')}</div>
        </div>
        <div className={styles.ciRow}>
          <Phone size={15} />
          <div><strong>{t('info.phone')}</strong>{t('info.phoneValue')}</div>
        </div>
        <div className={styles.ciRow}>
          <Mail size={15} />
          <div><strong>{t('info.email')}</strong>{email}</div>
        </div>
        <div className={styles.ciRow}>
          <Clock size={15} />
          <div><strong>{t('info.hours')}</strong>{hours}</div>
        </div>
      </div>
      <div className={styles.ciSoc} style={{ background: socialBg }}>
        <p style={{ color: socialHeadingColor }}>{t('info.social')}</p>
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