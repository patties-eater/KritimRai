import { usePortfolio } from '../context/PortfolioContext.jsx'

function AboutPage() {
  const { portfolio } = usePortfolio()
  const { profile, featuredIn } = portfolio

  return (
    <main>
      <section className="page-hero-shell">
        <p className="eyebrow">About</p>
        <h1 className="page-title">Friendly, simple, and professional photography</h1>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[28px] border border-[rgba(68,42,24,0.09)] bg-[rgba(255,255,255,0.56)] p-3">
            <img
              className="h-full w-full rounded-[22px] object-cover"
              src={profile.heroImage}
              alt={`${profile.name} holding a camera`}
            />
          </div>
          <div className="grid content-center gap-6">
            <p className="text-[0.98rem] leading-7 text-[var(--color-muted)] sm:text-[1.06rem] sm:leading-8">
              {profile.name} takes photos of people, places, and special events. The goal is to
              make every photo clear, warm, and easy to enjoy.
            </p>
            <p className="text-[0.98rem] leading-7 text-[var(--color-muted)] sm:text-[1.06rem] sm:leading-8">
              With {profile.yearsExperience} years of experience, each photo shoot is planned with
              care and made to look good on phone, tablet, and desktop screens.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <p className="eyebrow">Featured before</p>
          <h2 className="section-title">Past features and mentions</h2>
        </div>
        <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-4">
          {featuredIn.map((feature) => (
            <article key={feature.name} className="info-card">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
                {feature.type}
              </p>
              <h3 className="my-2 text-[1.3rem] text-[var(--color-ink)]">{feature.name}</h3>
              <p className="text-[var(--color-muted)]">{feature.note}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AboutPage
