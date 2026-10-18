# Fiamas — Landing Page Oficial de Marketing (SaaS)

> **“Digitalizando la confianza de tu negocio.”**

Fiamas es la plataforma SaaS integral diseñada para digitalizar y automatizar el crédito informal (fiados) en tiendas de abarrotes, bodegas, minimarkets y comercios minoristas de Latinoamérica. Reemplaza el cuaderno de papel por un sistema centralizado, automatizado y transparente.

---

## 📱 Características Principales de la Landing Page

1. **Hero de Alto Impacto:**
   - Frase principal exacta: *“Digitalizando la confianza de tu negocio.”*
   - Subtítulo persuasivo orientado al comercio popular y retail.
   - **Mockup Interactivo de iPhone 15 Pro:**
     - Simulación funcional de la app móvil Fiamas (Flutter).
     - Navegación interactiva entre pantallas: **Inicio / Dashboard**, **Lista de Clientes / Fiadores**, **Registrar Fiado (+)** con cálculo dinámico en tiempo real, **Cobranza WhatsApp** con simulación de envío de mensajes respetuosos, y **Ficha de Tienda**.
     - Dynamic Island animada, toasts de feedback y barra de gestos.

2. **Sección de Descarga (Requisito Exacto):**
   - **Tarjeta Izquierda:** Logo oficial de **Google Play** + botón verde **“Descargar”**.
   - **Tarjeta Derecha:** Logo oficial de **App Store** + botón verde **“Descargar”**.
   - Diseño limpio con bordes redondeados, sombra sutil y modal emergente accesible.

3. **Arquitectura del Ecosistema:**
   - Explicación del monorepo (`fiamas-tiendas`) con panel web de administración (React + Vite) y backend central (Node.js, Express, PostgreSQL), complementado con la app móvil (`fiamas_app` en Flutter).

4. **Secciones Completas:**
   - **Problema vs Solución:** Comparación visual directa entre el cuaderno de papel tradicional vs. Fiamas.
   - **Solución:** Módulos de atención en mostrador, web gerencial y seguridad en la nube.
   - **Beneficios:** 5 pilares de impacto financiero (hasta 98% de recuperación, límites de crédito, cobranza cordial).
   - **Características:** Registro en 5 segundos, recibos digitales, semáforo de riesgo, modo offline-first.
   - **Cómo Funciona:** Flujo de 4 pasos intuitivos para el tendero.
   - **Calculadora ROI de Recuperación:** Simulador interactivo para calcular cuánto dinero rescatan al año.
   - **Testimonios:** Historias de éxito reales de bodegueros y tenderos.
   - **Preguntas Frecuentes (FAQ):** Acordeón interactivo con respuestas precisas.
   - **Soporte & Contáctanos:** Formulario validado con enlace directo al chat de WhatsApp para comerciantes.
   - **Footer Profesional:** Enlaces de navegación, contacto, redes sociales, modales de términos y privacidad, y copyright.

5. **Navegación & Enrutamiento:**
   - SPA y Multi-page con **React Router**: rutas reales para `/`, `/descargar`, `/soporte`, `/terminos`, `/privacidad` y scroll suave por identificadores (`#solucion`, `#beneficios`, `#caracteristicas`, `#como-funciona`, `#soporte`, `#contacto`, `#faq`, `#descargar`).

---

## 🛠️ Stack Tecnológico

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Motion (`motion/react`)
- **Iconos:** Lucide React
- **Enrutamiento:** React Router DOM v7

---

## 🚀 Instrucciones de Ejecución

1. **Instalación de dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar en modo desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación se iniciará en `http://localhost:3000`.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

4. **Verificar tipos y código:**
   ```bash
   npm run lint
   ```
