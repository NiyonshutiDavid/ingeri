// src/components/layout/Header.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import styles from './Header.module.css'

export default function Header() {
  const { t } = useTranslation('header')
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null)
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleMouseEnter = (href: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(href)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 80)
  }

  // A link is active if its href exactly matches (for '/') or the pathname starts with it
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const navLinks = [
    { href: '/', label: t('links.home') },
    {
      href: '/campus',
      label: t('links.campus'),
      desc: t('dropdowns.campus.desc'),
      dropdown: [
        { href: '/campus#creche', label: t('dropdowns.campus.creche') },
        { href: '/campus#maternelle', label: t('dropdowns.campus.maternelle') },
      ],
    },
    {
      href: '/programmes',
      label: t('links.programmes'),
      desc: t('dropdowns.programmes.desc'),
      dropdown: [
        { href: '/programmes#creche', label: t('dropdowns.programmes.creche') },
        { href: '/programmes#maternelle', label: t('dropdowns.programmes.maternelle') },
      ],
    },
    {
      href: '/presentation',
      label: t('links.presentation'),
      desc: t('dropdowns.presentation.desc'),
      dropdown: [
        { href: '/presentation#mission', label: t('dropdowns.presentation.mission') },
        { href: '/presentation#principes', label: t('dropdowns.presentation.principes') },
        { href: '/presentation#domaines', label: t('dropdowns.presentation.domaines') },
        { href: '/presentation#leadership', label: t('dropdowns.presentation.leadership') },
        { href: '/presentation#equipe', label: t('dropdowns.presentation.equipe') },
        { href: '/presentation#localisations', label: t('dropdowns.presentation.localisations') },
        { href: '/presentation#carrieres', label: t('dropdowns.presentation.carrieres') },
      ],
    },
    {
      href: '/admissions',
      label: t('links.admissions'),
      desc: t('dropdowns.admissions.desc'),
      dropdown: [
        { href: '/admissions#frais', label: t('dropdowns.admissions.frais') },
        { href: '/admissions#inscription', label: t('dropdowns.admissions.inscription') },
        { href: '/admissions#portes', label: t('dropdowns.admissions.portes') },
        { href: '/admissions#faq', label: t('dropdowns.admissions.faq') },
      ],
    },
    { href: '/contact', label: t('links.contact') },
  ]

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
            <li
              key={link.href}
              className={link.dropdown ? styles.navDd : ''}
              onMouseEnter={() => link.dropdown && handleMouseEnter(link.href)}
              onMouseLeave={() => link.dropdown && handleMouseLeave()}
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href={link.href}
                className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    size={12}
                    className={`${styles.caret} ${activeDropdown === link.href ? styles.caretOpen : ''}`}
                  />
                )}
              </Link>

              {link.dropdown && (
                <div
                  className={`${styles.ddPanel} ${activeDropdown === link.href ? styles.ddPanelOpen : ''}`}
                  onMouseEnter={() => handleMouseEnter(link.href)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={styles.ddInner}>
                    <div className={styles.ddLeft}>
                      <div className={styles.ddLeftText}>
                        <div className={styles.ddTitle}>{link.label}</div>
                        {link.desc && <p className={styles.ddDesc}>{link.desc}</p>}
                      </div>
                      <div className={styles.ddDivider} />
                    </div>
                    <ul className={styles.ddGrid}>
                      {link.dropdown.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={styles.ddItem}
                            onClick={() => setActiveDropdown(null)}
                          >
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

        {/* Language switcher (desktop) */}
        <div className={styles.langWrap}>
          <LanguageSwitcher />
        </div>

        {/* Hamburger */}
        <button
          className={styles.ham}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} color="var(--teal-d)" /> : <Menu size={22} color="var(--teal-d)" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={styles.mobMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobLink} ${isActive(link.href) ? styles.active : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobLang}>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}