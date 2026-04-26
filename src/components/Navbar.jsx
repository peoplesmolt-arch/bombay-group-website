import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',         path: '/' },
  {
    label: 'About',        path: '/about',
    children: [
      { label: 'Our Story & History',      path: '/about/history' },
      { label: 'Core Values',              path: '/about/values' },
      { label: 'Leadership Team',          path: '/about/team' },
      { label: 'Certifications',           path: '/about/compliance' },
      { label: 'Events & Engagements',     path: '/about/events' },
    ],
  },
  {
    label: 'Services',     path: '/services',
    children: [
      { label: 'Financial Services (NBFC)', path: '/services/finance' },
      { label: 'Manufacturing',             path: '/services/manufacturing' },
      { label: 'Real Estate',               path: '/services/real-estate' },
      { label: 'Hospitality & Tourism',     path: '/services/hospitality' },
      { label: 'Art, Cinema & Culture',     path: '/services/art-culture' },
      { label: 'International JVs',         path: '/services/international' },
    ],
  },
  { label: 'Our Companies', path: '/companies' },
  { label: 'Achievements',  path: '/achievements' },
  { label: 'News & Media',  path: '/news' },
  { label: 'Careers',       path: '/careers' },
  { label: 'Contact',       path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeDropdown, setActive]   = useState(null);
  const { pathname }                  = useLocation();

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close mobile menu on route change */
  useEffect(() => { setMenuOpen(false); setActive(null); }, [pathname]);

  const toggleDropdown = (label) =>
    setActive(prev => (prev === label ? null : label));

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      {/* ── Top bar ──────────────────────────────────────────────────── */}
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.36 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            91-22-20876788
          </span>
          <span className="topbar__item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            contactus@bombayfinanceindia.com
          </span>
          <span className="topbar__rbi">✦ RBI Approved NBFC &amp; Foreign Investor</span>
          <div className="topbar__socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://twitter.com"  target="_blank" rel="noreferrer" aria-label="Twitter">𝕏</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">fb</a>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ─────────────────────────────────────────────── */}
      <nav className="navbar__main">
        <div className="container navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <img src={logoImg} alt="Bombay Group" className="navbar__logo-img" />
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">BOMBAY GROUP</span>
              <span className="navbar__logo-sub">Bombay Finance India Pvt. Ltd.</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="navbar__links">
            {NAV_LINKS.map(link => (
              <li
                key={link.label}
                className="navbar__item"
                onMouseEnter={() => link.children && setActive(link.label)}
                onMouseLeave={() => setActive(null)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                  end={link.path === '/'}
                >
                  {link.label}
                  {link.children && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginLeft: 4 }}><polyline points="6 9 12 15 18 9"/></svg>
                  )}
                </NavLink>
                {link.children && activeDropdown === link.label && (
                  <ul className="navbar__dropdown">
                    {link.children.map(child => (
                      <li key={child.path}>
                        <NavLink to={child.path} className="navbar__dropdown-link">
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to="/contact/finance-enquiry" className="btn btn-primary navbar__cta">
            Apply for Finance
          </Link>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ────────────────────────────────────────────── */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <ul className="navbar__drawer-links">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              {link.children ? (
                <>
                  <button
                    className="navbar__drawer-toggle"
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                      style={{ transform: activeDropdown === link.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                  {activeDropdown === link.label && (
                    <ul className="navbar__drawer-sub">
                      {link.children.map(child => (
                        <li key={child.path}>
                          <NavLink to={child.path} className="navbar__drawer-sublink">
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink to={link.path} className="navbar__drawer-link" end={link.path === '/'}>
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <Link to="/contact/finance-enquiry" className="btn btn-primary" style={{ margin: '1rem 1.5rem' }}>
          Apply for Finance
        </Link>
      </div>
    </header>
  );
}
