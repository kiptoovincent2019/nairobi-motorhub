import { useState, type FormEvent, type ReactNode } from 'react';
import {
  Calendar,
  User,
  Phone,
  Car,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { services } from '@/data/content';
import { business, whatsappLink } from '@/config/business';
import { submitBooking, type BookingPayload } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const empty = {
  full_name: '',
  phone_number: '',
  vehicle_make: '',
  vehicle_model: '',
  vehicle_registration: '',
  service_required: '',
  preferred_date: '',
  description: '',
};

type FieldKey = keyof typeof empty;

export default function BookingForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const update = (key: FieldKey, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const errors = (): Partial<Record<FieldKey, string>> => {
    const e: Partial<Record<FieldKey, string>> = {};
    if (!form.full_name.trim()) e.full_name = 'Please enter your full name.';
    if (!form.phone_number.trim()) e.phone_number = 'Please enter your phone number.';
    if (!form.vehicle_make.trim()) e.vehicle_make = 'Vehicle make is required.';
    if (!form.vehicle_model.trim()) e.vehicle_model = 'Vehicle model is required.';
    if (!form.vehicle_registration.trim())
      e.vehicle_registration = 'Registration number is required.';
    if (!form.service_required) e.service_required = 'Please select a service.';
    if (!form.preferred_date) e.preferred_date = 'Please choose a date.';
    return e;
  };

  const fieldErr = (key: FieldKey) => (touched[key] ? errors()[key] : undefined);

  const today = new Date().toISOString().split('T')[0];

  const buildWhatsAppMessage = () => {
    const lines = [
      `Hello ${business.name}! I would like to book a service.`,
      '',
      `Name: ${form.full_name}`,
      `Phone: ${form.phone_number}`,
      `Vehicle: ${form.vehicle_make} ${form.vehicle_model}`,
      `Registration: ${form.vehicle_registration}`,
      `Service: ${form.service_required}`,
      `Preferred Date: ${form.preferred_date}`,
    ];
    if (form.description) lines.push(`Notes: ${form.description}`);
    return lines.join('\n');
  };

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
      const payload: BookingPayload = {
        full_name: form.full_name.trim(),
        phone_number: form.phone_number.trim(),
        vehicle_make: form.vehicle_make.trim(),
        vehicle_model: form.vehicle_model.trim(),
        vehicle_registration: form.vehicle_registration.trim(),
        service_required: form.service_required,
        preferred_date: form.preferred_date,
        description: form.description.trim() || undefined,
      };
      await submitBooking(payload);
      setStatus('success');
      setForm(empty);
      setTouched({});
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or use the WhatsApp option.',
      );
    }
  };

  const inputBase =
    'w-full rounded-xl border bg-ink-900/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold-400/70 focus:ring-1 focus:ring-gold-400/40';
  const border = (k: FieldKey) =>
    fieldErr(k) ? 'border-red-500/60' : 'border-white/10 hover:border-white/20';

  return (
    <section id="book" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left copy */}
        <div className="reveal">
          <p className="eyebrow">
            <span className="h-px w-8 bg-gold-400" /> Book an Appointment
          </p>
          <h2 className="section-title mt-5">Schedule your service in minutes</h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            Tell us about your vehicle and the service you need. Submit your request through our secure
            booking system and our team will confirm your appointment, or send the details straight to
            us on WhatsApp.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-850/60 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <p className="text-sm text-white/70">
                <span className="font-semibold text-white">Secure submission.</span> Your booking is
                sent directly to our team and stored securely.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-850/60 p-4">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <p className="text-sm text-white/70">
                <span className="font-semibold text-white">Prefer WhatsApp?</span> Use the WhatsApp
                option to send your details as a ready-made message.
              </p>
            </div>
          </div>
        </div>

        {/* Form card */}
        <div
          className="reveal rounded-3xl border border-white/10 bg-ink-850/70 p-6 backdrop-blur sm:p-8"
          data-delay="120"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-electric-400" />
              <h3 className="mt-5 font-display text-2xl font-bold text-white">Request received</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
                Thank you. Your booking request has been submitted successfully. Our team will contact
                you shortly to confirm your appointment.
              </p>
              <button type="button" onClick={() => setStatus('idle')} className="btn-outline mt-7">
                Book another service
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
                <Field label="Vehicle Make" icon={Car} error={fieldErr('vehicle_make')} required>
                  <input
                    type="text"
                    value={form.vehicle_make}
                    onChange={(e) => update('vehicle_make', e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, vehicle_make: true }))}
                    className={`${inputBase} ${border('vehicle_make')}`}
                    placeholder="Toyota"
                  />
                </Field>
                <Field label="Vehicle Model" icon={Car} error={fieldErr('vehicle_model')} required>
                  <input
                    type="text"
                    value={form.vehicle_model}
                    onChange={(e) => update('vehicle_model', e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, vehicle_model: true }))}
                    className={`${inputBase} ${border('vehicle_model')}`}
                    placeholder="Land Cruiser Prado"
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Registration Number"
                  icon={Car}
                  error={fieldErr('vehicle_registration')}
                  required
                >
                  <input
                    type="text"
                    value={form.vehicle_registration}
                    onChange={(e) => update('vehicle_registration', e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, vehicle_registration: true }))}
                    className={`${inputBase} ${border('vehicle_registration')}`}
                    placeholder="KDA 123A"
                  />
                </Field>
                <Field
                  label="Preferred Date"
                  icon={Calendar}
                  error={fieldErr('preferred_date')}
                  required
                >
                  <input
                    type="date"
                    min={today}
                    value={form.preferred_date}
                    onChange={(e) => update('preferred_date', e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, preferred_date: true }))}
                    className={`${inputBase} ${border('preferred_date')} [color-scheme:dark]`}
                  />
                </Field>
              </div>

              <Field label="Service Required" error={fieldErr('service_required')} required>
                <select
                  value={form.service_required}
                  onChange={(e) => update('service_required', e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, service_required: true }))}
                  className={`${inputBase} ${border('service_required')}`}
                >
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title} className="bg-ink-900">
                      {s.title}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Additional Description (optional)">
                <textarea
                  value={form.description}
                  onChange={(e) => update('description', e.target.value)}
                  rows={3}
                  className={`${inputBase} ${border('description')} resize-none`}
                  placeholder="Describe the issue or any details we should know…"
                />
              </Field>

              {status === 'error' && (
                <div className="flex items-start gap-2 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-gold flex-1"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                    </>
                  ) : (
                    <>Submit Booking Request</>
                  )}
                </button>
                <a
                  href={whatsappLink(buildWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1"
                >
                  <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                </a>
              </div>
              <p className="text-center text-xs text-white/40 sm:text-left">
                The WhatsApp button opens a pre-filled message with your details.
              </p>
            </form>
          )}
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
