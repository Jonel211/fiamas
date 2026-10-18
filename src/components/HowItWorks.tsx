import React from 'react';
import { Download, UserPlus, Receipt, MessageCircle } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/landingData.ts';

interface HowItWorksProps {
  onOpenDownload: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDownload }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Download className="w-6 h-6 text-[#1D9492]" />;
      case 1: return <UserPlus className="w-6 h-6 text-[#1D9492]" />;
      case 2: return <Receipt className="w-6 h-6 text-[#1D9492]" />;
      default: return <MessageCircle className="w-6 h-6 text-[#1D9492]" />;
    }
  };

  return (
    <section id="como-funciona" className="py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Clean, Grounded */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal text-black font-['Outfit',sans-serif] tracking-tight leading-[1.12]">
            Cómo empezar en tu tienda
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Sin configuraciones difíciles. Todo se maneja directo desde tu celular en 4 pasos.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between"
            >
              {/* Step number and icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  {getIcon(idx)}
                </div>
                <span className="text-2xl font-extrabold text-[#E0AA3D] font-['Outfit',sans-serif]">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-[#1D9492]">
                {step.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2.5 bg-[#1D9492] hover:bg-[#167876] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition duration-150 shadow-sm active:scale-[0.98] cursor-pointer"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Descargar APP Fiamas</span>
          </button>
        </div>

      </div>
    </section>
  );
};
