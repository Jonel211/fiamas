import React, { useState } from 'react';
import { Download, CheckCircle2, ShieldCheck, QrCode, Smartphone, Star, Sparkles } from 'lucide-react';

export const DownloadSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState<'android' | 'ios' | null>(null);

  const triggerSimulatedDownload = (platform: 'android' | 'ios') => {
    setDownloadSuccess(platform);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <section id="descargar" className="py-24 bg-[#F0F8F8] text-slate-800 relative border-t border-[#1D9492]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Wix-style clean, direct */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal text-black font-['Outfit',sans-serif] tracking-tight leading-[1.12]">
            Descarga la aplicación
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Instala Fiamas en minutos, crea tu tienda y comienza a registrar tus fiados.
          </p>
        </div>

        {/* THE TWO EXACT REQUIRED CARDS (Google Play & App Store) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* TARJETA 1: GOOGLE PLAY */}
          <div className="bg-white border border-slate-200 hover:border-[#1D9492]/50 rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 group">
            <div>
              {/* Header with Google Play Logo */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center p-3 shadow-xs">
                  <svg className="w-full h-full" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.8 17.5C36.9 23.4 30 35.1 30 50.8V461.2C30 476.9 36.9 488.6 47.8 494.5L268.4 256L47.8 17.5Z" fill="#00D3FF"/>
                    <path d="M341.7 182.8L268.4 256L341.7 329.2L424.3 282.2C448.2 268.6 448.2 243.4 424.3 229.8L341.7 182.8Z" fill="#FFCE00"/>
                    <path d="M268.4 256L47.8 494.5C53.7 497.7 60.9 499.1 68.7 494.6L341.7 329.2L268.4 256Z" fill="#FF334B"/>
                    <path d="M341.7 182.8L68.7 17.4C60.9 12.9 53.7 14.3 47.8 17.5L268.4 256L341.7 182.8Z" fill="#00E676"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Para Android</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">Google Play</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Descarga para cualquier smartphone o tablet Android. Optimizado para bajo consumo de datos y baterías de larga duración en mostrador.
              </p>

              {/* Technical specs */}
              <div className="space-y-2.5 pb-6 border-b border-slate-100 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Versión actual:</span>
                  <strong className="text-slate-900">1.4.2 (Actualizada)</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Requisitos:</span>
                  <strong className="text-slate-900">Android 8.0 o superior</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Calificación:</span>
                  <span className="text-[#E0AA3D] font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#E0AA3D]" /> 4.9 / 5 (380+ tiendas)
                  </span>
                </div>
              </div>
            </div>

            {/* BOTÓN VERDE "DESCARGAR" */}
            <div className="pt-6">
              <button
                onClick={() => triggerSimulatedDownload('android')}
                className="w-full bg-[#1D9492] hover:bg-[#177977] text-white font-extrabold py-4 px-6 rounded-2xl text-base transition-all duration-200 shadow-md shadow-[#1D9492]/20 hover:shadow-lg hover:shadow-[#1D9492]/30 flex items-center justify-center gap-2.5 active:scale-95 cursor-pointer"
              >
                {downloadSuccess === 'android' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>¡Descargando archivo APK / Play Store!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 stroke-[2.5]" />
                    <span>Descargar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* TARJETA 2: APP STORE */}
          <div className="bg-white border border-slate-200 hover:border-[#1D9492]/50 rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 group">
            <div>
              {/* Header with Apple Logo */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center p-3 shadow-xs">
                  <svg className="w-full h-full text-white" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.3-76.3-19.3-39.2 0-77.1 23.4-97.8 60.7-41.9 74.4-10.9 184.2 29.7 244.6 19.8 29.5 43.6 62.4 74.6 61.2 29.9-1.2 41.5-19.3 77.6-19.3 36.1 0 46.5 19.3 77.6 18.7 31.9-.6 52.4-29.8 72.2-59.3 22.9-34.1 32.3-67.2 32.8-68.9-1-0.5-62.8-24.8-63.4-97.1zM260.6 112.5c16.3-20.4 27.5-48.7 24.4-77.5-23.7 1-52.9 15.9-69.8 36.4-15 17.8-28.1 46.6-24.6 74.5 26.5 2.1 53.6-13 70-33.4z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Para iPhone & iPad</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">App Store</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Disponible de forma nativa para iOS. Disfruta de sincronización instantánea con iCloud y autenticación biométrica (Face ID / Touch ID).
              </p>

              {/* Technical specs */}
              <div className="space-y-2.5 pb-6 border-b border-slate-100 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Versión actual:</span>
                  <strong className="text-slate-900">1.4.2 (Oficial)</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Requisitos:</span>
                  <strong className="text-slate-900">iOS 14.0 o posterior</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Calificación:</span>
                  <span className="text-[#E0AA3D] font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#E0AA3D]" /> 4.9 / 5 (App del día)
                  </span>
                </div>
              </div>
            </div>

            {/* BOTÓN VERDE "DESCARGAR" */}
            <div className="pt-6">
              <button
                onClick={() => triggerSimulatedDownload('ios')}
                className="w-full bg-[#1D9492] hover:bg-[#177977] text-white font-extrabold py-4 px-6 rounded-2xl text-base transition-all duration-200 shadow-md shadow-[#1D9492]/20 hover:shadow-lg hover:shadow-[#1D9492]/30 flex items-center justify-center gap-2.5 active:scale-95 cursor-pointer"
              >
                {downloadSuccess === 'ios' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>¡Abriendo App Store oficial!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 stroke-[2.5]" />
                    <span>Descargar</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* QR Scan helper for Desktop */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <QrCode className="w-4 h-4 text-[#1D9492]" />
          <span>¿Estás en tu computadora? Puedes descargar directo a tu celular escaneando el código en tienda.</span>
        </div>

      </div>
    </section>
  );
};
