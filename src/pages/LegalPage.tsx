import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, FileText } from 'lucide-react';
import { Navbar } from '../components/Navbar.tsx';
import { Footer } from '../components/Footer.tsx';
import { DownloadModal } from '../components/DownloadModal.tsx';
import { LegalModal } from '../components/LegalModal.tsx';

interface LegalPageProps {
  type: 'terms' | 'privacy';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      <Navbar onOpenDownload={() => setIsModalOpen(true)} visible={true} />

      <main className="flex-grow pt-28 pb-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D9492] hover:text-[#177977] transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al Inicio
            </Link>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            {type === 'terms' ? (
              <>
                <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF4FC] text-[#1D9492] border border-[#B1D8F7] flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                      Términos y Condiciones de Servicio
                    </h1>
                    <p className="text-xs text-slate-500 mt-1">Ecosistema Fiamas SaaS • Versión 1.0.0</p>
                  </div>
                </div>

                <p>
                  El presente acuerdo regula el uso y acceso al sistema <strong>Fiamas</strong>, compuesto por la aplicación móvil y la plataforma web de gestión comercial para tiendas de abarrotes, bodegas y comercios minoristas.
                </p>

                <h2 className="text-lg font-bold text-slate-900 pt-3">1. Naturaleza de la Solución</h2>
                <p>
                  Fiamas es un software de registro contable y administrativo para crédito informal ("fiados"). La plataforma permite registrar clientes, fijar límites de endeudamiento prudencial, registrar abonos y generar comprobantes digitales. Fiamas no otorga créditos financieros directos ni actúa como intermediario de cobranza coactiva.
                </p>

                <h2 className="text-lg font-bold text-slate-900 pt-3">2. Privacidad de los Registros del Tendero</h2>
                <p>
                  Cada comercio es el titular exclusivo de su libreta digital. Fiamas no comercializa ni comparte la lista de deudores o fiados con terceros o entidades crediticias.
                </p>

                <h2 className="text-lg font-bold text-slate-900 pt-3">3. Uso Aceptable</h2>
                <p>
                  El usuario se compromete a ingresar información veraz y utilizar los canales de notificación por WhatsApp de manera respetuosa y con el consentimiento previo de sus clientes.
                </p>
              </>
            ) : (
              <>
                <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF4FC] text-[#1D9492] border border-[#B1D8F7] flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                      Política de Privacidad y Seguridad
                    </h1>
                    <p className="text-xs text-slate-500 mt-1">Protección estricta de datos del comercio popular</p>
                  </div>
                </div>

                <p>
                  En <strong>Fiamas</strong> la privacidad y la confianza de tu negocio son nuestra máxima prioridad. Entendemos el valor del crédito de palabra y protegemos celosamente cada registro de tu tienda.
                </p>

                <h2 className="text-lg font-bold text-slate-900 pt-3">1. Datos Recopilados</h2>
                <p>
                  Solo recabamos los datos estrictamente necesarios para el funcionamiento de tus registros: nombre del comercio, teléfono del titular para la autenticación, nombres o apodos de clientes para la libreta de fiados y números de WhatsApp para el envío de comprobantes de pago.
                </p>

                <h2 className="text-lg font-bold text-slate-900 pt-3">2. Medidas de Seguridad</h2>
                <p>
                  Implementamos encriptación de datos en tránsito y en reposo, contraseñas hasheadas con bcrypt, tokens JWT de corta duración y bases de datos en la nube con respaldos automáticos diarios.
                </p>

                <h2 className="text-lg font-bold text-slate-900 pt-3">3. Derechos ARCO</h2>
                <p>
                  Puedes ejercer tus derechos de acceso, rectificación, cancelación u oposición enviando un correo a <a href="mailto:privacidad@fiamas.com" className="text-[#1D9492] underline">privacidad@fiamas.com</a>.
                </p>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer onOpenDownload={() => setIsModalOpen(true)} onOpenLegal={(type) => setLegalType(type)} />
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LegalModal isOpen={legalType !== null} type={legalType} onClose={() => setLegalType(null)} />
    </div>
  );
};
