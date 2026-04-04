import { usePortfolio } from '../context/PortfolioContext.jsx'

function ServicesPage() {
  const { portfolio } = usePortfolio()
  const { services } = portfolio

  return (
    <main>
      <section className="page-hero-shell">
        <p className="eyebrow">Services</p>
        <h1 className="page-title">Photography services</h1>
        <p className="page-text">Simple packages for weddings, portraits, events, and brand work.</p>
      </section>

      <section className="section-shell">
        <div className="grid gap-[18px] lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.name} className="info-card">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent-deep)]">
                {service.price}
              </p>
              <h3 className="my-2 text-[1.35rem] text-[var(--color-ink)]">{service.name}</h3>
              <p className="text-[var(--color-muted)]">{service.description}</p>
              <span className="mt-3 block text-[var(--color-accent-deep)]">
                {service.deliverables}
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
