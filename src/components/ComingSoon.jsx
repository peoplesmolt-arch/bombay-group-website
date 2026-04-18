import { Link } from 'react-router-dom';
import './ComingSoon.css';

export default function ComingSoon({ title, subtitle, icon = '🏗️' }) {
  return (
    <main className="coming-soon">
      <div className="container coming-soon__inner">
        <span className="coming-soon__icon">{icon}</span>
        <h1 className="coming-soon__title">{title}</h1>
        {subtitle && <p className="coming-soon__sub">{subtitle}</p>}
        <div className="coming-soon__badge">
          <span className="pulse-dot" />
          Coming Soon — Building this page next
        </div>
        <div className="coming-soon__actions">
          <Link to="/" className="btn btn-dark">← Back to Home</Link>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
