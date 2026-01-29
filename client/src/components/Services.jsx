import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaShieldAlt,
  FaChartLine,
  FaPiggyBank,
  FaFileInvoiceDollar,
  FaClipboardCheck,
} from 'react-icons/fa';

const services = [
  {
    icon: FaBriefcase,
    title: 'Business Planning',
    description:
      'Strategic planning and advisory services to help your business set clear goals, optimize operations, and achieve sustainable growth.',
  },
  {
    icon: FaShieldAlt,
    title: 'Risk & Financial Advisory',
    description:
      'Comprehensive risk assessment and financial advisory to protect your assets, minimize exposure, and make confident financial decisions.',
  },
  {
    icon: FaChartLine,
    title: 'Mutual Funds',
    description:
      'Expert guidance on mutual fund selection and portfolio management tailored to your risk tolerance and long-term financial objectives.',
  },
  {
    icon: FaPiggyBank,
    title: 'Wealth Accumulation',
    description:
      'Proven strategies for building and preserving wealth through disciplined investment planning, retirement accounts, and tax-efficient growth.',
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Tax Management',
    description:
      'Year-round tax planning and preparation for individuals and businesses, ensuring compliance while maximizing deductions and credits.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Audit & Assurance',
    description:
      'Thorough audit and assurance services that deliver accurate financial reporting, strengthen internal controls, and build stakeholder trust.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
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
            Our Services
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            Comprehensive financial solutions designed to meet the unique needs of individuals and
            businesses at every stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 border-2 border-transparent hover:border-[#C9A84C] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#1B2A4A] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C9A84C] transition-colors">
                <service.icon className="text-white text-2xl" />
              </div>
              <h3
                className="text-xl font-bold text-[#1B2A4A] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
