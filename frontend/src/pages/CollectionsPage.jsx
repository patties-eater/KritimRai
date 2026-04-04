import { usePortfolio } from '../context/PortfolioContext.jsx'

function CollectionsPage() {
  const { portfolio } = usePortfolio()
  const { collections } = portfolio

  return (
    <main>
      <section className="page-hero-shell">
        <p className="eyebrow">Collections</p>
        <h1 className="page-title">Photo collections</h1>
        <p className="page-text">Browse different groups of photos in a simple and clear way.</p>
      </section>

      <section className="section-shell">
        <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-4">
          {collections.map((collection) => (
            <article key={collection.name} className="info-card">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
                {collection.count}
              </p>
              <h3 className="my-2 text-[1.3rem] text-[var(--color-ink)]">{collection.name}</h3>
              <p className="text-[var(--color-muted)]">{collection.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default CollectionsPage
