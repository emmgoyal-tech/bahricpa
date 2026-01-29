import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grain"
      style={{
        background: 'linear-gradient(160deg, #0A1628 0%, #0F1D35 30%, #1B2A4A 60%, #0F1D35 100%)',
      }}
    >
      {/* Geometric accent — top-right gold lines */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.04]">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="500" y2="500" stroke="#C9A84C" strokeWidth="1" />
          <line x1="100" y1="0" x2="500" y2="400" stroke="#C9A84C" strokeWidth="1" />
          <line x1="200" y1="0" x2="500" y2="300" stroke="#C9A84C" strokeWidth="1" />
          <line x1="300" y1="0" x2="500" y2="200" stroke="#C9A84C" strokeWidth="1" />
          <line x1="0" y1="100" x2="400" y2="500" stroke="#C9A84C" strokeWidth="1" />
          <line x1="0" y1="200" x2="300" y2="500" stroke="#C9A84C" strokeWidth="1" />
        </svg>
      </div>

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.08]"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[13px] uppercase tracking-[0.3em] font-medium">
              Est. Great Neck, New York
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-white leading-[1.1] mb-8 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Two Decades of
            <br />
            <span className="italic text-[#C9A84C]">Trusted</span> Financial
            <br />
            Guidance
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-white/50 max-w-xl mb-12 leading-relaxed font-light"
          >
            Personalized accounting, tax strategy, and financial advisory for
            individuals and businesses who expect meticulous care and proactive counsel.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="group inline-flex items-center gap-3 bg-[#C9A84C] text-[#0F1D35] px-8 py-4 font-semibold text-[15px] uppercase tracking-wider hover:bg-[#D4BA6A] transition-all duration-300"
            >
              Schedule a Consultation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              onClick={(e) => scrollTo(e, 'services')}
              className="inline-flex items-center gap-3 border border-white/20 text-white/80 px-8 py-4 font-medium text-[15px] uppercase tracking-wider hover:border-white/40 hover:text-white transition-all duration-300"
            >
              Our Services
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-24 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '500+', label: 'Clients Served' },
            { value: '98%', label: 'Client Retention' },
            { value: '24hr', label: 'Response Time' },
          ].map((stat, i) => (
            <div key={stat.label}>
              <div
                className="text-3xl md:text-4xl font-bold text-[#C9A84C] mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </div>
              <div className="text-white/40 text-[13px] uppercase tracking-[0.15em]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF8F5] to-transparent" />
    </section>
  );
}
