import { useEffect, useState } from 'react';
import { Menu, X, Wrench, Phone } from 'lucide-react';
import { business } from '@/config/business';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-ink-950/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Nairobi MotorHub home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950 shadow-lg transition-transform group-hover:scale-105">
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

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-white/75 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.telUrl}
            className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-gold-300"
          >
            <Phone className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <a href="#book" className="btn-gold">
            Book Appointment
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-gold-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-2 px-1">
            <a href={business.telUrl} className="btn-outline w-full">
              <Phone className="h-4 w-4" /> Call {business.phoneDisplay}
            </a>
            <a href="#book" onClick={() => setOpen(false)} className="btn-gold w-full">
              Book Appointment
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
