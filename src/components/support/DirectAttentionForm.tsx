import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';
import cardTenderosImg from '../../assets/images/card-tenderos.png';
import { apiRequest } from '../../services/api';

// Mapeamos el 'reason' nuevo del formulario al 'type' que espera el backend.
const REASON_TO_TYPE: Record<string, string> = {
  asesoria_mostrador: 'soporte',
  migrar_cuaderno: 'capacitacion',
  duda_recibos: 'soporte',
  varias_tiendas: 'ventas',
  otro: 'otro',
};

const REASON_LABELS: Record<string, string> = {
  asesoria_mostrador: 'Ayuda para empezar a registrar fiados',
  migrar_cuaderno: 'Pasar las cuentas de mi libreta a Fiamas',
  duda_recibos: 'Pregunta sobre recibos de WhatsApp',
  varias_tiendas: 'Tengo más de una tienda o sucursal',
  otro: 'Otra consulta para mi negocio',
};

interface FormErrors {
  name?: string;
  storeName?: string;
  phone?: string;
  reason?: string;
  message?: string;
}

export const DirectAttentionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    storeName: '',
    phone: '',
    reason: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sentSuccess, setSentSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFieldChange = (field: keyof typeof formData, value: string) => {
    let sanitizedValue = value;
    if (field === 'phone') {
      // Bloquea letras: solo permite dígitos, signo + al inicio, espacios y guiones
      sanitizedValue = value.replace(/[^\d+\s-]/g, '');
    }
    setFormData((prev) => ({ ...prev, [field]: sanitizedValue }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (error) setError('');
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = 'Ingresa tu nombre completo.';
    } else if (trimmedName.length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 letras.';
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s.'-]+$/.test(trimmedName)) {
      newErrors.name = 'El nombre solo debe contener letras y espacios.';
    }

    const trimmedStore = formData.storeName.trim();
    if (!trimmedStore) {
      newErrors.storeName = 'Ingresa el nombre de tu bodega o tienda.';
    } else if (trimmedStore.length < 2) {
      newErrors.storeName = 'El nombre de la bodega debe tener al menos 2 caracteres.';
    }

    const trimmedPhone = formData.phone.trim();
    const digits = trimmedPhone.replace(/\D/g, '');
    if (!trimmedPhone) {
      newErrors.phone = 'Ingresa tu número de WhatsApp o celular.';
    } else if (/[a-zA-Z]/.test(trimmedPhone) || !/^[+\d\s-]+$/.test(trimmedPhone)) {
      newErrors.phone = 'El teléfono solo debe contener números.';
    } else if (digits.length < 9) {
      newErrors.phone = 'Ingresa un número válido (mínimo 9 dígitos).';
    }

    const validReasons = Object.keys(REASON_TO_TYPE);
    if (!formData.reason) {
      newErrors.reason = 'Selecciona un motivo de consulta.';
    } else if (!validReasons.includes(formData.reason)) {
      newErrors.reason = 'Selecciona un motivo de consulta válido.';
    }

    const trimmedMsg = formData.message.trim();
    if (!trimmedMsg) {
      newErrors.message = 'Escribe el detalle de tu consulta.';
    } else if (trimmedMsg.length < 5) {
      newErrors.message = 'Por favor ingresa al menos 5 caracteres en tu consulta.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Construimos el payload con las claves que el backend ya entiende.
    const payload = {
      name: formData.name.trim(),
      storeName: formData.storeName.trim(),
      phone: formData.phone.trim(),
      type: REASON_TO_TYPE[formData.reason] || 'soporte',
      reason: formData.reason,
      reasonLabel: REASON_LABELS[formData.reason] || 'Consulta general',
      message: formData.message.trim(),
    };

    try {
      await apiRequest('/avisos/web-contacto', {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      setSentSuccess(true);
      setFormData({
        name: '',
        storeName: '',
        phone: '',
        reason: '',
        message: ''
      });
      setErrors({});
      setTimeout(() => setSentSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || 'Hubo un error al enviar. Intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
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
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-2xl">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="min-w-0">
                      <label className="text-xs font-extrabold text-ink block mb-1.5 uppercase">
                        Tu nombre *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleFieldChange('name', e.target.value)}
                        placeholder="Ej: Roberto Gómez"
                        className={`w-full bg-slate-50 border rounded-2xl py-3.5 px-4 text-sm text-ink placeholder-slate-400 focus:outline-none transition-all ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-400/20 bg-red-50/20'
                            : 'border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 font-medium mt-1.5 animate-in fade-in">{errors.name}</p>
                      )}
                    </div>

                    <div className="min-w-0">
                      <label className="text-xs font-extrabold text-ink block mb-1.5 uppercase">
                        Nombre de tu bodega *
                      </label>
                      <input
                        type="text"
                        value={formData.storeName}
                        onChange={(e) => handleFieldChange('storeName', e.target.value)}
                        placeholder="Ej: Bodega San Martín"
                        className={`w-full bg-slate-50 border rounded-2xl py-3.5 px-4 text-sm text-ink placeholder-slate-400 focus:outline-none transition-all ${
                          errors.storeName
                            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-400/20 bg-red-50/20'
                            : 'border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20'
                        }`}
                      />
                      {errors.storeName && (
                        <p className="text-xs text-red-500 font-medium mt-1.5 animate-in fade-in">{errors.storeName}</p>
                      )}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <label className="text-xs font-extrabold text-ink block mb-1.5 uppercase">
                      WhatsApp o celular *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleFieldChange('phone', e.target.value)}
                      placeholder="Ej: +51 987 654 321"
                      className={`w-full bg-slate-50 border rounded-2xl py-3.5 px-4 text-sm text-ink placeholder-slate-400 focus:outline-none transition-all ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-400/20 bg-red-50/20'
                          : 'border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 font-medium mt-1.5 animate-in fade-in">{errors.phone}</p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label className="text-xs font-extrabold text-ink block mb-1.5 uppercase">
                      Motivo de consulta *
                    </label>
                    <div className="relative w-full min-w-0">
                      <select
                        value={formData.reason}
                        onChange={(e) => handleFieldChange('reason', e.target.value)}
                        className={`w-full max-w-full min-w-0 truncate text-ellipsis bg-slate-50 border rounded-2xl py-3.5 pl-4 pr-10 text-sm focus:outline-none transition-all cursor-pointer ${
                          !formData.reason ? 'text-slate-400' : 'text-ink'
                        } ${
                          errors.reason
                            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-400/20 bg-red-50/20'
                            : 'border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20'
                        }`}
                      >
                        <option value="" disabled className="text-slate-400">
                          Selecciona un motivo de consulta...
                        </option>
                        <option value="asesoria_mostrador" className="text-ink">Ayuda para empezar a registrar fiados</option>
                        <option value="migrar_cuaderno" className="text-ink">Pasar las cuentas de mi libreta a Fiamas</option>
                        <option value="duda_recibos" className="text-ink">Pregunta sobre recibos de WhatsApp</option>
                        <option value="varias_tiendas" className="text-ink">Tengo más de una tienda o sucursal</option>
                        <option value="otro" className="text-ink">Otra consulta para mi negocio</option>
                      </select>
                    </div>
                    {errors.reason && (
                      <p className="text-xs text-red-500 font-medium mt-1.5 animate-in fade-in">{errors.reason}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-extrabold text-ink block mb-1.5 uppercase">
                      Detalle de tu consulta *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      placeholder="Cuéntanos cómo podemos ayudarte en tu tienda..."
                      className={`w-full bg-slate-50 border rounded-2xl p-4 text-sm text-ink placeholder-slate-400 focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-400/20 bg-red-50/20'
                          : 'border-slate-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 font-medium mt-1.5 animate-in fade-in">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={isLoading} className="fm-btn w-full disabled:opacity-60 cursor-pointer">
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar mensaje a soporte</span>
                        </>
                      )}
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