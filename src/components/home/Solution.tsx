import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, WifiOff, ShieldCheck, BarChart3 } from 'lucide-react';
import tenderoCardImg from '../../assets/images/card-tenderos.png';
import tenderoPhoto from '../../assets/images/tendero.jpg';
import panelDarkBg from '../../assets/images/panel-bg-dark.jpg';
import panelLightBg from '../../assets/images/panel-bg-light.jpg';
import logoWhite from '../../assets/icons/logo.png';
import plinIcon from '../../assets/icons/PLIN.png';
import barcodeIcon from '../../assets/icons/barcode-scan.png';
import backupsIcon from '../../assets/icons/backups.png';
import notificationIcon from '../../assets/icons/notification.png';
import customerIcon from '../../assets/icons/customer.png';

interface SolutionProps {
  onOpenDownload?: () => void;
}

interface PromoSlide {
  id: string;
  titleTop: string;
  titleMain: string;
  subtitle: string;
  pillText: string;
  pillAccent: string;
  ctaLabel: string;
  bgImage: string;
  rightHeader: string;
  stat1Big: string;
  stat1Unit: string;
  stat1Sub: string;
  stat1Badge: string;
  stat2Big: string;
  stat2Unit: string;
  stat2Sub: string;
  stat2Badge: string;
  footnote: string;
  centerBadgeIcon: string;
  centerBadgeLabel: string;
}

const PROMO_SLIDES: PromoSlide[] = [
  {
    id: 'whatsapp',
    titleTop: 'Cobranza por WhatsApp',
    titleMain: 'AUTOMÁTICA*',
    subtitle: 'en cada fiado y abono registrado en mostrador',
    pillText: 'Recibos claros • Sin discusiones • ',
    pillAccent: 'Tu cliente no instala nada',
    ctaLabel: 'Probar ahora',
    bgImage: panelDarkBg,
    rightHeader: 'Impacto en tu bodega',
    stat1Big: '5',
    stat1Unit: 'SEG',
    stat1Sub: 'para anotar',
    stat1Badge: '0 papel',
    stat2Big: '98',
    stat2Unit: '%',
    stat2Sub: 'de cobro efectivo',
    stat2Badge: 'Sin roces',
    footnote: 'Envío de recibos digitales y recordatorios cordiales incluidos en tu cuenta Fiamas',
    centerBadgeIcon: notificationIcon,
    centerBadgeLabel: 'Avisos y recibos al instante'
  },
  {
    id: 'escaner',
    titleTop: 'Despacho con Escáner',
    titleMain: 'YAPE & PLIN*',
    subtitle: 'registra productos por unidad o peso y cobra al instante',
    pillText: 'Lector de barras • Venta por kilo • ',
    pillAccent: 'Cuadre de caja al día',
    ctaLabel: 'Ver cómo funciona',
    bgImage: panelLightBg,
    rightHeader: 'Velocidad en mostrador',
    stat1Big: '3',
    stat1Unit: 'TOQUES',
    stat1Sub: 'por venta fiada',
    stat1Badge: 'Ultra rápido',
    stat2Big: '100',
    stat2Unit: '%',
    stat2Sub: 'pagos conciliados',
    stat2Badge: 'Yape / Plin',
    footnote: 'Registra pagos en efectivo, Yape o Plin y descuenta del saldo automáticamente',
    centerBadgeIcon: plinIcon,
    centerBadgeLabel: 'Cobros integrados'
  },
  {
    id: 'nube',
    titleTop: 'Respaldo en la Nube',
    titleMain: '100% OFFLINE*',
    subtitle: 'sigue anotando aunque se vaya el internet en el local',
    pillText: 'Sincronización segura • Panel Web • ',
    pillAccent: 'Cero pérdida de cuentas',
    ctaLabel: 'Crear cuenta gratis',
    bgImage: panelDarkBg,
    rightHeader: 'Seguridad para tu capital',
    stat1Big: '24/7',
    stat1Unit: 'NUBE',
    stat1Sub: 'copias automáticas',
    stat1Badge: 'Encriptado',
    stat2Big: '0',
    stat2Unit: 'S/',
    stat2Sub: 'perdidos por extravío',
    stat2Badge: 'Recuperable',
    footnote: 'Si cambias o pierdes tu celular, recuperas toda tu cartera solo con tu número',
    centerBadgeIcon: backupsIcon,
    centerBadgeLabel: 'Tus cuentas siempre a salvo'
  }
];

