import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { business, whatsappLink } from '@/config/business';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(business.whatsappGreeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Nairobi MotorHub on WhatsApp"
      className={`group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-all duration-500 hover:scale-110 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-16 opacity-0'
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      <MessageCircle className="relative h-7 w-7" strokeWidth={2} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
        Chat with us
      </span>
    </a>
  );
}
