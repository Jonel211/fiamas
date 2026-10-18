import React from 'react';
import {
  TrendingUp,
  Sliders,
  MessageSquare,
  Cloud,
  CheckCircle2,
  ShieldCheck,
  Scale
} from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefitsList = [
    {
      icon: TrendingUp,
      stat: '98%',
      statLabel: 'recuperación',
      title: 'Disminución de pérdidas',
      description: 'El seguimiento constante y el saldo transparente eliminan el olvido de deudas de ambas partes.'
    },
    {
      icon: Sliders,
      stat: 'Topes',
      statLabel: 'personalizados',
      title: 'Límites de crédito',
      description: 'Asigna a cada cliente un límite máximo de fiado para evitar sobreendeudamiento involuntario.'
    },
    {
      icon: MessageSquare,
      stat: '1 clic',
      statLabel: 'vía WhatsApp',
      title: 'Cobranza transparente',
      description: 'Envía estados de cuenta claros y comprobantes de abono sin generar tensiones vecinales.'
    },
    {
      icon: Cloud,
      stat: '100%',
      statLabel: 'seguro',
      title: 'Respaldo automático',
      description: 'Tus registros nunca se mojan, se queman ni se extravían. Siempre disponibles en la nube.'
    },
    {
      icon: Scale,
      stat: '5 seg',
      statLabel: 'por operación',
      title: 'Cierres de caja rápidos',
      description: 'Conoce con precisión cuánto tienes en caja, cuánto fiaste hoy y cuánto cobraste en efectivo.'
    },
    {
      icon: ShieldCheck,
      stat: '0%',
      statLabel: 'comisiones',
      title: 'Sin cobros sorpresa',
      description: 'No retenemos dinero ni cobramos porcentajes sobre tus cobros en mostrador.'
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Clean, grounded, no hype pill */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal text-black font-['Outfit',sans-serif] tracking-tight leading-[1.12]">
            Beneficios concretos para tu tienda
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Menos tiempo persiguiendo cobros y más certeza sobre los ingresos reales de tu negocio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((b, i) => {
            const IconComponent = b.icon;
            return (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-7 flex flex-col justify-between hover:border-[#1D9492]/50 transition duration-150"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#1D9492] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-[#1D9492] font-['Outfit',sans-serif]">
                        {b.stat}
                      </span>
                      <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider -mt-1">
                        {b.statLabel}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {b.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