export const Solution: React.FC<SolutionProps> = ({ onOpenDownload }) => {
  const [slideIdx, setSlideIdx] = useState(0);
  const slide = PROMO_SLIDES[slideIdx];

  const prevSlide = () => setSlideIdx((i) => (i === 0 ? PROMO_SLIDES.length - 1 : i - 1));
  const nextSlide = () => setSlideIdx((i) => (i === PROMO_SLIDES.length - 1 ? 0 : i + 1));

  return (
    <div id="solucion" className="mt-10 sm:mt-14 space-y-20 sm:space-y-28 scroll-mt-24">
      {/* 1. Banner intermedio: ¿Listo para dejar el cuaderno? */}
      <div className="relative max-w-[1040px] mx-auto pt-6 pb-4">
        <div className="bg-surface-yellow-soft rounded-[28px] sm:rounded-[34px] px-6 sm:px-12 py-8 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          {/* Composición visual izquierda: celular inclinado + cartel + tendero */}
          <div className="relative flex items-center justify-center lg:w-[46%] min-h-[210px] sm:min-h-[230px]">
            {/* Silueta de celular inclinada */}
            <div className="relative -rotate-6 bg-slate-900 rounded-[26px] p-2 shadow-xl w-[140px] sm:w-[155px] shrink-0">
              <div className="bg-white rounded-[20px] p-3 space-y-2 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-brand-primary">FIAMAS</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="bg-slate-100 rounded-lg p-2">
                  <span className="block text-[9px] text-slate-500">Por cobrar hoy</span>
                  <span className="text-sm font-extrabold text-slate-900">S/ 1,420</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] bg-emerald-50 px-2 py-1 rounded">
                    <span className="font-bold text-slate-700">Doña Rosa</span>
                    <span className="font-extrabold text-brand-primary">S/ 35</span>
                  </div>
                  <div className="flex justify-between text-[9px] bg-amber-50 px-2 py-1 rounded">
                    <span className="font-bold text-slate-700">Don Carlos</span>
                    <span className="font-extrabold text-amber-700">S/ 80</span>
                  </div>
                </div>
                <div className="bg-brand-primary text-white text-[9px] font-bold text-center py-1 rounded-full">
                  + Nuevo fiado
                </div>
              </div>
            </div>

            {/* Cartel blanco inclinado superpuesto */}
            <div className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 -rotate-6 bg-white rounded-2xl px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-slate-100 z-10 max-w-[205px]">
              <p className="font-display font-extrabold italic text-brand-primary text-lg sm:text-[22px] leading-[1.08] text-center">
                ¿Listo para dejar el cuaderno?
              </p>
            </div>

            {/* Imagen del tendero */}
            <img
              src={tenderoCardImg}
              alt="Tendero con Fiamas"
              className="w-36 sm:w-44 object-contain -ml-3 drop-shadow-md select-none"
            />
          </div>

          {/* Texto + botón derecha */}
          <div className="lg:w-[52%] text-center lg:text-left space-y-5">
            <p className="font-display text-xl sm:text-[26px] leading-[1.28] text-ink">
              Conoce las <strong className="text-brand-primary font-bold">herramientas de Fiamas</strong> para tu
              mostrador y empieza a cobrar a tiempo.
            </p>
            <div>
              <button onClick={onOpenDownload} className="fm-btn">
                Descargar en mi celular
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Diagrama radial: Un buen negocio es tener grandes beneficios */}
      <div className="relative max-w-[1360px] mx-auto pt-4 pb-6">
        {/* Título superior izquierdo + tarjeta superior derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <h2 className="fm-title text-left text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.08]">
              Un buen negocio es tener grandes beneficios en tu Bodega
            </h2>
          </div>

          {/* Imagen circular central en desktop */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative">
              {/* Anillo decorativo exterior con arcos */}
              <div className="hidden lg:block absolute -inset-7 rounded-full border-2 border-dashed border-ink/40 pointer-events-none" />
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-[6px] border-surface-yellow-soft shadow-2xl">
                <img
                  src={tenderoPhoto}
                  alt="Comerciante atendiendo con Fiamas"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Tarjeta superior derecha: Comunidad Fiamas */}
          <div className="lg:col-span-4 flex items-center gap-4">
            <div className="hidden sm:flex w-16 h-16 rounded-full bg-surface-yellow border-[3px] border-ink items-center justify-center shrink-0 shadow-sm">
              <img src={customerIcon} alt="" className="w-9 h-9 object-contain" />
            </div>
            <div className="relative fm-card p-6 sm:p-7 text-center flex-1">
              <span className="hidden sm:block absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[12px] border-r-white" />
              <h3 className="font-display font-bold text-brand-primary text-2xl sm:text-[28px]">
                App para Clientes
              </h3>
              <p className="mt-2 text-sm sm:text-base text-ink-soft leading-relaxed">
                Tus vecinos consultan su saldo, compras fiadas y abonos desde su celular con total transparencia.
              </p>
              <button onClick={onOpenDownload} className="fm-btn mt-4 py-2.5 px-7 text-sm">
                Conoce más
              </button>
            </div>
          </div>
        </div>

        {/* Fila media e inferior de tarjetas alrededor del círculo */}
        <div className="mt-8 lg:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Tarjeta izquierda */}
          <div className="lg:col-span-5 flex items-center gap-4">
            <div className="relative fm-card p-6 sm:p-8 text-center flex-1">
              <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-white" />
              <h3 className="font-display font-bold text-brand-primary text-2xl sm:text-[28px] leading-tight">
                ¡Recibos y cobros por WhatsApp al instante!
              </h3>
              <p className="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed">
                Envía comprobantes detallados con fecha y productos. Cuentas claras conservan la amistad y la clientela.
              </p>
            </div>
            <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-surface-yellow border-[3px] border-ink items-center justify-center shrink-0 rotate-[-8deg] shadow-sm">
              <span className="font-display font-extrabold text-brand-primary text-sm">WA</span>
            </div>
          </div>

          {/* Espacio central con icono inferior */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-surface-yellow border-[3px] border-ink items-center justify-center shadow-sm">
              <img src={barcodeIcon} alt="" className="w-9 h-9 object-contain" />
            </div>
          </div>

          {/* Tarjeta derecha */}
          <div className="lg:col-span-5 flex items-center gap-4">
            <div className="hidden lg:flex w-16 h-16 rounded-full bg-surface-yellow border-[3px] border-ink items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-brand-primary stroke-[2.2]" />
            </div>
            <div className="relative fm-card p-6 sm:p-8 text-center flex-1">
              <span className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[12px] border-r-white" />
              <h3 className="font-display font-bold text-brand-primary text-2xl sm:text-[28px] leading-tight">
                Funciona 100% sin internet en tu local
              </h3>
              <p className="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed">
                Sigue despachando aunque se corte la señal. Todo se sincroniza en la nube apenas vuelve la conexión.
              </p>
            </div>
          </div>
        </div>

        {/* Tarjeta inferior centrada */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="relative fm-card p-6 sm:p-7 text-center">
            <span className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[10px] border-x-transparent border-b-[12px] border-b-white" />
            <h3 className="font-display font-bold text-brand-primary text-2xl sm:text-[28px] leading-tight">
              Semáforo y límite por vecino
            </h3>
            <p className="mt-2 text-sm sm:text-base text-ink-soft">
              Asigna un tope de crédito prudente y recibe alertas antes de sobreendeudar.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Banner carrusel oscuro con tarjeta de métricas */}
      <div className="relative max-w-[1360px] mx-auto">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl min-h-[400px] sm:min-h-[430px] flex items-center">
          {/* Imagen de fondo con overlay oscuro */}
          <img
            src={slide.bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07191D]/95 via-[#07191D]/80 to-[#07191D]/70" />

          {/* Contenido del banner */}
          <div
            key={slide.id}
            className="relative z-10 w-full px-8 sm:px-16 lg:px-20 py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-[fadeIn_250ms_ease-out]"
          >
            {/* Columna izquierda: titular grande + píldora + botón */}
            <div className="lg:col-span-5 text-white space-y-4">
              <div>
                <p className="font-display font-extrabold italic text-3xl sm:text-[44px] leading-[1.05] drop-shadow">
                  {slide.titleTop}
                </p>
                <p className="font-display font-extrabold text-3xl sm:text-[42px] tracking-wide leading-[1.08] mt-1">
                  {slide.titleMain}
                </p>
                <p className="text-sm sm:text-base text-white/90 font-semibold mt-1">
                  {slide.subtitle}
                </p>
              </div>

              <div className="inline-block bg-white text-ink rounded-xl px-4 py-2 text-xs sm:text-sm font-bold shadow">
                <span>{slide.pillText}</span>
                <span className="text-brand-primary italic">{slide.pillAccent}</span>
              </div>

              <div className="pt-1">
                <button onClick={onOpenDownload} className="fm-btn">
                  {slide.ctaLabel}
                </button>
              </div>
            </div>

            {/* Columna central: insignia visual */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-[32px] bg-brand-primary/90 border-4 border-white/25 shadow-2xl flex flex-col items-center justify-center p-4 -rotate-6">
                <img
                  src={slide.centerBadgeIcon}
                  alt=""
                  className="w-20 h-20 object-contain drop-shadow-md"
                />
                <span className="mt-2 text-[11px] font-bold text-white text-center leading-tight">
                  {slide.centerBadgeLabel}
                </span>
              </div>
            </div>

            {/* Columna derecha: tarjeta tipo ticket con 2 métricas grandes */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
              <div className="w-full max-w-[330px] rounded-[22px] overflow-hidden shadow-2xl bg-[#AEE6F2] text-ink">
                <div className="bg-brand-primary text-white text-center py-2.5 px-4 font-display font-bold italic text-lg">
                  {slide.rightHeader}
                </div>
                <div className="p-5 space-y-4 divide-y divide-brand-primary/25">
                  <div className="text-center pb-3">
                    <div className="flex items-baseline justify-center gap-1 font-display font-extrabold text-brand-primary">
                      <span className="text-5xl sm:text-6xl leading-none">{slide.stat1Big}</span>
                      <span className="text-2xl sm:text-3xl">{slide.stat1Unit}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-center gap-2 text-xs font-bold">
                      <span>{slide.stat1Sub}</span>
                      <span className="bg-brand-primary text-white px-2 py-0.5 rounded font-extrabold">
                        {slide.stat1Badge}
                      </span>
                    </div>
                  </div>

                  <div className="text-center pt-1">
                    <div className="flex items-baseline justify-center gap-1 font-display font-extrabold text-brand-primary">
                      <span className="text-5xl sm:text-6xl leading-none">{slide.stat2Big}</span>
                      <span className="text-2xl sm:text-3xl">{slide.stat2Unit}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-center gap-2 text-xs font-bold">
                      <span>{slide.stat2Sub}</span>
                      <span className="bg-brand-primary text-white px-2 py-0.5 rounded font-extrabold">
                        {slide.stat2Badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-white/85 italic text-center max-w-[330px] mt-2">
                {slide.footnote}
              </p>
            </div>
          </div>

          {/* Sello esquina superior derecha */}
          <div className="hidden xl:flex absolute top-5 right-6 z-10 bg-brand-primary text-white rounded-2xl px-3.5 py-2 items-center gap-2 shadow-lg">
            <img src={logoWhite} alt="" className="w-6 h-6 object-contain" />
            <span className="font-display font-extrabold text-xs leading-tight uppercase">
              Tu Bodega
              <br />
              Digital
            </span>
          </div>
        </div>

        {/* Flechas laterales */}
        <button
          onClick={prevSlide}
          aria-label="Anterior"
          className="fm-arrow absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 z-20"
        >
          <ChevronLeft className="w-6 h-6 stroke-[3]" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Siguiente"
          className="fm-arrow absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 z-20"
        >
          <ChevronRight className="w-6 h-6 stroke-[3]" />
        </button>

        {/* Indicadores inferiores */}
        <div className="flex items-center justify-center gap-2.5 mt-5">
          {PROMO_SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setSlideIdx(i)}
              aria-label={`Ir al banner ${i + 1}`}
              className={`h-3 rounded-full transition-all cursor-pointer ${
                i === slideIdx ? 'w-10 bg-brand-primary' : 'w-3 bg-brand-primary/35 hover:bg-brand-primary/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
