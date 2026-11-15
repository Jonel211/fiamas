import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselStep {
  number: string;
  title: string;
  description: string;
  /** Contenido adicional opcional que se muestra debajo de la descripción */
  extra?: React.ReactNode;
}

interface StepCarouselProps {
  steps: CarouselStep[];
  image?: string;
  imageAlt?: string;
  /** Clases que reemplazan la posición y el tamaño por defecto de la imagen lateral */
  imageClassName?: string;
}

/**
 * Caja de color de marca con pasos numerados conectados por una línea
 * y una tarjeta blanca que "cuelga" por debajo con el contenido del paso activo.
 */
export const StepCarousel: React.FC<StepCarouselProps> = ({ steps, image, imageAlt = '', imageClassName = '' }) => {
  const [active, setActive] = useState(0);
  const current = steps[active];

  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(steps.length - 1, i + 1));

  return (
    <div className="relative max-w-[1160px] mx-auto pb-28 sm:pb-32">
      {/* Caja de color */}
      <div className="relative bg-brand-primary rounded-[32px] sm:rounded-[40px] px-5 sm:px-10 lg:px-14 pt-10 sm:pt-12">
        {/* Muesca superior que conecta con el bloque anterior */}
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[16px] border-x-transparent border-b-[14px] border-b-brand-primary" />

        <div className="lg:w-[62%]">
          {/* Pasos numerados */}
          <div className="flex items-center mb-6 max-w-[560px] mx-auto lg:mx-0">
            {steps.map((step, idx) => {
              const isActive = idx === active;
              return (
                <React.Fragment key={step.number}>
                  <button
                    onClick={() => setActive(idx)}
                    aria-label={`Paso ${step.number}`}
                    className={`relative shrink-0 w-12 h-12 sm:w-[68px] sm:h-[68px] rounded-full border-2 border-surface-yellow flex items-center justify-center font-display font-bold text-xl sm:text-[30px] transition-colors cursor-pointer ${
                      isActive ? 'bg-surface-yellow text-brand-primary' : 'text-surface-yellow hover:bg-white/10'
                    }`}
                  >
                    {step.number}
                    {isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-0 h-0 border-x-[12px] border-x-transparent border-b-[12px] border-b-white" />
                    )}
                  </button>
                  {idx < steps.length - 1 && <span className="flex-1 h-[2px] bg-surface-yellow min-w-3" />}
                </React.Fragment>
              );
            })}
          </div>

          {/* Tarjeta blanca colgante */}
          <div className="relative bg-white rounded-[24px] shadow-[0_14px_40px_rgba(0,0,0,0.08)] px-8 sm:px-16 py-10 sm:py-14 -mb-28 sm:-mb-32 min-h-[300px] flex flex-col justify-center text-center">
            <button
              onClick={prev}
              disabled={active === 0}
              aria-label="Paso anterior"
              className="fm-arrow absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-7 disabled:opacity-50 disabled:cursor-default"
            >
              <ChevronLeft className="w-6 h-6 stroke-[3]" />
            </button>
            <button
              onClick={next}
              disabled={active === steps.length - 1}
              aria-label="Paso siguiente"
              className="fm-arrow absolute top-1/2 -translate-y-1/2 -right-6 sm:-right-7 disabled:opacity-50 disabled:cursor-default"
            >
              <ChevronRight className="w-6 h-6 stroke-[3]" />
            </button>

            <div key={current.number} className="animate-[fadeIn_250ms_ease-out]">
              <h3 className="font-display font-bold text-brand-primary text-[28px] sm:text-[38px] leading-[1.12]">
                {current.title}
              </h3>
              <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl mx-auto">
                {current.description}
              </p>
              {current.extra && <div className="mt-6 text-left">{current.extra}</div>}
            </div>
          </div>
        </div>

        {/* Imagen lateral que sobresale por arriba de la caja */}
        {image && (
          <img
            src={image}
            alt={imageAlt}
            className={`hidden lg:block absolute bottom-0 object-contain object-bottom pointer-events-none select-none ${imageClassName || 'right-4 xl:right-8 w-[40%]'}`}
          />
        )}
      </div>
    </div>
  );
};
