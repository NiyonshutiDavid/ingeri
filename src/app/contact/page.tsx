// src/app/contact/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { FaXTwitter as XTwitter, FaInstagram as Instagram } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import styles from './contact.module.css'
type Campus = 'creche' | 'maternelle'

export default function ContactPage() {
  const { t } = useTranslation('contact')
  const [activeCampus, setActiveCampus] = useState<Campus>('creche')
  const isCreche = activeCampus === 'creche'

  const imgSrc = isCreche ? '/creche-1.jpg' : '/creche-3.jpg'
  const imgAlt = isCreche ? t('info.crecheImgAlt') : t('info.maternelleImgAlt')

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title">
          {t('title')} <span>{t('titleSpan')}</span>
        </h2>
        <div className={styles.headerRow}>
          <p className="sec-sub" style={{ marginBottom: 0 }}>{t('subtitle')}</p>
        </div>

        {/* Panel */}
        <div className={styles.panel}>
          <div className={styles.formWrap}>
            <h3>{t('form.headingContact')}</h3>
            <ContactForm accentClass="btn-teal" />
          </div>
          <div className={styles.infoCol}>
            <div className={`${styles.contactImg} `}>
              <Image
                src={imgSrc}
                fill
                style={{ objectFit: 'cover' }}
                alt={imgAlt}
              />
            </div>
            {/* Tabs — scoped to this column, switches contact info only */}
            <div className={styles.tabs} role="tablist">
              {(['creche', 'maternelle'] as Campus[]).map((campus) => {
                const active = activeCampus === campus
                const activeClass = campus === 'creche' ? styles.actTeal : styles.actPink
                const inactiveClass = campus === 'creche' ? styles.inactTeal : styles.inactPink
                return (
                  <button
                    key={campus}
                    role="tab"
                    aria-selected={active}
                    className={`${styles.tab} ${active ? activeClass : inactiveClass}`}
                    onClick={() => setActiveCampus(campus)}
                  >
                    {campus === 'creche' ? t('info.crecheName') : t('info.maternelleName')}
                  </button>
                )
              })}
            </div>
            <ContactInfo
              campus={activeCampus}
              headingColor={isCreche ? 'var(--teal-d)' : 'var(--pink-d)'}
              socialBg={isCreche ? 'var(--teal-l)' : 'var(--pink-l)'}
              socialHeadingColor={isCreche ? 'var(--teal-d)' : 'var(--pink-d)'}
              socialBorderColor={isCreche ? 'var(--teal)' : 'var(--pink)'}
              bgStyle={{}}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactForm({accentClass }: {accentClass: string }) {
  const { t } = useTranslation('contact')
  const CONTACT_EMAIL = 'info@ingerischool.org'

  const labels = t('form.emailBodyLabels', { returnObjects: true }) as Record<string, string>

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => (data.get(k) as string) || ''

    const subject = encodeURIComponent( t('form.subjectContact') )
    const body = encodeURIComponent(
      [
        `${labels.parentName} : ${get('parentName')}`,
        `${labels.phone} : ${get('tel') || '—'}`,
        `${labels.email} : ${get('email')}`,
        ``,
        `${labels.message} :`,
        get('message') || '—',
      ].join('\n')
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fg}>
        <label>{t('form.parentName')}</label>
        <input type="text" name="parentName" placeholder={t('form.parentNamePlaceholder')} required />
      </div>
      <div className={styles.fg}>
        <label>{t('form.phone')}</label>
        <input type="tel" name="tel" placeholder={t('form.phonePlaceholder')} required />
      </div>
      <div className={styles.fg}>
        <label>{t('form.email')}</label>
        <input type="email" name="email" placeholder={t('form.emailPlaceholder')} required />
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
  const email = 'info@ingerischool.org'
  const address = isCreche ? t('info.crecheAddress') : t('info.maternelleAddress')
  const phone = isCreche ? t('info.crechePhone') : t('info.maternellePhone')
  const socialUrls = isCreche
  ? {
      // twitter: 'https://x.com/creche_account',
      instagram: 'https://www.instagram.com/crecheingeri/',
      whatsapp: 'https://wa.me/250783812618',
    }
  : {
      // twitter: 'https://x.com/maternelle_account',
      instagram: 'https://www.instagram.com/ingeri_international_school/',
      whatsapp: 'https://wa.me/250795826080',
    }

  return (
    <div className={styles.cfInfo} style={bgStyle}>
      <div>
        <h3 style={{ color: headingColor }}>{campusName}</h3>
        <div className={styles.ciRow}>
          <MapPin size={15} />
          <div><strong>{t('info.address')}</strong>{address}</div>
        </div>
        <div className={styles.ciRow}>
          <Phone size={15} />
          <div><strong>{t('info.phone')}</strong>{phone}</div>
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
        {[
          // {
          //   label: 'X (Twitter)',
          //   icon: XTwitter,
          //   href: socialUrls.twitter,
          // },
          {
            label: 'Instagram',
            icon: Instagram,
            href: socialUrls.instagram,
          },
          {
            label: 'WhatsApp',
            icon: MessageCircle,
            href: socialUrls.whatsapp,
          },
        ].map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socLink} ${ isCreche ? styles.socTeal : styles.socPink }`}
          >
            <Icon size={12} /> {label}
          </a>
        ))}
      </div>
    </div>
  )
}