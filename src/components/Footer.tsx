import { Wrench, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { business, whatsappLink } from '@/config/business';
import { services } from '@/data/content';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book', href: '#book' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950">
                <Wrench className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  NAIROBI <span className="text-gold-400">MOTORHUB</span>
                </span>
                <span className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-white/50">
                  Automotive Service Centre
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              A modern automotive service centre in Nairobi offering professional maintenance,
              computerized diagnostics, electrical troubleshooting and mechanical repairs for private
              vehicles, fleets and commercial operators.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-gold-400/40 hover:bg-gold-400/10 hover:text-gold-300"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/55 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-white/55 transition-colors hover:text-gold-300"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="text-sm text-white/55">{business.location}</span>
              </li>
              <li>
                <a
                  href={business.telUrl}
                  className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-gold-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(business.whatsappGreeting)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-gold-300"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-gold-400" />
                  WhatsApp {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-gold-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/45">{business.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
