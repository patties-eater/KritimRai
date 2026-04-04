import { usePortfolio } from '../context/PortfolioContext.jsx'

function PortfolioPage() {
  const { portfolio } = usePortfolio()
  const { gallery } = portfolio

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
                <img
                  className="block aspect-[4/5] h-full w-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
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
    </main>
  )
}

export default PortfolioPage
