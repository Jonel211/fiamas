import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar.tsx';
import { Hero } from '../components/Hero.tsx';
import { ProblemSolution } from '../components/ProblemSolution.tsx';
import { Solution } from '../components/Solution.tsx';
import { Benefits } from '../components/Benefits.tsx';
import { Features } from '../components/Features.tsx';
import { HowItWorks } from '../components/HowItWorks.tsx';
import { Testimonials } from '../components/Testimonials.tsx';
import { FaqSection } from '../components/FaqSection.tsx';
import { ContactSupport } from '../components/ContactSupport.tsx';
import { DownloadSection } from '../components/DownloadSection.tsx';
import { Footer } from '../components/Footer.tsx';
import { DownloadModal } from '../components/DownloadModal.tsx';
import { LegalModal } from '../components/LegalModal.tsx';

export const HomePage: React.FC = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);
  const [showNavbar, setShowNavbar] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHowItWorks = location.pathname === '/como-funciona' || location.pathname === '/funcionalidad';
  const isHelp = location.pathname === '/ayuda' || location.pathname === '/soporte' || location.pathname === '/faq' || location.pathname === '/contacto';

  // Show Navbar ONLY when scrolling past the Hero section
  useEffect(() => {
    const handleScroll = () => {
      // Hero is 100vh. When user scrolls past ~70% of screen height, reveal navbar smoothly
      const threshold = window.innerHeight * 0.65;
      setShowNavbar(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to path changes like /descargar, /terminos, /privacidad
  useEffect(() => {
    if (location.pathname === '/descargar') {
      setIsDownloadModalOpen(true);
    } else if (location.pathname === '/terminos') {
      setLegalModalType('terms');
    } else if (location.pathname === '/privacidad') {
      setLegalModalType('privacy');
    }
  }, [location.pathname]);

  const handleOpenDownload = () => {
    setIsDownloadModalOpen(true);
  };

  const handleCloseDownload = () => {
    setIsDownloadModalOpen(false);
    if (location.pathname === '/descargar') {
      navigate('/', { replace: true });
    }
  };

  const handleOpenLegal = (type: 'terms' | 'privacy') => {
    setLegalModalType(type);
  };

  const handleCloseLegal = () => {
    setLegalModalType(null);
    if (location.pathname === '/terminos' || location.pathname === '/privacidad') {
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#1D9492] selection:text-white">
      {/* Sticky Header Navigation - Appears ONLY when scrolling past Hero */}
      <Navbar onOpenDownload={handleOpenDownload} visible={showNavbar} />

      {/* Main Page Flow: Desktop has slide-over cover effect; Mobile has standard natural scroll */}
      <main className="flex-grow relative">
        {/* 1. Hero: Compartido en todas las rutas. Si deslizas hacia arriba, siempre te lleva al Hero */}
        <div className="relative lg:sticky lg:top-0 z-0 w-full min-h-screen lg:h-screen lg:overflow-hidden">
          <Hero onOpenDownload={handleOpenDownload} />
        </div>

        {/* 2. Slide-over container: On desktop (lg+), covers the sticky hero with elevation shadow. On mobile, normal sequential flow */}
        <div id="contenido-secciones" className="relative z-10 bg-white lg:shadow-[0_-25px_60px_rgba(0,0,0,0.45)]">
          
          {/* Secciones según la ruta activa */}
          {isHowItWorks ? (
            <>
              {/* Sección: Cómo empezar en tu tienda en 3 pasos */}
              <HowItWorks onOpenDownload={handleOpenDownload} />

              {/* Sección: Experiencias de comerciantes */}
              <Testimonials />
            </>
          ) : isHelp ? (
            <>
              {/* Sección: Preguntas frecuentes */}
              <FaqSection />

              {/* Sección: Soporte y atención directa */}
              <ContactSupport />
            </>
          ) : (
            <>
              {/* Secciones de Inicio */}
              <ProblemSolution />
              <Solution />
              <Benefits />
              <Features />
            </>
          )}

          {/* Sección de Descarga: Presente en todas las rutas en la parte inferior */}
          <DownloadSection />

          {/* Complete Professional Footer inside the sliding section */}
          <Footer onOpenDownload={handleOpenDownload} onOpenLegal={handleOpenLegal} />
        </div>
      </main>

      {/* Interactive Download Modal */}
      <DownloadModal isOpen={isDownloadModalOpen} onClose={handleCloseDownload} />

      {/* Legal Information Modal (Terms & Privacy) */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={handleCloseLegal}
      />
    </div>
  );
};
