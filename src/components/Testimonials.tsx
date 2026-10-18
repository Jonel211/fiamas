import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/landingData.ts';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#07191D] text-white border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle brand glow in dark background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#1D9492]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Wix-style clean, direct */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal text-white font-['Outfit',sans-serif] tracking-tight leading-[1.12]">
            Experiencias de comerciantes
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed max-w-2xl mx-auto">
            Tiendas y abarrotes que reemplazaron el cuaderno por un control claro y transparente.
          </p>
        </div>

        {/* Testimonials 3 Columns on Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#0D262C] border border-[#1D9492]/25 hover:border-[#1D9492]/60 rounded-2xl p-7 flex flex-col justify-between transition duration-200 shadow-xl"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E0AA3D] text-[#E0AA3D]" />
                  ))}
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                <div className="mb-3">
                  <span className="text-[11px] font-bold text-[#2DD4BF] bg-[#07191D] border border-[#1D9492]/40 px-2.5 py-1 rounded-md shadow-xs">
                    {t.recoveredAmount}
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-700/70 flex items-center gap-3.5">
                  <img
                    src={t.image}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#1D9492]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-slate-300">{t.businessName}</p>
                    <p className="text-[11px] text-[#2DD4BF] font-medium flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" /> {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
