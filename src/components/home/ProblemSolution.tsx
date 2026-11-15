import React from 'react';
import { X, Check } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="problema-solucion" className="py-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header - Clean, Direct, Wix-style editorial hierarchy */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal text-black font-['Outfit',sans-serif] tracking-tight leading-[1.12]">
            ¿Por qué dejar el cuaderno de papel?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            El crédito de palabra sostiene tus ventas, pero anotarlo a mano cuesta dinero y tiempo todos los días.
          </p>
        </div>

        {/* Crisp, Direct Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-stretch">

          {/* Card: Cuaderno */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900">Cuaderno de papel</h3>
                <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200/80">
                  Riesgo diario
                </span>
              </div>

              <ul className="mt-7 space-y-5">
                <li className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-800">Cálculos manuales y sumas confusas</span>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Cierres lentos y discrepancias al momento de cobrar.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-800">Sin respaldo ni comprobantes</span>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Si se pierde o se deteriora, se pierde el dinero acumulado.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-800">Cobranza incómoda</span>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Discusiones frecuentes con clientes por montos olvidados o dudosos.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500">
              Hasta un 30% del fiado en papel no llega a cobrarse.
            </div>
          </div>

          {/* Card: Fiamas */}
          <div className="bg-[#F0F8F8] border-2 border-[#1D9492]/40 rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#1D9492]/15">
                <h3 className="text-xl font-bold text-slate-900">Con Fiamas</h3>
                <span className="text-xs font-semibold text-[#1D9492] bg-white px-2.5 py-1 rounded-md border border-[#1D9492]/30">
                  Control total
                </span>
              </div>

              <ul className="mt-7 space-y-5">
                <li className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#1D9492] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-900">Anotación en 5 segundos y saldo al instante</span>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">Todo calculado automáticamente por cliente sin sumar a mano.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#1D9492] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-900">Comprobante automático por WhatsApp</span>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">Transparencia inmediata que evita malentendidos y reclamos.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#1D9492] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-900">Respaldo seguro en la nube y modo offline</span>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">Tus cuentas protegidas ante robo, extravío o cambio de celular.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1D9492]/15 text-xs font-semibold text-[#1D9492]">
              Recuperación de hasta el 98% de tus cuentas por cobrar.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
