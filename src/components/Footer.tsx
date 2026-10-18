import React from 'react';
import { Download, ShieldCheck } from 'lucide-react';
import fiamasLogo from '../assets/fiamas.png';

interface FooterProps {
  onOpenDownload?: () => void;
  onOpenLegal: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload, onOpenLegal }) => {
  const handleNav = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Upper Section - Preserved columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src={fiamasLogo}
                alt="Fiamas"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Plataforma diseñada para que las tiendas de abarrotes y pequeños comercios digitalicen sus cuentas por cobrar, eliminen el cuaderno y recuperen su capital a tiempo.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F0F8F8] border border-[#1D9492]/30 text-xs text-slate-700">
              <ShieldCheck className="w-4 h-4 text-[#1D9492]" />
              <span>Respaldo seguro en la nube • 100% Offline</span>
            </div>
          </div>

          {/* Col 1: Producto */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase">
              Producto
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('solucion')} className="text-slate-600 hover:text-[#1D9492] transition cursor-pointer">
                  Solución
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('beneficios')} className="text-slate-600 hover:text-[#1D9492] transition cursor-pointer">
                  Beneficios
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('caracteristicas')} className="text-slate-600 hover:text-[#1D9492] transition cursor-pointer">
                  Características
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('como-funciona')} className="text-slate-600 hover:text-[#1D9492] transition cursor-pointer">
                  Cómo funciona
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Ayuda & Soporte */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase">
              Ayuda y Soporte
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('soporte')} className="text-slate-600 hover:text-[#1D9492] transition cursor-pointer">
                  Centro de soporte
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="text-slate-600 hover:text-[#1D9492] transition cursor-pointer">
                  Preguntas frecuentes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contacto')} className="text-slate-600 hover:text-[#1D9492] transition cursor-pointer">
                  Contacto directo
                </button>
              </li>
              {onOpenDownload && (
                <li>
                  <button onClick={onOpenDownload} className="text-[#1D9492] hover:text-[#167876] font-semibold transition cursor-pointer flex items-center gap-1.5">
                    <Download className="w-4 h-4" />
                    <span>Descargar App</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Legal y Confianza */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase">
              Legal y Confianza
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onOpenLegal('terms')} className="text-slate-600 hover:text-[#1D9492] transition cursor-pointer">
                  Términos de Uso
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('privacy')} className="text-slate-600 hover:text-[#1D9492] transition cursor-pointer">
                  Política de Privacidad
                </button>
              </li>
              <li>
                <span className="text-slate-500 text-xs">
                  Cifrado de datos y privacidad de cuentas garantizada
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip Divider */}
        <div className="border-t border-slate-200 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            
            {/* Social Icons Left */}
            <div className="flex items-center gap-4 text-[#166aea]">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#166aea] hover:opacity-75 transition-opacity"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#166aea] hover:opacity-75 transition-opacity"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#166aea] hover:opacity-75 transition-opacity"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-[#166aea] hover:opacity-75 transition-opacity"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01v8.43c0 1.43-.31 2.89-1.05 4.12-.96 1.59-2.52 2.74-4.34 3.19-1.81.44-3.79.13-5.36-.88-1.58-1.01-2.67-2.66-3-4.52-.33-1.87.17-3.83 1.34-5.3 1.16-1.47 2.94-2.38 4.82-2.47.16 0 .32 0 .48.02v4.06c-.45-.09-.92-.09-1.38 0-.91.17-1.71.74-2.18 1.54-.47.8-.54 1.79-.19 2.66.35.88 1.13 1.52 2.06 1.73.93.21 1.93-.05 2.66-.7.73-.66 1.13-1.63 1.07-2.61V.02h-.45z"/>
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="text-[#166aea] hover:opacity-75 transition-opacity"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.98-.12-2.49.02-3.56.14-.98.92-3.88.92-3.88s-.24-.47-.24-1.17c0-1.1.64-1.92 1.43-1.92.68 0 1 .51 1 1.12 0 .68-.43 1.7-.66 2.64-.19.79.39 1.43 1.17 1.43 1.41 0 2.49-1.49 2.49-3.64 0-1.9-1.37-3.23-3.32-3.23-2.42 0-3.84 1.82-3.84 3.69 0 .73.28 1.52.63 1.95a.26.26 0 0 1 .06.25c-.07.28-.22.9-.25 1.03-.04.17-.14.2-.32.13-1.2-.56-1.95-2.31-1.95-3.72 0-3.03 2.2-5.81 6.35-5.81 3.33 0 5.92 2.38 5.92 5.56 0 3.32-2.09 5.99-4.99 5.99-.97 0-1.89-.51-2.2-.11l-.6 2.28c-.22.84-.81 1.89-1.21 2.53A12 12 0 1 0 12 0z"/>
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-[#166aea] hover:opacity-75 transition-opacity"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#166aea] hover:opacity-75 transition-opacity"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/* Legal & Copyright Right */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-2 gap-y-1 font-normal text-[14px] leading-[24px] text-[#166aea]">
              <button
                onClick={() => onOpenLegal('terms')}
                className="hover:underline transition cursor-pointer"
              >
                Términos de Uso
              </button>
              <span>|</span>
              <button
                onClick={() => onOpenLegal('privacy')}
                className="hover:underline transition cursor-pointer"
              >
                Política de Privacidad
              </button>
              <span>|</span>
              <span>© 2026 Fiamas SaaS</span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};
