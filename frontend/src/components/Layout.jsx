import { NavLink, Outlet } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext.jsx'

const navLinkClass = ({ isActive }) =>
  [
    'transition-opacity duration-200 hover:opacity-100',
    isActive ? 'text-[var(--color-accent-deep)] opacity-100' : 'opacity-75',
  ].join(' ')

function Layout() {
  const { portfolio, status } = usePortfolio()
  const { profile } = portfolio

  return (
    <div className="page-shell">
      <header className="px-5 pb-0 pt-5 sm:px-7 sm:pt-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <NavLink
            className="font-display text-2xl uppercase tracking-[0.08em] text-[var(--color-ink)]"
            to="/"
          >
            {profile.name}
          </NavLink>
          <nav className="flex flex-wrap gap-3 text-[0.95rem] sm:gap-5">
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
        <div className="mt-[18px] text-[0.92rem] text-[var(--color-accent-deep)]">
          {status === 'loading' && <span>Loading portfolio details.</span>}
          {status === 'fallback' && <span>Showing preview content.</span>}
          {status === 'ready' && <span>Live portfolio content loaded.</span>}
        </div>
      </header>

      <Outlet />
    </div>
  )
}

export default Layout
