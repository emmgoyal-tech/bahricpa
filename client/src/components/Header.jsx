import { useState, useEffect } from 'react';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => document.getElementById(l.href.slice(1))).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1B2A4A] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
        <a
          href="#home"
          onClick={(e) => scrollTo(e, '#home')}
          className="text-white font-bold text-xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Bahri Associates
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-[#C9A84C]'
                  : 'text-white/80 hover:text-[#C9A84C]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:5165550123"
            className="flex items-center gap-2 bg-[#C9A84C] text-[#1B2A4A] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#b8963f] transition-colors"
          >
            <FaPhone className="text-xs" />
            (516) 555-0123
          </a>
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-20 right-0 h-[calc(100vh-5rem)] w-72 bg-[#1B2A4A] shadow-2xl transform transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`text-lg font-medium py-2 border-b border-white/10 ${
                activeSection === link.href.slice(1)
                  ? 'text-[#C9A84C]'
                  : 'text-white/80 hover:text-[#C9A84C]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:5165550123"
            className="flex items-center justify-center gap-2 bg-[#C9A84C] text-[#1B2A4A] px-4 py-3 rounded-lg font-semibold mt-4"
          >
            <FaPhone className="text-xs" />
            (516) 555-0123
          </a>
        </nav>
      </div>
    </header>
  );
}
