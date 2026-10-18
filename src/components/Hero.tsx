import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ChevronDown, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { InteractivePhoneMockup } from './InteractivePhoneMockup.tsx';
import fiamasLogo from '../assets/fiamas.png';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const scrollToNextSection = () => {
    const nextEl = document.getElementById('problema-solucion') || document.getElementById('solucion');
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between text-slate-900 overflow-hidden pt-3 pb-3 sm:pt-4 sm:pb-3 select-none">

      {/* Real Commerce / Retail Background Image with Balanced Semi-Transparent Overlay */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=2000&q=85"
          alt="Comercio y mostrador de cobro en tienda"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Balanced luminous semi-transparent overlay: store is clearly visible, #000000 text is 100% legible */}
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/10" />
      </div>

      {/* Subtle atmospheric brand glows */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#1D9492]/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#015B76]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Central Hero Body */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-3 lg:py-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left Column: Copy & Primary Hero CTA */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">

            {/* Brand Logo integrated vertically inside the Hero content */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pb-1">
              <img src={fiamasLogo} alt="Fiamas Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
            </div>

            {/* Main Headline - Exact user specs: normal style, 700 weight, 64px desktop, line-height 1.1, color #000000, confianza in accent */}
            <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-bold text-[#000000] not-italic font-['Outfit',sans-serif] tracking-tight leading-[1.1]">
              Digitalizando la <span className="text-[#1D9492]">confianza</span> de tu negocio.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Fiamas reemplaza los viejos cuadernos de papel por un sistema centralizado, automatizado y transparente. Controla quién te debe, envía recibos amigables por WhatsApp y recupera hasta el 98% de tus fiados.
            </p>

            {/* Action Buttons - Main Download CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1D9492] hover:bg-[#167876] text-white font-bold px-8 py-3.5 sm:py-4 rounded-xl text-base transition duration-150 shadow-lg shadow-[#1D9492]/20 active:scale-[0.98] cursor-pointer"
              >
                <Download className="w-5 h-5 stroke-[2.5]" />
                <span>Descargar APP Gratis</span>
              </button>

              <Link
                to="/como-funciona"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-bold px-6 py-3.5 sm:py-4 rounded-xl text-base border border-slate-300 transition duration-150 active:scale-[0.98] shadow-xs"
              >
                <span>Ver cómo funciona</span>
                <ArrowRight className="w-4 h-4 text-[#1D9492]" />
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1D9492]" />
                <span>Sin comisiones sobre ventas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1D9492]" />
                <span>Funciona sin internet (Offline)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E0AA3D]" />
                <span>Respaldo seguro en la nube</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive iPhone 15 Mockup (Original large size, full view) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center py-4 lg:py-0">
            <InteractivePhoneMockup />
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="w-full text-center pt-1 pb-1 shrink-0">
        <button
          onClick={scrollToNextSection}
          className="inline-flex flex-col items-center text-xs font-semibold text-slate-600 hover:text-black transition group cursor-pointer"
        >
          <span>Conoce por qué las tiendas cambian su libreta</span>
          <ChevronDown className="w-4 h-4 text-[#1D9492] animate-bounce mt-1" />
        </button>
      </div>

    </section>
  );
};
