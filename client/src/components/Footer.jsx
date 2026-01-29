import { FaLinkedin, FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#0A1628] text-white relative">
      {/* Gold top line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand — 5 cols */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[#C9A84C]/40 flex items-center justify-center">
                <span
                  className="text-[#C9A84C] text-lg font-bold leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  BA
                </span>
              </div>
              <div>
                <span
                  className="text-white text-lg font-semibold tracking-wide block leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Bahri Associates
                </span>
                <span className="text-[#C9A84C]/50 text-[10px] uppercase tracking-[0.25em]">
                  Certified Public Accountants
                </span>
              </div>
            </div>
            <p className="text-white/30 leading-relaxed text-[15px] max-w-sm font-light">
              Trusted financial guidance for individuals and businesses.
              Over 20 years of dedicated service in Great Neck, New York.
            </p>

            <div className="flex gap-3 mt-8">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 transition-all duration-300"
                >
                  <s.icon className="text-white/50 text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links — 3 cols */}
          <div className="md:col-span-3">
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-[#C9A84C] font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-white/40 hover:text-[#C9A84C] transition-colors duration-300 text-[15px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 4 cols */}
          <div className="md:col-span-4">
            <h4 className="text-[12px] uppercase tracking-[0.2em] text-[#C9A84C] font-semibold mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-white/40 text-[15px]">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#C9A84C]/60 flex-shrink-0 text-xs" />
                123 Main St, Great Neck, NY 11021
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#C9A84C]/60 flex-shrink-0 text-xs" />
                <a href="tel:5165550123" className="hover:text-[#C9A84C] transition-colors">
                  (516) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#C9A84C]/60 flex-shrink-0 text-xs" />
                <a href="mailto:info@bahriassociates.com" className="hover:text-[#C9A84C] transition-colors">
                  info@bahriassociates.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[13px]">
            &copy; {new Date().getFullYear()} Bahri Associates. All rights reserved.
          </p>
          <p className="text-white/20 text-[13px]">
            Great Neck, New York
          </p>
        </div>
      </div>
    </footer>
  );
}
