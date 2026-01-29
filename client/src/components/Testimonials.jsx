import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

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
    <section id="testimonials" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            Hear from the individuals and businesses who trust us with their financial future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 relative"
            >
              <FaQuoteLeft className="text-[#C9A84C] text-3xl mb-4 opacity-30" />
              <p className="text-[#2D2D2D] leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex text-[#C9A84C] gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>
              <p className="font-semibold text-[#1B2A4A]">{t.name}</p>
              <p className="text-sm text-[#6B7280]">{t.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
