import React from 'react';
import { QrCode, ScanBarcode, BarChart3, ShieldCheck, BellRing, CheckCircle2 } from 'lucide-react';
import { StepCarousel, CarouselStep } from './StepCarousel.tsx';
import tiendaImg from '../../assets/images/tienda.png';
import cardTiendasImg from '../../assets/images/card-tiendas.png';
import gearsIcon from '../../assets/icons/gears.png';
import homeIcon from '../../assets/icons/home.png';
import loadingIcon from '../../assets/icons/loading.png';
import menuIcon from '../../assets/icons/menu.png';

interface HowItWorksProps {
  onOpenDownload: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDownload }) => {
  const steps: CarouselStep[] = [
    {
      number: '01',
      title: 'Instala la app y regístrate en 1 minuto',
      description:
        'Descarga Fiamas gratis en tu celular Android o iPhone e ingresa tu DNI y número telefónico para recibir tu código SMS de activación.',
      extra: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center">
          <div className="bg-surface-yellow-soft p-3 rounded-xl border border-brand-primary/20">
            <span className="text-[11px] text-ink-soft block">DNI del Titular</span>
            <span className="text-sm font-extrabold text-ink">45892103</span>
          </div>
          <div className="bg-surface-yellow-soft p-3 rounded-xl border border-brand-primary/20">
            <span className="text-[11px] text-ink-soft block">Celular (Login)</span>
            <span className="text-sm font-extrabold text-ink">+51 987 654 321</span>
          </div>
          <div className="bg-surface-yellow-soft p-3 rounded-xl border border-brand-primary/20">
            <span className="text-[11px] text-ink-soft block">Código SMS</span>
            <span className="text-sm font-extrabold text-brand-primary tracking-widest">4 8 2 9 1 0</span>
          </div>
        </div>
      )
    },
    {
      number: '02',
      title: 'Configura tu tienda y catálogo de productos',
      description:
        'Crea el perfil de tu bodega para generar su código QR único y organiza tus productos por unidad o por peso (kilo) con lector de barras.',
      extra: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="p-3 bg-surface-cyan/45 rounded-xl border border-brand-primary/25 flex justify-between items-center">
            <div>
              <span className="text-xs font-extrabold text-ink block">Arroz Extra (Peso)</span>
              <span className="text-[11px] text-ink-soft">Venta por Kilo (kg)</span>
            </div>
            <span className="text-sm font-extrabold text-brand-primary">S/ 4.20 /kg</span>
          </div>
          <div className="p-3 bg-surface-cyan/45 rounded-xl border border-brand-primary/25 flex justify-between items-center">
            <div>
              <span className="text-xs font-extrabold text-ink block">Aceite Vegetal 1L</span>
              <span className="text-[11px] text-ink-soft">Escáner de barras</span>
            </div>
            <span className="text-sm font-extrabold text-brand-primary">S/ 8.50 /un</span>
          </div>
        </div>
      )
    },
    {
      number: '03',
      title: 'Vincula a tus vecinos y asigna límites',
      description:
        'Agrega a tus clientes habituales con su celular o escaneando el QR de tu tienda, define su tope de crédito y consulta su semáforo de pago.',
      extra: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
            <div>
              <span className="text-xs font-extrabold text-ink block">Doña Rosaura</span>
              <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                <QrCode className="w-3 h-3" /> Score 95/100 • Al día
              </span>
            </div>
            <span className="text-sm font-extrabold text-brand-primary">S/ 42.50</span>
          </div>
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between">
            <div>
              <span className="text-xs font-extrabold text-ink block">Don Carlos</span>
              <span className="text-[11px] text-amber-800 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Cerca al límite (S/ 200)
              </span>
            </div>
            <span className="text-sm font-extrabold text-amber-800">S/ 185.00</span>
          </div>
        </div>
      )
    },
    {
      number: '04',
      title: 'Despacha con escáner y cobra por WhatsApp',
      description:
        'Anota cada compra fiada en 5 segundos y envía recibos claros o recordatorios cordiales al WhatsApp de tu cliente con un toque.',
      extra: (
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-xs font-bold text-ink">
            <ScanBarcode className="w-5 h-5 text-brand-primary shrink-0" />
            <span>2.5 kg Arroz + 1 Aceite = Total fiado: S/ 19.00</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-brand-primary text-white px-3 py-1 rounded-full">
            <BellRing className="w-3.5 h-3.5" /> Recibo WhatsApp enviado
          </span>
        </div>
      )
    },
    {
      number: '05',
      title: 'Controla tu caja, Yape/Plin y reportes',
      description:
        'Registra abonos parciales o totales en efectivo, Yape o Plin y revisa en tiempo real cuánto recuperaste en el mes.',
      extra: (
        <div className="grid grid-cols-2 gap-2.5 text-center">
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
            <span className="text-[11px] text-emerald-800 font-bold block">Total recuperado</span>
            <span className="text-lg font-extrabold text-emerald-700">S/ 1,420.00</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-[11px] text-ink-soft font-bold block flex items-center justify-center gap-1">
              <BarChart3 className="w-3.5 h-3.5 text-brand-primary" /> Por cobrar
            </span>
            <span className="text-lg font-extrabold text-ink">S/ 345.50</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="como-funciona" className="fm-section scroll-mt-20">
      <div className="fm-container bg-surface-yellow space-y-16 sm:space-y-24">
        {/* Íconos decorativos superiores */}
        <img
          src={homeIcon}
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute top-8 left-6 lg:left-12 w-16 lg:w-20 drop-shadow-lg animate-floaty pointer-events-none"
        />
        <img
          src={gearsIcon}
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute top-8 right-6 lg:right-12 w-20 lg:w-24 drop-shadow-lg animate-floaty [animation-delay:1s] pointer-events-none"
        />

        {/* Tarjeta blanca introductoria */}
        <div className="fm-card max-w-[1280px] mx-auto px-6 sm:px-12 py-7 sm:py-8 text-center">
          <p className="text-lg sm:text-[22px] leading-relaxed text-ink">
            Poner en marcha <strong>Fiamas en tu tienda</strong> toma menos de 3 minutos. Sigue estos{' '}
            <strong>5 pasos sencillos</strong> para digitalizar tu libreta de fiados y empezar a cobrar a tiempo.
          </p>
        </div>

        {/* Carrusel interactivo 01 - 05 */}
        <StepCarousel
          steps={steps}
          image={tiendaImg}
          imageAlt="Cómo funciona Fiamas en tu bodega"
          imageClassName="w-[44%] -right-6 xl:-right-10 translate-y-6"
        />

        {/* Banner intermedio de acción */}
        <div className="max-w-[1040px] mx-auto">
          <div className="bg-surface-yellow-soft rounded-[28px] sm:rounded-[34px] px-6 sm:px-12 py-8 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-5">
              <img
                src={cardTiendasImg}
                alt="Tu bodega digital"
                className="w-32 sm:w-40 object-contain drop-shadow-lg"
              />
              <div className="hidden sm:flex flex-col gap-2">
                <span className="inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl text-xs font-extrabold text-ink shadow-xs">
                  <img src={loadingIcon} alt="" className="w-5 h-5 object-contain" /> Sincronización en tiempo real
                </span>
                <span className="inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl text-xs font-extrabold text-ink shadow-xs">
                  <img src={menuIcon} alt="" className="w-5 h-5 object-contain" /> Catálogo por unidad y peso
                </span>
                <span className="inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl text-xs font-extrabold text-brand-primary shadow-xs">
                  <CheckCircle2 className="w-4 h-4" /> Sin costo de instalación
                </span>
              </div>
            </div>

            <div className="lg:w-[50%] text-center lg:text-left space-y-4">
              <p className="font-display text-xl sm:text-[26px] leading-[1.25] text-ink">
                ¿Listo para <strong className="text-brand-primary">configurar tu tienda</strong> y olvidar el papel?
              </p>
              <button onClick={onOpenDownload} className="fm-btn">
                Descargar App ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
