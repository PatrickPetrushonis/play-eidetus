import { useLayoutEffect, useRef, type ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: ReactNode
  headerClass?: string
  homePath?: string
}

const Layout = ({ children, headerClass, homePath = '' }: LayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Pad the main content by the footer height so the footer never covers it.
  useLayoutEffect(() => {
    const adjustPadding = () => {
      const container = containerRef.current
      const footer = container?.querySelector<HTMLElement>('#footer')

      if (container && footer) container.style.paddingBottom = `${footer.offsetHeight - 1}px`
    }

    adjustPadding()
    window.addEventListener('resize', adjustPadding)

    return () => window.removeEventListener('resize', adjustPadding)
  }, [])

  return (
    <div id="main-container" className="main-container" ref={containerRef}>
      <Header path={homePath} className={headerClass} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
