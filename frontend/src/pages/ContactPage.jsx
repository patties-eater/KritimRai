import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext.jsx'

const bsMonths = [
  'Baisakh',
  'Jestha',
  'Ashadh',
  'Shrawan',
  'Bhadra',
  'Ashwin',
  'Kartik',
  'Mangsir',
  'Poush',
  'Magh',
  'Falgun',
  'Chaitra',
]

function ContactPage() {
  const { portfolio } = usePortfolio()
  const { contact, services } = portfolio
  const [searchParams] = useSearchParams()
  const selectedService = searchParams.get('service')
  const serviceOptions = services.map((service) => service.name)
  const defaultEventType =
    selectedService && serviceOptions.includes(selectedService)
      ? selectedService
      : serviceOptions[0] || 'Wedding'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: defaultEventType,
    bsYear: '2083',
    bsMonth: 'Baisakh',
    bsDay: '1',
    message: selectedService ? `Hi, I want to ask about the ${selectedService}.` : '',
  })

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      eventType: defaultEventType,
      message: selectedService ? `Hi, I want to ask about the ${selectedService}.` : current.message,
    }))
  }, [defaultEventType, selectedService])

  function updateField(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  function getFormattedBsDate() {
    if (!formData.bsYear || !formData.bsMonth || !formData.bsDay) {
      return 'Not set'
    }

    return `${formData.bsYear} ${formData.bsMonth} ${formData.bsDay} BS`
  }

  function buildMessage() {
    return [
      'Hello Kritim Rai,',
      `My name is ${formData.name || '...'}.`,
      `Phone: ${formData.phone || '...'}`,
      `Package: ${formData.eventType || '...'}`,
      `Preferred date: ${getFormattedBsDate()}`,
      `Message: ${formData.message || '...'}`,
    ].join('\n')
  }

  function openWhatsApp() {
    const message = encodeURIComponent(buildMessage())
    window.open(`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank')
  }

  function openSms() {
    const message = encodeURIComponent(buildMessage())
    window.location.href = `sms:${contact.phone.replace(/\s+/g, '')}?body=${message}`
  }

  const canSend = formData.name && formData.phone && formData.eventType && formData.message

  return (
    <main>
      <section className="page-hero-shell">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Call, save contact, or send a WhatsApp or SMS inquiry</h1>
        <p className="page-text">
          Fill the form details, then send them directly as a WhatsApp message or SMS.
        </p>
      </section>

      <section className="section-shell">
        <div className="grid gap-[18px] lg:grid-cols-4">
          <article className="info-card overflow-hidden p-3 lg:col-span-1">
            <img
              className="h-full min-h-[280px] w-full rounded-[22px] object-cover"
              src={portfolio.profile.heroImage}
              alt={`${portfolio.profile.name} profile`}
            />
          </article>

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
            <a className="button button-secondary" href={contact.vcardUrl} download>
              Save Contact
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
            <a className="text-link" href={contact.facebook} target="_blank" rel="noreferrer">
              Facebook profile
            </a>
          </article>
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-[28px] border border-[rgba(68,42,24,0.09)] bg-[rgba(255,255,255,0.64)] p-7">
          <p className="eyebrow">Booking form</p>
          <h2 className="section-title">Send your booking details</h2>
          <p className="mt-4 max-w-2xl text-[var(--color-muted)]">
            Share your event type, BS date, and message. Then send it directly to WhatsApp or SMS
            with one tap.
          </p>
          {selectedService ? (
            <div className="mt-5 inline-flex items-center rounded-full bg-[rgba(199,138,82,0.14)] px-4 py-2 text-sm text-[var(--color-accent-deep)]">
              Selected package: {selectedService}
            </div>
          ) : null}

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm text-[var(--color-ink)]">Name</span>
              <input
                className="rounded-2xl border border-[rgba(61,41,28,0.16)] bg-white px-4 py-3 outline-none"
                name="name"
                value={formData.name}
                onChange={updateField}
                required
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-[var(--color-ink)]">Phone</span>
              <input
                className="rounded-2xl border border-[rgba(61,41,28,0.16)] bg-white px-4 py-3 outline-none"
                name="phone"
                value={formData.phone}
                onChange={updateField}
                required
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-[var(--color-ink)]">Event type</span>
              <select
                className="rounded-2xl border border-[rgba(61,41,28,0.16)] bg-white px-4 py-3 outline-none"
                name="eventType"
                value={formData.eventType}
                onChange={updateField}
              >
                {serviceOptions.map((serviceName) => (
                  <option key={serviceName}>{serviceName}</option>
                ))}
              </select>
            </label>
            <div className="grid gap-2 lg:col-span-2">
              <span className="text-sm text-[var(--color-ink)]">Preferred date in BS</span>
              <div className="grid gap-3 sm:grid-cols-3">
                <input
                  className="rounded-2xl border border-[rgba(61,41,28,0.16)] bg-white px-4 py-3 outline-none"
                  name="bsYear"
                  value={formData.bsYear}
                  onChange={updateField}
                  placeholder="2083"
                  inputMode="numeric"
                />
                <select
                  className="rounded-2xl border border-[rgba(61,41,28,0.16)] bg-white px-4 py-3 outline-none"
                  name="bsMonth"
                  value={formData.bsMonth}
                  onChange={updateField}
                >
                  {bsMonths.map((month) => (
                    <option key={month}>{month}</option>
                  ))}
                </select>
                <select
                  className="rounded-2xl border border-[rgba(61,41,28,0.16)] bg-white px-4 py-3 outline-none"
                  name="bsDay"
                  value={formData.bsDay}
                  onChange={updateField}
                >
                  {Array.from({ length: 32 }, (_, index) => String(index + 1)).map((day) => (
                    <option key={day}>{day}</option>
                  ))}
                </select>
              </div>
              <p className="text-sm text-[var(--color-accent-deep)]">
                Selected date: {getFormattedBsDate()}
              </p>
            </div>
            <label className="grid gap-2 lg:col-span-2">
              <span className="text-sm text-[var(--color-ink)]">Message</span>
              <textarea
                className="min-h-36 rounded-2xl border border-[rgba(61,41,28,0.16)] bg-white px-4 py-3 outline-none"
                name="message"
                value={formData.message}
                onChange={updateField}
                required
              />
            </label>
            <div className="flex flex-col gap-3 lg:col-span-2">
              <div className="flex flex-wrap gap-3">
                <button
                  className="button button-primary"
                  type="button"
                  onClick={openWhatsApp}
                  disabled={!canSend}
                >
                  Send by WhatsApp
                </button>
                <button
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(199,138,82,0.3)] bg-[rgba(199,138,82,0.12)] px-6 text-[var(--color-ink)] transition duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                  type="button"
                  onClick={openSms}
                  disabled={!canSend}
                >
                  Send by SMS
                </button>
              </div>
              <p className="text-sm text-[var(--color-accent-deep)]">
                Fill name, phone, package, and message first. Then choose WhatsApp or SMS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
