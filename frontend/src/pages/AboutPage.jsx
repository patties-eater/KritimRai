import { usePortfolio } from '../context/PortfolioContext.jsx'

function AboutPage() {
  const { portfolio } = usePortfolio()
  const { profile } = portfolio

  return (
    <main>
      <section className="page-hero-shell">
        <p className="eyebrow">About</p>
        <h1 className="page-title">Friendly, simple, and professional photography</h1>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-[0.98rem] leading-7 text-[var(--color-muted)] sm:text-[1.06rem] sm:leading-8">
            {profile.name} takes photos of people, places, and special events. The goal is to make
            every photo clear, warm, and easy to enjoy.
          </p>
          <p className="text-[0.98rem] leading-7 text-[var(--color-muted)] sm:text-[1.06rem] sm:leading-8">
            With {profile.yearsExperience} years of experience, each photo shoot is planned with
            care and made to look good on phone, tablet, and desktop screens.
          </p>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
