// src/app/layout.tsx
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
// @ts-ignore: global CSS import type declarations are handled by Next.js
import '@/styles/globals.css';
import footerStyles from "@/components/layout/Footer.module.css";
import I18nProvider from '@/i18n/I18nProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SideCTA from '@/components/layout/SideCTA'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Ingeri – La P'tite Crèche & Ingeri International School",
  description:
    'Grandir avec amour, foi et excellence. Deux campus à Kigali pour vos enfants de 6 mois à 5 ans.',
  keywords: 'crèche, maternelle, Kigali, Rwanda, Montessori, international, école',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${footerStyles.bodyFooter} ${montserrat.className}`}>
        {/*
          I18nProvider is a 'use client' component that initialises i18next.
          All children can safely call useTranslation() anywhere in the tree.
        */}
        <I18nProvider>
          <SideCTA />
          <Header />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  )
}
