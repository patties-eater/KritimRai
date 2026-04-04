import { NavLink, Outlet } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext.jsx'

const navLinkClass = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 transition duration-200 hover:opacity-100',
    isActive
      ? 'bg-[rgba(199,138,82,0.16)] text-[var(--color-accent-deep)] opacity-100'
      : 'opacity-75',
  ].join(' ')

const mobileNavLinkClass = ({ isActive }) =>
  [
    'flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[0.72rem] transition duration-200',
    isActive
      ? 'bg-[rgba(199,138,82,0.16)] text-[var(--color-accent-deep)]'
      : 'text-[var(--color-muted)]',
  ].join(' ')

function IconHome() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V21h13V9.5" />
    </svg>
  )
}

function IconPortfolio() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="m21 15-5-5-6 6-2-2-5 5" />
    </svg>
  )
}

function IconServices() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  )
}

function IconAbout() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.8-3.6 4.2-5.5 7-5.5s5.2 1.9 7 5.5" />
    </svg>
  )
}

function IconContact() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function Layout() {
  const { portfolio } = usePortfolio()
  const { profile } = portfolio

  return (
    <div className="page-shell pb-24 lg:pb-0">
      <header className="px-5 pb-0 pt-5 sm:px-7 sm:pt-7">
        <div className="flex items-center justify-between gap-4">
          <NavLink
            className="font-display text-2xl uppercase tracking-[0.08em] text-[var(--color-ink)]"
            to="/"
          >
            {profile.name}
          </NavLink>
        </div>

        <div className="mt-4 hidden lg:block">
          <nav className="inline-flex flex-wrap gap-2 rounded-full border border-[rgba(68,42,24,0.09)] bg-[rgba(255,255,255,0.62)] p-2 text-[0.95rem] shadow-[0_10px_30px_rgba(52,35,24,0.08)] backdrop-blur-sm">
            <NavLink className={navLinkClass} to="/">
              Home
            </NavLink>
            <NavLink className={navLinkClass} to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink className={navLinkClass} to="/services">
              Services
            </NavLink>
            <NavLink className={navLinkClass} to="/about">
              About
            </NavLink>
            <NavLink className={navLinkClass} to="/contact">
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <Outlet />

      <nav className="fixed bottom-3 left-1/2 z-50 flex w-[min(calc(100%-16px),560px)] -translate-x-1/2 gap-1 rounded-[26px] border border-[rgba(68,42,24,0.09)] bg-[rgba(255,255,255,0.82)] p-2 shadow-[0_18px_40px_rgba(52,35,24,0.16)] backdrop-blur-md lg:hidden">
        <NavLink className={mobileNavLinkClass} to="/">
          <IconHome />
          <span>Home</span>
        </NavLink>
        <NavLink className={mobileNavLinkClass} to="/portfolio">
          <IconPortfolio />
          <span>Work</span>
        </NavLink>
        <NavLink className={mobileNavLinkClass} to="/services">
          <IconServices />
          <span>Services</span>
        </NavLink>
        <NavLink className={mobileNavLinkClass} to="/about">
          <IconAbout />
          <span>About</span>
        </NavLink>
        <NavLink className={mobileNavLinkClass} to="/contact">
          <IconContact />
          <span>Contact</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default Layout
