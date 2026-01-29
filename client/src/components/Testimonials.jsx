import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    quote:
      'Punit and his team completely transformed how we manage our finances. Their proactive tax planning saved our small business thousands of dollars in the first year alone.',
    name: 'Sarah M.',
    title: 'Small Business Owner',
  },
  {
    quote:
      'After years of filing taxes myself, I finally trusted a CPA with my finances. Bahri Associates made the entire process seamless and uncovered deductions I never knew existed.',
    name: 'David L.',
    title: 'Healthcare Professional',
  },
  {
    quote:
      'The level of personal attention we receive is remarkable. Punit treats our family finances as if they were his own. I recommend Bahri Associates to everyone I know.',
    name: 'Priya K.',
    title: 'Real Estate Investor',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#C9A84C] text-[13px] uppercase tracking-[0.3em] font-medium">
            Testimonials
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0F1D35] mt-4 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Voices of <span className="italic">Trust</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white p-10 border border-[#E8E4DE] relative group hover:shadow-[0_8px_40px_rgba(15,29,53,0.06)] transition-all duration-500"
            >
              {/* Large decorative quote mark */}
              <div
                className="absolute top-6 right-8 text-7xl font-bold text-[#C9A84C]/[0.07] leading-none select-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex text-[#C9A84C] gap-1 mb-6 text-sm">
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[#0F1D35] leading-[1.8] mb-8 text-[16px] italic font-light relative z-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "{t.quote}"
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#E8E4DE]">
                <div className="w-10 h-10 bg-[#0F1D35] flex items-center justify-center text-[#C9A84C] text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#0F1D35] text-[15px]">{t.name}</p>
                  <p className="text-[#8A8A8A] text-[13px]">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
