import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wallet,
  Users,
  PlusCircle,
  TrendingUp,
  Search,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownLeft,
  ChevronRight,
  Send,
  MessageSquare,
  Sparkles,
  Receipt,
  Store,
  DollarSign,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { ClientData, FiadoTransaction } from '../types.ts';
import { INITIAL_CLIENTS, INITIAL_TRANSACTIONS } from '../data/mockAppData.ts';

type ActiveScreen = 'dashboard' | 'clients' | 'new-fiado' | 'cobros' | 'client-detail' | 'store';

export const InteractivePhoneMockup: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ActiveScreen>('dashboard');
  const [clients, setClients] = useState<ClientData[]>(INITIAL_CLIENTS);
  const [transactions, setTransactions] = useState<FiadoTransaction[]>(INITIAL_TRANSACTIONS);
  const [selectedClient, setSelectedClient] = useState<ClientData | null>(INITIAL_CLIENTS[0]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // New Fiado form state
  const [formClientId, setFormClientId] = useState(INITIAL_CLIENTS[0].id);
  const [formAmount, setFormAmount] = useState('45.00');
  const [formConcept, setFormConcept] = useState('Arroz 2kg, Aceite 1L, Atún');
  const [formSendWhatsapp, setFormSendWhatsapp] = useState(true);

  // In-phone notifications
  const [phoneNotification, setPhoneNotification] = useState<string | null>(null);
  const [whatsappSentForClient, setWhatsappSentForClient] = useState<string | null>(null);

  const showPhoneToast = (msg: string) => {
    setPhoneNotification(msg);
    setTimeout(() => {
      setPhoneNotification(null);
    }, 3200);
  };

  // Calculations
  const totalCobrar = clients.reduce((acc, c) => acc + c.balance, 0);
  const totalCobradoMes = 7420.00;
  const clientsWithDebt = clients.filter(c => c.balance > 0).length;

  const handleCreateFiado = (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(formAmount);
    if (isNaN(amountNum) || amountNum <= 0) return;

    const targetClient = clients.find(c => c.id === formClientId);
    if (!targetClient) return;

    const newBalance = targetClient.balance + amountNum;
    const isExceeded = newBalance > targetClient.creditLimit;
    const isNear = newBalance >= targetClient.creditLimit * 0.85;

    const updatedClients = clients.map(c => {
      if (c.id === formClientId) {
        return {
          ...c,
          balance: newBalance,
          status: isExceeded ? 'limite_excedido' : isNear ? 'proximo_limite' : 'al_dia',
          lastPurchaseDate: 'Hace un momento'
        } as ClientData;
      }
      return c;
    });

    const newTx: FiadoTransaction = {
      id: `tx-${Date.now()}`,
      clientId: targetClient.id,
      clientName: targetClient.name,
      amount: amountNum,
      type: 'fiado',
      concept: formConcept || 'Víveres varios',
      date: 'Hoy',
      time: 'Hace un momento',
      receiptSent: formSendWhatsapp
    };

    setClients(updatedClients);
    setTransactions([newTx, ...transactions]);
    showPhoneToast(`¡Fiado de $${amountNum.toFixed(2)} registrado!`);
    setCurrentScreen('dashboard');
  };

  const handleRegisterAbono = (clientId: string, abonoAmount: number) => {
    const targetClient = clients.find(c => c.id === clientId);
    if (!targetClient) return;

    const newBalance = Math.max(0, targetClient.balance - abonoAmount);
    const updatedClients = clients.map(c => {
      if (c.id === clientId) {
        return {
          ...c,
          balance: newBalance,
          status: newBalance === 0 ? 'sin_deuda' : 'al_dia'
        } as ClientData;
      }
      return c;
    });

    const newTx: FiadoTransaction = {
      id: `tx-${Date.now()}`,
      clientId: targetClient.id,
      clientName: targetClient.name,
      amount: abonoAmount,
      type: 'abono',
      concept: 'Abono recibido en efectivo',
      date: 'Hoy',
      time: 'Hace un instante',
      receiptSent: true
    };

    setClients(updatedClients);
    setTransactions([newTx, ...transactions]);
    if (selectedClient && selectedClient.id === clientId) {
      setSelectedClient({ ...selectedClient, balance: newBalance });
    }
    showPhoneToast(`¡Abono de $${abonoAmount.toFixed(2)} recibido!`);
  };

  const handleSimulateWhatsApp = (client: ClientData) => {
    setWhatsappSentForClient(client.id);
    showPhoneToast(`Recordatorio enviado a ${client.name.split(' ')[0]}`);
  };

  const filteredClients = clients.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm)
  );

  return (
    <div className="relative flex flex-col items-center">
      {/* Realistic iPhone 15 Pro Chassis - Original large dimensions */}
      <div className="relative w-[310px] sm:w-[340px] h-[640px] bg-slate-900 rounded-[48px] p-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.15),0_0_0_6px_#1e293b] select-none">
        
        {/* Physical buttons */}
        <div className="absolute -left-[12px] top-[115px] w-[3px] h-[26px] bg-slate-400 rounded-l-sm" />
        <div className="absolute -left-[12px] top-[155px] w-[3px] h-[48px] bg-slate-400 rounded-l-sm" />
        <div className="absolute -left-[12px] top-[215px] w-[3px] h-[48px] bg-slate-400 rounded-l-sm" />
        <div className="absolute -right-[12px] top-[170px] w-[3px] h-[64px] bg-slate-400 rounded-r-sm" />

        {/* Screen Display Container */}
        <div className="relative w-full h-full bg-slate-50 rounded-[38px] overflow-hidden flex flex-col text-slate-800 font-sans border border-slate-700/60">
          
          {/* Dynamic Island & Status Bar */}
          <div className="relative z-30 pt-2.5 px-5 pb-2 flex items-center justify-between text-[11px] font-bold text-slate-700 bg-white/80 backdrop-blur-sm border-b border-slate-100">
            <span>9:41</span>
            
            {/* Dynamic Island pill */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2 h-5 w-24 bg-slate-900 rounded-full flex items-center justify-center gap-1.5 px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D9492]" />
              <span className="text-[9px] text-white font-medium">Fiamas</span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="w-4 h-2.5 border border-slate-600 rounded-[2px] p-[0.5px] flex items-center">
                <div className="h-full w-2.5 bg-[#1D9492] rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* In-Phone Toast Notification */}
          <AnimatePresence>
            {phoneNotification && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-11 left-3 right-3 z-40 bg-[#1D9492] text-white px-3 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />
                <span className="truncate">{phoneNotification}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SCREEN CONTENT AREA */}
          <div className="flex-1 overflow-y-auto px-3.5 pb-16 pt-2.5 scrollbar-none">
            
            {/* 1. DASHBOARD SCREEN */}
            {currentScreen === 'dashboard' && (
              <motion.div
                key="dash"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3"
              >
                {/* Store Header */}
                <div className="flex items-center justify-between pt-0.5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#1D9492] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      SA
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Tienda de Abarrotes</p>
                      <h4 className="text-xs font-bold text-slate-900">Bodega San Antonio</h4>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#EBF4FC] text-[#1D9492] font-bold px-2 py-0.5 rounded-full border border-[#B1D8F7]">
                    Sincronizado
                  </span>
                </div>

                {/* Primary Metric Balance Card - Clean Teal Gradient */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1D9492] to-[#147472] p-4 text-white shadow-md shadow-[#1D9492]/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[11px] font-medium text-teal-100">Saldo total por cobrar</p>
                      <h2 className="text-2xl font-extrabold tracking-tight mt-0.5">
                        ${totalCobrar.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                      </h2>
                    </div>
                    <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                      <Wallet className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-[11px]">
                    <span className="text-teal-100 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-[#E0AA3D]" />
                      Cobrado este mes:
                    </span>
                    <span className="font-bold text-white bg-white/15 px-2 py-0.5 rounded-md">${totalCobradoMes.toLocaleString('es-MX')}</span>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCurrentScreen('new-fiado')}
                    className="flex items-center justify-center gap-1.5 bg-[#1D9492] hover:bg-[#177977] text-white font-bold py-2.5 px-3 rounded-xl text-xs transition active:scale-95 shadow-sm shadow-[#1D9492]/20"
                  >
                    <PlusCircle className="w-4 h-4" />
                    + Anotar Fiado
                  </button>
                  <button
                    onClick={() => setCurrentScreen('cobros')}
                    className="flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 font-bold py-2.5 px-3 rounded-xl text-xs border border-slate-200 transition active:scale-95 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-[#1D9492]" />
                    Cobro WhatsApp
                  </button>
                </div>

                {/* Limit Warning Alert in Gold */}
                <div className="bg-[#FFF9EE] border border-[#E0AA3D]/40 rounded-xl p-2.5 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#E0AA3D] shrink-0" />
                  <p className="text-[10px] text-slate-700 leading-tight">
                    <strong className="font-bold text-[#E0AA3D]">Límite cerca:</strong> Don Roberto Ruiz está al 95% de su crédito autorizado.
                  </p>
                </div>

                {/* Recent Activity List */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Movimientos de Hoy</span>
                    <button
                      onClick={() => setCurrentScreen('clients')}
                      className="text-[11px] text-[#1D9492] font-bold hover:underline flex items-center"
                    >
                      Ver clientes <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {transactions.slice(0, 3).map((tx) => (
                      <div
                        key={tx.id}
                        className="bg-white border border-slate-200/80 rounded-xl p-2.5 flex items-center justify-between shadow-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                            tx.type === 'fiado' ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
                          }`}>
                            {tx.type === 'fiado' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownLeft className="w-4 h-4" />}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 truncate max-w-[120px]">{tx.clientName}</p>
                            <p className="text-[10px] text-slate-500 truncate max-w-[120px]">{tx.concept}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-xs font-bold ${tx.type === 'fiado' ? 'text-slate-900' : 'text-[#1D9492]'}`}>
                            {tx.type === 'fiado' ? `+$${tx.amount.toFixed(2)}` : `-$${tx.amount.toFixed(2)}`}
                          </p>
                          <span className="text-[9px] text-slate-400">{tx.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. CLIENTS SCREEN */}
            {currentScreen === 'clients' && (
              <motion.div
                key="clients"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between pt-0.5">
                  <h3 className="text-sm font-bold text-slate-900">Clientes ({clients.length})</h3>
                  <button
                    onClick={() => setCurrentScreen('new-fiado')}
                    className="text-[11px] bg-[#1D9492] text-white font-bold px-2.5 py-1 rounded-lg shadow-xs"
                  >
                    + Agregar
                  </button>
                </div>

                {/* Search */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Buscar vecino o teléfono..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl py-1.5 pl-8 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1D9492]"
                  />
                </div>

                {/* Client List */}
                <div className="space-y-2">
                  {filteredClients.map((client) => {
                    const usagePercent = Math.min(100, Math.round((client.balance / client.creditLimit) * 100));
                    return (
                      <div
                        key={client.id}
                        onClick={() => {
                          setSelectedClient(client);
                          setCurrentScreen('client-detail');
                        }}
                        className="bg-white border border-slate-200 hover:border-[#1D9492]/60 rounded-xl p-2.5 cursor-pointer transition active:scale-[0.98] shadow-xs"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src={client.avatar}
                              alt={client.name}
                              className="w-8 h-8 rounded-full object-cover border border-slate-200"
                            />
                            <div>
                              <p className="text-xs font-bold text-slate-900">{client.name}</p>
                              <p className="text-[10px] text-slate-500">{client.phone}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-extrabold text-slate-900">
                              ${client.balance.toFixed(2)}
                            </p>
                            <span className="text-[9px] text-slate-500">
                              Límite: ${client.creditLimit}
                            </span>
                          </div>
                        </div>

                        {/* Credit Bar */}
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                usagePercent > 90 ? 'bg-rose-500' : usagePercent > 70 ? 'bg-[#E0AA3D]' : 'bg-[#1D9492]'
                              }`}
                              style={{ width: `${usagePercent}%` }}
                            />
                          </div>
                          <span className={`text-[9px] font-bold ${
                            usagePercent > 90 ? 'text-rose-600' : usagePercent > 70 ? 'text-[#E0AA3D]' : 'text-[#1D9492]'
                          }`}>
                            {usagePercent}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* 3. NEW FIADO SCREEN */}
            {currentScreen === 'new-fiado' && (
              <motion.div
                key="new-fiado"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between pt-0.5">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Receipt className="w-4 h-4 text-[#1D9492]" />
                    Anotar Fiado
                  </h3>
                  <button
                    onClick={() => setCurrentScreen('dashboard')}
                    className="text-[11px] text-slate-500 hover:text-slate-800"
                  >
                    Cancelar
                  </button>
                </div>

                <form onSubmit={handleCreateFiado} className="space-y-2.5">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 block mb-1">Cliente habitual</label>
                    <select
                      value={formClientId}
                      onChange={(e) => setFormClientId(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl py-2 px-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1D9492]"
                    >
                      {clients.map(c => (
                        <option key={c.id} value={c.id}>
                          {c.name} (Debe: ${c.balance.toFixed(2)})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-600 block mb-1">Monto a Fiar ($)</label>
                    <div className="relative">
                      <DollarSign className="w-4 h-4 text-[#1D9492] absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="number"
                        step="0.50"
                        value={formAmount}
                        onChange={(e) => setFormAmount(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-8 pr-3 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#1D9492]"
                        placeholder="0.00"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-600 block mb-1">Detalle de víveres</label>
                    <textarea
                      value={formConcept}
                      onChange={(e) => setFormConcept(e.target.value)}
                      rows={2}
                      className="w-full bg-white border border-slate-200 rounded-xl p-2 text-xs text-slate-800 focus:outline-none focus:border-[#1D9492] resize-none"
                      placeholder="Ej: Azúcar, Leche, Huevos..."
                      required
                    />
                  </div>

                  <label className="flex items-center gap-2 p-2 bg-[#EBF4FC] border border-[#B1D8F7] rounded-xl cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formSendWhatsapp}
                      onChange={(e) => setFormSendWhatsapp(e.target.checked)}
                      className="rounded accent-[#1D9492] w-3.5 h-3.5"
                    />
                    <span className="text-[11px] text-slate-800 font-semibold flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-[#1D9492]" />
                      Enviar comprobante por WhatsApp
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-[#1D9492] hover:bg-[#177977] text-white font-bold py-2.5 rounded-xl text-xs transition active:scale-95 shadow-md shadow-[#1D9492]/20 flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Confirmar y Guardar
                  </button>
                </form>
              </motion.div>
            )}

            {/* 4. CLIENT DETAIL SCREEN */}
            {currentScreen === 'client-detail' && selectedClient && (
              <motion.div
                key="detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between pt-0.5">
                  <button
                    onClick={() => setCurrentScreen('clients')}
                    className="text-[11px] text-[#1D9492] flex items-center gap-1 font-bold"
                  >
                    ← Volver
                  </button>
                  <span className="text-[10px] text-slate-500">Ficha de Fiador</span>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-3 text-center shadow-xs">
                  <img
                    src={selectedClient.avatar}
                    alt={selectedClient.name}
                    className="w-12 h-12 rounded-full mx-auto object-cover border-2 border-[#1D9492] mb-1.5"
                  />
                  <h4 className="text-sm font-bold text-slate-900">{selectedClient.name}</h4>
                  <p className="text-[10px] text-slate-500">{selectedClient.phone}</p>
                  
                  <div className="mt-2.5 grid grid-cols-2 gap-2 text-left">
                    <div className="bg-[#F8FAFC] p-2 rounded-xl border border-slate-200">
                      <span className="text-[9px] text-slate-500">Deuda actual:</span>
                      <p className="text-sm font-extrabold text-[#1D9492]">${selectedClient.balance.toFixed(2)}</p>
                    </div>
                    <div className="bg-[#F8FAFC] p-2 rounded-xl border border-slate-200">
                      <span className="text-[9px] text-slate-500">Límite acordado:</span>
                      <p className="text-sm font-bold text-slate-800">${selectedClient.creditLimit.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Reminder Simulation */}
                <div className="bg-[#EBF4FC] border border-[#B1D8F7] rounded-xl p-2.5 space-y-2">
                  <span className="text-[10px] font-bold text-[#1D9492] uppercase tracking-wider block">
                    Recordatorio Amigable
                  </span>
                  <div className="bg-white rounded-lg p-2 text-[10px] text-slate-700 font-mono leading-relaxed border border-[#B1D8F7]">
                    "Hola {selectedClient.name.split(' ')[0]} 👋 De Bodega San Antonio le recordamos su saldo de ${selectedClient.balance.toFixed(2)}. ¡Gracias por su preferencia!"
                  </div>

                  <button
                    onClick={() => handleSimulateWhatsApp(selectedClient)}
                    disabled={whatsappSentForClient === selectedClient.id}
                    className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                      whatsappSentForClient === selectedClient.id
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                        : 'bg-[#1D9492] hover:bg-[#177977] text-white shadow-sm'
                    }`}
                  >
                    {whatsappSentForClient === selectedClient.id ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Mensaje enviado ✓
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Enviar por WhatsApp
                      </>
                    )}
                  </button>
                </div>

                {/* Receive payment */}
                {selectedClient.balance > 0 && (
                  <div className="bg-white border border-slate-200 rounded-xl p-2.5">
                    <span className="text-[10px] font-bold text-slate-700 block mb-1.5">Registrar Abono</span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleRegisterAbono(selectedClient.id, Math.min(selectedClient.balance, 50))}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs py-1.5 rounded-lg font-bold"
                      >
                        Abonar $50.00
                      </button>
                      <button
                        onClick={() => handleRegisterAbono(selectedClient.id, selectedClient.balance)}
                        className="bg-[#E0AA3D] hover:bg-[#c9942f] text-slate-950 text-xs py-1.5 rounded-lg font-bold"
                      >
                        Liquidar Todo
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* 5. COBROS SCREEN */}
            {currentScreen === 'cobros' && (
              <motion.div
                key="cobros"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between pt-0.5">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-[#1D9492]" />
                    Cobranza WhatsApp
                  </h3>
                  <span className="text-[10px] bg-[#EBF4FC] text-[#1D9492] font-bold px-2 py-0.5 rounded-full">
                    Respetuosa
                  </span>
                </div>

                <div className="space-y-2">
                  {clients.filter(c => c.balance > 0).map((c) => (
                    <div key={c.id} className="bg-white border border-slate-200 rounded-xl p-2.5 flex items-center justify-between shadow-xs">
                      <div>
                        <p className="text-xs font-bold text-slate-900">{c.name}</p>
                        <p className="text-[10px] text-[#1D9492] font-extrabold">Saldo: ${c.balance.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => handleSimulateWhatsApp(c)}
                        className="bg-[#1D9492] hover:bg-[#177977] text-white px-2.5 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1 transition shadow-xs"
                      >
                        <Send className="w-3 h-3" />
                        Recordar
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 6. STORE SCREEN */}
            {currentScreen === 'store' && (
              <motion.div
                key="store"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3 pt-2 text-center"
              >
                <div className="w-12 h-12 bg-[#EBF4FC] text-[#1D9492] border border-[#B1D8F7] rounded-2xl mx-auto flex items-center justify-center">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Bodega San Antonio</h3>
                <p className="text-[10px] text-slate-500">Plan Comerciante Fiamas</p>

                <div className="bg-white border border-slate-200 rounded-xl p-3 text-left space-y-2 text-xs shadow-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Total de clientes:</span>
                    <span className="font-bold text-slate-800">{clients.length}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Con saldo pendiente:</span>
                    <span className="font-bold text-[#E0AA3D]">{clientsWithDebt}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Nube:</span>
                    <span className="font-bold text-[#1D9492]">Activa y protegida</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setClients(INITIAL_CLIENTS);
                    setTransactions(INITIAL_TRANSACTIONS);
                    showPhoneToast('Datos restablecidos');
                  }}
                  className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 hover:text-slate-800 pt-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reiniciar demo
                </button>
              </motion.div>
            )}

          </div>

          {/* BOTTOM NAVIGATION DOCK (IN-APP) */}
          <div className="absolute bottom-0 left-0 right-0 h-13 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 flex items-center justify-around z-30">
            <button
              onClick={() => setCurrentScreen('dashboard')}
              className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg transition ${
                currentScreen === 'dashboard' ? 'text-[#1D9492]' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <Wallet className="w-4 h-4" />
              <span className="text-[9px] font-bold">Inicio</span>
            </button>

            <button
              onClick={() => setCurrentScreen('clients')}
              className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg transition ${
                currentScreen === 'clients' || currentScreen === 'client-detail' ? 'text-[#1D9492]' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <Users className="w-4 h-4" />
              <span className="text-[9px] font-bold">Clientes</span>
            </button>

            <button
              onClick={() => setCurrentScreen('new-fiado')}
              className="relative -top-2 bg-[#1D9492] text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md shadow-[#1D9492]/30 font-bold transition hover:scale-105 active:scale-95"
            >
              <PlusCircle className="w-5 h-5" />
            </button>

            <button
              onClick={() => setCurrentScreen('cobros')}
              className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg transition ${
                currentScreen === 'cobros' ? 'text-[#1D9492]' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-[9px] font-bold">Cobros</span>
            </button>

            <button
              onClick={() => setCurrentScreen('store')}
              className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg transition ${
                currentScreen === 'store' ? 'text-[#1D9492]' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <Store className="w-4 h-4" />
              <span className="text-[9px] font-bold">Tienda</span>
            </button>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-300 rounded-full z-40 pointer-events-none" />

        </div>
      </div>
    </div>
  );
};
