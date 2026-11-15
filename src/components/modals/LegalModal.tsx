import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 text-slate-800 shadow-2xl max-h-[85vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition cursor-pointer"
          aria-label="Cerrar modal legal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'terms' ? (
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#EBF4FC] text-[#1D9492] border border-[#B1D8F7] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Outfit',sans-serif]">Términos y Condiciones de Servicio</h3>
                <p className="text-xs text-slate-500">Última actualización: Enero 2026</p>
              </div>
            </div>

            <p>
              Bienvenido a <strong>Fiamas</strong>. Al registrarte o descargar nuestra aplicación móvil y acceder a la plataforma web de administración, aceptas los siguientes términos de servicio diseñados para proteger tanto a comerciantes como a sus clientes fiadores.
            </p>

            <h4 className="text-sm font-bold text-slate-900 pt-2">1. Objeto del Ecosistema</h4>
            <p>
              Fiamas es una herramienta de software como servicio (SaaS) que digitaliza y automatiza el registro de crédito informal ("fiados"), emisión de comprobantes digitales, control de límites de crédito y recordatorios de pago para comercios minoristas. Fiamas actúa como facilitador tecnológico y de registro, no como una entidad bancaria ni financiera prestamista.
            </p>

            <h4 className="text-sm font-bold text-slate-900 pt-2">2. Responsabilidad de la Información</h4>
            <p>
              El comerciante o tendero es responsable de la veracidad y exactitud de los montos, productos registrados y números telefónicos ingresados. Fiamas garantiza la persistencia, encriptación y custodia tecnológica de las bases de datos registradas.
            </p>

            <h4 className="text-sm font-bold text-slate-900 pt-2">3. Disponibilidad y Sincronización</h4>
            <p>
              Fiamas opera bajo una arquitectura híbrida con soporte sin conexión (offline-first). Las anotaciones locales se sincronizarán con los servidores de Fiamas tan pronto el dispositivo cuente con conectividad.
            </p>

            <h4 className="text-sm font-bold text-slate-900 pt-2">4. Planes y Licenciamiento</h4>
            <p>
              El plan inicial gratuito otorga acceso a las funcionalidades esenciales de fiados. Los planes de mayor capacidad para múltiples sucursales o usuarios concurrentes se rigen bajo tarifas fijas mensuales sin comisiones sobre tus ventas.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#EBF4FC] text-[#1D9492] border border-[#B1D8F7] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Outfit',sans-serif]">Política y Aviso de Privacidad</h3>
                <p className="text-xs text-slate-500">Protección estricta de datos comerciales</p>
              </div>
            </div>

            <p>
              En <strong>Fiamas</strong> entendemos que los fiados representan el corazón y la confianza de tu tienda de barrio. Nos comprometemos solemnemente a proteger la confidencialidad de tus datos y los de tus clientes.
            </p>

            <h4 className="text-sm font-bold text-slate-900 pt-2">1. Información que recopilamos</h4>
            <p>
              Recopilamos únicamente los datos necesarios para la prestación del servicio: nombre del negocio, número de teléfono del tendero, nombres de pila o apodos de clientes para su libreta digital, números de teléfono para el envío consentido de recibos de WhatsApp y montos de transacciones.
            </p>

            <h4 className="text-sm font-bold text-slate-900 pt-2">2. Uso exclusivo de los datos</h4>
            <p>
              <strong>Nunca vendemos, alquilamos ni compartimos</strong> la información de tus clientes ni tus saldos con terceros, agencias de publicidad o entidades de cobranza externa. Tus registros son propiedad exclusiva de tu negocio.
            </p>

            <h4 className="text-sm font-bold text-slate-900 pt-2">3. Seguridad y Encriptación</h4>
            <p>
              Todas las comunicaciones entre la aplicación móvil, el panel web y nuestras bases de datos PostgreSQL están protegidas mediante protocolos SSL/TLS, contraseñas con hash bcrypt y tokens de autenticación JWT de alta seguridad.
            </p>

            <h4 className="text-sm font-bold text-slate-900 pt-2">4. Derechos del Titular</h4>
            <p>
              Puedes solicitar la exportación completa de tus registros a formatos universales (Excel, PDF) o la eliminación definitiva de tu cuenta y base de datos en cualquier momento escribiendo a privacidad@fiamas.com.
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="bg-[#1D9492] hover:bg-[#177977] text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition cursor-pointer"
          >
            Entendido y Aceptado
          </button>
        </div>
      </div>
    </div>
  );
};
