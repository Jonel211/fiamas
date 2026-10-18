import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage.tsx';
import { DownloadPage } from './pages/DownloadPage.tsx';
import { LegalPage } from './pages/LegalPage.tsx';

// Scroll restoration helper on route & hash changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }

    // Al navegar a /como-funciona o /ayuda, desplazarse suavemente hacia las secciones correspondientes,
    // permitiendo al usuario deslizar hacia arriba para ver el Hero
    if (
      pathname === '/como-funciona' ||
      pathname === '/funcionalidad' ||
      pathname === '/ayuda' ||
      pathname === '/soporte'
    ) {
      setTimeout(() => {
        const el = document.getElementById('contenido-secciones');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
      return;
    }

    // En la raíz (/), ir al inicio del Hero
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* 1. Raíz: Hero + ProblemSolution, Solution, Herramientas + DownloadSection */}
        <Route path="/" element={<HomePage />} />
        <Route path="/solucion" element={<HomePage />} />
        <Route path="/beneficios" element={<HomePage />} />
        <Route path="/caracteristicas" element={<HomePage />} />
        <Route path="/herramientas" element={<HomePage />} />

        {/* 2. Funcionalidad / Cómo funciona: Hero + Cómo empezar en tu tienda, Experiencias + DownloadSection */}
        <Route path="/como-funciona" element={<HomePage />} />
        <Route path="/funcionalidad" element={<HomePage />} />

        {/* 3. Ayuda y Soporte: Hero + Preguntas frecuentes, Soporte y atención directa + DownloadSection */}
        <Route path="/ayuda" element={<HomePage />} />
        <Route path="/soporte" element={<HomePage />} />
        <Route path="/faq" element={<HomePage />} />
        <Route path="/contacto" element={<HomePage />} />

        {/* Páginas complementarias */}
        <Route path="/descargar" element={<DownloadPage />} />
        <Route path="/terminos" element={<LegalPage type="terms" />} />
        <Route path="/privacidad" element={<LegalPage type="privacy" />} />

        {/* Fallback a inicio */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
