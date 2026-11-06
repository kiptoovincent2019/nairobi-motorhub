/**
 * Centralized business configuration for Nairobi MotorHub.
 * Change contact details here and they update across the whole site.
 */
export const business = {
  name: 'Nairobi MotorHub',
  tagline: 'Your Car. Our Expertise. Nairobi\u2019s Trusted Motor Hub.',
  city: 'Nairobi',
  country: 'Kenya',
  location: 'Nairobi, Kenya',

  // Local display number
  phoneDisplay: '0717452095',
  // International format (no +, no spaces) for tel: and wa.me links
  phoneIntl: '+254717452095',
  phoneDigits: '254717452095',

  // Links
  whatsappUrl: 'https://wa.me/254717452095',
  telUrl: 'tel:+254717452095',

  // Generic WhatsApp greeting
  whatsappGreeting:
    'Hello Nairobi MotorHub! I found your website and would like to enquire about your automotive services.',

  // Email placeholder — replace with the real address when ready
  email: 'info@nairobiimotorhub.co.ke',

  // Hours
  hours: [
    { day: 'Monday \u2013 Friday', time: '8:00 AM \u2013 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM \u2013 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
} as const;

/** Build a WhatsApp URL with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `${business.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
