// src/components/layout/Footer.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { FaFacebook as Facebook, FaInstagram as Instagram } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useTranslation('footer')

  return (
    <footer className={styles.footer}>
      <div className={styles.footGrid}>
        <div className={styles.footBrand}>
          <div className={styles.footLogo}>
            <Image
              src="/logo.png"
              alt="INGERI logo"
              width={175}
              height={175}
            />
          </div>
          <p>{t('brand.tagline')}</p>
          <div className={styles.socials}>
            <Link href="#" className={styles.socialLink}>
              <Facebook size={12} /> Facebook
            </Link>
            <Link href="#" className={styles.socialLink}>
              <Instagram size={12} /> Instagram
            </Link>
            <Link href="#" className={styles.socialLink}>
              <MessageCircle size={12} /> WhatsApp
            </Link>
          </div>
        </div>

        <div className={styles.footCol}>
          <h4>{t('cols.home.title')}</h4>
          <ul>
            <li><Link href="/#accueil">{t('cols.home.welcome')}</Link></li>
            <li><Link href="/#mission">{t('cols.home.mission')}</Link></li>
            <li><Link href="/#valeurs">{t('cols.home.values')}</Link></li>
            <li><Link href="/#direction">{t('cols.home.direction')}</Link></li>
            <li><Link href="/#temoignages">{t('cols.home.testimonials')}</Link></li>
          </ul>
        </div>

        <div className={styles.footCol}>
          <h4>{t('cols.campus.title')}</h4>
          <ul>
            <li><Link href="/campus#creche">{t('cols.campus.creche')}</Link></li>
            <li><Link href="/campus#maternelle">{t('cols.campus.maternelle')}</Link></li>
            <li><Link href="/programmes#creche">{t('cols.campus.progCreche')}</Link></li>
            <li><Link href="/programmes#maternelle">{t('cols.campus.progMaternelle')}</Link></li>
          </ul>
        </div>

        <div className={styles.footCol}>
          <h4>{t('cols.info.title')}</h4>
          <ul>
            <li><Link href="/presentation">{t('cols.info.presentation')}</Link></li>
            <li><Link href="/admissions">{t('cols.info.admissions')}</Link></li>
            <li><Link href="/admissions#faq">{t('cols.info.faq')}</Link></li>
            <li><Link href="/contact">{t('cols.info.contact')}</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.footBottom}>
        <span>{t('bottom.rights')}</span>
        <span>{t('bottom.credit')}</span>
      </div>
    </footer>
  )
}
