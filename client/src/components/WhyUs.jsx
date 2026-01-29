import { motion } from 'framer-motion';
import { FaAward, FaCogs, FaLightbulb, FaComments } from 'react-icons/fa';

const reasons = [
  {
    icon: FaAward,
    number: '01',
    title: '20 Years of Expertise',
    description:
      'Two decades of hands-on experience across industries means we have seen it all and know how to navigate even the most complex financial challenges.',
  },
  {
    icon: FaCogs,
    number: '02',
    title: 'Tailored Solutions',
    description:
      'We never take a one-size-fits-all approach. Every strategy is custom-built around your specific goals, circumstances, and risk tolerance.',
  },
  {
    icon: FaLightbulb,
    number: '03',
    title: 'Proactive Planning',
    description:
      'We do not wait for tax season to think about your finances. Year-round proactive planning ensures you are always positioned for success.',
  },
  {
    icon: FaComments,
    number: '04',
    title: 'Transparent Communication',
    description:
      'Clear, honest, and timely communication is at the heart of everything we do. You will always know where you stand and what comes next.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 bg-[#0F1D35] relative overflow-hidden grain">
      {/* Decorative radial */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#C9A84C] text-[13px] uppercase tracking-[0.3em] font-medium">
            The Difference
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mt-4 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Choose <span className="italic text-[#C9A84C]">Bahri Associates</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            We go beyond the numbers to deliver real value and peace of mind for every client.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex gap-6 p-8 border border-white/[0.06] hover:border-[#C9A84C]/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span
                  className="text-4xl font-bold text-[#C9A84C]/20 group-hover:text-[#C9A84C]/40 transition-colors duration-500"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {reason.number}
                </span>
              </div>
              <div>
                <h3
                  className="text-xl font-semibold text-white mb-3 tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {reason.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-[15px] font-light">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
