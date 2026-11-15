import React, { useState } from 'react';
import { Download, CheckCircle2, ShieldCheck, QrCode, Star, Users, Store, Smartphone } from 'lucide-react';

export const DownloadSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState<'android' | 'ios' | 'swift' | null>(null);

  const triggerSimulatedDownload = (platform: 'android' | 'ios' | 'swift') => {
    setDownloadSuccess(platform);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <section id="descargar" className="py-24 bg-[#F0F8F8] text-slate-800 relative border-t border-[#1D9492]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal not-italic text-[#000000] font-['Outfit',sans-serif] tracking-tight leading-tight lg:leading-[70px]">
            Descarga la aplicación
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Herramientas diseñadas tanto para el comerciante que gestiona el mostrador como para el cliente que consulta su saldo.
          </p>
        </div>

        {/* 3 CARDS: TENDERO (Android), TENDERO (iOS), CLIENTE (iOS / iPhone) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* TARJETA 1: TENDERO - ANDROID (GOOGLE PLAY) */}
          <div className="bg-white border border-slate-200 hover:border-[#1D9492]/60 rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 group">
            <div>
              {/* Header with Google Play Logo */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-2.5 shadow-xs shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.8 17.5C36.9 23.4 30 35.1 30 50.8V461.2C30 476.9 36.9 488.6 47.8 494.5L268.4 256L47.8 17.5Z" fill="#00D3FF"/>
                    <path d="M341.7 182.8L268.4 256L341.7 329.2L424.3 282.2C448.2 268.6 448.2 243.4 424.3 229.8L341.7 182.8Z" fill="#FFCE00"/>
                    <path d="M268.4 256L47.8 494.5C53.7 497.7 60.9 499.1 68.7 494.6L341.7 329.2L268.4 256Z" fill="#FF334B"/>
                    <path d="M341.7 182.8L68.7 17.4C60.9 12.9 53.7 14.3 47.8 17.5L268.4 256L341.7 182.8Z" fill="#00E676"/>
                  </svg>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1D9492]">
                    <Store className="w-3 h-3" /> Para el Tendero
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">Fiamas Tendero</h3>
                  <span className="text-xs text-slate-500 font-medium">Google Play (Android)</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Para el comerciante en mostrador. Registra compras a fiado en 5 segundos, calcula saldos automáticos y funciona 100% sin internet.
              </p>

              {/* Technical specs */}
              <div className="space-y-2 pb-5 border-b border-slate-100 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Plataforma:</span>
                  <strong className="text-slate-900">Android 8.0 o superior</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Uso principal:</span>
                  <strong className="text-slate-900">Mostrador & Cobranza</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Calificación:</span>
                  <span className="text-[#E0AA3D] font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#E0AA3D]" /> 4.9 / 5 (380+ tiendas)
                  </span>
                </div>
              </div>
            </div>

            {/* BOTÓN DESCARGAR */}
            <div className="pt-5">
              <button
                onClick={() => triggerSimulatedDownload('android')}
                className="w-full bg-[#1D9492] hover:bg-[#177977] text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                {downloadSuccess === 'android' ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>¡Descargando Tendero (Android)!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 stroke-[2.5]" />
                    <span>Descargar para Android</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* TARJETA 2: TENDERO - IOS (APP STORE) */}
          <div className="bg-white border border-slate-200 hover:border-[#1D9492]/60 rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 group">
            <div>
              {/* Header with Apple Logo */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center p-2.5 shadow-xs shrink-0">
                  <svg className="w-full h-full text-white" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.3-76.3-19.3-39.2 0-77.1 23.4-97.8 60.7-41.9 74.4-10.9 184.2 29.7 244.6 19.8 29.5 43.6 62.4 74.6 61.2 29.9-1.2 41.5-19.3 77.6-19.3 36.1 0 46.5 19.3 77.6 18.7 31.9-.6 52.4-29.8 72.2-59.3 22.9-34.1 32.3-67.2 32.8-68.9-1-0.5-62.8-24.8-63.4-97.1zM260.6 112.5c16.3-20.4 27.5-48.7 24.4-77.5-23.7 1-52.9 15.9-69.8 36.4-15 17.8-28.1 46.6-24.6 74.5 26.5 2.1 53.6-13 70-33.4z"/>
                  </svg>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1D9492]">
                    <Store className="w-3 h-3" /> Para el Tendero
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">Fiamas Tendero</h3>
                  <span className="text-xs text-slate-500 font-medium">App Store (iOS)</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Para comerciantes con iPhone o iPad. Control consolidado de cuentas por cobrar, estados de cuenta para exportar y respaldo en la nube.
              </p>

              {/* Technical specs */}
              <div className="space-y-2 pb-5 border-b border-slate-100 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Plataforma:</span>
                  <strong className="text-slate-900">iOS 14.0 o posterior</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dispositivos:</span>
                  <strong className="text-slate-900">iPhone & iPad</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Seguridad:</span>
                  <span className="text-[#1D9492] font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Face ID & Touch ID
                  </span>
                </div>
              </div>
            </div>

            {/* BOTÓN DESCARGAR */}
            <div className="pt-5">
              <button
                onClick={() => triggerSimulatedDownload('ios')}
                className="w-full bg-[#1D9492] hover:bg-[#167876] text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                {downloadSuccess === 'ios' ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>¡Descargando Tendero (iOS)!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 stroke-[2.5]" />
                    <span>Descargar para iPhone</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* TARJETA 3: CLIENTE - IPHONE (IOS) COLOR #E0AA3D */}
          <div className="bg-white border-2 border-[#E0AA3D]/40 hover:border-[#E0AA3D] rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 group relative overflow-hidden">
            
            {/* Top Highlight Badge */}
            <div className="absolute top-0 right-0 bg-[#E0AA3D] text-slate-900 text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Para Clientes
            </div>

            <div>
              {/* Header with Apple Logo in #E0AA3D style */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-14 h-14 rounded-xl bg-[#FFFBF0] border border-[#E0AA3D]/30 flex items-center justify-center p-2.5 shadow-xs shrink-0">
                  <svg className="w-full h-full text-[#E0AA3D]" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.3-76.3-19.3-39.2 0-77.1 23.4-97.8 60.7-41.9 74.4-10.9 184.2 29.7 244.6 19.8 29.5 43.6 62.4 74.6 61.2 29.9-1.2 41.5-19.3 77.6-19.3 36.1 0 46.5 19.3 77.6 18.7 31.9-.6 52.4-29.8 72.2-59.3 22.9-34.1 32.3-67.2 32.8-68.9-1-0.5-62.8-24.8-63.4-97.1zM260.6 112.5c16.3-20.4 27.5-48.7 24.4-77.5-23.7 1-52.9 15.9-69.8 36.4-15 17.8-28.1 46.6-24.6 74.5 26.5 2.1 53.6-13 70-33.4z"/>
                  </svg>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-[#E0AA3D]">
                    <Users className="w-3 h-3" /> Para el Cliente
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">Fiamas Clientes</h3>
                  <span className="text-xs text-slate-500 font-medium">Disponible para iPhone (iOS)</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Para que tus clientes y vecinos consulten su saldo fiado, revisen el detalle de sus compras y verifiquen sus abonos directo desde su iPhone.
              </p>

              {/* Technical specs */}
              <div className="space-y-2 pb-5 border-b border-slate-100 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Plataforma:</span>
                  <strong className="text-slate-900">iOS 14.0 o posterior</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dispositivos:</span>
                  <strong className="text-slate-900">iPhone & iPad</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Beneficio:</span>
                  <span className="text-[#E0AA3D] font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Saldo claro y transparente
                  </span>
                </div>
              </div>
            </div>

            {/* BOTÓN DESCARGAR */}
            <div className="pt-5">
              <button
                onClick={() => triggerSimulatedDownload('swift')}
                className="w-full bg-[#E0AA3D] hover:bg-[#c99530] text-slate-900 font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                {downloadSuccess === 'swift' ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-slate-900" />
                    <span>¡Descargando Fiamas Clientes!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 stroke-[2.5]" />
                    <span>Descargar para iPhone</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* QR Scan helper for Desktop */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <QrCode className="w-4 h-4 text-[#1D9492]" />
          <span>Tanto tenderos como clientes pueden escanear el código QR en mostrador para instalar la app que les corresponde.</span>
        </div>

      </div>
    </section>
  );
};
