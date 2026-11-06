import { MessageCircle } from 'lucide-react';
import { services } from '@/data/content';
import { business, whatsappLink } from '@/config/business';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* subtle top divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" /> Our Services
          </p>
          <h2 className="section-title mt-5">Comprehensive automotive services under one roof</h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            From computerized diagnostics to full mechanical repairs, every service is delivered with
            modern equipment and the care your vehicle deserves.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.id}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850/70"
              data-delay={(i % 3) * 90}
            >
              {/* image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/40 to-transparent" />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/30 bg-ink-950/80 text-gold-400 backdrop-blur transition-colors group-hover:bg-gold-400 group-hover:text-ink-950">
                  <s.icon className="h-5 w-5" />
                </span>
              </div>

              {/* body */}
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold leading-snug text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.description}</p>
                <a
                  href={whatsappLink(
                    `Hello ${business.name}! I would like to enquire about your ${s.title} service.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire on WhatsApp
                  <span className="inline-block h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-6" />
                </a>
              </div>

              {/* hover border accent */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
