import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#C9A84C] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#b8963f] transition-colors"
    >
      <FaArrowUp />
    </button>
  );
}
