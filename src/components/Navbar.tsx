import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Download } from 'lucide-react';
import fiamasLogo from '../assets/fiamas.png';

interface NavbarProps {
  onOpenDownload: () => void;
  visible?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, visible = true }) => {
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileHelpOpen, setMobileHelpOpen] = useState(false);

  const productRef = useRef<HTMLDivElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const isHowItWorksActive = location.pathname === '/como-funciona' || location.pathname === '/funcionalidad';
  const isHelpActive = location.pathname === '/ayuda' || location.pathname === '/soporte' || location.pathname === '/faq';

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productRef.current && !productRef.current.contains(event.target as Node)) {
        setProductDropdownOpen(false);
      }
      if (helpRef.current && !helpRef.current.contains(event.target as Node)) {
        setHelpDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSectionNav = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setProductDropdownOpen(false);
    setHelpDropdownOpen(false);
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      navigate('/#' + sectionId);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${visible
        ? 'translate-y-0 opacity-100 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3.5'
        : '-translate-y-full opacity-0 pointer-events-none py-3.5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center group focus:outline-none py-0.5"
            aria-label="Fiamas Inicio"
          >
            <img
              src={fiamasLogo}
              alt="Fiamas"
              className="h-9 sm:h-10 w-auto object-contain group-hover:opacity-90 transition duration-150"
            />
          </a>

          {/* Desktop Navigation - Clean Text Only, No Icons in Menu Options */}
          <nav className="hidden md:flex items-center gap-6">

            {/* 1. PRODUCTO DROPDOWN */}
            <div className="relative" ref={productRef}>
              <button
                onClick={() => {
                  setProductDropdownOpen(!productDropdownOpen);
                  setHelpDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 py-2 text-[16px] font-bold transition-colors cursor-pointer ${productDropdownOpen
                  ? 'text-[#1D9492]'
                  : 'text-[#000000] hover:text-[#1D9492]'
                  }`}
              >
                <span>Producto</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productDropdownOpen ? 'rotate-180 text-[#1D9492]' : 'text-slate-600'}`} />
              </button>

              {productDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-none p-2 border border-slate-200 shadow-lg animate-in fade-in duration-150">
                  <a
                    href="/#solucion"
                    onClick={(e) => handleSectionNav(e, 'solucion')}
                    className="block px-3 py-2 text-[16px] font-bold text-[#000000] hover:text-[#1D9492] hover:bg-slate-50 transition-colors"
                  >
                    Solución
                  </a>
                  <a
                    href="/#beneficios"
                    onClick={(e) => handleSectionNav(e, 'beneficios')}
                    className="block px-3 py-2 text-[16px] font-bold text-[#000000] hover:text-[#1D9492] hover:bg-slate-50 transition-colors"
                  >
                    Beneficios
                  </a>
                  <a
                    href="/#caracteristicas"
                    onClick={(e) => handleSectionNav(e, 'caracteristicas')}
                    className="block px-3 py-2 text-[16px] font-bold text-[#000000] hover:text-[#1D9492] hover:bg-slate-50 transition-colors"
                  >
                    Características
                  </a>
                </div>
              )}
            </div>

            {/* 2. CÓMO FUNCIONA (Ruta separada: /como-funciona) */}
            <Link
              to="/como-funciona"
              className={`py-2 text-[16px] font-bold transition-colors cursor-pointer ${isHowItWorksActive
                ? 'text-[#1D9492] border-b-2 border-[#1D9492]'
                : 'text-[#000000] hover:text-[#1D9492]'
                }`}
            >
              Cómo funciona
            </Link>

            {/* 3. AYUDA DROPDOWN */}
            <div className="relative" ref={helpRef}>
              <button
                onClick={() => {
                  setHelpDropdownOpen(!helpDropdownOpen);
                  setProductDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 py-2 text-[16px] font-bold transition-colors cursor-pointer ${helpDropdownOpen || isHelpActive
                  ? 'text-[#1D9492]'
                  : 'text-[#000000] hover:text-[#1D9492]'
                  }`}
              >
                <span>Ayuda</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${helpDropdownOpen ? 'rotate-180 text-[#1D9492]' : 'text-slate-600'}`} />
              </button>

              {helpDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-none p-2 border border-slate-200 shadow-lg animate-in fade-in duration-150">
                  <Link
                    to="/ayuda#faq"
                    onClick={() => setHelpDropdownOpen(false)}
                    className="block px-3 py-2 text-[16px] font-bold text-[#000000] hover:text-[#1D9492] hover:bg-slate-50 transition-colors"
                  >
                    Preguntas frecuentes
                  </Link>
                  <Link
                    to="/ayuda#soporte"
                    onClick={() => setHelpDropdownOpen(false)}
                    className="block px-3 py-2 text-[16px] font-bold text-[#000000] hover:text-[#1D9492] hover:bg-slate-50 transition-colors"
                  >
                    Soporte
                  </Link>
                  <Link
                    to="/ayuda#atencion-directa"
                    onClick={() => setHelpDropdownOpen(false)}
                    className="block px-3 py-2 text-[16px] font-bold text-[#000000] hover:text-[#1D9492] hover:bg-slate-50 transition-colors"
                  >
                    Atención directa
                  </Link>
                </div>
              )}
            </div>

          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDownload}
              className="inline-flex items-center gap-2 bg-[#1D9492] hover:bg-[#167876] text-white font-bold px-5 py-2.5 rounded-xl text-sm transition duration-150 shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Descargar APP</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenDownload}
              className="sm:hidden inline-flex items-center gap-1.5 bg-[#1D9492] text-white font-bold px-3 py-1.5 rounded-lg text-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>App</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer - Clean Text Only */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-150">

          {/* Mobile Producto Accordion */}
          <div>
            <button
              onClick={() => setMobileProductOpen(!mobileProductOpen)}
              className="w-full flex items-center justify-between py-2.5 text-[16px] font-bold text-[#000000]"
            >
              <span>Producto</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductOpen ? 'rotate-180 text-[#1D9492]' : 'text-slate-600'}`} />
            </button>
            {mobileProductOpen && (
              <div className="pl-3 space-y-1 pb-2">
                <a
                  href="/#solucion"
                  onClick={(e) => handleSectionNav(e, 'solucion')}
                  className="block py-2 text-[16px] font-bold text-[#000000] hover:text-[#1D9492] transition-colors"
                >
                  Solución
                </a>
                <a
                  href="/#beneficios"
                  onClick={(e) => handleSectionNav(e, 'beneficios')}
                  className="block py-2 text-[16px] font-bold text-[#000000] hover:text-[#1D9492] transition-colors"
                >
                  Beneficios
                </a>
                <a
                  href="/#caracteristicas"
                  onClick={(e) => handleSectionNav(e, 'caracteristicas')}
                  className="block py-2 text-[16px] font-bold text-[#000000] hover:text-[#1D9492] transition-colors"
                >
                  Características
                </a>
              </div>
            )}
          </div>

          {/* Cómo Funciona */}
          <Link
            to="/como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2.5 text-[16px] font-bold transition-colors ${isHowItWorksActive ? 'text-[#1D9492]' : 'text-[#000000] hover:text-[#1D9492]'
              }`}
          >
            Cómo funciona
          </Link>

          {/* Mobile Ayuda Accordion */}
          <div>
            <button
              onClick={() => setMobileHelpOpen(!mobileHelpOpen)}
              className="w-full flex items-center justify-between py-2.5 text-[16px] font-bold text-[#000000]"
            >
              <span>Ayuda</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileHelpOpen ? 'rotate-180 text-[#1D9492]' : 'text-slate-600'}`} />
            </button>
            {mobileHelpOpen && (
              <div className="pl-3 space-y-1 pb-2">
                <Link
                  to="/ayuda"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[16px] font-bold text-[#000000] hover:text-[#1D9492] transition-colors"
                >
                  Centro de Ayuda
                </Link>
                <Link
                  to="/ayuda#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[16px] font-bold text-[#000000] hover:text-[#1D9492] transition-colors"
                >
                  Preguntas frecuentes
                </Link>
                <Link
                  to="/ayuda#soporte"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[16px] font-bold text-[#000000] hover:text-[#1D9492] transition-colors"
                >
                  Soporte
                </Link>
                <Link
                  to="/ayuda#atencion-directa"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-[16px] font-bold text-[#000000] hover:text-[#1D9492] transition-colors"
                >
                  Atención directa
                </Link>
              </div>
            )}
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full py-3 bg-[#1D9492] hover:bg-[#167876] text-white font-bold rounded-xl text-center shadow-xs flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              Descargar APP
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
