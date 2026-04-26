import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import satpalImg      from '../assets/satpal-oberai.png';
import subramanianImg from '../assets/prof-subramanian.png';
import director3Img   from '../assets/director-3.jpg';
import './Home.css';

/* ── useInView — scroll-reveal hook ────────────────────────────────────── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.12, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── Animated counter ───────────────────────────────────────────────────── */
function useCounter(target, duration = 2200, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, active, delay = 0 }) {
  const count = useCounter(value, 2200, active);
  return (
    <div className="stat-item" style={{ animationDelay: `${delay}ms` }}>
      <span className="stat-value">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

/* ── Typewriter hook ────────────────────────────────────────────────────── */
function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx(i => i + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(i => i - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    setDisplay(word.substring(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ── Data ───────────────────────────────────────────────────────────────── */
const VERTICALS = [
  { icon: '🏦', title: 'Financial Services',    desc: 'Corporate finance, project finance, wealth management & NBFC loans across India.', path: '/services/finance',       color: '#1B4332' },
  { icon: '🏭', title: 'Manufacturing',          desc: 'Auto components, sugar production & agro-industrial manufacturing.',                path: '/services/manufacturing', color: '#2D6A4F' },
  { icon: '🏗️', title: 'Real Estate',           desc: 'Project financing and development across India, Vietnam and Dubai.',                path: '/services/real-estate',   color: '#40916C' },
  { icon: '🌴', title: 'Hospitality & Tourism',  desc: 'Resorts, hotels and world-heritage cave tourism in Vietnam.',                      path: '/services/hospitality',   color: '#52B788' },
  { icon: '🎬', title: 'Art, Cinema & Culture',  desc: 'Producing and financing Indian cinema, art and cultural initiatives.',             path: '/services/art-culture',   color: '#74C69D' },
  { icon: '🌍', title: 'International JVs',      desc: 'Joint ventures across Africa, Middle East and Southeast Asia.',                    path: '/services/international', color: '#95D5B2' },
];

const COMPANIES = [
  { name: 'Bombay Finance India Pvt Ltd',  code: 'in', path: '/companies/bombay-finance-india',     type: 'NBFC · Finance' },
  { name: 'Bombay Ace Motors India',       code: 'in', path: '/companies/bombay-ace-motors',         type: 'Mobility · Hospitality' },
  { name: 'Bombay Motors India Pvt Ltd',   code: 'in', path: '/companies/bombay-motors',             type: 'Auto Components' },
  { name: 'Bombay Fine Art Pvt Ltd',       code: 'in', path: '/companies/bombay-fine-art',           type: 'Cinema · Culture' },
  { name: 'Quasathu Investment LLC',       code: 'vn', path: '/companies/quasathu-investment-llc',   type: 'Real Estate · Vietnam' },
  { name: 'Quasathu Tourism LLC',          code: 'vn', path: '/companies/quasathu-tourism',          type: 'Tourism · Vietnam' },
  { name: 'Bombay Group Liberia Ltd',      code: 'lr', path: '/companies/bombay-group-liberia',      type: 'Sugar · Energy · Manufacturing' },
  { name: 'Bombay Group Botswana',         code: 'bw', path: '/companies/bombay-group-botswana',     type: 'Finance · Mining' },
  { name: 'Bombay Trading LLC',            code: 'ae', path: '/companies/bombay-trading',            type: 'Real Estate · Dubai' },
  { name: 'Quasathu Investment LLP',       code: 'in', path: '/companies/quasathu-investment-llp',   type: 'India–Vietnam Corridor' },
];

const NEWS = [
  { date: 'Sept 3, 2020', category: 'International', title: 'Letter of Intent Signed for Purchase of Gold',            excerpt: 'Bombay Finance India signs LOI to purchase gold from ImpTrax Corporation — expanding its asset portfolio into high-value international commodity trade.',                                                                    path: '/news' },
  { date: 'Nov 6, 2017',  category: 'Government',    title: "Jharkhand Acknowledges Bombay Finance India's ECB Initiative", excerpt: 'Formal correspondence exchanged between the Government of Jharkhand and Managing Director Mr. Satpal Singh Oberai in recognition of ECB-linked development efforts.',                               path: '/news' },
  { date: 'July 15, 2016',category: 'International', title: 'MoU Signed with United Refineries Botswana',              excerpt: 'A landmark cross-border MoU between URB and BFI marking a significant milestone in international collaboration and the Group\'s African expansion.',                                                             path: '/news' },
];

const ACHIEVEMENTS = [
  { icon: '📜', label: 'NBFC Registration', sub: 'Form I-A Certified' },
  { icon: '🏛️', label: 'RBI Approved',      sub: 'Foreign Investor in India' },
  { icon: '🤝', label: '5+ MoUs Signed',    sub: 'Africa, Asia, Middle East' },
  { icon: '🌐', label: '4 Continents',       sub: 'Global operational presence' },
  { icon: '💰', label: '$550M+ Pipeline',    sub: 'Vietnam JV alone' },
  { icon: '🏭', label: 'Niphad Sugar',       sub: 'Pride acquisition — Maharashtra' },
];

const TEAM = [
  { name: 'Mr. Satpal Singh Oberai',            title: 'Founder & Managing Director', bio: 'Mechanical Engineer with 30+ years of expertise in financial services. Architect of Bombay Group\'s global expansion across finance, manufacturing, and real estate.', photo: satpalImg,       path: '/about/team' },
  { name: 'Prof. Sankaranarayanan Subramanian', title: 'Independent Director',         bio: 'Former Senior Executive at RBI and RBI Nominee Director at Murshidabad Gramin Bank. Expert in funding strategy, capital structuring and regulatory compliance.',           photo: subramanianImg, path: '/about/team' },
  { name: 'Mrs. Nisha Oberai',                  title: 'HR & Administration Director', bio: 'Mumbai University graduate with extensive experience in Human Resources, administration and organisational culture across multiple business verticals.',                     photo: director3Img,   path: '/about/team' },
];

const TYPEWORDS = ['Creating Impact', 'Building Wealth', 'Connecting the World', 'Financing Growth'];

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════════════ */
export default function Home() {
  const statsRef         = useRef(null);
  const [statsOn, setStats] = useState(false);
  const typed            = useTypewriter(TYPEWORDS, 75, 1800);

  /* scroll progress bar */
  const [scrollPct, setScrollPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(pct);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* stats counter trigger */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStats(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  /* section reveal refs */
  const [whoRef,    whoVis]    = useInView();
  const [vertRef,   vertVis]   = useInView();
  const [compRef,   compVis]   = useInView();
  const [achRef,    achVis]    = useInView();
  const [leaderRef, leaderVis] = useInView();
  const [newsRef,   newsVis]   = useInView();
  const [ctaRef,    ctaVis]    = useInView();

  return (
    <main className="home">

      {/* ─── SCROLL PROGRESS BAR ───────────────────────────────────────── */}
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />

      {/* ═══════════════════════════════════════════════════════════════════
          1 · HERO — redesigned split layout + particles
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="hero">
        {/* Animated particle dots */}
        <div className="hero__particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top:  `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }} />
          ))}
        </div>

        {/* Decorative grid lines */}
        <div className="hero__grid-lines" />

        <div className="container hero__inner">
          {/* Left — copy */}
          <div className="hero__left">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              RBI Approved NBFC · Est. 2000 · 4 Continents
            </div>

            <h1 className="hero__title">
              <span className="hero__title-line hero__title-line--1">Bombay Group —</span>
              <span className="hero__title-line hero__title-line--2">
                <span className="hero__typed">{typed}</span>
                <span className="hero__cursor">|</span>
              </span>
            </h1>

            <p className="hero__desc">
              A diversified global conglomerate delivering corporate finance, real estate,
              manufacturing, hospitality &amp; international joint ventures — across India,
              Africa, Southeast Asia &amp; the Middle East.
            </p>

            <div className="hero__ctas">
              <Link to="/contact/finance-enquiry" className="btn btn-hero-primary">
                <span>Apply for Finance</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link to="/companies" className="btn btn-hero-outline">
                Explore Companies
              </Link>
            </div>

            {/* Trust badges row */}
            <div className="hero__trust">
              {['✓ RBI Approved', '✓ NBFC Registered', '✓ ISO Compliant', '✓ Make in India'].map((t, i) => (
                <span key={i} className="hero__trust-item">{t}</span>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2 · STATS STRIP
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="stats" ref={statsRef}>
        <div className="container stats__grid">
          <StatItem value={10}  suffix="+"  label="Group Companies"          active={statsOn} delay={0}   />
          <StatItem value={4}   suffix=""   label="Continents"               active={statsOn} delay={100} />
          <StatItem value={550} suffix="M+" label="USD Investment Pipeline"  active={statsOn} delay={200} />
          <StatItem value={25}  suffix="+"  label="Years of Operations"      active={statsOn} delay={300} />
          <StatItem value={14}  suffix="+"  label="International Agreements" active={statsOn} delay={400} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          3 · WHO WE ARE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className={`section who-we-are reveal ${whoVis ? 'revealed' : ''}`} ref={whoRef}>
        <div className="container who-we-are__inner">
          <div className="who-we-are__text reveal-left">
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="section-title">A Conglomerate Built on<br />Integrity &amp; Vision</h2>
            <div className="gold-line gold-line--anim" />
            <p className="who-we-are__desc">
              Bombay Group is a diversified conglomerate founded by Mr. Satpal Singh Oberai and Prof. Sankaranarayanan Subramanian.
              Through our NBFC platform, we deliver structured credit and drive efficient capital deployment across infrastructure
              and allied sectors, enabling sustainable wealth creation.
            </p>
            <p className="who-we-are__desc" style={{ marginTop: '1rem' }}>
              RBI-approved foreign investors in India, committed to the <strong>Make in India</strong> vision —
              promoting dynamic individuals &amp; corporates who dream to prosper and build the nation.
            </p>
            <div className="who-we-are__badges">
              {[['🏛️', 'RBI-Approved Foreign Investor'], ['📜', 'NBFC Registered'], ['🇮🇳', 'Make in India Partner']].map(([icon, text]) => (
                <div key={text} className="who-badge">
                  <span className="who-badge__icon">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-dark btn-arrow" style={{ marginTop: '1.5rem' }}>
              Learn More About Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
          <div className="who-we-are__visual reveal-right">
            {[
              { header: 'Our Mission', body: 'To be a leading and responsible financial solutions partner of choice for emerging India.', gold: false },
              { header: 'Our Values', list: ['✦ Customer First', '✦ Quality Focus', '✦ Professionalism', '✦ Integrity'], gold: true },
            ].map(({ header, body, list, gold }) => (
              <div key={header} className={`who-visual-card ${gold ? 'who-visual-card--gold' : ''}`}>
                <div className="who-visual-card__header">{header}</div>
                {body && <p className="who-visual-card__body">{body}</p>}
                {list && <ul className="who-visual-card__list">{list.map(l => <li key={l}>{l}</li>)}</ul>}
              </div>
            ))}
            <div className="who-visual-map">
              <p className="who-visual-map__title">Global Presence</p>
              <div className="who-visual-locations">
                {['🇮🇳 India', '🇻🇳 Vietnam', '🇧🇼 Botswana', '🇱🇷 Liberia', '🇦🇪 Dubai', '🌍 Central Africa'].map(loc => (
                  <span key={loc} className="location-chip">{loc}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          4 · BUSINESS VERTICALS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className={`section verticals reveal ${vertVis ? 'revealed' : ''}`} ref={vertRef} style={{ background: 'var(--silver-light)' }}>
        <div className="container">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-title">Our Business Verticals</h2>
          <div className="gold-line gold-line--anim" />
          <p className="section-subtitle">Six high-impact sectors, one unified Group — delivering diversified, resilient returns across economic cycles.</p>
          <div className="verticals__grid">
            {VERTICALS.map((v, i) => (
              <Link key={v.title} to={v.path} className="vertical-card stagger-item" style={{ '--stagger': i }}>
                <div className="vertical-card__accent" style={{ background: v.color }} />
                <div className="vertical-card__icon" style={{ background: v.color }}>{v.icon}</div>
                <h3 className="vertical-card__title">{v.title}</h3>
                <p className="vertical-card__desc">{v.desc}</p>
                <span className="vertical-card__arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          5 · OUR COMPANIES
      ═══════════════════════════════════════════════════════════════════ */}
      <section className={`section companies-section reveal ${compVis ? 'revealed' : ''}`} ref={compRef}>
        <div className="container">
          <p className="section-eyebrow">Group Portfolio</p>
          <h2 className="section-title">Our Companies</h2>
          <div className="gold-line gold-line--anim" />
          <p className="section-subtitle">10 entities spanning India, Vietnam, Africa and the Middle East — each contributing to a diversified and resilient ecosystem.</p>
          <div className="companies__grid">
            {COMPANIES.map((c, i) => (
              <Link key={c.path} to={c.path} className="company-card stagger-item" style={{ '--stagger': i }}>
                <span className={`fi fi-${c.code} company-card__flag`}></span>
                <div>
                  <div className="company-card__name">{c.name}</div>
                  <div className="company-card__type">{c.type}</div>
                </div>
                <span className="company-card__arrow">›</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/companies" className="btn btn-dark btn-arrow">
              View All Companies
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          6 · ACHIEVEMENTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className={`section achievements-section reveal ${achVis ? 'revealed' : ''}`} ref={achRef}>
        <div className="ach-bg-glow" />
        <div className="container">
          <p className="section-eyebrow">Track Record</p>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Key Achievements &amp; Credentials</h2>
          <div className="gold-line gold-line--anim" />
          <div className="achievements__grid">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={a.label} className="achievement-card stagger-item" style={{ '--stagger': i }}>
                <span className="achievement-card__icon">{a.icon}</span>
                <div className="achievement-card__label">{a.label}</div>
                <div className="achievement-card__sub">{a.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/achievements" className="btn btn-outline">View All Achievements ›</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          7 · LEADERSHIP
      ═══════════════════════════════════════════════════════════════════ */}
      <section className={`section leadership-section reveal ${leaderVis ? 'revealed' : ''}`} ref={leaderRef}>
        <div className="container">
          <p className="section-eyebrow">Our People</p>
          <h2 className="section-title">Leadership Team</h2>
          <div className="gold-line gold-line--anim" />
          <div className="leadership__grid">
            {TEAM.map((m, i) => (
              <div key={m.name} className="leader-card stagger-item" style={{ '--stagger': i }}>
                <div className="leader-card__photo-wrap">
                  <img src={m.photo} alt={m.name} className="leader-card__photo" />
                  <div className="leader-card__photo-overlay">
                    <Link to={m.path} className="leader-card__overlay-btn">View Profile →</Link>
                  </div>
                </div>
                <div className="leader-card__body">
                  <div className="leader-card__name">{m.name}</div>
                  <div className="leader-card__title">{m.title}</div>
                  <p className="leader-card__bio">{m.bio}</p>
                  <Link to={m.path} className="leader-card__link">View Profile →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          8 · NEWS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className={`section news-section reveal ${newsVis ? 'revealed' : ''}`} ref={newsRef}>
        <div className="container">
          <div className="news__header">
            <div>
              <p className="section-eyebrow">Latest Updates</p>
              <h2 className="section-title">News &amp; Media</h2>
              <div className="gold-line gold-line--anim" />
            </div>
            <Link to="/news" className="btn btn-dark">View All News ›</Link>
          </div>
          <div className="news__grid">
            {NEWS.map((n, i) => (
              <Link key={i} to={n.path} className="news-card stagger-item" style={{ '--stagger': i }}>
                <div className="news-card__top-bar" />
                <div className="news-card__meta">
                  <span className="news-card__cat">{n.category}</span>
                  <span className="news-card__date">{n.date}</span>
                </div>
                <h3 className="news-card__title">{n.title}</h3>
                <p className="news-card__excerpt">{n.excerpt}</p>
                <span className="news-card__read">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '4px' }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          9 · FINANCE ENQUIRY CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className={`enquiry-cta reveal ${ctaVis ? 'revealed' : ''}`} ref={ctaRef}>
        <div className="enquiry-cta__bg-pattern" />
        <div className="container enquiry-cta__inner">
          <div className="enquiry-cta__text reveal-left">
            <div className="enquiry-cta__badge">💼 Finance Enquiry</div>
            <h2 className="enquiry-cta__title">Ready to Finance Your Next Big Project?</h2>
            <p className="enquiry-cta__desc">
              Submit a quick enquiry and our team will reach out within 24 hours.
              Secured &amp; unsecured loans available across India.
            </p>
            <div className="enquiry-cta__contact">
              <div className="enquiry-contact-item">
                <span>📞</span>
                <span>91-22-20876788</span>
              </div>
              <div className="enquiry-contact-item">
                <span>📧</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <a href="mailto:contactus@bombayfinanceindia.com">contactus@bombayfinanceindia.com</a>
                  <a href="mailto:bombayfinanceindia@gmail.com">bombayfinanceindia@gmail.com</a>
                </div>
              </div>
              <div className="enquiry-contact-item">
                <span>📍</span>
                <span>Sector 15, CBD Belapur, Navi Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
          <form className="enquiry-cta__form reveal-right" onSubmit={e => e.preventDefault()}>
            <div className="enquiry-form-group">
              <input type="text"  placeholder="Your Full Name"   className="enquiry-input" required />
              <input type="tel"   placeholder="Phone Number"     className="enquiry-input" />
            </div>
            <div className="enquiry-form-group">
              <input type="email" placeholder="Email Address"    className="enquiry-input" />
              <select className="enquiry-input">
                <option value="">Select Loan Type</option>
                <option>Corporate Finance</option>
                <option>Project Finance</option>
                <option>Real Estate Mortgage</option>
                <option>Working Capital</option>
                <option>NBFC Loan</option>
                <option>Other</option>
              </select>
            </div>
            <textarea className="enquiry-input enquiry-textarea" placeholder="Brief description of your requirement (optional)" rows={3} />
            <button type="submit" className="btn btn-hero-primary enquiry-btn">
              <span>Submit Enquiry</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
