import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage.tsx';
import { DownloadPage } from './pages/DownloadPage.tsx';
import { SupportPage } from './pages/SupportPage.tsx';
import { LegalPage } from './pages/LegalPage.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solucion" element={<HomePage />} />
        <Route path="/beneficios" element={<HomePage />} />
        <Route path="/caracteristicas" element={<HomePage />} />
        <Route path="/como-funciona" element={<HomePage />} />
        <Route path="/faq" element={<HomePage />} />
        <Route path="/descargar" element={<DownloadPage />} />
        <Route path="/soporte" element={<SupportPage />} />
        <Route path="/contacto" element={<SupportPage />} />
        <Route path="/terminos" element={<LegalPage type="terms" />} />
        <Route path="/privacidad" element={<LegalPage type="privacy" />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
