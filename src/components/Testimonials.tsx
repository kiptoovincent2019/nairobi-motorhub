import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/content';

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-electric-500/10 blur-[120px]" />

      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" /> Customer Voices
          </p>
          <h2 className="section-title mt-5">What our customers say</h2>
          <p className="mt-5 text-sm leading-relaxed text-white/55">
            The following are demonstration testimonials shown for presentation purposes. They will be
            replaced with genuine, verified customer reviews.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal relative flex flex-col rounded-2xl border border-white/10 bg-ink-850/70 p-7"
              data-delay={i * 100}
            >
              <Quote className="h-9 w-9 text-gold-400/40" />
              <div className="mt-3 flex gap-1 text-gold-400">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-sm font-bold text-ink-950">
                  {t.initials}
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
