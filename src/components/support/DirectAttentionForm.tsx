import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import cardTenderosImg from '../../assets/images/card-tenderos.png';

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
    <section id="atencion-directa" className="fm-section scroll-mt-20">
      <div id="contacto" className="sr-only" />
      <div className="fm-container bg-surface-cyan">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Columna izquierda informativa con ilustración */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-4">
            <span className="inline-block bg-brand-primary text-white text-xs font-extrabold uppercase px-4 py-1.5 rounded-full">
              Atención personalizada
            </span>
            <h2 className="fm-title text-left text-center lg:text-left">
              Envíanos un mensaje directo
            </h2>
            <p className="text-base sm:text-lg text-ink leading-relaxed">
              ¿Necesitas ayuda para pasar las cuentas de tu libreta a Fiamas? Nuestro equipo de mostrador te responde
              por WhatsApp o llamada hoy mismo.
            </p>
            <div className="flex justify-center lg:justify-start pt-2">
              <img
                src={cardTenderosImg}
                alt="Asesoría para tenderos"
                className="w-44 sm:w-52 object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Columna derecha: tarjeta blanca del formulario */}
          <div className="lg:col-span-7">
            <div className="fm-card p-6 sm:p-10">
              {sentSuccess ? (
                <div className="p-6 text-center space-y-3">
                  <CheckCircle2 className="w-14 h-14 text-brand-primary mx-auto stroke-[2.2]" />
                  <h3 className="font-display font-bold text-2xl text-brand-primary">
                    ¡Mensaje enviado correctamente!
                  </h3>
                  <p className="text-base text-ink-soft max-w-md mx-auto leading-relaxed">
                    Hemos recibido los datos de tu bodega. Un asesor se comunicará contigo vía WhatsApp durante la
                    jornada de hoy.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold text-ink block mb-1.5 uppercase">
                        Tu nombre *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej: Roberto Gómez"
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl py-3.5 px-4 text-sm text-ink placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-extrabold text-ink block mb-1.5 uppercase">
                        Nombre de tu bodega *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.storeName}
                        onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                        placeholder="Ej: Bodega San Martín"
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl py-3.5 px-4 text-sm text-ink placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-extrabold text-ink block mb-1.5 uppercase">
                        WhatsApp o celular *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej: +51 987 654 321"
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl py-3.5 px-4 text-sm text-ink placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-extrabold text-ink block mb-1.5 uppercase">
                        Motivo de consulta *
                      </label>
                      <select
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl py-3.5 px-4 text-sm text-ink focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                      >
                        <option value="asesoria_mostrador">Empezar a registrar fiados</option>
                        <option value="migrar_cuaderno">Pasar mi libreta a Fiamas</option>
                        <option value="duda_recibos">Recibos por WhatsApp</option>
                        <option value="varias_tiendas">Tengo más de una tienda</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-ink block mb-1.5 uppercase">
                      Detalle de tu consulta *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos cómo podemos ayudarte en tu tienda..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-2xl p-4 text-sm text-ink placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="fm-btn w-full">
                      <Send className="w-4 h-4" />
                      <span>Enviar mensaje a soporte</span>
                    </button>
                  </div>

                  <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-ink-soft">
                    <ShieldCheck className="w-4 h-4 text-brand-primary" />
                    <span>Tus datos son privados y solo se usan para atender a tu negocio.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
