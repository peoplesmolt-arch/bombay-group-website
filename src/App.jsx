import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';

import Home         from './pages/Home';
import About        from './pages/About';
import Services     from './pages/Services';
import Companies    from './pages/Companies';
import Achievements from './pages/Achievements';
import News         from './pages/News';
import Careers      from './pages/Careers';
import Contact      from './pages/Contact';
import ComingSoon   from './components/ComingSoon';

import './index.css';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 0 }}>{children}</div>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <ComingSoon
      title="Page Not Found"
      icon="🔍"
      subtitle="The page you're looking for doesn't exist yet. Try navigating from the menu above."
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Main */}
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/about/*"        element={<About />} />
          <Route path="/services"       element={<Services />} />
          <Route path="/services/*"     element={<Services />} />
          <Route path="/companies"      element={<Companies />} />
          <Route path="/companies/*"    element={<Companies />} />
          <Route path="/achievements"   element={<Achievements />} />
          <Route path="/achievements/*" element={<Achievements />} />
          <Route path="/news"           element={<News />} />
          <Route path="/news/*"         element={<News />} />
          <Route path="/careers"        element={<Careers />} />
          <Route path="/careers/*"      element={<Careers />} />
          <Route path="/contact"        element={<Contact />} />
          <Route path="/contact/*"      element={<Contact />} />

          {/* Legal */}
          <Route path="/privacy"    element={<ComingSoon title="Privacy Policy"              icon="🔒" />} />
          <Route path="/terms"      element={<ComingSoon title="Terms of Use"                icon="📋" />} />
          <Route path="/disclaimer" element={<ComingSoon title="NBFC Regulatory Disclaimer"  icon="⚖️" />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
