import React, { useState } from 'react';
import { X, Download, CheckCircle2 } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadedPlatform, setDownloadedPlatform] = useState<'android' | 'ios' | null>(null);

  if (!isOpen) return null;

  const handleDownloadClick = (platform: 'android' | 'ios') => {
    setDownloadedPlatform(platform);
    setTimeout(() => {
      setDownloadedPlatform(null);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-[#015B76] border border-white/20 rounded-none p-6 sm:p-10 text-white shadow-2xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button - Square corners, white text */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-none bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition cursor-pointer"
          aria-label="Cerrar modal de descarga"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Clean Header - All text in white, NO "Descarga Gratuita Oficial" badge */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif] tracking-tight">
            Instala Fiamas en tu Celular
          </h3>
          <p className="text-xs sm:text-sm text-white/90 mt-2.5 max-w-md mx-auto leading-relaxed">
            Selecciona tu sistema operativo para comenzar a registrar y cobrar los fiados de tu negocio de forma organizada.
          </p>
        </div>

        {/* The TWO Centered and Clean Download Options (Google Play & App Store) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          
          {/* Card Google Play */}
          <div className="bg-white/10 border border-white/20 rounded-none p-6 text-center flex flex-col justify-between items-center transition hover:bg-white/15">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-none bg-white border border-white/30 flex items-center justify-center p-3 mb-4 shadow-sm">
                <svg className="w-full h-full" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.8 17.5C36.9 23.4 30 35.1 30 50.8V461.2C30 476.9 36.9 488.6 47.8 494.5L268.4 256L47.8 17.5Z" fill="#00D3FF"/>
                  <path d="M341.7 182.8L268.4 256L341.7 329.2L424.3 282.2C448.2 268.6 448.2 243.4 424.3 229.8L341.7 182.8Z" fill="#FFCE00"/>
                  <path d="M268.4 256L47.8 494.5C53.7 497.7 60.9 499.1 68.7 494.6L341.7 329.2L268.4 256Z" fill="#FF334B"/>
                  <path d="M341.7 182.8L68.7 17.4C60.9 12.9 53.7 14.3 47.8 17.5L268.4 256L341.7 182.8Z" fill="#00E676"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white">Google Play</h4>
              <p className="text-xs text-white/80 mt-1 mb-5">
                Android 8.0 o superior
              </p>
            </div>

            <button
              onClick={() => handleDownloadClick('android')}
              className="w-full bg-[#1D9492] hover:bg-[#167876] text-white font-extrabold py-3 px-4 rounded-none text-xs sm:text-sm border border-white/20 transition flex items-center justify-center gap-2 active:scale-98 cursor-pointer shadow-md"
            >
              {downloadedPlatform === 'android' ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span className="text-white">¡Descarga iniciada!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 stroke-[2.5] text-white" />
                  <span className="text-white">Descargar para Android</span>
                </>
              )}
            </button>
          </div>

          {/* Card App Store */}
          <div className="bg-white/10 border border-white/20 rounded-none p-6 text-center flex flex-col justify-between items-center transition hover:bg-white/15">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-none bg-slate-900 border border-white/30 flex items-center justify-center p-3 mb-4 shadow-sm">
                <svg className="w-full h-full text-white" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.3-76.3-19.3-39.2 0-77.1 23.4-97.8 60.7-41.9 74.4-10.9 184.2 29.7 244.6 19.8 29.5 43.6 62.4 74.6 61.2 29.9-1.2 41.5-19.3 77.6-19.3 36.1 0 46.5 19.3 77.6 18.7 31.9-.6 52.4-29.8 72.2-59.3 22.9-34.1 32.3-67.2 32.8-68.9-1-0.5-62.8-24.8-63.4-97.1zM260.6 112.5c16.3-20.4 27.5-48.7 24.4-77.5-23.7 1-52.9 15.9-69.8 36.4-15 17.8-28.1 46.6-24.6 74.5 26.5 2.1 53.6-13 70-33.4z"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white">App Store</h4>
              <p className="text-xs text-white/80 mt-1 mb-5">
                iOS 14.0 o superior
              </p>
            </div>

            <button
              onClick={() => handleDownloadClick('ios')}
              className="w-full bg-[#1D9492] hover:bg-[#167876] text-white font-extrabold py-3 px-4 rounded-none text-xs sm:text-sm border border-white/20 transition flex items-center justify-center gap-2 active:scale-98 cursor-pointer shadow-md"
            >
              {downloadedPlatform === 'ios' ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span className="text-white">¡Descarga iniciada!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 stroke-[2.5] text-white" />
                  <span className="text-white">Descargar para iPhone</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Back link - White text, No border-radius */}
        <div className="text-center pt-1">
          <button
            onClick={onClose}
            className="text-xs text-white/80 hover:text-white underline rounded-none cursor-pointer"
          >
            Volver a la página principal
          </button>
        </div>
      </div>
    </div>
  );
};
