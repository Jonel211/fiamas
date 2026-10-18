import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle2, Clock, MapPin, Headphones } from 'lucide-react';

export const ContactSupport: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    storeName: '',
    phone: '',
    type: 'soporte',
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
        type: 'soporte',
        message: ''
      });
    }, 4500);
  };

  return (
    <section id="soporte" className="py-24 bg-white text-slate-900 relative border-t border-slate-200/80">
      {/* Anchor for contact */}
      <div id="contacto" className="relative -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Clean, direct */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-normal text-black font-['Outfit',sans-serif] tracking-tight leading-[1.12]">
            Soporte y atención directa
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            ¿Tienes dudas sobre cómo empezar o necesitas asistencia? Estamos disponibles para apoyarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Card */}
            <div className="bg-[#EBF4FC] border border-[#B1D8F7] rounded-3xl p-6 sm:p-7 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1D9492] text-white flex items-center justify-center font-bold shadow-md shadow-[#1D9492]/20">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">WhatsApp para Tenderos</h4>
                  <p className="text-xs text-[#1D9492] font-semibold">Respuesta promedio en menos de 10 min</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5">
                Escríbenos directamente para asesoría en la instalación, capacitación de tus empleados o consultas sobre planes.
              </p>
              <a
                href="https://wa.me/525541238901?text=Hola%20Fiamas,%20quisiera%20asesor%C3%ADa%20para%20mi%20tienda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#1D9492] hover:bg-[#177977] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition active:scale-95 shadow-md shadow-[#1D9492]/20"
              >
                <MessageCircle className="w-4 h-4" />
                Abrir Chat de WhatsApp
              </a>
            </div>

            {/* Contact Information Points */}
            <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#1D9492] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Correo electrónico</p>
                  <a href="mailto:soporte@fiamas.com" className="text-slate-600 hover:text-[#1D9492] transition">
                    soporte@fiamas.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#1D9492] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Línea telefónica comercial</p>
                  <p className="text-slate-600">+52 (55) 8901-4123</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#1D9492] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Horario de soporte</p>
                  <p className="text-slate-600">Lunes a Sábado: 7:00 AM – 9:00 PM</p>
                  <p className="text-slate-400 text-[11px]">Horario adaptado a la jornada comercial</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1D9492] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Cobertura</p>
                  <p className="text-slate-600">México, Perú, Colombia, Chile y Centroamérica</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Headphones className="w-5 h-5 text-[#1D9492]" />
              Envíanos un mensaje
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Déjanos los datos de tu negocio y te contactaremos a la brevedad.
            </p>

            {sentSuccess ? (
              <div className="bg-[#EBF4FC] border border-[#B1D8F7] rounded-2xl p-6 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-[#1D9492] mx-auto" />
                <h4 className="text-base font-bold text-slate-900">¡Mensaje recibido con éxito!</h4>
                <p className="text-xs text-slate-600">
                  Un asesor especializado en comercios minoristas te responderá en breve a tu WhatsApp o correo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Tu Nombre y Apellido *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej: Manuel Castillo"
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 px-3.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1D9492]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Nombre de tu Tienda / Negocio *</label>
                    <input
                      type="text"
                      required
                      value={formData.storeName}
                      onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                      placeholder="Ej: Abarrotes La Fe"
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 px-3.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1D9492]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+52 55 1234 5678"
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 px-3.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1D9492]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Motivo de contacto</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 px-3.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#1D9492]"
                    >
                      <option value="soporte">Soporte técnico con la app</option>
                      <option value="ventas">Información sobre plan para varias tiendas</option>
                      <option value="capacitacion">Solicitar demostración guiada</option>
                      <option value="otro">Otra consulta</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">¿En qué podemos ayudarte? *</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos brevemente cómo manejas los fiados en tu tienda hoy en día..."
                    className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1D9492] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1D9492] hover:bg-[#177977] text-white font-extrabold py-3.5 px-6 rounded-xl text-sm transition shadow-md shadow-[#1D9492]/20 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Enviar Solicitud
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
