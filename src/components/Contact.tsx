import { useState, type FormEvent, type ReactNode } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
} from 'lucide-react';
import { business, whatsappLink } from '@/config/business';
import { submitContactMessage, type ContactPayload } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const empty = {
  full_name: '',
  phone_number: '',
  email: '',
  subject: '',
  message: '',
};

type FieldKey = keyof typeof empty;

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const update = (key: FieldKey, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const errors = (): Partial<Record<FieldKey, string>> => {
    const e: Partial<Record<FieldKey, string>> = {};
    if (!form.full_name.trim()) e.full_name = 'Please enter your full name.';
    if (!form.phone_number.trim()) e.phone_number = 'Please enter your phone number.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address.';
    if (!form.subject.trim()) e.subject = 'Please add a subject.';
    if (!form.message.trim()) e.message = 'Please enter your message.';
    return e;
  };

  const fieldErr = (key: FieldKey) => (touched[key] ? errors()[key] : undefined);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = errors();
    if (Object.keys(errs).length) {
      setTouched(Object.fromEntries(Object.keys(empty).map((k) => [k, true])));
      return;
    }
    setStatus('submitting');
    setErrorMsg('');
    try {
      const payload: ContactPayload = {
        full_name: form.full_name.trim(),
        phone_number: form.phone_number.trim(),
        email: form.email.trim() || undefined,
        subject: form.subject.trim(),
        message: form.message.trim(),
      };
      await submitContactMessage(payload);
      setStatus('success');
      setForm(empty);
      setTouched({});
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or reach us on WhatsApp.',
      );
    }
  };

  const inputBase =
    'w-full rounded-xl border bg-ink-900/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-400/70 focus:ring-1 focus:ring-gold-400/40';
  const border = (k: FieldKey) =>
    fieldErr(k) ? 'border-red-500/60' : 'border-white/10 hover:border-white/20';

  const contactCards = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Us',
      value: business.phoneDisplay,
      href: whatsappLink(business.whatsappGreeting),
      external: true,
      cta: 'Chat now',
      accent: 'from-electric-400/20 to-electric-600/10 text-electric-400',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: business.phoneDisplay,
      href: business.telUrl,
      external: false,
      cta: 'Call now',
      accent: 'from-gold-400/20 to-gold-600/10 text-gold-400',
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: business.email,
      href: `mailto:${business.email}`,
      external: false,
      cta: 'Send email',
      accent: 'from-white/15 to-white/5 text-white',
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-1/4 top-0 h-72 w-72 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" /> Get In Touch
          </p>
          <h2 className="section-title mt-5">We&rsquo;re here to help</h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            Reach out by WhatsApp, phone or the form below. We respond promptly during business hours.
          </p>
        </div>

        {/* Contact option cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {contactCards.map((c, i) => (
            <a
              key={c.title}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="reveal group flex flex-col items-start rounded-2xl border border-white/10 bg-ink-850/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/40"
              data-delay={i * 90}
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ring-inset ring-white/10 ${c.accent}`}
              >
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-white">{c.title}</h3>
              <p className="mt-1 text-sm text-white/60">{c.value}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 transition-colors group-hover:text-gold-300">
                {c.cta}
                <span className="inline-block h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-5" />
              </span>
            </a>
          ))}
        </div>

        {/* Form + info */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Form */}
          <div className="reveal rounded-3xl border border-white/10 bg-ink-850/70 p-6 backdrop-blur sm:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-electric-400" />
                <h3 className="mt-5 font-display text-2xl font-bold text-white">Message sent</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
                  Thank you for reaching out. We have received your message and will respond shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-outline mt-7"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" icon={User} error={fieldErr('full_name')} required>
                    <input
                      type="text"
                      value={form.full_name}
                      onChange={(e) => update('full_name', e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, full_name: true }))}
                      className={`${inputBase} ${border('full_name')}`}
                      placeholder="Jane Doe"
                    />
                  </Field>
                  <Field label="Phone Number" icon={Phone} error={fieldErr('phone_number')} required>
                    <input
                      type="tel"
                      value={form.phone_number}
                      onChange={(e) => update('phone_number', e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, phone_number: true }))}
                      className={`${inputBase} ${border('phone_number')}`}
                      placeholder="0712 345 678"
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email (optional)" icon={Mail} error={fieldErr('email')}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      className={`${inputBase} ${border('email')}`}
                      placeholder="you@example.com"
                    />
                  </Field>
                  <Field label="Subject" error={fieldErr('subject')} required>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => update('subject', e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, subject: true }))}
                      className={`${inputBase} ${border('subject')}`}
                      placeholder="How can we help?"
                    />
                  </Field>
                </div>

                <Field label="Message" error={fieldErr('message')} required>
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                    rows={5}
                    className={`${inputBase} ${border('message')} resize-none`}
                    placeholder="Tell us a bit about what you need…"
                  />
                </Field>

                {status === 'error' && (
                  <div className="flex items-start gap-2 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-gold w-full sm:w-auto"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <aside className="reveal space-y-4" data-delay="120">
            <div className="rounded-2xl border border-white/10 bg-ink-850/70 p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/70">
                Visit Us
              </h3>
              <div className="mt-4 flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <p className="text-sm leading-relaxed text-white/70">{business.location}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink-850/70 p-6">
              <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-white/70">
                <Clock className="h-4 w-4 text-gold-400" /> Opening Hours
              </h3>
              <ul className="mt-4 space-y-3">
                {business.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-white/60">{h.day}</span>
                    <span className="font-medium text-white/90">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappLink(business.whatsappGreeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-electric-500/30 bg-electric-500/10 p-4 text-sm font-semibold text-electric-400 transition-colors hover:bg-electric-500/20"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with us on WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  icon: Icon,
  error,
  required,
  children,
}: {
  label: string;
  icon?: typeof User;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-white/55">
        {Icon && <Icon className="h-3.5 w-3.5 text-gold-400/70" />}
        {label}
        {required && <span className="text-gold-400">*</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-300">{error}</span>}
    </label>
  );
}
