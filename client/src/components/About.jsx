import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const credentials = [
  'Certified Public Accountant (CPA)',
  'Member, American Institute of CPAs (AICPA)',
  'Member, New York State Society of CPAs',
  'QuickBooks Certified ProAdvisor',
  'IRS Enrolled Agent',
];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {imgError ? (
              <div className="w-full aspect-[4/5] bg-[#1B2A4A] rounded-lg flex items-center justify-center">
                <span
                  className="text-[#C9A84C] text-6xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  PB
                </span>
              </div>
            ) : (
              <img
                src={`${import.meta.env.BASE_URL}punit-bahri.jpg`}
                alt="Punit Bahri, CPA"
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg"
                onError={() => setImgError(true)}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet Punit Bahri, CPA
            </h2>

            <p className="text-[#6B7280] leading-relaxed mb-4">
              With over 20 years of experience in public accounting and financial advisory, Punit
              Bahri founded Bahri Associates to provide individuals and businesses in Great Neck,
              New York, and beyond with the personalized, detail-oriented financial guidance they
              deserve.
            </p>

            <p className="text-[#6B7280] leading-relaxed mb-6">
              Punit combines deep technical expertise with a genuine commitment to understanding each
              client's unique circumstances. Whether navigating complex tax situations, planning for
              retirement, or helping a business scale, he brings the same meticulous care and
              proactive approach to every engagement.
            </p>

            <h3
              className="text-lg font-bold text-[#1B2A4A] mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Credentials & Affiliations
            </h3>
            <ul className="space-y-2 mb-6">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[#6B7280]">
                  <FaCheckCircle className="text-[#C9A84C] mt-1 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            <p className="text-[#2D2D2D] font-medium italic border-l-4 border-[#C9A84C] pl-4">
              "My goal is to be more than your accountant -- I want to be your trusted financial
              partner, helping you make informed decisions at every stage of life."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
