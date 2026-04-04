import { usePortfolio } from '../context/PortfolioContext.jsx'

const featuredBefore = [
  {
    name: 'Routine of Nepal Banda',
    type: 'Facebook Feature',
    note: 'Featured on the Routine of Nepal Banda Facebook page.',
    href: 'https://www.facebook.com/100064557167145/posts/983393973822499/?mibextid=rS40aB7S9Ucbxw6v',
    mark: 'RONB',
  },
  {
    name: 'BCA Association - MMC',
    type: 'Facebook Feature',
    note: 'Featured on the BCA Association - MMC Facebook page.',
    href: 'https://www.facebook.com/share/p/1HGn5nrcHB/',
    mark: 'BCA',
  },
  {
    name: 'Brand Collaboration',
    type: 'Brand Work',
    note: 'Use this for a hotel, cafe, studio, product, or company project.',
    href: 'https://example.com/brand-work',
    mark: 'BR',
  },
  {
    name: 'Media Page Mention',
    type: 'Social or Media',
    note: 'Use this for Facebook pages, Instagram posts, or digital media mentions.',
    href: 'https://example.com/media-mention',
    mark: 'MD',
  },
]

function AboutPage() {
  const { portfolio } = usePortfolio()
  const { profile, availability } = portfolio

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
        <div className="grid gap-8 rounded-[28px] border border-[rgba(68,42,24,0.09)] bg-[rgba(255,255,255,0.64)] p-7 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow">Behind the camera</p>
            <h2 className="section-title">Calm direction, simple process, real moments</h2>
          </div>
          <div className="grid gap-4 text-[var(--color-muted)]">
            <p>
              I like keeping shoots relaxed so people feel natural in front of the camera. That
              helps me capture honest moments instead of stiff poses.
            </p>
            <p>
              My work focuses on light, expression, and clean composition. Whether it is a wedding,
              portrait, event, or travel shoot, I try to make the final photos feel clear and alive.
            </p>
            <p>
              {availability.title} {availability.details}
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
          {featuredBefore.map((feature) => (
            <article key={feature.name} className="info-card">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(199,138,82,0.14)] font-semibold text-[var(--color-accent-deep)]">
                  {feature.mark}
                </span>
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
                  {feature.type}
                </p>
              </div>
              <h3 className="my-2 text-[1.3rem] text-[var(--color-ink)]">{feature.name}</h3>
              <p className="text-[var(--color-muted)]">{feature.note}</p>
              <a
                className="mt-4 inline-flex w-fit items-center rounded-full border border-[rgba(61,41,28,0.16)] px-4 py-2 text-sm text-[var(--color-ink)] transition duration-200 hover:-translate-y-0.5"
                href={feature.href}
                target="_blank"
                rel="noreferrer"
              >
                View feature
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AboutPage
