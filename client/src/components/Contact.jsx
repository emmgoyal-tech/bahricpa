import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const contactInfo = [
  { icon: FaMapMarkerAlt, label: 'Address', value: '123 Main St, Great Neck, NY 11021' },
  { icon: FaPhone, label: 'Phone', value: '(516) 555-0123', href: 'tel:5165550123' },
  { icon: FaEnvelope, label: 'Email', value: 'info@bahriassociates.com', href: 'mailto:info@bahriassociates.com' },
];

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function Contact() {
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', subject: '', message: '', website: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const validate = () => {
    const errs = {};
    if (!form.full_name.trim()) errs.full_name = 'Full name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ full_name: '', email: '', phone: '', subject: '', message: '', website: '' });
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    'w-full px-5 py-4 bg-[#FAF8F5] border border-[#E8E4DE] text-[#1A1A1A] text-[15px] placeholder-[#8A8A8A] focus:border-[#C9A84C] focus:bg-white transition-all duration-300';

  return (
    <section id="contact" className="py-28 bg-white relative">
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
            Get Started
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0F1D35] mt-4 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Begin Your <span className="italic">Consultation</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#5A5A5A] max-w-xl mx-auto text-lg leading-relaxed font-light">
            Ready to take control of your financial future? Reach out today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form — 3/5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Honeypot */}
              <div style={{ display: 'none' }}>
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="full_name"
                    placeholder="Full Name *"
                    value={form.full_name}
                    onChange={handleChange}
                    className={inputBase}
                  />
                  {errors.full_name && <p className="text-red-500 text-sm mt-2">{errors.full_name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    className={inputBase}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputBase}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us how we can help *"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className={inputBase + ' resize-none'}
                />
                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group w-full bg-[#C9A84C] text-[#0F1D35] py-4 font-semibold text-[15px] uppercase tracking-wider hover:bg-[#D4BA6A] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {submitting && (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {submitting ? 'Sending...' : 'Send Message'}
                {!submitting && (
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </button>

              {status === 'success' && (
                <div className="text-center py-4 bg-green-50 border border-green-200">
                  <p className="text-green-700 font-medium">
                    Thank you! Your message has been sent. We will be in touch soon.
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div className="text-center py-4 bg-red-50 border border-red-200">
                  <p className="text-red-600 font-medium">
                    Something went wrong. Please try again or call us directly.
                  </p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info — 2/5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-[#0F1D35] p-10">
              <h3
                className="text-xl font-semibold text-white mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-[#C9A84C] text-sm" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[12px] uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white/80 hover:text-[#C9A84C] transition-colors text-[15px]">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white/80 text-[15px]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/10 my-8" />

              {/* Business Hours */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <FaClock className="text-[#C9A84C] text-sm" />
                  <p className="text-white/40 text-[12px] uppercase tracking-wider">Business Hours</p>
                </div>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-[15px]">
                      <span className="text-white/60">{h.day}</span>
                      <span className="text-white/80 font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
