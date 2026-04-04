import { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext.jsx'

function PortfolioPage() {
  const { portfolio } = usePortfolio()
  const { gallery } = portfolio
  const [activeIndex, setActiveIndex] = useState(null)

  const activeImage = activeIndex === null ? null : gallery[activeIndex]

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? gallery.length - 1 : current - 1))
  }

  function showNext() {
    setActiveIndex((current) => (current === gallery.length - 1 ? 0 : current + 1))
  }

  return (
    <main>
      <section className="page-hero-shell">
        <p className="eyebrow">Portfolio</p>
        <h1 className="page-title">Recent photo highlights</h1>
        <p className="page-text">A selection of wedding, portrait, travel, and event work.</p>
      </section>

      <section className="section-shell">
        <div className="grid gap-[18px] lg:grid-cols-12">
          {gallery.map((item, index) => {
            const spanClasses = [
              'lg:col-span-4',
              'lg:col-span-5',
              'lg:col-span-3',
              'lg:col-span-5',
              'lg:col-span-3',
              'lg:col-span-4',
            ]

            return (
              <article
                key={item.title}
                className={`soft-card overflow-hidden rounded-3xl animate-[fade-up_700ms_ease_both] ${spanClasses[index] ?? 'lg:col-span-4'}`}
              >
                <button
                  type="button"
                  className="block w-full cursor-zoom-in text-left"
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    className="block aspect-[4/5] h-full w-full object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                </button>
                <div className="p-[18px]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent-deep)]">
                      {item.category}
                    </p>
                    <h3 className="my-2 text-[1.35rem] text-[var(--color-ink)]">{item.title}</h3>
                  </div>
                  <p className="text-[var(--color-muted)]">{item.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {activeImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(25,15,9,0.9)] p-4">
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-white/30 px-4 py-2 text-white"
            onClick={() => setActiveIndex(null)}
          >
            Close
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 rounded-full border border-white/30 px-4 py-2 text-white"
            onClick={showPrevious}
          >
            Prev
          </button>
          <div className="w-full max-w-5xl overflow-hidden rounded-[28px] bg-[rgba(255,255,255,0.06)] p-4 backdrop-blur-sm">
            <img
              className="max-h-[75vh] w-full rounded-[22px] object-contain"
              src={activeImage.image}
              alt={activeImage.title}
            />
            <div className="mt-4 flex flex-col gap-2 text-white">
              <p className="text-xs uppercase tracking-[0.18em] text-[#f2c897]">{activeImage.category}</p>
              <h3 className="font-display text-3xl">{activeImage.title}</h3>
              <p className="max-w-2xl text-white/80">{activeImage.description}</p>
            </div>
          </div>
          <button
            type="button"
            className="absolute right-4 top-1/2 rounded-full border border-white/30 px-4 py-2 text-white"
            onClick={showNext}
          >
            Next
          </button>
        </div>
      ) : null}
    </main>
  )
}

export default PortfolioPage
