import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, User, Store, Phone, MessageSquare } from 'lucide-react';

export const DirectAttentionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    storeName: '',
    phone: '',
    reason: 'asesoria_mostrador',
    message: ''
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setFormData({
        name: '',
        storeName: '',
        phone: '',
        reason: 'asesoria_mostrador',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="atencion-directa" className="py-24 bg-white text-slate-900 border-t border-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Editorial, Directo, Sin tono de IA */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal not-italic text-[#000000] font-['Outfit',sans-serif] tracking-tight leading-tight lg:leading-[70px]">
            Envíanos un mensaje
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Escríbenos directamente para asesoría comercial, dudas de cobro o ayuda para migrar tu libreta a Fiamas. Te responde una persona de nuestro equipo de mostrador.
          </p>
        </div>

        {/* Form Container - ESTRICTAMENTE SIN BORDER RADIUS (rounded-none en todo) */}
        <div className="bg-[#FAFAFA] border-2 border-slate-300 rounded-none p-6 sm:p-10 shadow-none">
          {sentSuccess ? (
            <div className="bg-white border-2 border-[#1D9492] rounded-none p-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#1D9492] mx-auto stroke-[2]" />
              <h3 className="text-xl font-bold text-slate-900">Mensaje enviado correctamente</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Hemos recibido los datos de tu tienda. Un asesor se comunicará contigo vía WhatsApp o llamada durante la jornada de hoy.
              </p>
              <div className="pt-2 text-xs font-semibold text-slate-500">
                Horario de atención: Lunes a Sábado de 7:00 AM a 9:00 PM
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1.5 uppercase tracking-wide">
                    Nombre del encargado o dueño *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej: Roberto Gómez"
                      className="w-full bg-white border border-slate-300 rounded-none py-3.5 px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D9492] focus:ring-1 focus:ring-[#1D9492] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1.5 uppercase tracking-wide">
                    Nombre de tu tienda o negocio *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.storeName}
                      onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                      placeholder="Ej: Abarrotes San Judas"
                      className="w-full bg-white border border-slate-300 rounded-none py-3.5 px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D9492] focus:ring-1 focus:ring-[#1D9492] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1.5 uppercase tracking-wide">
                    Número de WhatsApp o teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ej: +52 55 1234 5678"
                    className="w-full bg-white border border-slate-300 rounded-none py-3.5 px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D9492] focus:ring-1 focus:ring-[#1D9492] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1.5 uppercase tracking-wide">
                    Motivo de tu consulta *
                  </label>
                  <select
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-none py-3.5 px-4 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1D9492] focus:ring-1 focus:ring-[#1D9492] transition-colors"
                  >
                    <option value="asesoria_mostrador">Ayuda para empezar a registrar fiados</option>
                    <option value="migrar_cuaderno">Pasar las cuentas de mi libreta a Fiamas</option>
                    <option value="duda_recibos">Pregunta sobre recibos de WhatsApp</option>
                    <option value="varias_tiendas">Tengo más de una tienda o sucursal</option>
                    <option value="otro">Otra consulta para mi negocio</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1.5 uppercase tracking-wide">
                  Mensaje o detalle de tu consulta *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escribe aquí tu consulta o situación en tienda..."
                  className="w-full bg-white border border-slate-300 rounded-none p-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1D9492] focus:ring-1 focus:ring-[#1D9492] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1D9492] hover:bg-[#167876] text-white font-bold py-4 px-6 rounded-none text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-none cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar mensaje a atención directa</span>
                </button>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1D9492]" />
                  Tus datos son privados y sólo se usan para responderte
                </span>
                <span>Respuesta directa sin intermediarios</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
