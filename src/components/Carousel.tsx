import { Children, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'

const AUTOPLAY_MS = 10000
const SPEED_MS = 800
const MARGIN = 10

type CarouselProps = {
  children: ReactNode
}

// One slide at a time, looping, autoplaying every 10 seconds and pausing while
// hovered. Uses the owl-carousel class names so the owl stylesheet applies.
const Carousel = ({ children }: CarouselProps) => {
  const slides = Children.toArray(children)
  const count = slides.length
  const rootRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [position, setPosition] = useState(0)
  const [animated, setAnimated] = useState(true)
  const [paused, setPaused] = useState(false)

  useLayoutEffect(() => {
    const root = rootRef.current

    if (!root) return

    const measure = () => setWidth(root.clientWidth)

    measure()

    const observer = new ResizeObserver(measure)

    observer.observe(root)

    return () => observer.disconnect()
  }, [])

  // Advance after the autoplay delay; restarts after every slide change.
  useEffect(() => {
    if (paused || count < 2) return

    const timer = setTimeout(() => {
      setAnimated(true)
      setPosition((current) => current + 1)
    }, AUTOPLAY_MS)

    return () => clearTimeout(timer)
  }, [paused, position, count])

  // Position `count` is the clone of the first slide; once the slide to it has
  // finished, jump back to the real first slide without animating.
  useEffect(() => {
    if (position !== count) return

    const timer = setTimeout(() => {
      setAnimated(false)
      setPosition(0)
    }, SPEED_MS)

    return () => clearTimeout(timer)
  }, [position, count])

  useEffect(() => {
    if (animated) return

    const frame = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)))

    return () => cancelAnimationFrame(frame)
  }, [animated])

  const goTo = (index: number) => {
    setAnimated(true)
    setPosition(index)
  }

  const itemStyle = { width: Math.max(width - MARGIN, 0), marginRight: MARGIN, flex: 'none' } as const

  return (
    <div
      ref={rootRef}
      className="owl-carousel owl-theme owl-loaded"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="owl-stage-outer">
        <div
          className="owl-stage"
          style={{
            display: 'flex',
            width: (count + 1) * width,
            transform: `translate3d(${-position * width}px, 0, 0)`,
            transition: animated ? `transform ${SPEED_MS}ms ease` : 'none',
          }}
        >
          {slides.map((slide, index) => (
            <div className={`owl-item${index === position % count ? ' active' : ''}`} style={itemStyle} key={index}>
              {slide}
            </div>
          ))}
          {count > 0 && (
            <div className="owl-item cloned" style={itemStyle} key="clone">
              {slides[0]}
            </div>
          )}
        </div>
      </div>
      <div className="owl-dots">
        {slides.map((_, index) => (
          <button
            type="button"
            className={`owl-dot${index === position % count ? ' active' : ''}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goTo(index)}
            key={index}
          >
            <span></span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
