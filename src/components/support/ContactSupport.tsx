import React from 'react';
import { Mail, Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import supportIcon from '../../assets/icons/support.png';

export const ContactSupport: React.FC = () => {
  return (
    <section id="soporte" className="py-16 sm:py-20 bg-white text-ink scroll-mt-20">
      <div className="max-w-[1620px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="fm-title">Canales de Soporte para tu Bodega</h2>
          <p className="text-base sm:text-xl text-ink-soft mt-3">
            Acompañamos a tu negocio todos los días. Elige el medio que te resulte más rápido desde el mostrador.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-8">
          {/* Tarjeta 1: WhatsApp (Naranja) */}
          <div className="rounded-[28px] bg-surface-orange p-7 sm:p-9 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="bg-brand-primary text-white text-xs font-extrabold uppercase px-3.5 py-1 rounded-full">
                  Canal preferido
                </span>
                <img src={supportIcon} alt="" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-display font-bold text-brand-primary text-2xl sm:text-[30px] leading-tight">
                WhatsApp de Soporte
              </h3>
              <p className="text-base text-ink mt-3 leading-relaxed">
                Escríbenos directamente para resolver dudas sobre anotaciones, clientes fiadores o sincronización sin
                internet.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/51999999999?text=Hola%20Fiamas,%20necesito%20soporte%20para%20mi%20tienda"
                target="_blank"
                rel="noopener noreferrer"
                className="fm-btn w-full"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chatear por WhatsApp</span>
              </a>
              <span className="block text-center text-xs font-bold text-ink mt-2.5">
                Respuesta promedio en menos de 10 minutos
              </span>
            </div>
          </div>

          {/* Tarjeta 2: Teléfono (Cian) */}
          <div className="rounded-[28px] bg-surface-cyan p-7 sm:p-9 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-5 shadow-sm">
                <Phone className="w-7 h-7 stroke-[2.2]" />
              </div>
              <span className="text-xs font-extrabold uppercase text-ink">Línea directa</span>
              <h3 className="font-display font-bold text-brand-primary text-2xl sm:text-[30px] leading-tight mt-1">
                Central Telefónica
              </h3>
              <p className="text-base text-ink mt-3 leading-relaxed">
                Si prefieres hablar con un asesor de soporte para configurar tu tienda o migrar tu libreta.
              </p>
              <div className="mt-5 p-4 bg-white rounded-2xl font-display font-extrabold text-xl text-brand-primary text-center shadow-xs">
                +51 (01) 640-8910
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-ink/15 text-xs sm:text-sm font-bold text-ink flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-primary shrink-0" />
              <span>Lunes a Sábado: 7:00 AM – 9:00 PM</span>
            </div>
          </div>

          {/* Tarjeta 3: Correo (Rosa) */}
          <div className="rounded-[28px] bg-surface-pink p-7 sm:p-9 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-5 shadow-sm">
                <Mail className="w-7 h-7 stroke-[2.2]" />
              </div>
              <span className="text-xs font-extrabold uppercase text-ink">Atención formal</span>
              <h3 className="font-display font-bold text-brand-primary text-2xl sm:text-[30px] leading-tight mt-1">
                Correo de Soporte
              </h3>
              <p className="text-base text-ink mt-3 leading-relaxed">
                Envíanos capturas de pantalla, solicitudes de respaldo de cuenta o consultas para varias sucursales.
              </p>
              <a
                href="mailto:soporte@fiamas.com"
                className="mt-5 block p-4 bg-white rounded-2xl font-display font-extrabold text-lg text-brand-primary text-center shadow-xs hover:underline"
              >
                soporte@fiamas.com
              </a>
            </div>

            <div className="pt-5 mt-5 border-t border-ink/15 text-xs sm:text-sm font-bold text-ink flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0" />
              <span>Respaldo de información garantizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
