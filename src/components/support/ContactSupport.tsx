import React from 'react';
import { Mail, Phone, MessageCircle, Clock, MapPin, Headphones, HelpCircle, ShieldCheck } from 'lucide-react';

export const ContactSupport: React.FC = () => {
  return (
    <section id="soporte" className="py-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de Soporte */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal not-italic text-[#000000] font-['Outfit',sans-serif] tracking-tight leading-tight lg:leading-[70px]">
            Soporte para Comerciantes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Estamos disponibles para acompañar a tu negocio en mostrador. Elige el canal que te resulte más cómodo.
          </p>
        </div>

        {/* Canales de Soporte en Tarjetas Claras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Tarjeta 1: WhatsApp Mostrador */}
          <div className="bg-white border-2 border-[#1D9492]/30 rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:border-[#1D9492] transition group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1D9492] text-white flex items-center justify-center mb-5 shadow-sm">
                <MessageCircle className="w-6 h-6 stroke-[2]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D9492]">Canal preferido</span>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit',sans-serif] mt-1 mb-2">
                WhatsApp de Soporte
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Escríbenos directamente para resolver dudas sobre anotaciones, clientes fiadores o sincronización sin conexión.
              </p>
            </div>

            <div>
              <a
                href="https://wa.me/525541238901?text=Hola%20Fiamas,%20necesito%20soporte%20para%20mi%20tienda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1D9492] hover:bg-[#167876] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chatear por WhatsApp</span>
              </a>
              <span className="block text-center text-[11px] text-slate-500 mt-2">
                Respuesta promedio en menos de 10 min
              </span>
            </div>
          </div>

          {/* Tarjeta 2: Atención Telefónica */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:border-slate-300 transition">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EFF8FC] text-[#015B76] border border-[#B1D8F7] flex items-center justify-center mb-5">
                <Phone className="w-6 h-6 stroke-[2]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Línea directa</span>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit',sans-serif] mt-1 mb-2">
                Línea Telefónica
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Si prefieres hablar con una persona de soporte para configurar tu cuenta o resolver una duda urgente.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-slate-800">
                +52 (55) 8901-4123
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#1D9492] shrink-0" />
              <span>Lun a Sáb: 7:00 AM – 9:00 PM</span>
            </div>
          </div>

          {/* Tarjeta 3: Correo Electrónico */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:border-slate-300 transition">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EFF8FC] text-[#015B76] border border-[#B1D8F7] flex items-center justify-center mb-5">
                <Mail className="w-6 h-6 stroke-[2]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Consultas generales</span>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit',sans-serif] mt-1 mb-2">
                Correo de Soporte
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Envíanos capturas de pantalla, reportes de respaldo o consultas de facturación formal.
              </p>
              <a
                href="mailto:soporte@fiamas.com"
                className="block p-3 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-[#1D9492] hover:underline"
              >
                soporte@fiamas.com
              </a>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#1D9492] shrink-0" />
              <span>Respaldo de información garantizado</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
