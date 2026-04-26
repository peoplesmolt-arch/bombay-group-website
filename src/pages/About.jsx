import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import satpalImg      from '../assets/satpal-oberai.png';
import subramanianImg from '../assets/prof-subramanian.png';
import './About.css';

function useInView(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const ACHIEVEMENTS = [
  {
    title: 'Certificate of Incorporation — Bombay Finance India Pvt Ltd',
    desc: 'Official incorporation of Bombay Finance India Private Limited, certified by the Government of India.',
    img: 'https://www.bombayfinanceindia.com/assets/company-registration.jpg',
    links: [{ label: 'View Document', href: 'https://www.bombayfinanceindia.com/news-details12.jsp' }],
    badge: '📜 Official Certificate',
  },
  {
    title: 'Form I-A: Certificate of Registration',
    desc: 'Bombay Finance India Private Limited has officially been issued the Form I-A Certificate of Registration as an NBFC.',
    img: 'https://www.bombayfinanceindia.com/assets/trust.jpg',
    links: [{ label: 'View Document', href: 'https://www.bombayfinanceindia.com/news-details13.jsp' }],
    badge: '🏦 NBFC Registration',
  },
  {
    title: 'Income Tax Return Certificates',
    desc: 'Certified ITR documents for both the company and its founding director, affirming full regulatory compliance.',
    img: 'https://www.bombayfinanceindia.com/assets/ITR%20LOGO.jpg',
    links: [
      { label: 'Company ITR', href: 'https://www.bombayfinanceindia.com/news-details17.jsp' },
      { label: 'Mr. Satpal Singh Oberai ITR', href: 'https://www.bombayfinanceindia.com/news-details16.jsp' },
    ],
    badge: '📊 Tax Compliance',
  },
  {
    title: 'Legal Entity Identifier (LEI) Certificate',
    desc: 'Globally recognised LEI registration confirming Bombay Finance India as a verified legal entity in international finance.',
    img: 'https://www.bombayfinanceindia.com/assets/Legal%20Reg%20certificates.jpg',
    links: [{ label: 'View Certificate', href: 'https://www.bombayfinanceindia.com/news-details18.jsp' }],
    badge: '🌐 Global Recognition',
  },
  {
    title: 'Goods and Services Tax (GST) Certificate',
    desc: 'GST registration certificate demonstrating full compliance with India\'s indirect tax regime.',
    img: 'https://www.bombayfinanceindia.com/assets/GSTCERTIFICATE.jpg',
    links: [{ label: 'View Certificate', href: 'https://www.bombayfinanceindia.com/news-details20.jsp' }],
    badge: '🧾 Tax Registered',
  },
  {
    title: "Government of Jharkhand Acknowledges Bombay Finance India's ECB Initiative",
    desc: 'Formal correspondence exchanged between the Government of Jharkhand and Managing Director Mr. Satpal Singh Oberai in recognition of ECB-linked development efforts.',
    img: 'https://www.bombayfinanceindia.com/assets/jharkhand.jpg',
    links: [{ label: 'Read More', href: 'https://www.bombayfinanceindia.com/news-details11.jsp' }],
    badge: '🏛️ Government Recognition',
  },
  {
    title: 'Presence Across Various Countries',
    desc: 'Bombay Finance India\'s established presence across multiple locations in India and internationally, spanning 4 continents.',
    img: 'https://www.bombayfinanceindia.com/assets/worldmap.jpg',
    links: [{ label: 'Read More', href: 'https://www.bombayfinanceindia.com/news-details14.jsp' }],
    badge: '🌍 Global Footprint',
  },
  {
    title: 'Quasathu LLC — Official Investment Registration',
    desc: 'Quasathu LLC is officially registered as an investment entity, cementing the Group\'s footprint in Vietnam\'s real estate and tourism sectors.',
    img: 'https://www.bombayfinanceindia.com/assets/llc.jpg',
    links: [{ label: 'Read More', href: 'https://www.bombayfinanceindia.com/news-details9.jsp' }],
    badge: '🇻🇳 Vietnam JV',
  },
  {
    title: 'MoU Signed between United Refineries Botswana (URB) and Bombay Finance India',
    desc: 'A landmark cross-border MoU signed on July 15, 2016, marking a significant milestone in international collaboration and the Group\'s African expansion.',
    img: 'https://www.bombayfinanceindia.com/assets/bgll.png',
    links: [{ label: 'Read More', href: 'https://www.bombayfinanceindia.com/news-details7.jsp' }],
    badge: '🤝 Botswana MoU',
  },
  {
    title: 'Heads of Agreement — Malaika Investments Inc & Bombay Finance India',
    desc: 'MII aims to establish a state-of-the-art sugar refinery in Liberia, with subsequent expansion plans targeting Nigeria and the broader West African region.',
    img: 'https://www.bombayfinanceindia.com/assets/about5.jpg',
    links: [{ label: 'Read More', href: 'https://www.bombayfinanceindia.com/news-details5.jsp' }],
    badge: '🇱🇷 Liberia Expansion',
  },
  {
    title: 'Official Invitation from the Central African Republic — Bangui',
    desc: 'Bombay Finance India Pvt Ltd is honoured to have received an official invitation from the Central African Republic, further extending its diplomatic and investment reach.',
    img: 'https://www.bombayfinanceindia.com/assets/about6.jpg',
    links: [{ label: 'Read More', href: 'https://www.bombayfinanceindia.com/news-details4.jsp' }],
    badge: '🌍 Central Africa',
  },
  {
    title: 'Strategic Bilateral Engagement',
    desc: 'High-level bilateral meetings and diplomatic engagements reflecting the Group\'s commitment to building international partnerships.',
    img: 'https://www.bombayfinanceindia.com/assets/about2.jpg',
    links: [{ label: 'Read More', href: 'https://www.bombayfinanceindia.com/news-details6.jsp' }],
    badge: '🤝 Diplomacy',
  },
  {
    title: 'NIPHAD Sugar Factory — Pride Acquisition',
    desc: 'Bombay Finance India successfully acquired Niphad Sahakari Sakhar Karkhana Ltd — an integrated sugar unit in Maharashtra, the only standalone multi-by-product sugar factory in the region.',
    img: 'https://www.bombayfinanceindia.com/assets/about3.jpg',
    links: [{ label: 'Read More', href: 'https://www.bombayfinanceindia.com/news-details2.jsp' }],
    badge: '🏭 Manufacturing',
  },
  {
    title: 'IMSR — Medical Science & Research',
    desc: 'Shri Chhatrapati Shivaji Education Society, established in 1992, partnered with Bombay Group to offer comprehensive medical education with modern facilities and clinical training.',
    img: 'https://www.bombayfinanceindia.com/assets/about5.jpg',
    links: [{ label: 'Read More', href: 'https://www.bombayfinanceindia.com/news-details3.jsp' }],
    badge: '🏥 Healthcare',
  },
  {
    title: 'Enhancing Foreign Relations — Vietnam',
    desc: 'Mr. Satpal Singh Oberai held a successful event about the $550M+ Vietnam project with Mr. Vu Son Thuy, Consulate General of the Socialist Republic of Vietnam.',
    img: 'https://www.bombayfinanceindia.com/assets/about6.jpg',
    links: [{ label: 'Read More', href: 'https://www.bombayfinanceindia.com/news-details1.jsp' }],
    badge: '🇻🇳 Vietnam',
  },
];

const VALUES = [
  { icon: '👥', title: 'Customer First', desc: 'We exist and prosper only because of our customers. We always respond to changing needs speedily, courteously and effectively.' },
  { icon: '⭐', title: 'Quality Focus', desc: 'We make quality a driving value in our work, our products and interactions. We believe in "Right the First Time".' },
  { icon: '💼', title: 'Professionalism', desc: 'We seek the best people and give them freedom and opportunity to grow. We support innovation, well-reasoned risk-taking and demand performance.' },
  { icon: '🤝', title: 'Integrity', desc: 'We conduct our business with the highest ethical standards, building trust with every stakeholder across all our global operations.' },
];

const STATS = [
  { num: '25+', label: 'Years of Excellence', sub: 'Est. 2000' },
  { num: '10+', label: 'Group Companies', sub: 'Across 4 continents' },
  { num: '$550M+', label: 'Investment Pipeline', sub: 'Vietnam JV & Beyond' },
  { num: '4', label: 'Continents', sub: 'India · Africa · Asia · Middle East' },
];

export default function About() {
  const [heroRef, heroVis]     = useInView();
  const [missionRef, missionVis] = useInView();
  const [teamRef, teamVis]     = useInView();
  const [achRef, achVis]       = useInView();
  const [valRef, valVis]       = useInView();

  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero__overlay" />
        <div className="container about-hero__inner" ref={heroRef}>
          <p className="about-eyebrow">About Bombay G₹oup</p>
          <h1 className="about-hero__title">A Conglomerate Built on<br /><span className="about-hero__gold">Integrity &amp; Vision</span></h1>
          <p className="about-hero__sub">
            Two decades of building wealth, creating impact, and connecting the world — across India, Africa, Southeast Asia and the Middle East.
          </p>
          <div className="about-hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="about-hero__stat">
                <div className="about-hero__stat-num">{s.num}</div>
                <div className="about-hero__stat-label">{s.label}</div>
                <div className="about-hero__stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section about-who" ref={missionRef}>
        <div className={`container about-who__grid reveal ${missionVis ? 'revealed' : ''}`}>
          <div className="about-who__text">
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Building Wealth,<br />Creating Impact</h2>
            <div className="gold-line" />
            <p className="about-who__desc">
              Bombay Group is a diversified conglomerate founded by <strong>Mr. Satpal Singh Oberai</strong> and <strong>Prof. Sankaranarayanan Subramanian</strong>. Through our NBFC platform, we deliver structured credit and drive efficient capital deployment across infrastructure and allied sectors, enabling sustainable wealth creation.
            </p>
            <p className="about-who__desc">
              RBI-approved foreign investors in India, committed to the <strong>Make in India</strong> vision — promoting dynamic individuals &amp; corporates who dream to prosper and build the nation.
            </p>
            <p className="about-who__desc">
              It has been many years since the Bombay Group is engaged with many foreign projects. With the great success of all projects, today we are proud to be the foreign investors in India as approved by the Reserve Bank Of India (RBI).
            </p>
            <div className="about-who__badges">
              {[['🏛️', 'RBI-Approved Foreign Investor'], ['📜', 'NBFC Registered'], ['🇮🇳', 'Make in India Partner'], ['🌍', '4 Continents']].map(([icon, text]) => (
                <div key={text} className="about-badge">
                  <span>{icon}</span><span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-who__cards">
            <div className="about-mission-card about-mission-card--dark">
              <div className="about-mission-card__label">OUR MISSION</div>
              <p className="about-mission-card__text">To be a leading and responsible financial solutions partner of choice for emerging India.</p>
            </div>
            <div className="about-mission-card about-mission-card--gold">
              <div className="about-mission-card__label">OUR VALUES</div>
              <ul className="about-mission-card__list">
                {['✦ Customer First', '✦ Quality Focus', '✦ Professionalism', '✦ Integrity'].map(v => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
            <div className="about-presence-card">
              <div className="about-presence-card__label">GLOBAL PRESENCE</div>
              <div className="about-presence-card__flags">
                {[
                  { code: 'in', name: 'India' },
                  { code: 'vn', name: 'Vietnam' },
                  { code: 'bw', name: 'Botswana' },
                  { code: 'lr', name: 'Liberia' },
                  { code: 'ae', name: 'Dubai' },
                ].map(c => (
                  <span key={c.code} className="about-presence-chip">
                    <span className={`fi fi-${c.code}`} style={{ width: 20, height: 14, borderRadius: 2 }}></span>
                    {c.name}
                  </span>
                ))}
                <span className="about-presence-chip">🌍 Central Africa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="section about-values" ref={valRef}>
        <div className="container">
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>What Drives Us</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Our Core Values</h2>
          <div className="gold-line gold-line--center" />
          <div className={`about-values__grid reveal ${valVis ? 'revealed' : ''}`}>
            {VALUES.map((v, i) => (
              <div key={v.title} className="about-value-card" style={{ '--i': i }}>
                <div className="about-value-card__icon">{v.icon}</div>
                <h3 className="about-value-card__title">{v.title}</h3>
                <p className="about-value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="section about-team" ref={teamRef}>
        <div className="container">
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>The People Behind the Vision</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Leadership Team</h2>
          <div className="gold-line gold-line--center" />
          <div className={`about-team__grid reveal ${teamVis ? 'revealed' : ''}`}>
            <div className="about-leader-card">
              <div className="about-leader-card__img-wrap">
                <img src={satpalImg} alt="Satpal Singh Oberai" className="about-leader-card__img" />
              </div>
              <div className="about-leader-card__body">
                <h3 className="about-leader-card__name">Mr. Satpal Singh Oberai</h3>
                <p className="about-leader-card__role">Founder &amp; Managing Director</p>
                <p className="about-leader-card__bio">
                  Mr. Oberai is the driving force behind Bombay Group's global expansion, personally overseeing investment projects across Vietnam, Africa, the Middle East and India. Under his leadership, the Group has grown into a multi-continental conglomerate with a $550M+ investment pipeline and RBI-approved foreign investor status.
                </p>
              </div>
            </div>
            <div className="about-leader-card">
              <div className="about-leader-card__img-wrap">
                <img src={subramanianImg} alt="Prof. Sankaranarayanan Subramanian" className="about-leader-card__img" />
              </div>
              <div className="about-leader-card__body">
                <h3 className="about-leader-card__name">Prof. Sankaranarayanan Subramanian</h3>
                <p className="about-leader-card__role">Co-Founder &amp; Strategic Advisor</p>
                <p className="about-leader-card__bio">
                  Prof. Subramanian brings deep academic and strategic expertise to the Group. His vision for responsible finance and structured wealth management has shaped Bombay Group's NBFC platform, ensuring compliance, governance and sustainable growth across all verticals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="section about-achievements" ref={achRef}>
        <div className="container">
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>Milestones &amp; Certifications</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Our Achievements</h2>
          <div className="gold-line gold-line--center" />
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Original documents, certificates and milestones — verified and sourced from official records.
          </p>
          <div className={`about-ach__grid reveal ${achVis ? 'revealed' : ''}`}>
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} className="about-ach-card" style={{ '--i': i }}>
                <div className="about-ach-card__img-wrap">
                  <img src={a.img} alt={a.title} className="about-ach-card__img" />
                  <span className="about-ach-card__badge">{a.badge}</span>
                </div>
                <div className="about-ach-card__body">
                  <h3 className="about-ach-card__title">{a.title}</h3>
                  {a.desc && <p className="about-ach-card__desc">{a.desc}</p>}
                  <div className="about-ach-card__links">
                    {a.links.map(l => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="about-ach-card__link">
                        {l.label} →
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2 className="about-cta__title">Ready to Partner with Bombay G₹oup?</h2>
          <p className="about-cta__sub">Explore financing opportunities or connect with our leadership team.</p>
          <div className="about-cta__btns">
            <Link to="/contact/finance-enquiry" className="btn btn-primary">Apply for Finance</Link>
            <Link to="/contact" className="btn btn-outline-light">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
