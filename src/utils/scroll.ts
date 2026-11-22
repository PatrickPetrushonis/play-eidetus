import type { MouseEvent } from 'react'

export const MOBILE_BREAKPOINT = 768
const SCROLL_MS = 500

// Viewport width without the scrollbar.
export const viewportWidth = () => document.documentElement.clientWidth

// Element height including its vertical margins.
export const outerHeightWithMargin = (el: HTMLElement) => {
  const style = getComputedStyle(el)
  return el.offsetHeight + (parseFloat(style.marginTop) || 0) + (parseFloat(style.marginBottom) || 0)
}

// Linear scroll of the page to a vertical position.
const animateScroll = (to: number) => {
  const from = window.scrollY
  const start = performance.now()

  const step = (now: number) => {
    const progress = Math.min((now - start) / SCROLL_MS, 1)
    window.scrollTo({ top: from + (to - from) * progress, left: 0, behavior: 'instant' })
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

// Click handler for in-page links: scrolls to the target below the header; a
// link that names a page (contains "/") navigates to it instead.
export const scrollToAnchor = (
  e: MouseEvent<HTMLAnchorElement>,
  header: HTMLElement | null,
  closeNav: () => void,
) => {
  e.preventDefault()

  const href = e.currentTarget.getAttribute('href') ?? ''

  if (href.split('/').length > 1) {
    window.location.href = href
    return
  }

  closeNav()

  const target = document.querySelector<HTMLElement>(href)
  const targetTop = target ? target.getBoundingClientRect().top + window.scrollY : null
  const width = viewportWidth()
  const headerHeight = header ? outerHeightWithMargin(header) : 0
  const useOffset =
    (width < MOBILE_BREAKPOINT && targetTop !== null && window.scrollY >= targetTop) ||
    width >= MOBILE_BREAKPOINT

  animateScroll(targetTop !== null ? targetTop - (useOffset ? headerHeight : 0) : 0)
}
