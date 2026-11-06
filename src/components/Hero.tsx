import { MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { business, whatsappLink } from '@/config/business';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/30174405/pexels-photo-30174405.png?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury SUV inside a modern automotive workshop"
          className="h-full w-full object-cover animate-ken-burns"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 pt-24">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-in">
            <span className="h-px w-8 bg-gold-400" />
            Nairobi MotorHub &middot; {business.location}
          </p>

          <h1
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
            style={{ animation: 'fade-up 0.8s ease-out 0.1s both' }}
          >
            Nairobi&rsquo;s Home for
            <span className="block bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Professional Car Care.
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
            style={{ animation: 'fade-up 0.8s ease-out 0.25s both' }}
          >
            From advanced vehicle diagnostics to expert mechanical repairs, we keep Nairobi moving.
          </p>

          <div
            className="mt-9 flex flex-wrap gap-3"
            style={{ animation: 'fade-up 0.8s ease-out 0.4s both' }}
          >
            <a href="#book" className="btn-gold">
              Book a Service <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink(business.whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a href="#services" className="btn-ghost">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-gold-300"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
