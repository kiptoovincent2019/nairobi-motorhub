import { Wrench, Cpu, MessageSquareText, Sparkles, HeartHandshake, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Wrench,
    title: 'Professional Automotive Solutions',
    text: 'Experienced technicians delivering real fixes, not temporary patches, across every system in your vehicle.',
  },
  {
    icon: Cpu,
    title: 'Modern Diagnostic Technology',
    text: 'Up-to-date scanning tools and equipment that pinpoint issues quickly and accurately the first time.',
  },
  {
    icon: MessageSquareText,
    title: 'Transparent Communication',
    text: 'We explain what we find, what we recommend and what it costs \u2014 before any work begins.',
  },
  {
    icon: Sparkles,
    title: 'Attention to Detail',
    text: 'Every job is finished with a thorough check. Small details prevent big problems down the road.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Focused Service',
    text: 'Your time, your budget and your vehicle matter. We work around your needs, not the other way around.',
  },
  {
    icon: MapPin,
    title: 'Convenient Nairobi Location',
    text: 'Centrally located in Nairobi, making it easy to drop off, wait or collect your vehicle.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative overflow-hidden py-24 sm:py-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" /> Why Choose Us
          </p>
          <h2 className="section-title mt-5">The difference is in how we work</h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            Six commitments that define the Nairobi MotorHub experience.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-ink-850 to-ink-900 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/40"
              data-delay={(i % 3) * 90}
            >
              <span className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-500/5 transition-transform duration-700 group-hover:scale-150" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400/15 to-gold-600/10 text-gold-400 ring-1 ring-inset ring-gold-400/20">
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 font-display text-lg font-semibold text-white">
                {r.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/60">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
