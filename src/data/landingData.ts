import { BenefitItem, FaqItem, FeatureItem, TestimonialItem } from '../types.ts';

export const NOTEBOOK_PAINS = [
  {
    id: 'p1',
    title: 'Hojas rotas, borrosas o extraviadas',
    description: 'El papel se moja, se deteriora y con el tiempo los apuntes a lápiz se vuelven ilegibles, perdiendo para siempre el registro de lo que te deben.'
  },
  {
    id: 'p2',
    title: 'Cuentas que no cuadran al fin de semana',
    description: 'Calcular a mano fiados y abonos parciales toma horas al cierre de la jornada y provoca constantes errores involuntarios de suma.'
  },
  {
    id: 'p3',
    title: 'Incomodidad y discusiones al cobrar',
    description: 'Cobrar de palabra genera momentos tensos con vecinos conocidos: "¡Doña Rosa, yo ya le había abonado!", sin comprobantes para demostrarlo.'
  },
  {
    id: 'p4',
    title: 'Cero límites de endeudamiento',
    description: 'Sin alertas visibles, los clientes acumulan deudas superiores a lo que pueden pagar, afectando directamente la liquidez de tu tienda.'
  }
];

export const FIAMAS_ADVANTAGES = [
  {
    id: 'a1',
    title: 'Respaldo automático 24/7 en la nube',
    description: 'Aunque pierdas o cambies tu celular, tus clientes y saldos están protegidos y listos para consultarse desde cualquier dispositivo.'
  },
  {
    id: 'a2',
    title: 'Cálculo de saldos automático al instante',
    description: 'Cada fiado o abono actualiza el saldo deudor al segundo. Sabes con exactitud cuánto dinero tienes en la calle en todo momento.'
  },
  {
    id: 'a3',
    title: 'Comprobantes transparentes por WhatsApp',
    description: 'Envía con un clic el recibo de compra con fecha y desglose de víveres. Cuentas claras mantienen amistades y clientes leales.'
  },
  {
    id: 'a4',
    title: 'Semáforo y límites de crédito por vecino',
    description: 'Configura el límite prudente para cada persona. La app te avisa en pantalla cuando alguien está por exceder su monto autorizado.'
  }
];

