import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../../data/landingData.ts';
import supportIcon from '../../assets/icons/support.png';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="fm-section scroll-mt-20">
      <div className="fm-container bg-surface-yellow">
        {/* Ícono decorativo */}
        <img
          src={supportIcon}
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute top-8 right-8 lg:right-14 w-20 lg:w-24 drop-shadow-lg animate-floaty pointer-events-none"
        />

        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="fm-title">Preguntas frecuentes</h2>
          <p className="text-base sm:text-xl text-ink mt-3">
            Todo lo que necesitas saber sobre el funcionamiento de Fiamas en tu bodega.
          </p>
        </div>

        {/* Lista de preguntas en tarjetas blancas redondeadas */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = openId === item.id;
            const num = String(idx + 1).padStart(2, '0');

            return (
              <div key={item.id} className="fm-card overflow-hidden">
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-base shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-brand-primary text-white'
                          : 'bg-surface-yellow text-brand-primary border-2 border-brand-primary'
                      }`}
                    >
                      {num}
                    </span>
                    <span className="font-display font-bold text-lg sm:text-2xl text-ink group-hover:text-brand-primary transition-colors">
                      {item.question}
                    </span>
                  </div>

                  <span className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 sm:pl-[84px] text-base sm:text-lg text-ink-soft leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
