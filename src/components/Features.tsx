import React from 'react';
import { Zap, MessageSquare, WifiOff } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="caracteristicas" className="py-24 sm:py-28 bg-[#F0F8F8] text-slate-900 border-t border-[#1D9492]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Editorial typography: 64px, weight 400, color #000000 */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal text-black font-['Outfit',sans-serif] tracking-tight leading-[1.12]">
            Herramientas para el mostrador
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Cada función está pensada para no quitarte tiempo mientras despachas a tus clientes.
          </p>
        </div>

        {/* 3 Distinct Soft Color Cards: Orange, Light Green, Light Blue/Purple */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Soft Orange */}
          <div className="bg-[#FFF3EA] border border-[#FCDCC9]/70 rounded-[28px] p-8 sm:p-10 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/80 border border-orange-200/80 flex items-center justify-center text-[#EA580C] mb-6">
                <Zap className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-2xl sm:text-[28px] font-bold text-slate-900 leading-snug tracking-tight font-['Outfit',sans-serif]">
                Registro en 5 segundos
              </h3>
              <p className="text-base text-slate-700 mt-3.5 leading-relaxed font-normal">
                Anota cada fiado al instante mientras despachas, sin hacer esperar la fila ni enredarte con libretas de papel.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-orange-200/60 text-xs font-semibold text-[#C2410C]">
              <span>Agilidad máxima en el mostrador</span>
            </div>
          </div>

          {/* Card 2: Soft Light Green */}
          <div className="bg-[#EAF7EE] border border-[#C6EBD2]/70 rounded-[28px] p-8 sm:p-10 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/80 border border-emerald-200/80 flex items-center justify-center text-[#16A34A] mb-6">
                <MessageSquare className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-2xl sm:text-[28px] font-bold text-slate-900 leading-snug tracking-tight font-['Outfit',sans-serif]">
                Recibos por WhatsApp
              </h3>
              <p className="text-base text-slate-700 mt-3.5 leading-relaxed font-normal">
                Envía estados de cuenta amigables y comprobantes de abono con un solo toque, manteniendo la cordialidad y la confianza.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-emerald-200/60 text-xs font-semibold text-[#15803D]">
              <span>Cobranza transparente y cordial</span>
            </div>
          </div>

          {/* Card 3: Soft Light Blue/Purple */}
          <div className="bg-[#EEF2FF] border border-[#D5DEFC]/70 rounded-[28px] p-8 sm:p-10 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/80 border border-indigo-200/80 flex items-center justify-center text-[#4F46E5] mb-6">
                <WifiOff className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-2xl sm:text-[28px] font-bold text-slate-900 leading-snug tracking-tight font-['Outfit',sans-serif]">
                Control 100% Offline
              </h3>
              <p className="text-base text-slate-700 mt-3.5 leading-relaxed font-normal">
                Sigue anotando y consultando deudas aunque no tengas internet en tu tienda; todo se sincroniza seguro en la nube.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-indigo-200/60 text-xs font-semibold text-[#4338CA]">
              <span>Funciona siempre sin interrupción</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

