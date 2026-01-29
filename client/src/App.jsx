import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
