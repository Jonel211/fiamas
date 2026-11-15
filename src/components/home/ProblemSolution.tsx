import React from 'react';
import { StepCarousel } from './StepCarousel.tsx';
import { INTRO_STEPS } from '../../data/landingData.ts';
import tiendaImg from '../../assets/images/tienda.png';
import billeteIcon from '../../assets/icons/billete.png';
import lightIcon from '../../assets/icons/light.png';

/**
 * Bloque introductorio del Inicio: texto destacado en tarjeta blanca
 * y carrusel de pasos con las preguntas clave sobre Fiamas.
 */
export const ProblemSolution: React.FC = () => {
  return (
    <div id="problema-solucion" className="relative scroll-mt-24">
      {/* Íconos decorativos flotantes */}
      <img
        src={billeteIcon}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute -top-6 -left-4 lg:-left-10 w-20 lg:w-24 drop-shadow-xl animate-floaty pointer-events-none"
      />
      <img
        src={lightIcon}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute -top-12 -right-4 lg:-right-10 w-24 lg:w-32 drop-shadow-xl animate-floaty [animation-delay:1.2s] pointer-events-none"
      />

      {/* Texto introductorio */}
      <div className="fm-card max-w-[1380px] mx-auto px-6 sm:px-12 py-7 sm:py-8 text-center">
        <p className="text-lg sm:text-[22px] leading-relaxed text-ink">
          Con <strong>Fiamas</strong> podrás digitalizar el <strong>fiado de tu bodega</strong>, conocer el saldo de cada
          cliente al instante y cobrar sin incomodidades. Descubre qué es, cómo funciona y por qué es{' '}
          <strong>la mejor forma de dejar el cuaderno</strong> en simples pasos.
        </p>
      </div>

      {/* Carrusel de preguntas clave */}
      <div className="mt-16 sm:mt-24">
        <StepCarousel
          steps={INTRO_STEPS}
          image={tiendaImg}
          imageAlt="Bodega atendida con Fiamas"
          imageClassName="w-[44%] -right-6 xl:-right-10 translate-y-6"
        />
      </div>
    </div>
  );
};
