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
    <section id="services" className="py-28 bg-[#FAF8F5] relative">
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
            What We Do
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0F1D35] mt-4 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Comprehensive Financial Solutions
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#5A5A5A] max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Tailored strategies for individuals and businesses at every stage,
            delivered with precision and care.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white p-10 border border-[#E8E4DE] hover:border-[#C9A84C]/40 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(201,168,76,0.08)]"
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C]/0 group-hover:border-[#C9A84C]/40 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C]/0 group-hover:border-[#C9A84C]/40 transition-all duration-500" />

              <div className="w-12 h-12 bg-[#0F1D35] flex items-center justify-center mb-7 group-hover:bg-[#C9A84C] transition-colors duration-500">
                <service.icon className="text-[#C9A84C] text-lg group-hover:text-[#0F1D35] transition-colors duration-500" />
              </div>
              <h3
                className="text-xl font-semibold text-[#0F1D35] mb-3 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.title}
              </h3>
              <p className="text-[#5A5A5A] leading-relaxed text-[15px]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
