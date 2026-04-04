import { usePortfolio } from '../context/PortfolioContext.jsx'

function ContactPage() {
  const { portfolio } = usePortfolio()
  const { contact } = portfolio

  return (
    <main>
      <section className="page-hero-shell">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Call or message on WhatsApp</h1>
        <p className="page-text">
          There is no database here. The backend only serves site content and contact details.
        </p>
      </section>

      <section className="section-shell">
        <div className="grid gap-[18px] lg:grid-cols-3">
          <article className="info-card grid content-start gap-3.5">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
              Phone
            </p>
            <h3 className="text-[1.3rem] text-[var(--color-ink)]">Call for booking</h3>
            <p className="text-[var(--color-muted)]">
              Best for quick questions and booking a photo shoot.
            </p>
            <a className="button button-primary" href={`tel:${contact.phone.replace(/\s+/g, '')}`}>
              {contact.phone}
            </a>
          </article>

          <article className="info-card grid content-start gap-3.5">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
              WhatsApp
            </p>
            <h3 className="text-[1.3rem] text-[var(--color-ink)]">Send a message</h3>
            <p className="text-[var(--color-muted)]">
              Easy way to ask about price, dates, and photo packages.
            </p>
            <a
              className="button button-secondary"
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </article>

          <article className="info-card grid content-start gap-3.5">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
              Other details
            </p>
            <h3 className="text-[1.3rem] text-[var(--color-ink)]">More contact options</h3>
            <p className="text-[var(--color-muted)]">{contact.location}</p>
            <a className="text-link" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a
              className="text-link"
              href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
            >
              {contact.instagram}
            </a>
          </article>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
