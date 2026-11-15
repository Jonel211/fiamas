import React, { useState } from 'react';
import {
  Smartphone,
  Store,
  QrCode,
  ScanBarcode,
  BarChart3,
  Download,
  CheckCircle2,
  ShieldCheck,
  BellRing,
  Sparkles
} from 'lucide-react';

interface HowItWorksProps {
  onOpenDownload: () => void;
}

interface StepItem {
  number: string;
  shortTitle: string;
  subtitle: string;
  detailedText: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDownload }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: StepItem[] = [
    {
      number: '1',
      shortTitle: 'Instala la app y regístrate',
      subtitle: 'Descarga Fiamas en tu celular y valida tu cuenta con tu número telefónico.',
      detailedText: 'Ingresa tu DNI, nombre y celular. Recibirás un código de verificación por SMS para activar tu cuenta de tendero con total seguridad.',
      icon: Smartphone
    },
    {
      number: '2',
      shortTitle: 'Configura tu tienda y catálogo',
      subtitle: 'Crea el perfil de tu negocio y organiza tus productos por unidad o peso.',
      detailedText: 'Registra tu bodega para generar su código QR único. Añade categorías con colores e ingresa tus productos usando el lector de códigos de barras.',
      icon: Store
    },
    {
      number: '3',
      shortTitle: 'Vincula clientes y asigna límites',
      subtitle: 'Agrega a tus vecinos escaneando el QR de tu tienda y define su tope de crédito.',
      detailedText: 'Conecta con tus clientes mediante su celular, asigna un límite de fiado personalizado y consulta su historial de scoring crediticio.',
      icon: QrCode
    },
    {
      number: '4',
      shortTitle: 'Registra fiados con escáner y cobra',
      subtitle: 'Despacha al instante leyendo códigos de barras y registra abonos totales o parciales.',
      detailedText: 'Selecciona productos del catálogo o escanéalos en segundos. Envía alertas de vencimiento, comprobantes digitales y controla tus reportes en tiempo real.',
      icon: ScanBarcode
    },
    {
      number: '5',
      shortTitle: 'Controla tu caja y reportes',
      subtitle: 'Revisa tus cobros por Yape, Plin o efectivo y filtra tus ganancias por fecha.',
      detailedText: 'Accede al dashboard de tu tienda en tiempo real. Consulta el historial completo de pagos, audita el balance del mes y mantén tus cuentas claras.',
      icon: BarChart3
    }
  ];

  return (
    <section id="como-funciona" className="py-24 sm:py-28 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Editorial typography: 64px, weight 400, color #000000 */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal text-black font-['Outfit',sans-serif] tracking-tight leading-[1.12]">
            Cómo empezar en tu tienda
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Digitaliza tu cuaderno de fiados paso a paso. Todo sincronizado desde tu celular en 4 pasos sencillos.
          </p>
        </div>

        {/* Stepped Interactive Layout: Left Timeline + Right Realistic Preview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Column: Vertical Stepper Timeline (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-2">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div key={step.number} className="relative">
                  {/* Vertical connecting line between step circles */}
                  {idx < steps.length - 1 && (
                    <div
                      className={`absolute left-[23px] top-[48px] bottom-[-10px] w-[2px] transition-colors duration-300 ${isPast ? 'bg-[#1D9492]' : 'bg-slate-200'
                        }`}
                      aria-hidden="true"
                    />
                  )}

                  {/* Step Button Card */}
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-200 flex items-start gap-4 cursor-pointer group ${isActive
                      ? 'bg-slate-50 border border-slate-200/90 shadow-xs'
                      : 'hover:bg-slate-50/70 border border-transparent'
                      }`}
                  >
                    {/* Step Number Circle */}
                    <div
                      className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-base transition-all duration-200 shrink-0 ${isActive
                        ? 'bg-[#1D9492] text-white shadow-md shadow-[#1D9492]/25 ring-4 ring-[#1D9492]/15'
                        : isPast
                          ? 'bg-[#1D9492]/10 text-[#1D9492] border-2 border-[#1D9492]'
                          : 'bg-white text-slate-600 border-2 border-slate-300 group-hover:border-slate-400 group-hover:text-slate-900'
                        }`}
                    >
                      {step.number}
                    </div>

                    {/* Step Title & Dynamic Description */}
                    <div className="pt-2 flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-lg sm:text-xl font-bold font-['Outfit',sans-serif] tracking-tight transition-colors ${isActive
                            ? 'text-black'
                            : 'text-slate-800 group-hover:text-[#1D9492]'
                            }`}
                        >
                          {step.shortTitle}
                        </h3>
                      </div>

                      {/* Description displayed when active */}
                      {isActive && (
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed animate-in fade-in duration-200">
                          {step.subtitle}
                        </p>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Column: High Quality Realistic UI Preview Card (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-[28px] p-6 sm:p-9 shadow-xs transition-all duration-300">

              {/* Dynamic Interactive Preview Box according to Active Step */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">

                {/* STEP 1 PREVIEW: Instalar App y Registro de Tendero + SMS */}
                {activeStep === 0 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-[#1D9492]/10 border border-[#1D9492]/20 flex items-center justify-center text-[#1D9492]">
                          <Smartphone className="w-6 h-6 stroke-[2]" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 font-['Outfit',sans-serif]">
                            Cuenta de Tendero
                          </h4>
                          <p className="text-xs text-slate-500">
                            Disponible en Android e iPhone
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-[#1D9492] bg-[#1D9492]/10 px-2.5 py-1 rounded-md">
                        Login por celular
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                        <span className="text-[11px] text-slate-500 block">DNI del Titular</span>
                        <span className="text-sm font-bold text-slate-900 font-['Outfit',sans-serif]">
                          11111111
                        </span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                        <span className="text-[11px] text-slate-500 block">Teléfono (ID Login)</span>
                        <span className="text-sm font-bold text-slate-900 font-['Outfit',sans-serif]">
                          +51 999 999 999
                        </span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                        <span className="text-[11px] text-slate-500 block">Código SMS</span>
                        <span className="text-sm font-bold text-[#1D9492] tracking-widest font-mono">
                          0 0 0 0 0 0
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2 PREVIEW: Crear Tienda, QR y Catálogo */}
                {activeStep === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FFF3EA] border border-[#FCDCC9] flex items-center justify-center text-[#EA580C]">
                          <Store className="w-5 h-5 stroke-[2]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 font-['Outfit',sans-serif]">
                            Bodega San Martín
                          </h4>
                          <span className="text-[11px] text-slate-500">RUC: 1111111111</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-[#EAF7EE] px-2.5 py-1 rounded-md">
                        Catálogo Listo
                      </span>
                    </div>

                    {/* Categorías con chips hexadecimales e inventario */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                        Categorías y Productos (Unidad / Peso)
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#1D9492]/15 text-[#1D9492] border border-[#1D9492]/30">
                          Lácteos
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-800 border border-amber-500/30">
                          Panadería
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-500/15 text-indigo-800 border border-indigo-500/30">
                          Limpieza
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 flex justify-between items-center">
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">Arroz Extra (Peso)</span>
                          <span className="text-[10px] text-slate-500">Venta por Kilo (kg)</span>
                        </div>
                        <span className="text-xs font-extrabold text-slate-900">S/ 4.20 /kg</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 flex justify-between items-center">
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">Aceite Vegetal 1L</span>
                          <span className="text-[10px] text-slate-500">Cód: 77501020304</span>
                        </div>
                        <span className="text-xs font-extrabold text-slate-900">S/ 8.50 /un</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3 PREVIEW: Vinculación QR, Límites y Scoring */}
                {activeStep === 2 && (
                  <div className="space-y-3.5 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900 font-['Outfit',sans-serif]">
                        <QrCode className="w-4 h-4 text-[#1D9492]" />
                        <span>Clientes vinculados y Scoring en tiempo real</span>
                      </div>
                      <span className="text-[11px] text-[#1D9492] font-semibold bg-[#1D9492]/10 px-2 py-0.5 rounded">
                        Vinculación por QR
                      </span>
                    </div>

                    {/* Customer 1: High Score */}
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-sm font-bold text-slate-900 font-['Outfit',sans-serif]">
                            Doña Rosaura
                          </span>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                            Score: 95/100
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500">Límite asignado: S/ 150.00</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                          S/ 42.50
                        </span>
                        <p className="text-[10px] text-emerald-600 font-semibold">Buen pagador</p>
                      </div>
                    </div>

                    {/* Customer 2: Close to Limit Alert */}
                    <div className="flex items-center justify-between p-3 bg-[#FEF8E7] rounded-xl border border-[#FDE68A]">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                          <span className="text-sm font-bold text-slate-900 font-['Outfit',sans-serif]">
                            Don Carlos
                          </span>
                          <span className="text-[10px] bg-amber-200/80 text-amber-900 font-bold px-1.5 py-0.5 rounded">
                            Score: 62/100
                          </span>
                        </div>
                        <span className="text-[11px] text-amber-800">Límite asignado: S/ 200.00</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-extrabold text-amber-900 font-['Outfit',sans-serif]">
                          S/ 185.00
                        </span>
                        <p className="text-[10px] text-amber-700 font-semibold">Alerta de límite</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1D9492]" />
                      <span>El sistema evalúa el historial de pagos y alerta si el cliente se acerca a su tope.</span>
                    </div>
                  </div>
                )}

                {/* STEP 4 PREVIEW: Escáner de Fiados, Cobros Parciales/Totales y Alertas */}
                {activeStep === 3 && (
                  <div className="space-y-3.5 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900 font-['Outfit',sans-serif]">
                        <ScanBarcode className="w-4 h-4 text-[#1D9492]" />
                        <span>Despacho con Escáner y Gestión de Cobros</span>
                      </div>
                      <span className="text-[11px] text-emerald-700 font-semibold bg-[#EAF7EE] px-2 py-0.5 rounded">
                        Comprobante Digital
                      </span>
                    </div>

                    {/* Detalle de Fiado y Opciones de Cobro */}
                    <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs space-y-2.5">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-900">Cliente: Don Carlos</span>
                        <span className="text-[11px] text-slate-500">Detalle de productos escaneados</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200 font-mono text-[11px] text-slate-700 space-y-1">
                        <div className="flex justify-between">
                          <span>• 2.5 kg Arroz Extra (Peso)</span>
                          <strong>S/ 10.50</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>• 1 un Aceite Vegetal (Escáner)</span>
                          <strong>S/ 8.50</strong>
                        </div>
                        <div className="border-t border-slate-100 pt-1 flex justify-between text-slate-900 font-bold">
                          <span>Total del fiado:</span>
                          <span className="text-[#1D9492]">S/ 19.00</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-slate-600 flex items-center gap-1">
                          <BellRing className="w-3.5 h-3.5 text-amber-600" />
                          Recordatorio automático activo
                        </span>
                        <div className="flex gap-1.5">
                          <span className="text-[10px] font-semibold bg-white border border-slate-300 px-2 py-1 rounded text-slate-700">
                            Abonar Parte
                          </span>
                          <span className="text-[10px] font-semibold bg-[#1D9492] text-white px-2 py-1 rounded">
                            Cobrar Todo
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                      <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        El cliente consulta su deuda en tiempo real desde su app
                      </span>
                      <span className="text-[11px] text-slate-500">Cuentas claras</span>
                    </div>
                  </div>
                )}

                {/* STEP 5 PREVIEW: Dashboard Financiero, Medios de Pago y Reportes */}
                {activeStep === 4 && (
                  <div className="space-y-3.5 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900 font-['Outfit',sans-serif]">
                        <BarChart3 className="w-4 h-4 text-[#1D9492]" />
                        <span>Dashboard y Reportes Financieros</span>
                      </div>
                      <span className="text-[11px] text-[#1D9492] font-semibold bg-[#1D9492]/10 px-2 py-0.5 rounded">
                        Filtro: Este mes
                      </span>
                    </div>

                    {/* Resumen de Caja: Recuperado vs Por Cobrar */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#EAF7EE]/60 border border-[#C6EBD2] rounded-xl">
                        <span className="text-[11px] text-emerald-800 block">Total recuperado</span>
                        <span className="text-lg font-extrabold text-emerald-700 font-['Outfit',sans-serif]">
                          S/ 1,420.00
                        </span>
                        <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">
                          +18 abonos registrados
                        </span>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                        <span className="text-[11px] text-slate-500 block">Saldo por cobrar</span>
                        <span className="text-lg font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                          S/ 345.50
                        </span>
                        <span className="text-[10px] text-slate-500 font-semibold block mt-0.5">
                          5 clientes activos
                        </span>
                      </div>
                    </div>

                    {/* Últimos pagos por método (Tabla pagos: efectivo, yape, plin) */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2 text-xs">
                      <span className="text-[11px] font-semibold text-slate-500 block">
                        Últimos ingresos por medio de pago
                      </span>
                      <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200/70">
                        <span className="font-bold text-slate-800">Doña Rosaura</span>
                        <span className="text-[10px] bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded">
                          Yape / Plin
                        </span>
                        <strong className="text-emerald-600">+ S/ 50.00</strong>
                      </div>
                      <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200/70">
                        <span className="font-bold text-slate-800">Don Carlos</span>
                        <span className="text-[10px] bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded">
                          Efectivo
                        </span>
                        <strong className="text-emerald-600">+ S/ 20.00</strong>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                      <span className="flex items-center gap-1.5 text-[#1D9492] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1D9492]" />
                        Respaldo automático en la nube 24/7
                      </span>
                      <span className="text-[11px] text-slate-500">Cierre exacto</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Description & Direct Action inside the Card (Solo visible en el Paso 1) */}
              {activeStep === 0 && (
                <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in duration-200">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-black font-['Outfit',sans-serif]">
                      {steps[activeStep].shortTitle}
                    </h4>
                    <p className="text-sm text-slate-600 mt-1 max-w-md leading-relaxed">
                      {steps[activeStep].detailedText}
                    </p>
                  </div>

                  <button
                    onClick={onOpenDownload}
                    className="inline-flex items-center justify-center gap-2 bg-[#1D9492] hover:bg-[#167876] text-white font-bold px-5 py-3 rounded-xl text-sm transition-all duration-150 shrink-0 shadow-sm active:scale-[0.98] cursor-pointer"
                  >
                    <Download className="w-4 h-4 stroke-[2.5]" />
                    <span>Descargar App</span>
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};