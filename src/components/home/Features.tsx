import React, { useState } from 'react';
import cardTiendasImg from '../../assets/images/card-tiendas.png';
import cardTenderosImg from '../../assets/images/card-tenderos.png';
import tiendaImg from '../../assets/images/tienda.png';
import panelLightBg from '../../assets/images/panel-bg-light.jpg';
import panelDarkBg from '../../assets/images/panel-bg-dark.jpg';
import billetesIcon from '../../assets/icons/billetes.png';
import reportesIcon from '../../assets/icons/reportes.png';
import businessChartIcon from '../../assets/icons/business-chart.png';
import circularIcon from '../../assets/icons/circular.png';
import priceTagIcon from '../../assets/icons/price-tag.png';
import boxIcon from '../../assets/icons/box.png';
import checkMarkIcon from '../../assets/icons/check-mark.png';
import plinIcon from '../../assets/icons/PLIN.png';

interface FeaturesProps {
  onOpenDownload?: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenDownload }) => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  return (
    <section id="herramientas" className="py-16 sm:py-24 bg-white text-ink relative scroll-mt-20">
      {/* Anclas de compatibilidad con enlaces del navbar */}
      <div id="caracteristicas" className="absolute -top-20" />
      <div id="beneficios" className="absolute -top-20" />

      <div className="max-w-[1620px] mx-auto px-4 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">
        {/* BLOQUE 1: Cuadrícula 2x2 de tarjetas divididas (imagen + bloque de color con muesca) */}
        <div>
          <h2 className="fm-title text-center mb-12 sm:mb-16">
            Más sobre las herramientas Fiamas
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8">
            {/* TARJETA 1: Imagen izquierda + Naranja derecha */}
            <div className="rounded-[28px] overflow-hidden bg-surface-orange flex flex-col sm:flex-row min-h-[330px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div className="relative sm:w-[46%] min-h-[220px] sm:min-h-full bg-[#102A30] overflow-hidden flex flex-col items-center justify-center p-6">
                <img
                  src={panelLightBg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="relative z-10 bg-brand-primary text-white text-xs sm:text-sm font-extrabold px-3.5 py-1.5 rounded-xl mb-3 shadow">
                  Mostrador Ágil ⚡
                </div>
                <img
                  src={cardTenderosImg}
                  alt="Registro rápido en mostrador"
                  className="relative z-10 w-40 sm:w-44 object-contain drop-shadow-xl"
                />
                {/* Muesca apuntando hacia la derecha */}
                <span className="hidden sm:block absolute -right-3 top-12 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#102A30] z-20" />
              </div>

              <div className="sm:w-[54%] p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-extrabold text-ink block">
                    Anotación veloz
                  </span>
                  <h3 className="font-display font-bold text-brand-primary text-2xl sm:text-[30px] leading-[1.12] mt-1">
                    Registra cada fiado en menos de 5 segundos mientras atiendes
                  </h3>
                  <p className="text-sm sm:text-base text-ink mt-3 leading-relaxed">
                    Sin frenar la fila ni buscar en hojas sueltas.
                  </p>
                </div>
                <div className="pt-5">
                  <button
                    onClick={() => onOpenDownload ? onOpenDownload() : setSelectedFeature('veloz')}
                    className="fm-btn py-3 px-8 text-sm sm:text-base"
                  >
                    Conoce más
                  </button>
                </div>
              </div>
            </div>

            {/* TARJETA 2: Composición roja/teal izquierda + Cian derecha */}
            <div className="rounded-[28px] overflow-hidden bg-surface-cyan flex flex-col sm:flex-row min-h-[330px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div className="relative sm:w-[46%] min-h-[220px] sm:min-h-full bg-brand-primary p-6 flex flex-col items-center justify-center">
                <div className="bg-surface-yellow-soft rounded-2xl p-4 text-center shadow-lg border-2 border-dashed border-brand-primary w-full max-w-[230px]">
                  <span className="text-[11px] font-extrabold uppercase text-ink block">
                    Recibos por WhatsApp
                  </span>
                  <div className="font-display font-extrabold text-brand-primary text-3xl sm:text-4xl leading-none mt-1">
                    1 TOQUE
                  </div>
                  <span className="text-[11px] font-bold text-ink-soft block mt-1">
                    Con fecha, hora y víveres
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <img src={checkMarkIcon} alt="" className="w-10 h-10 object-contain drop-shadow" />
                  <img src={priceTagIcon} alt="" className="w-10 h-10 object-contain drop-shadow" />
                  <img src={boxIcon} alt="" className="w-10 h-10 object-contain drop-shadow" />
                </div>
                <span className="hidden sm:block absolute -right-3 top-12 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-brand-primary z-20" />
              </div>

              <div className="sm:w-[54%] p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-extrabold text-ink block">
                    Cobranza cordial
                  </span>
                  <h3 className="font-display font-bold text-brand-primary text-2xl sm:text-[30px] leading-[1.12] mt-1">
                    Envía estados de cuenta claros a toda tu clientela
                  </h3>
                  <p className="text-sm sm:text-base text-ink mt-3 leading-relaxed">
                    Evita malentendidos con comprobantes automáticos en su WhatsApp.
                  </p>
                </div>
                <div className="pt-5">
                  <button
                    onClick={() => onOpenDownload ? onOpenDownload() : setSelectedFeature('whatsapp')}
                    className="fm-btn py-3 px-8 text-sm sm:text-base"
                  >
                    Conoce más
                  </button>
                </div>
              </div>
            </div>

            {/* TARJETA 3: Amarillo izquierda + Imagen derecha */}
            <div className="rounded-[28px] overflow-hidden bg-surface-yellow flex flex-col-reverse sm:flex-row min-h-[330px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div className="sm:w-[54%] p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-extrabold text-ink block">
                    Límites de crédito
                  </span>
                  <h3 className="font-display font-bold text-brand-primary text-2xl sm:text-[30px] leading-[1.12] mt-1">
                    Asigna un tope de fiado para cada vecino
                  </h3>
                  <p className="text-sm sm:text-base text-ink mt-3 leading-relaxed">
                    Según el historial de pago de tu cliente.
                  </p>
                </div>
                <div className="pt-5">
                  <button
                    onClick={() => onOpenDownload ? onOpenDownload() : setSelectedFeature('limites')}
                    className="fm-btn py-3 px-8 text-sm sm:text-base"
                  >
                    Conoce más
                  </button>
                </div>
              </div>

              <div className="relative sm:w-[46%] min-h-[220px] sm:min-h-full bg-[#EFE282] p-6 flex flex-col items-center justify-center">
                <span className="hidden sm:block absolute -left-3 top-12 w-0 h-0 border-y-[12px] border-y-transparent border-r-[14px] border-r-[#EFE282] z-20" />
                <img
                  src={circularIcon}
                  alt="Control de límites"
                  className="w-28 sm:w-32 object-contain drop-shadow-md"
                />
                <div className="mt-3 bg-brand-primary text-white rounded-xl px-4 py-2 text-center shadow">
                  <span className="text-[10px] uppercase font-bold block opacity-90">
                    Recuperación de hasta
                  </span>
                  <span className="font-display font-extrabold text-2xl sm:text-3xl leading-none">
                    98% FIADOS
                  </span>
                </div>
              </div>
            </div>

            {/* TARJETA 4: Rosa izquierda + Imagen derecha */}
            <div className="rounded-[28px] overflow-hidden bg-surface-pink flex flex-col-reverse sm:flex-row min-h-[330px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div className="sm:w-[54%] p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-extrabold text-ink block">
                    Modo sin internet
                  </span>
                  <h3 className="font-display font-bold text-brand-primary text-2xl sm:text-[30px] leading-[1.12] mt-1">
                    Despreocúpate y asegura las cuentas de tu tienda
                  </h3>
                  <p className="text-sm sm:text-base text-ink mt-3 leading-relaxed">
                    Protege tu cartera contra robo, pérdida de celular o cortes de señal.
                  </p>
                </div>
                <div className="pt-5">
                  <button
                    onClick={() => onOpenDownload ? onOpenDownload() : setSelectedFeature('offline')}
                    className="fm-btn py-3 px-8 text-sm sm:text-base"
                  >
                    Conoce más
                  </button>
                </div>
              </div>

              <div className="relative sm:w-[46%] min-h-[220px] sm:min-h-full bg-[#102A30] overflow-hidden p-6 flex flex-col items-center justify-center">
                <img
                  src={panelDarkBg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <span className="hidden sm:block absolute -left-3 top-12 w-0 h-0 border-y-[12px] border-y-transparent border-r-[14px] border-r-[#102A30] z-20" />
                <img
                  src={cardTiendasImg}
                  alt="Tienda protegida en la nube"
                  className="relative z-10 w-40 sm:w-44 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BLOQUE 2: 2 tarjetas grandes con titulares cursivos (estilo captura 7) */}
        <div>
          <h2 className="fm-title text-center mb-12 sm:mb-16">
            Llevar tus cuentas claras es un buen plan
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8">
            {/* Tarjeta izquierda: Rosa */}
            <div className="rounded-[28px] overflow-hidden bg-surface-pink flex flex-col sm:flex-row min-h-[380px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div className="sm:w-[54%] p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-extrabold italic text-brand-primary text-3xl sm:text-[38px] leading-[1.08]">
                    Cierres de Caja y Yape / Plin
                  </h3>
                  <p className="text-base sm:text-lg text-ink mt-4 leading-relaxed">
                    Registra abonos parciales o totales en efectivo, Yape o Plin. Conoce al segundo cuánto fiaste hoy y
                    cuánto dinero entró a tu caja.
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => onOpenDownload ? onOpenDownload() : setSelectedFeature('caja')}
                    className="fm-btn py-3 px-8 text-sm sm:text-base"
                  >
                    Conoce más
                  </button>
                </div>
              </div>

              <div className="relative sm:w-[46%] min-h-[240px] sm:min-h-full bg-[#1C2E33] p-6 flex flex-col items-center justify-center overflow-hidden">
                <span className="hidden sm:block absolute -left-3 top-16 w-0 h-0 border-y-[14px] border-y-transparent border-r-[16px] border-r-[#1C2E33] z-20" />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <img src={plinIcon} alt="Pagos digitales" className="w-24 sm:w-28 rounded-3xl shadow-xl" />
                  <img src={billetesIcon} alt="Efectivo" className="w-20 sm:w-24 object-contain drop-shadow-lg" />
                </div>
              </div>
            </div>

            {/* Tarjeta derecha: Cian */}
            <div className="rounded-[28px] overflow-hidden bg-surface-cyan flex flex-col sm:flex-row min-h-[380px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div className="sm:w-[54%] p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-extrabold italic text-brand-primary text-3xl sm:text-[38px] leading-[1.08]">
                    Panel Web Administrativo
                  </h3>
                  <p className="text-base sm:text-lg text-ink mt-4 leading-relaxed">
                    ¿Quieres ver todo en grande? Ingresa desde tu laptop o PC para revisar métricas de cobranza,
                    auditar movimientos y exportar reportes a Excel o PDF.
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => onOpenDownload ? onOpenDownload() : setSelectedFeature('panel')}
                    className="fm-btn py-3 px-8 text-sm sm:text-base"
                  >
                    Conoce más
                  </button>
                </div>
              </div>

              <div className="relative sm:w-[46%] min-h-[240px] sm:min-h-full bg-[#E8F4F4] p-6 flex flex-col items-center justify-center overflow-hidden">
                <img
                  src={panelLightBg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <span className="hidden sm:block absolute -left-3 top-16 w-0 h-0 border-y-[14px] border-y-transparent border-r-[16px] border-r-[#E8F4F4] z-20" />
                <div className="relative z-10 bg-white/95 rounded-2xl p-4 shadow-xl border border-slate-200 flex flex-col items-center gap-2">
                  <div className="flex items-center gap-3">
                    <img src={reportesIcon} alt="" className="w-12 h-12 object-contain" />
                    <img src={businessChartIcon} alt="" className="w-12 h-12 object-contain" />
                  </div>
                  <img src={tiendaImg} alt="Panel web Fiamas" className="w-36 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedFeature && (
        <div className="sr-only">{selectedFeature}</div>
      )}
    </section>
  );
};
