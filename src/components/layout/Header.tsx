'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import styles from './Header.module.css'

const navLinks = [
  { href: '/', label: 'Accueil' },
  {
    href: '/campus',
    label: 'Campus',
    desc: 'Découvrez nos deux campus à Kigali.',
    dropdown: [
      { href: '/campus#creche', label: "La P'tite Crèche Ingeri" },
      { href: '/campus#maternelle', label: 'Ingeri International School' },
    ],
  },
  {
    href: '/programmes',
    label: 'Programmes',
    desc: 'Des programmes adaptés à chaque étape du développement de votre enfant.',
    dropdown: [
      { href: '/programmes#creche', label: 'Crèche (6–24 mois)' },
      { href: '/programmes#maternelle', label: 'Maternelle (3–5 ans)' },
    ],
  },
  {
    href: '/presentation',
    label: 'Présentation',
    desc: 'Notre mission, notre équipe et nos valeurs pédagogiques.',
    dropdown: [
      { href: '/presentation#mission', label: 'Mission & Vision' },
      { href: '/presentation#principes', label: 'Nos grands principes' },
      { href: '/presentation#domaines', label: "Domaines d'apprentissage" },
      { href: '/presentation#leadership', label: 'Le Leadership' },
      { href: '/presentation#equipe', label: 'Notre équipe' },
      { href: '/presentation#localisations', label: 'Nos localisations' },
      { href: '/presentation#carrieres', label: 'Carrières' },
    ],
  },
  {
    href: '/admissions',
    label: 'Admissions',
    desc: 'Tout ce que vous devez savoir pour inscrire votre enfant.',
    dropdown: [
      { href: '/admissions#frais', label: 'Frais de scolarité' },
      { href: '/admissions#inscription', label: "Comment s'inscrire" },
      { href: '/admissions#portes', label: 'Portes ouvertes' },
      { href: '/admissions#faq', label: 'FAQ' },
    ],
  },
  { href: '/contact', label: 'Contactez-nous' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Ingeri"
            width={150}
            height={150}
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop nav */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href} className={link.dropdown ? styles.navDd : ''}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
                {link.dropdown && <ChevronDown size={12} className={styles.caret} />}
              </Link>

              {link.dropdown && (
                <div className={styles.ddPanel}>
                  {/* Inner constrained wrapper */}
                  <div className={styles.ddInner}>
                    {/* Left: label + description + divider */}
                    <div className={styles.ddLeft}>
                      <div className={styles.ddLeftText}>
                        <div className={styles.ddTitle}>{link.label}</div>
                        {link.desc && (
                          <p className={styles.ddDesc}>{link.desc}</p>
                        )}
                      </div>
                      <div className={styles.ddDivider} />
                    </div>

                    {/* Right: 2-column link grid */}
                    <ul className={styles.ddGrid}>
                      {link.dropdown.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className={styles.ddItem}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={styles.ham}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} color="var(--teal)" /> : <Menu size={22} color="var(--teal)" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={styles.mobMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}