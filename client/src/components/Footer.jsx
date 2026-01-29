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
    <footer id="footer" className="bg-[#1B2A4A] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bahri Associates
            </h3>
            <p className="text-white/60 leading-relaxed">
              Trusted financial guidance for individuals and businesses. Over 20 years of dedicated
              service in Great Neck, New York.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#C9A84C] mb-4 uppercase tracking-wide text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-white/60 hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#C9A84C] mb-4 uppercase tracking-wide text-sm">
              Contact
            </h4>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-[#C9A84C] flex-shrink-0" />
                123 Main St, Great Neck, NY 11021
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-[#C9A84C] flex-shrink-0" />
                <a href="tel:5165550123" className="hover:text-[#C9A84C] transition-colors">
                  (516) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#C9A84C] flex-shrink-0" />
                <a
                  href="mailto:info@bahriassociates.com"
                  className="hover:text-[#C9A84C] transition-colors"
                >
                  info@bahriassociates.com
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A84C] transition-colors"
                >
                  <s.icon className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Bahri Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
