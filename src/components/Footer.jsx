import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import './Footer.css';

const COMPANY_LINKS = [
  { label: 'Bombay Finance India Pvt Ltd', path: '/companies/bombay-finance-india' },
  { label: 'Bombay Ace Motors India',      path: '/companies/bombay-ace-motors' },
  { label: 'Bombay Motors India',          path: '/companies/bombay-motors' },
  { label: 'Bombay Fine Art Pvt Ltd',      path: '/companies/bombay-fine-art' },
  { label: 'Quasathu Investment LLC',      path: '/companies/quasathu-investment-llc' },
  { label: 'Bombay Group Liberia',         path: '/companies/bombay-group-liberia' },
  { label: 'Bombay Group Botswana',        path: '/companies/bombay-group-botswana' },
  { label: 'Bombay Trading LLC (Dubai)',   path: '/companies/bombay-trading' },
];

const SERVICE_LINKS = [
  { label: 'Corporate & Project Finance', path: '/services/finance' },
  { label: 'Real Estate Mortgage',        path: '/services/real-estate' },
  { label: 'Manufacturing',               path: '/services/manufacturing' },
  { label: 'Hospitality & Tourism',       path: '/services/hospitality' },
  { label: 'Art, Cinema & Culture',       path: '/services/art-culture' },
  { label: 'International Joint Ventures',path: '/services/international' },
];

const QUICK_LINKS = [
  { label: 'Home',           path: '/' },
  { label: 'About Us',       path: '/about' },
  { label: 'Leadership Team',path: '/about/team' },
  { label: 'Certifications', path: '/about/compliance' },
  { label: 'Achievements',   path: '/achievements' },
  { label: 'News & Media',   path: '/news' },
  { label: 'Careers',        path: '/careers' },
  { label: 'Contact',        path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <div className="footer__cta-band">
        <div className="container footer__cta-inner">
          <div>
            <h3 className="footer__cta-title">Looking to Finance Your Next Big Project?</h3>
            <p className="footer__cta-sub">
              RBI-approved NBFC — secured &amp; unsecured loans across India. Let's connect.
            </p>
          </div>
          <Link to="/contact/finance-enquiry" className="btn btn-primary footer__cta-btn">
            Apply for Finance ›
          </Link>
        </div>
      </div>

      {/* ── Main footer ──────────────────────────────────────────────── */}
      <div className="footer__main">
        <div className="container footer__grid">

          {/* Col 1 — Brand */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              <img src={logoImg} alt="Bombay Group" className="footer__logo-img" />
              <div>
                <div className="footer__logo-name">BOMBAY GROUP</div>
                <div className="footer__logo-sub">Bombay Finance India Pvt. Ltd.</div>
              </div>
            </div>
            <p className="footer__tagline">Building Wealth, Creating Impact, Connecting the World</p>
            <p className="footer__desc">
              A one-stop financial services conglomerate catering to the diverse needs of
              retail, corporate and individual customers. RBI-approved NBFC and foreign
              investor with presence across 4 continents.
            </p>
            <div className="footer__badges">
              <span className="footer__badge">RBI Approved</span>
              <span className="footer__badge">NBFC Registered</span>
              <span className="footer__badge">Make in India</span>
            </div>
            <div className="footer__socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer__social">in</a>
              <a href="https://twitter.com"  target="_blank" rel="noreferrer" aria-label="Twitter"  className="footer__social">𝕏</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="footer__social">ig</a>
              <a href="https://facebook.com"  target="_blank" rel="noreferrer" aria-label="Facebook"  className="footer__social">fb</a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              {QUICK_LINKS.map(l => (
                <li key={l.path}><Link to={l.path} className="footer__link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="footer__col">
            <h4 className="footer__heading">Our Services</h4>
            <ul className="footer__list">
              {SERVICE_LINKS.map(l => (
                <li key={l.path}><Link to={l.path} className="footer__link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Get in Touch</h4>
            <address className="footer__address">
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <span>Sector 15, CBD Belapur,<br />Navi Mumbai, Maharashtra, India</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <a href="tel:912220876788" className="footer__link">91-22-20876788</a>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">✉️</span>
                <a href="mailto:contactus@bombayfinanceindia.com" className="footer__link">
                  contactus@bombayfinanceindia.com
                </a>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">💬</span>
                <a href="https://wa.me/912220876788" target="_blank" rel="noreferrer" className="footer__link footer__link--wa">
                  WhatsApp Us
                </a>
              </div>
            </address>
            <div style={{ marginTop: '1.25rem' }}>
              <h5 className="footer__heading" style={{ fontSize: '0.78rem', marginBottom: '0.5rem' }}>Newsletter</h5>
              <form className="footer__newsletter" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Your email address" className="footer__newsletter-input" />
                <button type="submit" className="footer__newsletter-btn">→</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── Group Companies strip ─────────────────────────────────────── */}
      <div className="footer__companies">
        <div className="container">
          <p className="footer__companies-label">Group Companies:</p>
          <div className="footer__companies-list">
            {COMPANY_LINKS.map(c => (
              <Link key={c.path} to={c.path} className="footer__company-chip">{c.label}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────── */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Bombay Finance India Pvt Ltd. All rights reserved.
          </p>
          <div className="footer__legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/disclaimer">NBFC Disclaimer</Link>
          </div>
        </div>
        <div className="container footer__disclaimer">
          Bombay Finance India Pvt. Ltd. is registered as a Non-Banking Financial Company (NBFC) and
          is an RBI-approved foreign investor in India. This website is for informational purposes only
          and does not constitute financial advice. Loans are subject to credit appraisal and RBI guidelines.
        </div>
      </div>
    </footer>
  );
}
