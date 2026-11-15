import React from 'react';
import {
  Zap,
  MessageSquare,
  WifiOff,
  TrendingUp,
  Sliders,
  Cloud,
  Scale,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface FeatureCardItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tag: string;
  bgClass: string;
  borderClass: string;
  iconBgClass: string;
  iconColorClass: string;
  tagDividerClass: string;
  tagColorClass: string;
}

export const Features: React.FC = () => {
  const cards: FeatureCardItem[] = [
    {
      icon: Zap,
      title: 'Registro en 5 segundos',
      description: 'Anota cada fiado al instante mientras despachas, sin hacer esperar la fila ni enredarte con libretas de papel.',
      tag: 'Agilidad máxima en el mostrador',
      bgClass: 'bg-[#FFF3EA]',
      borderClass: 'border-[#FCDCC9]/80',
      iconBgClass: 'border-orange-200/80',
      iconColorClass: 'text-[#EA580C]',
      tagDividerClass: 'border-orange-200/60',
      tagColorClass: 'text-[#C2410C]'
    },
    {
      icon: MessageSquare,
      title: 'Recibos por WhatsApp',
      description: 'Envía estados de cuenta amigables y comprobantes de abono con un solo toque, manteniendo la cordialidad y la confianza.',
      tag: 'Cobranza transparente y cordial',
      bgClass: 'bg-[#EAF7EE]',
      borderClass: 'border-[#C6EBD2]/80',
      iconBgClass: 'border-emerald-200/80',
      iconColorClass: 'text-[#16A34A]',
      tagDividerClass: 'border-emerald-200/60',
      tagColorClass: 'text-[#15803D]'
    },
    {
      icon: WifiOff,
      title: 'Control 100% Offline',
      description: 'Sigue anotando y consultando deudas aunque no tengas internet en tu tienda; todo se sincroniza seguro en la nube.',
      tag: 'Funciona siempre sin interrupción',
      bgClass: 'bg-[#EEF2FF]',
      borderClass: 'border-[#D5DEFC]/80',
      iconBgClass: 'border-indigo-200/80',
      iconColorClass: 'text-[#4F46E5]',
      tagDividerClass: 'border-indigo-200/60',
      tagColorClass: 'text-[#4338CA]'
    },
    {
      icon: TrendingUp,
      title: 'Disminución de pérdidas',
      description: 'El seguimiento constante y el saldo transparente eliminan el olvido de deudas de ambas partes.',
      tag: '98% recuperación de cuentas',
      bgClass: 'bg-[#E6F7F5]',
      borderClass: 'border-[#B8EBE6]/80',
      iconBgClass: 'border-teal-200/80',
      iconColorClass: 'text-[#0D9488]',
      tagDividerClass: 'border-teal-200/60',
      tagColorClass: 'text-[#0F766E]'
    },
    {
      icon: Sliders,
      title: 'Límites de crédito',
      description: 'Asigna a cada cliente un límite máximo de fiado para evitar sobreendeudamiento involuntario.',
      tag: 'Topes personalizados por cliente',
      bgClass: 'bg-[#FEF8E7]',
      borderClass: 'border-[#FDE68A]/80',
      iconBgClass: 'border-amber-200/80',
      iconColorClass: 'text-[#D97706]',
      tagDividerClass: 'border-amber-200/60',
      tagColorClass: 'text-[#B45309]'
    },
    {
      icon: Scale,
      title: 'Cierres de caja rápidos',
      description: 'Conoce con precisión cuánto tienes en caja, cuánto fiaste hoy y cuánto cobraste en efectivo.',
      tag: '5 seg por operación de cuadre',
      bgClass: 'bg-[#F7F2FE]',
      borderClass: 'border-[#E5D7FD]/80',
      iconBgClass: 'border-purple-200/80',
      iconColorClass: 'text-[#7C3AED]',
      tagDividerClass: 'border-purple-200/60',
      tagColorClass: 'text-[#6D28D9]'
    }
  ];

  return (
    <section id="herramientas" className="py-24 sm:py-28 bg-white text-slate-900 border-t border-slate-200 relative">
      {/* Hidden anchors for seamless deep link backward compatibility */}
      <div id="caracteristicas" className="absolute -top-20" />
      <div id="beneficios" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Editorial typography: 64px, weight 400, color #000000 */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal text-black font-['Outfit',sans-serif] tracking-tight leading-[1.12]">
            Herramientas para el mostrador
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Cada función y beneficio está pensado para no quitarte tiempo mientras despachas a tus clientes y tener el control total de tus cuentas.
          </p>
        </div>

        {/* All Cards unified with identical design system */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`${card.bgClass} border ${card.borderClass} rounded-[28px] p-8 sm:p-10 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 shadow-xs`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-white/80 border ${card.iconBgClass} flex items-center justify-center ${card.iconColorClass} mb-6`}>
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-2xl sm:text-[28px] font-bold text-slate-900 leading-snug tracking-tight font-['Outfit',sans-serif]">
                    {card.title}
                  </h3>
                  <p className="text-base text-slate-700 mt-3.5 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
                <div className={`mt-8 pt-5 border-t ${card.tagDividerClass} text-xs font-semibold ${card.tagColorClass}`}>
                  <span>{card.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
