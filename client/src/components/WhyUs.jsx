import { motion } from 'framer-motion';
import { FaAward, FaCogs, FaLightbulb, FaComments } from 'react-icons/fa';

const reasons = [
  {
    icon: FaAward,
    title: '20 Years of Expertise',
    description:
      'Two decades of hands-on experience across industries means we have seen it all and know how to navigate even the most complex financial challenges.',
  },
  {
    icon: FaCogs,
    title: 'Tailored Solutions',
    description:
      'We never take a one-size-fits-all approach. Every strategy is custom-built around your specific goals, circumstances, and risk tolerance.',
  },
  {
    icon: FaLightbulb,
    title: 'Proactive Planning',
    description:
      'We do not wait for tax season to think about your finances. Year-round proactive planning ensures you are always positioned for success.',
  },
  {
    icon: FaComments,
    title: 'Transparent Communication',
    description:
      'Clear, honest, and timely communication is at the heart of everything we do. You will always know where you stand and what comes next.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
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
            Why Choose Bahri Associates
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            We go beyond the numbers to deliver real value and peace of mind for every client.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 bg-[#F8F9FA] rounded-lg shadow-lg p-8"
            >
              <div className="w-14 h-14 bg-[#C9A84C] rounded-lg flex items-center justify-center flex-shrink-0">
                <reason.icon className="text-white text-2xl" />
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-[#1B2A4A] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {reason.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
