// src/components/sections/Testimonials.tsx
'use client'

import { useState, useCallback } from 'react'
import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import styles from './Testimonials.module.css'

type TestimonialItem = {
  quote: string
  initials: string
  name: string
  detail: string
}

// Splits on '.', '!' or '?' followed by whitespace, keeping the punctuation.
function getExcerpt(quote: string, sentenceCount = 3) {
  const sentences = quote.match(/[^.!?]+[.!?]+(\s+|$)/g) ?? [quote]
  const isTruncated = sentences.length > sentenceCount
  const excerpt = sentences.slice(0, sentenceCount).join('').trim()
  return { excerpt, isTruncated }
}

function TestimonialCard({
  item,
  onExpandChange,
}: {
  item: TestimonialItem
  onExpandChange: (expanded: boolean) => void
}) {
  const { t } = useTranslation('testimonials')
  const [expanded, setExpanded] = useState(false)
  const { excerpt, isTruncated } = getExcerpt(item.quote)

  const toggle = () => {
    const next = !expanded
    setExpanded(next)
    onExpandChange(next)
  }

  return (
    <div className={styles.echoBlock}>
      <div className={styles.echoAccent} />
      <div className={styles.echoBody}>
        <div className={styles.stars}>
          {[...Array(5)].map((_, j) => (
            <Star key={j} size={13} fill="var(--gold)" strokeWidth={0} />
          ))}
        </div>
        <blockquote>
          &ldquo;{expanded ? item.quote : excerpt}&rdquo;
          {isTruncated && (
            <button
              type="button"
              className={styles.readMoreBtn}
              onClick={toggle}
            >
              {expanded ? t('readLess', 'Read less') : t('readMore', 'Read more')}
            </button>
          )}
        </blockquote>
        <div className={styles.author}>
          <div className={styles.avatar}>{item.initials}</div>
          <div>
            <p className={styles.name}>{item.name}</p>
            {/* <p className={styles.detail}>{item.detail}</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { t } = useTranslation('testimonials')
  const items = t('items', { returnObjects: true }) as TestimonialItem[]

  // Duplicate items for seamless infinite loop
  const loopItems = [...items, ...items]

  // Track how many cards are currently expanded; pause the marquee if > 0.
  const [expandedCount, setExpandedCount] = useState(0)
  const handleExpandChange = useCallback((expanded: boolean) => {
    setExpandedCount((c) => c + (expanded ? 1 : -1))
  }, [])

  return (
    <div id="temoignages" className={styles.wrapper}>
      <div className="container">
        <span className="tag">{t('tag')}</span>
        <h2 className="sec-title">
          {t('title')} <span>{t('titleSpan')}</span>
        </h2>
        <p className="sec-sub">{t('subtitle')}</p>
      </div>

      <div className={styles.carousel}>
        <div
          className={`${styles.track} ${expandedCount > 0 ? styles.paused : ''}`}
        >
          {loopItems.map((item, i) => (
            <TestimonialCard
              key={i}
              item={item}
              onExpandChange={handleExpandChange}
            />
          ))}
        </div>
      </div>
    </div>
  )
}