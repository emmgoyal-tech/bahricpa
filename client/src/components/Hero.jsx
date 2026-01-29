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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1B2A4A 0%, #2a3f6e 50%, #1B2A4A 100%)',
      }}
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9A84C]" />

      <div className="max-w-6xl mx-auto px-4 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Over 20 Years of Experience.
            <br />
            <span className="text-[#C9A84C]">Unmatched Attention to Detail.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bahri Associates delivers personalized accounting, tax, and financial advisory
            services that help individuals and businesses achieve lasting financial success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="inline-block bg-[#C9A84C] text-[#1B2A4A] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#b8963f] transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="#services"
              onClick={(e) => scrollTo(e, 'services')}
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80H1440V40C1440 40 1140 0 720 0C300 0 0 40 0 40V80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