export const SOLUTION_PILLARS = [
  {
    id: 'sp1',
    icon: 'Smartphone',
    title: 'Aplicación Móvil para el Mostrador',
    tech: 'Flutter (Android & iOS)',
    description: 'Diseñada para operar con rapidez en la barra de atención. Registra fiados en 5 segundos, consulta saldos y opera sin internet.',
    points: [
      'Registro ultra veloz de compras fiadas',
      'Recordatorios amigables de WhatsApp en un toque',
      'Modo Offline-First con sincronización en tiempo real'
    ]
  },
  {
    id: 'sp2',
    icon: 'Monitor',
    title: 'Panel Web de Gestión Comercial',
    tech: 'React + TypeScript + Vite',
    description: 'Para dueños y gerentes. Visualiza métricas de liquidez, estados de cuenta consolidados, exportación a Excel y catálogo de productos.',
    points: [
      'Dashboard con métricas de cobranza y mora',
      'Exportación de reportes contables a Excel y PDF',
      'Gestión de inventario y límites globales'
    ]
  },
  {
    id: 'sp3',
    icon: 'Server',
    title: 'Core Backend y Nube Segura',
    tech: 'Node.js + PostgreSQL',
    description: 'Infraestructura empresarial con encriptación bcrypt, tokens JWT y base de datos relacional para resguardar cada centavo registrado.',
    points: [
      'Autenticación robusta y roles de usuario',
      'Persistencia inmutable de transacciones',
      'Respaldos automáticos diarios sin pérdida de datos'
    ]
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'b1',
    icon: 'ShieldCheck',
    title: 'Recupera hasta el 98% de tus fiados',
    description: 'Elimina las deudas perdidas u olvidadas entre hojas rotas o tachones ilegibles. Cada centavo queda registrado con fecha, hora y productos.',
    highlight: '+35% de liquidez mensual',
    metric: '98% tasa de cobro'
  },
  {
    id: 'b2',
    icon: 'SlidersHorizontal',
    title: 'Límites de crédito por cliente',
    description: 'Asigna a cada vecino un tope máximo de endeudamiento basado en su historial. El sistema te alerta en pantalla antes de sobrepasar el límite acordado.',
    highlight: 'Cero sorpresas al fin de mes',
    metric: 'Control de riesgo 100%'
  },
  {
    id: 'b3',
    icon: 'MessageCircleCheck',
    title: 'Cobranza cordial por WhatsApp',
    description: 'Se acabó la incomodidad de cobrar en persona. Envía con un toque estados de cuenta claros, transparentes y amigables directamente a su WhatsApp.',
    highlight: 'Sin fricciones ni penas',
    metric: '9 de cada 10 pagan a tiempo'
  },
  {
    id: 'b4',
    icon: 'CloudSync',
    title: 'Tus cuentas a salvo para siempre',
    description: 'Si tu celular se cae o cambias de equipo, tus registros están sincronizados en la nube con respaldo seguro. Nunca más perderás las cuentas de tu negocio.',
    highlight: 'Respaldo automático 24/7',
    metric: '0 riesgo de extravío'
  },
  {
    id: 'b5',
    icon: 'TrendingUp',
    title: 'Visión financiera en tiempo real',
    description: 'Conoce con exactitud cuánto dinero tienes en la calle por cobrar, cuánto cobraste hoy y quiénes son tus clientes más cumplidos y confiables.',
    highlight: 'Control total de tu negocio',
    metric: 'Reportes instantáneos'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'f1',
    icon: 'Clock',
    title: 'Anotación en menos de 5 segundos',
    description: 'Diseñado especialmente para el ajetreo del mostrador. Abre la app, busca el nombre, pon el monto y listo.',
    tag: 'Agilidad pura'
  },
  {
    id: 'f2',
    icon: 'Receipt',
    title: 'Tickets y comprobantes digitales',
    description: 'Envía a tu cliente el comprobante desglosado con los productos adquiridos por mensaje o compártelo al instante.',
    tag: 'Transparencia'
  },
  {
    id: 'f3',
    icon: 'AlertCircle',
    title: 'Perfil y semáforo de fiadores',
    description: 'Identifica de un vistazo quién está al día (verde), quién está cerca a su límite (amarillo) y quién tiene atraso (rojo).',
    tag: 'Gestión inteligente'
  },
  {
    id: 'f4',
    icon: 'History',
    title: 'Abonos parciales y saldos',
    description: 'Permite a los clientes abonar pequeñas cantidades. Fiamas recalcula y actualiza el saldo remanente automáticamente.',
    tag: 'Flexibilidad'
  },
  {
    id: 'f5',
    icon: 'WifiOff',
    title: 'Modo sin internet (Offline-First)',
    description: '¿Se fue la señal en el local? Sigue anotando sin interrupciones. La app sincroniza todo al recuperar la conexión.',
    tag: 'Confiable'
  },
  {
    id: 'f6',
    icon: 'FileSpreadsheet',
    title: 'Panel web para administración',
    description: 'Monitoreo gerencial desde cualquier computadora para ver métricas consolidadas, exportar a Excel y gestionar inventario.',
    tag: 'Plataforma completa'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Descarga e instala Fiamas',
    description: 'Disponible gratis en Google Play y App Store. Crea tu cuenta de comerciante en menos de un minuto sólo con tu número de teléfono.',
    badge: '1 minuto'
  },
  {
    number: '02',
    title: 'Crea tu lista de clientes de confianza',
    description: 'Agrega a tus vecinos habituales con su nombre, teléfono y el límite de crédito que consideres prudente otorgarles.',
    badge: 'Fácil importación'
  },
  {
    number: '03',
    title: 'Anota los fiados y abonos al instante',
    description: 'Cada vez que alguien pida fiado o deje un abono, regístralo con 3 toques mientras lo atiendes en el mostrador.',
    badge: 'Menos de 5 seg'
  },
  {
    number: '04',
    title: 'Cobra sin roces y mantén el flujo sano',
    description: 'Envía recordatorios amables y transparentes por WhatsApp. Tus clientes agradecen el orden y tu dinero regresa a tu caja.',
    badge: 'Cobro garantizado'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote: 'Antes tenía tres cuadernos con esquinas dobladas y hojas que los niños manchaban con grasa. Perdía fácil $400 al mes que nunca cobraba. Con Fiamas todo está claro y mis vecinos me pagan puntuales por WhatsApp.',
    name: 'Doña Rosaura Méndez',
    businessName: 'Abarrotes Don Chema',
    location: 'Guadalajara, México',
    rating: 5,
    recoveredAmount: '+$480/mes recuperados',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 't2',
    quote: 'Lo mejor es el control del límite. Tengo clientes que se emocionaban pidiendo fiado y al fin de mes no les alcanzaba el sueldo para pagarme. Ahora la app me avisa cuando llegan al tope y acordamos fechas claras.',
    name: 'Segundo Alvarado',
    businessName: 'Bodega & Minimarket San Martín',
    location: 'Lima, Perú',
    rating: 5,
    recoveredAmount: 'Cero clientes en mora',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 't3',
    quote: 'Me daba muchísima pena cobrarle al vecino de enfrente. Con el mensaje automático de Fiamas no hay discusiones ni malentendidos: ven el detalle de lo que llevaron y me pagan sin poner mala cara.',
    name: 'Gladys Morales',
    businessName: 'Supertienda La Confianza',
    location: 'Medellín, Colombia',
    rating: 5,
    recoveredAmount: '95% de cobro semanal',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq1',
    category: 'general',
    question: '¿Mis clientes necesitan tener instalada la aplicación Fiamas?',
    answer: 'No, tus clientes no necesitan descargar ninguna aplicación. Ellos reciben los detalles de su cuenta y recordatorios de pago directamente en su WhatsApp habitual mediante mensajes claros y enlaces web seguros donde pueden ver su recibo digital.'
  },
  {
    id: 'faq2',
    category: 'general',
    question: '¿Qué sucede si se va la luz o me quedo sin conexión a internet en la tienda?',
    answer: 'Fiamas cuenta con tecnología offline-first. Puedes seguir registrando fiados, buscando clientes y anotando abonos sin internet. En cuanto el celular detecte señal móvil o Wi-Fi, todo se sincroniza automáticamente con el servidor.'
  },
  {
    id: 'faq3',
    category: 'seguridad',
    question: '¿Qué pasa si pierdo o me roban el celular?',
    answer: 'A diferencia del cuaderno de papel tradicional que si se moja o se extravía pierdes todo tu capital, con Fiamas tus datos están encriptados y guardados en la nube. Sólo debes instalar la app en un nuevo teléfono, ingresar tu número y recuperarás toda tu información intacta en segundos.'
  },
  {
    id: 'faq4',
    category: 'costos',
    question: '¿La aplicación tiene algún costo para mi negocio?',
    answer: 'Puedes descargar Fiamas y utilizar el plan inicial gratuito con hasta 30 clientes registrados y funciones completas de fiado. Para tiendas de alto volumen, contamos con un plan Pro muy accesible pensado en la economía popular de los tenderos.'
  },
  {
    id: 'faq5',
    category: 'clientes',
    question: '¿Cómo son los mensajes de cobro por WhatsApp? ¿Son agresivos?',
    answer: 'En lo absoluto. Los mensajes fueron redactados por expertos en relaciones comerciales comunitarias. Son cálidos, cordiales y transparentes. Incluyen un saludo afectuoso, el desglose de productos y un agradecimiento por su preferencia.'
  },
  {
    id: 'faq6',
    category: 'general',
    question: '¿Puedo acceder desde mi computadora además de mi celular?',
    answer: 'Sí. Fiamas cuenta con un panel de administración web (fiamas-tiendas) al que puedes acceder desde cualquier navegador en laptop o computadora para ver reportes detallados, imprimir estados de cuenta o exportar datos a Excel.'
  }
];
