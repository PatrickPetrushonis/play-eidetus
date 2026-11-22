import { useCallback, useRef, useState, type MouseEvent } from 'react'
import { useHeaderScroll } from '../hooks/useHeaderScroll'
import { scrollToAnchor } from '../utils/scroll'

type HeaderProps = {
  path?: string
  className?: string
}

const Header = ({ path = '', className }: HeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null)
  const [navOpen, setNavOpen] = useState(false)
  const closeNav = useCallback(() => setNavOpen(false), [])

  useHeaderScroll(headerRef, closeNav)

  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    scrollToAnchor(e, headerRef.current, closeNav)
  }

  return (
    <div ref={headerRef} className={`header${className ? ` ${className}` : ''}`}>
      <a className="header__logo" href="/">
        <img src="/img/header-small.png" />
      </a>

      <div className="nav__container">
        <div className="nav__toggle">
          <input
            className="nav__toggle-switch"
            type="checkbox"
            name="nav-toggle"
            checked={navOpen}
            onChange={(e) => setNavOpen(e.target.checked)}
          />
          <span className="nav__toggle-icon"></span>
        </div>
        <ul className={`nav__menu${navOpen ? ' nav__menu--visible' : ''}`}>
          <li>
            <a href={`${path}#join`} className="button button__nav--primary" onClick={handleAnchorClick}>
              Join Us
            </a>
          </li>
          <li>
            <a href={`${path}#masteries`} onClick={handleAnchorClick}>
              Masteries
            </a>
          </li>
          <li>
            <a href={`${path}#how-to-play`} onClick={handleAnchorClick}>
              How to Play
            </a>
          </li>
          <li>
            <a href={`${path}#story`} onClick={handleAnchorClick}>
              Story
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
