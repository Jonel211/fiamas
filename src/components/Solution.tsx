import React from 'react';
import { Smartphone, Monitor, Cloud, Check } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section id="solucion" className="py-24 bg-[#EFF6FC] text-slate-900 border-t border-[#B1D8F7]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Wix-style editorial hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal text-black font-['Outfit',sans-serif] tracking-tight leading-[1.12]">
            Diseñado para la realidad del mostrador
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Una herramienta rápida para cuando estás atendiendo clientes y un panel detallado cuando cierras el día.
          </p>
        </div>

        {/* 3 Pillars Grid - Elevated visual hierarchy, bigger titles, cleaner text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Móvil */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-8 flex flex-col justify-between hover:border-[#1D9492]/60 transition duration-150 shadow-xs">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#EFF8FC] border border-[#B1D8F7] text-[#1D9492] flex items-center justify-center mb-6 shadow-xs">
                <Smartphone className="w-7 h-7 stroke-[1.8]" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#1D9492]">Para mostrador</span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif] mt-1 mb-3">
                App Móvil
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Registra ventas a crédito y abonos en menos de 5 segundos, incluso sin conexión a internet.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1D9492] shrink-0" />
                  <span>Modo offline garantizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1D9492] shrink-0" />
                  <span>Envío directo por WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1D9492] shrink-0" />
                  <span>Búsqueda rápida por nombre o teléfono</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-[#1D9492]">
              Android & iOS
            </div>
          </div>

          {/* Pillar 2: Panel Web */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-8 flex flex-col justify-between hover:border-[#1D9492]/60 transition duration-150 shadow-xs">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#F0F8F8] border border-[#1D9492]/30 text-[#1D9492] flex items-center justify-center mb-6 shadow-xs">
                <Monitor className="w-7 h-7 stroke-[1.8]" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#1D9492]">Para administración</span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif] mt-1 mb-3">
                Panel Web
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Visualiza desde cualquier computadora el estado global de tu cartera, métricas y reportes para contabilidad.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1D9492] shrink-0" />
                  <span>Reportes en Excel y PDF</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1D9492] shrink-0" />
                  <span>Historial completo de movimientos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1D9492] shrink-0" />
                  <span>Control de múltiples colaboradores</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-[#1D9492]">
              Acceso desde cualquier navegador
            </div>
          </div>

          {/* Pillar 3: Nube Segura */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-8 flex flex-col justify-between hover:border-[#1D9492]/60 transition duration-150 shadow-xs">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#FFF9EC] border border-[#E0AA3D]/40 text-[#E0AA3D] flex items-center justify-center mb-6 shadow-xs">
                <Cloud className="w-7 h-7 stroke-[1.8]" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#E0AA3D]">Infraestructura</span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif] mt-1 mb-3">
                Nube Segura
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Sincronización continua y cifrado bancario para que tu información nunca se pierda ni quede vulnerable.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1D9492] shrink-0" />
                  <span>Copias de seguridad diarias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1D9492] shrink-0" />
                  <span>Cifrado de datos en reposo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1D9492] shrink-0" />
                  <span>Recuperación inmediata en nuevo equipo</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-[#1D9492]">
              Disponibilidad 99.9%
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
