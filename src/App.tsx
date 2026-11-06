import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import BookingForm from '@/components/BookingForm';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <BookingForm />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
