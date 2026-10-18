import React, { useState } from 'react';
import { FAQS } from '../data/landingData.ts';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-28 bg-[#F8FAFC] text-slate-900 relative border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Editorial typography: 64px, weight 400, color #000000 */}
        <div className="mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal text-black font-['Outfit',sans-serif] tracking-tight leading-[1.1]">
            Preguntas frecuentes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl">
            Todo lo que necesitas saber antes de empezar a digitalizar tus fiados.
          </p>
        </div>

        {/* Clean Accordion with Horizontal Lines */}
        <div className="border-t border-slate-300">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="border-b border-slate-300">
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between gap-6 text-left cursor-pointer group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl md:text-2xl font-normal text-black group-hover:text-slate-700 transition">
                    {item.question}
                  </span>
                  <span className="text-2xl sm:text-3xl font-light text-slate-900 shrink-0 select-none leading-none w-7 text-right">
                    {isOpen ? '×' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-8 pt-1 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support link */}
        <div className="mt-12 text-sm text-slate-500">
          ¿Tienes otra pregunta sobre tu negocio?{' '}
          <a href="#soporte" className="text-[#1D9492] font-semibold hover:underline">
            Escríbenos a soporte y te respondemos de inmediato.
          </a>
        </div>

      </div>
    </section>
  );
};

