import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext.jsx'

const navLinkClass = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 transition duration-200 hover:opacity-100',
    isActive
      ? 'bg-[rgba(199,138,82,0.16)] text-[var(--color-accent-deep)] opacity-100'
      : 'opacity-75',
  ].join(' ')

function Layout() {
  const { portfolio } = usePortfolio()
  const { profile } = portfolio
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="page-shell">
      <header className="px-5 pb-0 pt-5 sm:px-7 sm:pt-7">
        <div className="flex items-center justify-between gap-4">
          <NavLink className="font-display text-2xl uppercase tracking-[0.08em] text-[var(--color-ink)]" to="/">
            {profile.name}
          </NavLink>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(68,42,24,0.12)] bg-[rgba(255,255,255,0.72)] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-[var(--color-ink)] transition duration-200 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-[var(--color-ink)] transition duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-[var(--color-ink)] transition duration-200 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>

        <div className="mt-4 hidden lg:block">
          <nav className="inline-flex flex-wrap gap-2 rounded-full border border-[rgba(68,42,24,0.09)] bg-[rgba(255,255,255,0.62)] p-2 text-[0.95rem] shadow-[0_10px_30px_rgba(52,35,24,0.08)] backdrop-blur-sm">
            <NavLink className={navLinkClass} to="/">
              Home
            </NavLink>
            <NavLink className={navLinkClass} to="/collections">
              Collections
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

        <div className={`overflow-hidden transition-all duration-300 lg:hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="mt-4 grid gap-2 rounded-[24px] border border-[rgba(68,42,24,0.09)] bg-[rgba(255,255,255,0.7)] p-3 text-[0.95rem] shadow-[0_12px_35px_rgba(52,35,24,0.1)] backdrop-blur-sm">
            <NavLink className={navLinkClass} to="/">
              Home
            </NavLink>
            <NavLink className={navLinkClass} to="/collections">
              Collections
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
    </div>
  )
}

export default Layout
