import React, { useState } from 'react';
import { DollarSign, TrendingUp, Sparkles, Download, CheckCircle2, Calculator } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDownload: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDownload }) => {
  const [monthlyFiados, setMonthlyFiados] = useState<number>(3500);
  const [unrecoveredRate, setUnrecoveredRate] = useState<number>(18); // 18% avg in paper

  // In paper: unrecoveredRate % is lost
  // In Fiamas: 98% recovered (only ~2% risk)
  const monthlyPaperLoss = (monthlyFiados * unrecoveredRate) / 100;
  const annualPaperLoss = monthlyPaperLoss * 12;
  const monthlyFiamasRecovery = monthlyPaperLoss * 0.90; // Rescues 90% of what was previously lost
  const annualFiamasRecovery = monthlyFiamasRecovery * 12;

  return (
    <section className="py-24 bg-[#EFF6FC] text-slate-900 border-t border-[#B1D8F7]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Wix-style editorial hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal text-black font-['Outfit',sans-serif] tracking-tight leading-[1.12]">
            Calcula el dinero que puedes recuperar
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Ajusta los valores al movimiento de tu negocio y conoce el capital que puedes rescatar con Fiamas.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders (Left 7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Slider 1: Total Fiado Mensual */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-800">
                    Total promedio fiado al mes:
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-[#1D9492] bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-xs">
                    ${monthlyFiados.toLocaleString('es-MX')}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="250"
                  value={monthlyFiados}
                  onChange={(e) => setMonthlyFiados(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1D9492]"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>$500</span>
                  <span>$10,000</span>
                  <span>$20,000</span>
                </div>
              </div>

              {/* Slider 2: % que se atrasa o no paga en papel */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-slate-800">
                    % de fiados olvidados o impagos en cuaderno:
                  </label>
                  <span className="text-base sm:text-lg font-extrabold text-rose-600 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-xs">
                    {unrecoveredRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  step="1"
                  value={unrecoveredRate}
                  onChange={(e) => setUnrecoveredRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>5% (mínimo)</span>
                  <span>18% (promedio nacional)</span>
                  <span>35% (crítico)</span>
                </div>
              </div>

              <div className="p-4 bg-[#F4F9FD] rounded-xl border border-[#B1D8F7] space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1D9492] shrink-0" />
                  <span>Cálculo basado en comercios minoristas y tiendas de abarrotes.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1D9492] shrink-0" />
                  <span>Fiamas reduce la morosidad mediante límites de crédito y comprobantes directos.</span>
                </div>
              </div>

            </div>

            {/* Results Display (Right 5 cols) - Solid color, clean professional look */}
            <div className="lg:col-span-5 bg-[#1D9492] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-100">
                  Recuperación Estimada
                </span>

                <div>
                  <span className="text-xs text-teal-100 block">Dinero que rescatas al año:</span>
                  <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif] mt-1">
                    ${Math.round(annualFiamasRecovery).toLocaleString('es-MX')}
                  </p>
                  <span className="text-xs text-teal-100">
                    ≈ ${Math.round(monthlyFiamasRecovery).toLocaleString('es-MX')} al mes que regresan a tu bolsillo
                  </span>
                </div>

                <div className="pt-4 border-t border-teal-600/60 text-xs text-teal-100 space-y-1">
                  <p>
                    • Pérdida estimada en papel: <strong className="text-white">${Math.round(annualPaperLoss).toLocaleString('es-MX')}/año</strong>
                  </p>
                  <p>
                    • Tasa de efectividad: <strong className="text-[#E0AA3D]">Hasta 98%</strong>
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={onOpenDownload}
                  className="w-full bg-[#E0AA3D] hover:bg-[#caa02e] text-slate-950 font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition duration-150 active:scale-[0.98] shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Comenzar a recuperar mi capital</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
