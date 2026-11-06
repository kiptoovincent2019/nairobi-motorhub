import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryImages } from '@/data/content';

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    [],
  );
  const prev = useCallback(
    () =>
      setActive((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, next, prev]);

  const spanClass = (span?: string) =>
    span === 'wide'
      ? 'sm:col-span-2'
      : span === 'tall'
        ? 'sm:row-span-2'
        : '';

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" /> Gallery
          </p>
          <h2 className="section-title mt-5">Vehicles, workshop &amp; the craft</h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            A look at the vehicles we care for and the environment we work in.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className={`reveal group relative overflow-hidden rounded-2xl border border-white/10 ${spanClass(img.span)}`}
              data-delay={(i % 4) * 70}
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-ink-950/60 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <ZoomIn className="h-4 w-4" />
              </span>
              <p className="absolute bottom-3 left-3 right-3 text-left text-xs font-medium text-white/85 opacity-0 transition-opacity group-hover:opacity-100">
                {img.alt}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close viewer"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-gold-400 hover:text-ink-950 sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure
            className="max-h-[85vh] max-w-5xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[active].src}
              alt={galleryImages[active].alt}
              className="max-h-[78vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/70">
              {galleryImages[active].alt}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-gold-400 hover:text-ink-950 sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
