import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const contactInfo = [
  { icon: FaMapMarkerAlt, label: 'Address', value: '123 Main St, Great Neck, NY 11021' },
  { icon: FaPhone, label: 'Phone', value: '(516) 555-0123', href: 'tel:5165550123' },
  { icon: FaEnvelope, label: 'Email', value: 'info@bahriassociates.com', href: 'mailto:info@bahriassociates.com' },
];

const hours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 2:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function Contact() {
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', subject: '', message: '', website: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

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

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 outline-none transition-colors text-[#2D2D2D]';

  return (
    <section id="contact" className="py-24 bg-white">
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
            Get In Touch
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
            Ready to take control of your financial future? Reach out today for a free consultation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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

              <div>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name *"
                  value={form.full_name}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.full_name && <p className="text-red-500 text-sm mt-1">{errors.full_name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass + ' resize-none'}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#C9A84C] text-[#1B2A4A] py-4 rounded-lg font-semibold text-lg hover:bg-[#b8963f] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting && (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {submitting ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center font-medium">
                  Thank you! Your message has been sent. We will be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center font-medium">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-12 h-12 bg-[#1B2A4A] rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-[#C9A84C] text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-[#1B2A4A]">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-[#6B7280] hover:text-[#C9A84C] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#6B7280]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Business Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#1B2A4A] rounded-lg flex items-center justify-center flex-shrink-0">
                <FaClock className="text-[#C9A84C] text-lg" />
              </div>
              <div>
                <p className="font-semibold text-[#1B2A4A] mb-2">Business Hours</p>
                {hours.map((h) => (
                  <p key={h.day} className="text-[#6B7280] text-sm">
                    <span className="font-medium">{h.day}:</span> {h.time}
                  </p>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-56 bg-[#F8F9FA] rounded-lg flex items-center justify-center border border-gray-200">
              <p className="text-[#6B7280]">Map - 123 Main St, Great Neck, NY 11021</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
