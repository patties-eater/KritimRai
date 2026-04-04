import { Link } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext.jsx'

function ServicesPage() {
  const { portfolio } = usePortfolio()
  const { services, availability } = portfolio
  const featuredService = services.find((service) => service.featured)
  const otherServices = services.filter((service) => !service.featured)

  return (
    <main>
      <section className="page-hero-shell">
        <p className="eyebrow">Services</p>
        <h1 className="page-title">Photography services</h1>
        <p className="page-text">Simple packages for weddings, portraits, events, and brand work.</p>
      </section>

      {featuredService ? (
        <section className="section-shell">
          <div className="grid gap-6 rounded-[28px] border border-[rgba(68,42,24,0.09)] bg-[linear-gradient(135deg,rgba(255,248,241,0.96),rgba(240,226,211,0.88))] p-5 sm:gap-8 sm:rounded-[30px] sm:p-7 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow">Most popular package</p>
              <h2 className="section-title">{featuredService.name}</h2>
              <div className="mt-4 inline-flex items-center rounded-full bg-[var(--color-ink)] px-4 py-2.5 shadow-[0_12px_30px_rgba(45,28,19,0.18)] sm:px-5 sm:py-3">
                <p className="font-display text-[1.55rem] text-[var(--color-paper)] sm:text-3xl">
                  {featuredService.price}
                </p>
              </div>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
                {featuredService.duration}
              </p>
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                {featuredService.description}
              </p>
              <p className="mt-4 text-[var(--color-accent-deep)]">{featuredService.deliverables}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {featuredService.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-[rgba(61,41,28,0.12)] bg-[rgba(255,255,255,0.62)] px-4 py-3 text-[0.92rem] leading-6 text-[var(--color-ink)] sm:text-sm"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid content-center gap-4">
              <div className="info-card">
                <p className="text-sm uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
                  Why people choose this
                </p>
                <p className="mt-3 text-[0.98rem] leading-7 text-[var(--color-muted)]">
                  It covers the full story of the day and gives enough time for real moments, family
                  photos, and natural couple portraits.
                </p>
              </div>
              <Link className="button button-primary w-full justify-center sm:w-fit" to="/contact">
                Book this package
              </Link>
              <Link
                className="inline-flex w-full items-center justify-center rounded-full border border-[rgba(61,41,28,0.12)] bg-[rgba(255,255,255,0.78)] px-5 py-3 text-center text-[var(--color-ink)] shadow-[0_10px_25px_rgba(45,28,19,0.08)] transition duration-200 hover:-translate-y-0.5 sm:w-fit"
                to={`/contact?service=${encodeURIComponent(featuredService.name)}`}
              >
                Ask about {featuredService.name}
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-shell">
        <div className="grid gap-[18px] lg:grid-cols-3">
          {otherServices.map((service) => (
            <article key={service.name} className="info-card p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="w-fit rounded-2xl bg-[rgba(199,138,82,0.14)] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <p className="font-display text-[1.45rem] leading-none text-[var(--color-accent-deep)] sm:text-xl">
                    {service.price}
                  </p>
                </div>
                <span className="w-fit rounded-full border border-[rgba(61,41,28,0.12)] px-3 py-1 text-xs text-[var(--color-accent-deep)]">
                  {service.duration}
                </span>
              </div>
              <h3 className="my-2 text-[1.35rem] text-[var(--color-ink)]">{service.name}</h3>
              <p className="text-[0.98rem] leading-7 text-[var(--color-muted)]">{service.description}</p>
              <span className="mt-3 block text-[0.95rem] leading-7 text-[var(--color-accent-deep)]">
                {service.deliverables}
              </span>
              <ul className="mt-4 grid gap-2 text-[0.92rem] leading-6 text-[var(--color-ink)] sm:text-sm">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-2xl border border-[rgba(61,41,28,0.12)] bg-[rgba(255,255,255,0.62)] px-4 py-3"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-[rgba(199,138,82,0.3)] bg-[rgba(199,138,82,0.12)] px-5 py-3 text-center font-medium text-[var(--color-ink)] shadow-[0_10px_20px_rgba(199,138,82,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-[rgba(199,138,82,0.2)] sm:w-fit"
                to={`/contact?service=${encodeURIComponent(service.name)}`}
              >
                Ask about this package
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-[28px] border border-[rgba(68,42,24,0.09)] bg-[rgba(255,255,255,0.64)] p-5 sm:p-7">
          <p className="eyebrow">Availability</p>
          <h2 className="section-title">{availability.title}</h2>
          <p className="mt-4 max-w-3xl text-[0.98rem] leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">{availability.details}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {availability.slots.map((slot) => (
              <span
                key={slot}
                className="rounded-full border border-[rgba(61,41,28,0.16)] bg-[rgba(255,255,255,0.7)] px-4 py-2 text-sm text-[var(--color-ink)]"
              >
                {slot}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
