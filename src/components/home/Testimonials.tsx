import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../../data/landingData.ts';

const CARD_SURFACES = ['bg-surface-orange', 'bg-surface-cyan', 'bg-surface-pink'];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white text-ink">
      <div className="max-w-[1620px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="fm-title">
            Experiencias reales de comerciantes con Fiamas
          </h2>
          <p className="text-base sm:text-xl text-ink-soft mt-3">
            Bodegas y tiendas de barrio que dejaron el cuaderno y hoy cobran a tiempo sin perder la amistad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => {
            const surfaceClass = CARD_SURFACES[idx % CARD_SURFACES.length];

            return (
              <div
                key={t.id}
                className={`rounded-[28px] overflow-hidden ${surfaceClass} p-7 sm:p-9 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.06)]`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-brand-primary text-brand-primary" />
                      ))}
                    </div>
                    <span className="bg-brand-primary text-white text-xs font-extrabold px-3 py-1 rounded-full">
                      {t.recoveredAmount}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-brand-primary text-2xl leading-tight mb-3">
                    {t.businessName}
                  </h3>

                  <p className="text-base text-ink leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-7 pt-5 border-t border-ink/15 flex items-center gap-3.5">
                  <img
                    src={t.image}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-full object-cover border-[3px] border-brand-primary shadow-sm"
                  />
                  <div>
                    <h4 className="font-display font-bold text-lg text-ink leading-tight">{t.name}</h4>
                    <p className="text-xs font-bold text-brand-primary flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" /> {t.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
