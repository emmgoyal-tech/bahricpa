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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0F1D35]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.15)]'
          : 'bg-transparent'
      }`}
    >
      {/* Top gold accent line */}
      <div className="h-[2px] gold-shimmer" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <a
          href="#home"
          onClick={(e) => scrollTo(e, '#home')}
          className="flex items-center gap-3 group"
        >
          {/* Monogram mark */}
          <div className="w-10 h-10 border border-[#C9A84C]/60 rounded flex items-center justify-center group-hover:border-[#C9A84C] transition-colors duration-300">
            <span
              className="text-[#C9A84C] text-lg font-bold leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              BA
            </span>
          </div>
          <div className="hidden sm:block">
            <span
              className="text-white text-lg font-semibold tracking-wide block leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bahri Associates
            </span>
            <span className="text-[#C9A84C]/70 text-[10px] uppercase tracking-[0.25em] font-medium">
              Certified Public Accountants
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`relative px-4 py-2 text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-[#C9A84C]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-[#C9A84C]" />
              )}
            </a>
          ))}
          <div className="w-[1px] h-8 bg-white/15 mx-3" />
          <a
            href="tel:5165550123"
            className="flex items-center gap-2 bg-[#C9A84C] text-[#0F1D35] px-5 py-2.5 font-semibold text-[13px] uppercase tracking-wider hover:bg-[#D4BA6A] transition-all duration-300"
          >
            <FaPhone className="text-[10px]" />
            (516) 555-0123
          </a>
        </nav>

        <button
          className="lg:hidden text-white text-xl p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-[#0F1D35]/98 backdrop-blur-lg transform transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-white text-2xl"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-2 px-6 -mt-12 min-h-[60vh]">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className={`text-2xl font-light tracking-wide py-3 transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-[#C9A84C]'
                  : 'text-white/60 hover:text-white'
              }`}
              style={{
                fontFamily: "'Playfair Display', serif",
                transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms',
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:5165550123"
            className="flex items-center gap-3 bg-[#C9A84C] text-[#0F1D35] px-8 py-4 font-semibold text-sm uppercase tracking-wider mt-6 hover:bg-[#D4BA6A] transition-colors"
          >
            <FaPhone className="text-xs" />
            (516) 555-0123
          </a>
        </nav>
      </div>
    </header>
  );
}
