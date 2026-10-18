import { ClientData, FiadoTransaction } from '../types.ts';

export const INITIAL_CLIENTS: ClientData[] = [
  {
    id: 'c1',
    name: 'Doña Martha Gómez',
    phone: '+52 55 4123 8901',
    balance: 145.50,
    creditLimit: 500.00,
    status: 'al_dia',
    lastPurchaseDate: 'Hoy, 10:15 AM',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    notes: 'Vecina del dpto 302. Paga quincenalmente.'
  },
  {
    id: 'c2',
    name: 'Don Roberto Ruiz',
    phone: '+52 55 9876 5432',
    balance: 285.00,
    creditLimit: 300.00,
    status: 'proximo_limite',
    lastPurchaseDate: 'Ayer, 6:40 PM',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    notes: 'Taller mecánico de la esquina. Paga los sábados.'
  },
  {
    id: 'c3',
    name: 'Carlos Mendoza',
    phone: '+52 55 2345 6789',
    balance: 0.00,
    creditLimit: 350.00,
    status: 'sin_deuda',
    lastPurchaseDate: 'Hace 3 días',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    notes: 'Cliente puntual. Siempre salda a fin de mes.'
  },
  {
    id: 'c4',
    name: 'Lucía Benítez',
    phone: '+52 55 8765 4321',
    balance: 195.00,
    creditLimit: 400.00,
    status: 'al_dia',
    lastPurchaseDate: 'Hoy, 8:20 AM',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    notes: 'Profesora del colegio local.'
  },
  {
    id: 'c5',
    name: 'Andrés Morales',
    phone: '+52 55 3344 5566',
    balance: 320.00,
    creditLimit: 300.00,
    status: 'limite_excedido',
    lastPurchaseDate: 'Hace 5 días',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    notes: 'Conductor de taxi. Se le dio tolerancia por viaje.'
  }
];

export const INITIAL_TRANSACTIONS: FiadoTransaction[] = [
  {
    id: 'tx-1',
    clientId: 'c1',
    clientName: 'Doña Martha Gómez',
    amount: 45.50,
    type: 'fiado',
    concept: 'Aceite 1L, Arroz 2kg, Leche',
    date: 'Hoy',
    time: '10:15 AM',
    items: ['Aceite vegetal 1L ($24.00)', 'Arroz grano fino 2kg ($21.50)'],
    receiptSent: true
  },
  {
    id: 'tx-2',
    clientId: 'c2',
    clientName: 'Don Roberto Ruiz',
    amount: 95.00,
    type: 'fiado',
    concept: 'Gaseosas 3L, Paquete botanas',
    date: 'Ayer',
    time: '6:40 PM',
    items: ['Refresco familiar 3L ($48.00)', 'Botanas surtidas ($47.00)'],
    receiptSent: true
  },
  {
    id: 'tx-3',
    clientId: 'c3',
    clientName: 'Carlos Mendoza',
    amount: 150.00,
    type: 'abono',
    concept: 'Liquidación total cuenta quincena',
    date: 'Ayer',
    time: '3:10 PM',
    receiptSent: true
  },
  {
    id: 'tx-4',
    clientId: 'c4',
    clientName: 'Lucía Benítez',
    amount: 60.00,
    type: 'fiado',
    concept: 'Huevos 1kg, Pan de caja, Mantequilla',
    date: 'Hoy',
    time: '8:20 AM',
    items: ['Huevo blanco ($34.00)', 'Pan integral ($26.00)'],
    receiptSent: false
  }
];
