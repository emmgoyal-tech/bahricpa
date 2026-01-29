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
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 geo-pattern" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-5 gap-16 items-center">
          {/* Photo column — 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 relative"
          >
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A84C]/20" />

            {imgError ? (
              <div className="w-full aspect-[3/4] bg-[#0F1D35] flex items-center justify-center relative z-10">
                <span
                  className="text-[#C9A84C] text-7xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  PB
                </span>
              </div>
            ) : (
              <img
                src={`${import.meta.env.BASE_URL}punit-bahri.jpg`}
                alt="Punit Bahri, CPA"
                className="w-full aspect-[3/4] object-cover object-top relative z-10 shadow-[0_20px_60px_rgba(15,29,53,0.2)]"
                onError={() => setImgError(true)}
              />
            )}

            {/* Gold accent bar */}
            <div className="absolute -bottom-4 left-8 right-8 h-1 bg-[#C9A84C] z-20" />
          </motion.div>

          {/* Content column — 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-3"
          >
            <span className="text-[#C9A84C] text-[13px] uppercase tracking-[0.3em] font-medium">
              Principal
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0F1D35] mt-3 mb-8 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Meet Punit Bahri, <span className="italic">CPA</span>
            </h2>

            <p className="text-[#5A5A5A] leading-[1.8] mb-5 text-[16px] font-light">
              With over 20 years of experience in public accounting and financial advisory, Punit
              Bahri founded Bahri Associates to provide individuals and businesses in Great Neck,
              New York, and beyond with the personalized, detail-oriented financial guidance they
              deserve.
            </p>

            <p className="text-[#5A5A5A] leading-[1.8] mb-10 text-[16px] font-light">
              Punit combines deep technical expertise with a genuine commitment to understanding each
              client's unique circumstances. Whether navigating complex tax situations, planning for
              retirement, or helping a business scale, he brings the same meticulous care and
              proactive approach to every engagement.
            </p>

            {/* Credentials */}
            <div className="mb-10">
              <h3
                className="text-[13px] uppercase tracking-[0.2em] text-[#0F1D35] font-semibold mb-5"
              >
                Credentials & Affiliations
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {credentials.map((c) => (
                  <div key={c} className="flex items-start gap-3 text-[#5A5A5A] text-[15px]">
                    <FaCheckCircle className="text-[#C9A84C] mt-0.5 flex-shrink-0 text-sm" />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="relative pl-6 border-l-2 border-[#C9A84C]">
              <p
                className="text-[#0F1D35] text-lg italic leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "My goal is to be more than your accountant — I want to be your trusted financial
                partner, helping you make informed decisions at every stage of life."
              </p>
              <p className="mt-3 text-[#C9A84C] text-sm font-semibold uppercase tracking-wider">
                — Punit Bahri
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
