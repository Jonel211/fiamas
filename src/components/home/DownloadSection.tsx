import React, { useState } from 'react';
import { Smartphone, ChevronDown, ChevronUp, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import playStoreIcon from '../../assets/icons/play-store.png';
import appStoreIcon from '../../assets/icons/app-store.png';
import tenderoAvatarIcon from '../../assets/icons/tendero.png';
import customerIcon from '../../assets/icons/customer.png';
import plinIcon from '../../assets/icons/PLIN.png';
import logoWhite from '../../assets/icons/logo.png';
import cardTenderosImg from '../../assets/images/card-tenderos.png';

interface AppPlanCard {
  id: 'android' | 'ios' | 'swift';
  topBadge: string;
  roleLabel: string;
  title: string;
  tagBadge: string;
  versionCode: string;
  priceLabel: string;
  priceValue: string;
  devicesTitle: string;
  storeIcon: string;
  storeName: string;
  storeSub: string;
  avatarIcon: string;
  avatarName: string;
  avatarSub: string;
  bonusTitle: string;
  bonusHighlight: string;
  bonusSub: string;
  includesText: string;
  details: string[];
  ctaText: string;
}

const APP_CARDS: AppPlanCard[] = [
  {
    id: 'android',
    topBadge: 'DESCARGA GRATIS',
    roleLabel: 'Para el Tendero',
    title: 'Fiamas Tendero',
    tagBadge: 'PRO',
    versionCode: 'Android',
    priceLabel: 'Licencia de mostrador',
    priceValue: 'S/ 0',
    devicesTitle: 'Plataforma y uso',
    storeIcon: playStoreIcon,
    storeName: 'GOOGLE PLAY',
    storeSub: 'Android 8.0 o sup.',
    avatarIcon: tenderoAvatarIcon,
    avatarName: 'MOSTRADOR',
    avatarSub: 'Bodegas y tiendas',
    bonusTitle: 'Incluido sin costo:',
    bonusHighlight: 'MODO 100% OFFLINE',
    bonusSub: 'Sincronización automática',
    includesText: 'Incluye: ESCÁNER + WHATSAPP + NUBE',
    details: [
      'Registro de fiados y abonos en 5 segundos',
      'Comprobantes automáticos por WhatsApp',
      'Lector de código de barras integrado'
    ],
    ctaText: 'Descargar en Android'
  },
  {
    id: 'ios',
    topBadge: 'PARA NEGOCIOS',
    roleLabel: 'Para el Tendero',
    title: 'Fiamas Tendero',
    tagBadge: 'PRO',
    versionCode: 'iOS',
    priceLabel: 'Licencia de mostrador',
    priceValue: 'S/ 0',
    devicesTitle: 'Plataforma y uso',
    storeIcon: appStoreIcon,
    storeName: 'APP STORE',
    storeSub: 'iPhone & iPad',
    avatarIcon: tenderoAvatarIcon,
    avatarName: 'ADMINISTRACIÓN',
    avatarSub: 'Face ID & Touch ID',
    bonusTitle: 'Incluido sin costo:',
    bonusHighlight: 'RESPALDO EN NUBE 24/7',
    bonusSub: 'Reportes en tiempo real',
    includesText: 'Incluye: CARTERA + REPORTES + NUBE',
    details: [
      'Control consolidado de cuentas por cobrar',
      'Semáforo de riesgo y límites por vecino',
      'Recuperación inmediata al cambiar de equipo'
    ],
    ctaText: 'Descargar en iPhone'
  },
  {
    id: 'swift',
    topBadge: 'PARA VECINOS',
    roleLabel: 'Para el Cliente',
    title: 'Fiamas Clientes',
    tagBadge: 'VIP',
    versionCode: 'App',
    priceLabel: 'Consulta de saldos',
    priceValue: 'Gratis',
    devicesTitle: 'Plataforma y pagos',
    storeIcon: appStoreIcon,
    storeName: 'APP STORE',
    storeSub: 'Disponible en iOS',
    avatarIcon: customerIcon,
    avatarName: 'CLIENTES',
    avatarSub: 'Saldos transparentes',
    bonusTitle: 'Medios de pago compatibles:',
    bonusHighlight: 'YAPE • PLIN • EFECTIVO',
    bonusSub: 'Con historial de compras',
    includesText: 'Incluye: RECIBOS + ALERTAS + QR',
    details: [
      'Consulta en vivo el detalle de tus compras fiadas',
      'Revisa cada abono registrado por tu bodega',
      'Vinculación rápida escaneando el QR de la tienda'
    ],
    ctaText: 'Descargar App Clientes'
  }
];

export const DownloadSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState<'android' | 'ios' | 'swift' | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const triggerSimulatedDownload = (platform: 'android' | 'ios' | 'swift') => {
    setDownloadSuccess(platform);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3500);
  };

  return (
    <div id="descargar" className="scroll-mt-20">
      {/* 1. Contenedor rosa con las 3 tarjetas de descarga (estilo captura 5) */}
      <section className="fm-section">
        <div className="fm-container bg-surface-pink">
          <h2 className="fm-title text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            Conoce las aplicaciones Fiamas + Panel de Control
          </h2>

          <div className="relative max-w-[1280px] mx-auto">
            {/* Flechas decorativas laterales en desktop */}
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => window.scrollBy({ top: 0, behavior: 'smooth' })}
              className="hidden xl:flex absolute -left-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-2 border-ink text-ink items-center justify-center hover:bg-ink hover:text-white transition cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => window.scrollBy({ top: 0, behavior: 'smooth' })}
              className="hidden xl:flex absolute -right-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-2 border-ink text-ink items-center justify-center hover:bg-ink hover:text-white transition cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9 items-stretch">
              {APP_CARDS.map((card) => {
                const isExpanded = expandedId === card.id;
                const isDownloaded = downloadSuccess === card.id;

                return (
                  <div
                    key={card.id}
                    className="bg-white rounded-[26px] shadow-[0_12px_34px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col justify-between"
                  >
                    {/* Cabecera superior con etiqueta naranja */}
                    <div>
                      <div className="bg-[#EEF6F8] px-6 pb-6 pt-0 text-center">
                        <div className="inline-block bg-surface-badge text-white text-xs font-extrabold uppercase tracking-wider px-6 py-1.5 rounded-b-xl shadow-xs">
                          {card.topBadge}
                        </div>

                        <div className="mt-4 flex items-center justify-center gap-2 text-ink font-semibold text-base">
                          <Smartphone className="w-5 h-5 text-ink stroke-[2]" />
                          <span>{card.roleLabel}</span>
                        </div>

                        <div className="mt-2 flex items-center justify-center gap-2 flex-wrap">
                          <h3 className="font-display font-bold text-ink text-2xl sm:text-[26px]">
                            {card.title}
                          </h3>
                          <span className="bg-[#E5B869] text-ink text-[11px] font-extrabold px-2 py-0.5 rounded inline-flex items-center gap-1">
                            👑 {card.tagBadge}
                          </span>
                          <span className="font-display font-bold text-ink text-xl">
                            {card.versionCode}
                          </span>
                        </div>

                        <p className="text-sm font-bold text-ink mt-4">{card.priceLabel}</p>
                        <div className="font-display font-extrabold text-brand-primary text-4xl sm:text-[44px] leading-none mt-1">
                          {card.priceValue}
                        </div>

                        <p className="text-xs font-bold text-ink mt-5 mb-3">
                          {card.devicesTitle}
                        </p>

                        {/* Íconos centrales tipo dispositivos disponibles */}
                        <div className="flex items-start justify-center gap-5 pt-1">
                          <div className="flex flex-col items-center max-w-[110px]">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200 p-2.5 flex items-center justify-center">
                              <img src={card.storeIcon} alt={card.storeName} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-[11px] font-extrabold text-ink mt-2">{card.storeName}</span>
                            <span className="text-[11px] text-ink-soft leading-tight">{card.storeSub}</span>
                          </div>

                          <div className="flex flex-col items-center max-w-[110px]">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200 p-2 flex items-center justify-center">
                              <img src={card.avatarIcon} alt={card.avatarName} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-[11px] font-extrabold text-ink mt-2">{card.avatarName}</span>
                            <span className="text-[11px] text-ink-soft leading-tight">{card.avatarSub}</span>
                          </div>

                          {card.id === 'swift' && (
                            <div className="flex flex-col items-center max-w-[110px]">
                              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200 p-2 flex items-center justify-center">
                                <img src={plinIcon} alt="Yape y Plin" className="w-full h-full object-contain rounded-xl" />
                              </div>
                              <span className="text-[11px] font-extrabold text-ink mt-2">PAGOS</span>
                              <span className="text-[11px] text-ink-soft leading-tight">Yape y Plin</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Franja celeste intermedia */}
                      <div className="bg-[#DFEFF2] py-4 px-5 text-center">
                        <span className="text-xs text-ink block">{card.bonusTitle}</span>
                        <span className="font-display font-extrabold text-brand-primary text-sm tracking-wide block mt-0.5">
                          {card.bonusHighlight}
                        </span>
                        <span className="text-[11px] font-bold text-ink block">{card.bonusSub}</span>
                      </div>

                      {/* Incluye */}
                      <div className="py-3.5 px-5 text-center border-b border-slate-200 text-xs sm:text-sm font-extrabold text-ink">
                        {card.includesText}
                      </div>

                      {/* Acordeón Ver detalle */}
                      <div className="border-b border-slate-200">
                        <button
                          type="button"
                          onClick={() => setExpandedId(isExpanded ? null : card.id)}
                          className="w-full py-3.5 px-5 flex items-center justify-center gap-2 text-sm font-bold text-[#008C95] hover:underline cursor-pointer"
                        >
                          <span>Ver detalle de la app</span>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {isExpanded && (
                          <ul className="px-6 pb-4 space-y-1.5 text-xs text-ink-soft text-left">
                            {card.details.map((d, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-brand-primary font-bold">•</span>
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Botón inferior */}
                    <div className="p-6 text-center">
                      <button
                        type="button"
                        onClick={() => triggerSimulatedDownload(card.id)}
                        className="fm-btn-outline w-full"
                      >
                        {isDownloaded ? (
                          <>
                            <CheckCircle2 className="w-5 h-5" />
                            <span>¡Descarga iniciada!</span>
                          </>
                        ) : (
                          <span>{card.ctaText}</span>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Puntos indicadores */}
            <div className="flex items-center justify-center gap-2.5 mt-10">
              <span className="w-10 h-3 rounded-full bg-brand-primary" />
              <span className="w-3 h-3 rounded-full bg-ink/25" />
              <span className="w-3 h-3 rounded-full bg-ink/25" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Banner de ancho completo color #1D9492 (estilo captura 8) */}
      <section className="bg-brand-primary text-white overflow-hidden mt-8">
        <div className="max-w-[1620px] mx-auto px-6 sm:px-12 lg:px-20 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Texto + botón blanco */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <h2 className="font-display font-extrabold italic text-white text-3xl sm:text-5xl leading-[1.08]">
              ¿Aún no digitalizas las cuentas de tu bodega?
            </h2>
            <p className="text-lg sm:text-xl text-white/95 font-medium">
              Dejar el cuaderno de papel con Fiamas ¡Es un buen plan!
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => triggerSimulatedDownload('android')}
                className="fm-btn-white min-w-[230px]"
              >
                Descargar Gratis
              </button>
            </div>
          </div>

          {/* Sello central blanco */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="bg-white text-brand-primary rounded-[34px] px-7 py-6 shadow-2xl flex flex-col items-center justify-center text-center max-w-[210px]">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary flex items-center justify-center mb-2">
                <img src={logoWhite} alt="Fiamas" className="w-8 h-8 object-contain" />
              </div>
              <span className="font-display font-extrabold text-2xl sm:text-3xl leading-[0.95] uppercase tracking-tight">
                UN
                <br />
                BUEN
                <br />
                PLAN
              </span>
              <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase mt-1.5 text-ink">
                FIAMAS
              </span>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <img
              src={cardTenderosImg}
              alt="Comerciante feliz con Fiamas"
              className="w-60 sm:w-72 lg:w-80 object-contain drop-shadow-2xl select-none"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
