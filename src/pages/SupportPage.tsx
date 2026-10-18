import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar.tsx';
import { ContactSupport } from '../components/ContactSupport.tsx';
import { FaqSection } from '../components/FaqSection.tsx';
import { Footer } from '../components/Footer.tsx';
import { DownloadModal } from '../components/DownloadModal.tsx';
import { LegalModal } from '../components/LegalModal.tsx';

export const SupportPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      <Navbar onOpenDownload={() => setIsModalOpen(true)} visible={true} />

      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D9492] hover:text-[#177977] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Link>
        </div>

        <ContactSupport />
        <FaqSection />
      </main>

      <Footer onOpenDownload={() => setIsModalOpen(true)} onOpenLegal={(type) => setLegalType(type)} />
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LegalModal isOpen={legalType !== null} type={legalType} onClose={() => setLegalType(null)} />
    </div>
  );
};
