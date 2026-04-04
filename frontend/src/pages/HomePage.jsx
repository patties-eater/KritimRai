import { Link } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext.jsx'

function HomePage() {
  const { portfolio } = usePortfolio()
  const { profile, collections, testimonials, contact } = portfolio

  return (
    <main>
      <section className="page-hero-shell">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Photographer Portfolio</p>
            <h1 className="m-0 max-w-[9ch] font-display text-[clamp(2.8rem,13vw,4rem)] leading-[0.95] font-semibold text-[var(--color-ink)] sm:text-[clamp(3.8rem,7vw,6.8rem)]">
              {profile.title}
            </h1>
            <p className="mt-6 max-w-[34rem] text-[0.98rem] leading-7 text-[var(--color-muted)] sm:text-[1.15rem] sm:leading-8">
              {profile.tagline}
            </p>
            <p className="mb-7 mt-3 text-[var(--color-muted)]">{profile.location}</p>

            <div className="flex flex-wrap gap-3.5">
              <Link className="button button-primary" to="/contact">
                Contact now
              </Link>
              <Link className="button button-secondary" to="/portfolio">
                View photos
              </Link>
            </div>
          </div>

          <div className="relative min-h-[340px] animate-[rise-in_900ms_ease_both] sm:min-h-[420px] lg:min-h-[540px]">
            <img
              className="block h-full w-full rounded-[28px] object-cover shadow-[0_26px_70px_rgba(54,35,24,0.18)]"
              src={profile.heroImage}
              alt={`${profile.name} featured photography`}
            />
            <div className="absolute bottom-3 left-3 right-3 rounded-[22px] bg-[rgba(247,239,231,0.84)] p-5 text-[var(--color-ink)] shadow-[0_18px_50px_rgba(50,34,24,0.14)] backdrop-blur-[14px] sm:bottom-7 sm:left-auto sm:right-[-12px] sm:w-[min(260px,70%)]">
              <p>Natural photos, real moments, and easy photo sessions.</p>
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-[18px] md:grid-cols-3">
          {profile.stats.map((item) => (
            <article
              key={item.label}
              className="soft-card rounded-[22px] p-[22px] backdrop-blur-[8px]"
            >
              <strong className="block font-display text-[2.2rem] text-[var(--color-ink)]">
                {item.value}
              </strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <p className="eyebrow">Quick look</p>
          <h2 className="section-title">Photo collections and client reviews</h2>
        </div>
        <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-4">
          {collections.slice(0, 4).map((collection) => (
            <article key={collection.name} className="info-card">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
                {collection.count}
              </p>
              <h3 className="my-2 text-[1.3rem] text-[var(--color-ink)]">{collection.name}</h3>
              <p className="text-[var(--color-muted)]">{collection.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-[18px]">
          <Link className="text-link" to="/collections">
            See all collections
          </Link>
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <p className="eyebrow">Reviews</p>
          <h2 className="section-title">Clients are happy with the results</h2>
        </div>
        <div className="grid gap-[18px] lg:grid-cols-3">
          {testimonials.map((quote) => (
            <blockquote key={quote.name} className="info-card m-0">
              <p>"{quote.quote}"</p>
              <footer className="mt-[18px] flex flex-col gap-1.5">
                <strong>{quote.name}</strong>
                <span className="text-[var(--color-accent-deep)]">{quote.context}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 rounded-[28px] border border-[rgba(68,42,24,0.09)] bg-[linear-gradient(135deg,rgba(255,248,241,0.86),rgba(239,224,208,0.88))] p-7 md:grid-cols-2">
          <div>
            <p className="eyebrow">Ready to book</p>
            <h2 className="section-title">Call or message on WhatsApp</h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-[var(--color-muted)] sm:text-[1.06rem] sm:leading-8">
              For quick booking, you can call directly or send a WhatsApp message any time.
            </p>
          </div>
          <div className="grid content-center gap-4 sm:flex sm:flex-wrap">
            <a className="button button-primary" href={`tel:${contact.phone.replace(/\s+/g, '')}`}>
              Call now
            </a>
            <a
              className="button button-secondary"
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
