// src/components/ContactForm.tsx
'use client'

import { useTranslation } from 'react-i18next'
import styles from './ContactForm.module.css'

export type Campus = 'creche' | 'maternelle'

export default function ContactForm({
campus,
accentClass = 'btn-teal',
}: {
campus: Campus
accentClass?: string
}) {
const { t } = useTranslation('contact')
const isCreche = campus === 'creche'
const CONTACT_EMAIL = 'info@ingerischool.org'

const levelOptions = t('form.levelOptions', { returnObjects: true }) as string[]
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
        `${labels.childName} : ${get('childName')}`,
        `${labels.dob} : ${get('dob') || '—'}`,
        `${labels.parentName} : ${get('parentName')}`,
        `${labels.phone} : ${get('tel') || '—'}`,
        `${labels.email} : ${get('email')}`,
        `${labels.level} : ${get('level') || '—'}`,
        `${labels.startDate} : ${get('startDate') || '—'}`,
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
        <label>{t('form.childName')}</label>
        <input type="text" name="childName" placeholder={t('form.childNamePlaceholder')} required />
    </div>
    <div className={styles.fg}>
        <label>{t('form.dob')}</label>
        <input type="date" name="dob" required />
    </div>
    <div className={styles.fg}>
        <label>{t('form.parentName')}</label>
        <input type="text" name="parentName" placeholder={t('form.parentNamePlaceholder')} required />
    </div>
    <div className={styles.formRow}>
        <div className={styles.fg}>
        <label>{t('form.phone')}</label>
        <input type="tel" name="tel" placeholder={t('form.phonePlaceholder')} required />
        </div>
        <div className={styles.fg}>
        <label>{t('form.email')}</label>
        <input type="email" name="email" placeholder={t('form.emailPlaceholder')} required />
        </div>
    </div>
    <div className={styles.fg}>
        <label>{t('form.level')}</label>
        <select name="level" required>
        <option value="">{t('form.selectPlaceholder')}</option>
        {levelOptions.map((opt) => (
            <option key={opt}>{opt}</option>
        ))}
        </select>
    </div>
    <div className={styles.fg}>
        <label>{t('form.startDate')}</label>
        <input type="date" name="startDate" />
    </div>
    <div className={styles.fg}>
        <label>{t('form.message')}</label>
        <textarea name="message" placeholder={t('form.messagePlaceholder')} />
    </div>
    <button type="submit" className={`btn ${accentClass}`}>{t('form.submit')}</button>
    </form>
)
}

export interface JobOption {
  title: string
  location: string
}

export function JobApplicationForm({
  jobs,
  accentClass = 'btn-teal',
  toEmail = 'info@ingerischool.org',
}: {
  jobs: JobOption[]
  accentClass?: string
  toEmail?: string
}) {
  const { t } = useTranslation('presentation')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => (data.get(k) as string) || ''

    const subject = encodeURIComponent(
      t('carrieres.form.subject', { position: get('position') || t('carrieres.form.positionFallback') })
    )
    const body = encodeURIComponent(
      [
        `${t('carrieres.form.fullName')} : ${get('fullName')}`,
        `${t('carrieres.form.email')} : ${get('email')}`,
        `${t('carrieres.form.phone')} : ${get('phone') || '—'}`,
        `${t('carrieres.form.position')} : ${get('position') || '—'}`,
        `${t('carrieres.form.portfolio')} : ${get('portfolio') || '—'}`,
        ``,
        `${t('carrieres.form.message')} :`,
        get('message') || '—',
      ].join('\n')
    )

    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fg}>
        <label>{t('carrieres.form.fullName')}</label>
        <input
          type="text"
          name="fullName"
          placeholder={t('carrieres.form.fullNamePlaceholder')}
          required
        />
      </div>
      <div className={styles.formRow}>
        <div className={styles.fg}>
          <label>{t('carrieres.form.email')}</label>
          <input
            type="email"
            name="email"
            placeholder={t('carrieres.form.emailPlaceholder')}
            required
          />
        </div>
        <div className={styles.fg}>
          <label>{t('carrieres.form.phone')}</label>
          <input
            type="tel"
            name="phone"
            placeholder={t('carrieres.form.phonePlaceholder')}
          />
        </div>
      </div>
      <div className={styles.fg}>
        <label>{t('carrieres.form.position')}</label>
        <select name="position" required defaultValue="">
          <option value="" disabled>
            {t('carrieres.form.selectPlaceholder')}
          </option>
          {jobs.map((job) => (
            <option key={job.title} value={job.title}>
              {job.title} — {job.location}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.fg}>
        <label>{t('carrieres.form.portfolio')}</label>
        <input
          type="url"
          name="portfolio"
          placeholder={t('carrieres.form.portfolioPlaceholder')}
        />
      </div>
      <div className={styles.fg}>
        <label>{t('carrieres.form.message')}</label>
        <textarea
          name="message"
          placeholder={t('carrieres.form.messagePlaceholder')}
          required
        />
      </div>
      <button type="submit" className={`btn ${accentClass}`}>
        {t('carrieres.form.submit')}
      </button>
    </form>
  )
}