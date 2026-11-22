import { useEffect, useRef, type RefObject } from 'react'
import { MOBILE_BREAKPOINT, outerHeightWithMargin, viewportWidth } from '../utils/scroll'

const setFixed = (el: HTMLElement) => {
  el.style.position = 'fixed'
  el.style.top = '0px'
}

const setAbsolute = (el: HTMLElement, scrollTop: number) => {
  el.style.position = 'absolute'
  el.style.top = `${Math.max(scrollTop, 0)}px`
}

// Small screens: the header scrolls away with the page and reappears when the
// page scrolls up. Wider screens: the header stays fixed.
export const useHeaderScroll = (headerRef: RefObject<HTMLElement | null>, closeNav: () => void) => {
  const isFirstScrollUp = useRef(true)
  const scrollTopLast = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current

      if (!header || viewportWidth() >= MOBILE_BREAKPOINT) return

      const scrollTopNew = window.scrollY

      if (scrollTopNew > scrollTopLast.current) {
        if (isFirstScrollUp.current && getComputedStyle(header).position === 'fixed') {
          setAbsolute(header, scrollTopNew)
        }

        isFirstScrollUp.current = false
        closeNav()
      } else {
        const headerTop = Number(getComputedStyle(header).top.replace(/[^-\d.]/g, ''))
        const headerHeight = outerHeightWithMargin(header)

        if (!isFirstScrollUp.current && scrollTopNew > 0 && headerTop < scrollTopNew - headerHeight) {
          header.style.top = `${scrollTopNew - headerHeight}px`
        }

        if (headerTop > scrollTopNew) setFixed(header)

        isFirstScrollUp.current = true
      }

      scrollTopLast.current = scrollTopNew
    }

    const handleResize = () => {
      const header = headerRef.current

      if (!header || viewportWidth() < MOBILE_BREAKPOINT) return

      setFixed(header)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [headerRef, closeNav])
}
