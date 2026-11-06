import { Cpu, Wrench, Zap, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Cpu,
    title: 'Advanced Diagnostics',
    text: 'Modern computerized scanning to find the real cause, not just the symptom.',
  },
  {
    icon: Wrench,
    title: 'Mechanical Repairs',
    text: 'Engine, transmission, brakes and suspension serviced by experienced technicians.',
  },
  {
    icon: Zap,
    title: 'Electrical Troubleshooting',
    text: 'Complex wiring, sensor and ECU faults diagnosed and resolved properly.',
  },
  {
    icon: ShieldCheck,
    title: 'Preventive Maintenance',
    text: 'Scheduled care that protects your investment and prevents costly breakdowns.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Images */}
        <div className="reveal relative">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.pexels.com/photos/8985452/pexels-photo-8985452.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Mechanic inspecting a car engine in a workshop"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:block lg:-right-10 lg:w-64">
            <img
              src="https://images.pexels.com/photos/4116191/pexels-photo-4116191.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Diagnostic tool connected to a vehicle"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -left-4 -top-6 rounded-2xl border border-gold-400/30 bg-ink-900/90 px-5 py-4 backdrop-blur lg:-left-10">
            <p className="font-display text-3xl font-bold text-gold-400">4</p>
            <p className="text-xs uppercase tracking-wider text-white/60">Core specialties</p>
          </div>
        </div>

        {/* Copy */}
        <div className="reveal" data-delay="120">
          <p className="eyebrow">
            <span className="h-px w-8 bg-gold-400" /> About Nairobi MotorHub
          </p>
          <h2 className="section-title mt-5">
            Professional automotive care, built on expertise and trust.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            Nairobi MotorHub is a modern automotive service centre serving private vehicle owners,
            corporate fleets, SUV owners, taxi operators and commercial vehicle owners across Nairobi
            and its surrounding areas. Our workshop focuses on professional automotive maintenance,
            computerized diagnostics, electrical troubleshooting and mechanical repairs.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            We combine modern diagnostic technology with disciplined workmanship so every vehicle
            leaves our floor performing the way it should. Clear communication, honest assessments and
            attention to detail are at the centre of how we work.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group flex gap-4 rounded-2xl border border-white/10 bg-ink-850/60 p-5 transition-all hover:border-gold-400/40 hover:bg-ink-800/80"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 transition-colors group-hover:bg-gold-400 group-hover:text-ink-950">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
