export interface NavItem {
  label: string;
  href: string;
  isAction?: boolean;
}

export interface ClientData {
  id: string;
  name: string;
  phone: string;
  balance: number;
  creditLimit: number;
  status: 'al_dia' | 'proximo_limite' | 'limite_excedido' | 'sin_deuda';
  lastPurchaseDate: string;
  avatar: string;
  notes?: string;
}

export interface FiadoTransaction {
  id: string;
  clientId: string;
  clientName: string;
  amount: number;
  type: 'fiado' | 'abono';
  concept: string;
  date: string;
  time: string;
  items?: string[];
  receiptSent?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  businessName: string;
  location: string;
  rating: number;
  recoveredAmount: string;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'seguridad' | 'clientes' | 'costos';
}

export interface BenefitItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
  metric: string;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
}
