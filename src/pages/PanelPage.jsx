import { useEffect, useMemo, useState } from 'react'
import {
  CalendarDays,
  Clock3,
  Filter,
  Heart,
  MessageCircle,
  Plus,
  RotateCcw,
  Search,
  ShoppingBag,
  Users,
  DollarSign,
  Package,
  Moon,
  Sun,
  ChevronDown,
  ChevronUp,
  X,
  Briefcase
} from 'lucide-react'
import { featuredProducts } from '../data/products'

const STORAGE_KEY = 'vidasanasm-crm-demo-v4'
const TRANSACTIONS_STORAGE_KEY = 'vidasanasm-transactions-demo-v4'
const THEME_STORAGE_KEY = 'vidasanasm-crm-theme'

const CATALOG_PRODUCTS = featuredProducts.map(p => p.name)

const statuses = [
  {
    id: 'primer-contacto',
    label: 'Primer contacto',
    color: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
    dot: 'bg-sky-500',
    icon: MessageCircle,
  },
  {
    id: 'segundo-contacto',
    label: 'Segundo contacto',
    color: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
    dot: 'bg-indigo-500',
    icon: Clock3,
  },
  {
    id: 'primer-compra',
    label: 'Primer compra',
    color: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    dot: 'bg-amber-500',
    icon: ShoppingBag,
  },
  {
    id: 'reunion-pendiente',
    label: 'Reunión pendiente',
    color: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
    dot: 'bg-rose-500',
    icon: CalendarDays,
  },
  {
    id: 'nipponflex-fan',
    label: 'Nipponflex fan',
    color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    dot: 'bg-emerald-500',
    icon: Heart,
  },
]

const initialClients = [
  {
    id: 1,
    name: 'Mariana Costa',
    email: 'mariana.costa@email.com',
    phone: '+54 9 11 5248-9031',
    role: 'cliente',
    source: 'Instagram',
    products: ['Colchón Evolution FIR Gz Relax'],
    status: 'reunion-pendiente',
    contactDate: '2026-08-01',
    lastContactDate: '2026-08-07',
    nextActionDate: '2026-08-09',
    owner: 'Alejandro',
    situation:
      'Pidió asesoramiento para cambiar colchón. Quiere comparar firmeza, garantía y financiación antes de reservar reunión.',
    value: 980000,
  },
  {
    id: 2,
    name: 'Federico Ramos',
    email: 'fede.ramos88@email.com',
    phone: '+54 9 11 6821-4419',
    role: 'cliente',
    source: 'WhatsApp',
    products: ['Kit Familiar', 'Plantilla Insole Power'],
    status: 'segundo-contacto',
    contactDate: '2026-08-03',
    lastContactDate: '2026-08-07',
    nextActionDate: '2026-08-08',
    owner: 'Sofía',
    situation:
      'Ya recibió catálogo. Falta enviar comparativa entre kit familiar y opción premium para cerrar dudas.',
    value: 420000,
  },
  {
    id: 3,
    name: 'Claudia Méndez',
    email: 'clau.mendez@email.com',
    phone: '+54 9 11 3904-2208',
    role: 'cliente',
    source: 'Referido',
    products: ['Jarra Purificadora Alcaline Max 3 Lts.', 'Pulsera FIR ION'],
    status: 'primer-compra',
    contactDate: '2026-07-15',
    lastContactDate: '2026-08-05',
    nextActionDate: '2026-08-12',
    owner: 'Alejandro',
    situation:
      'Hizo primera compra. Programar seguimiento de experiencia y detectar si suma almohadas.',
    value: 155000,
  },
  {
    id: 4,
    name: 'Alejandro',
    email: 'ale.distribuidor@email.com',
    phone: '+54 9 11 1111-2222',
    role: 'distribuidor',
    source: 'Interno',
    products: [],
    status: 'nipponflex-fan',
    contactDate: '2025-01-10',
    lastContactDate: '2026-08-07',
    nextActionDate: '2026-08-10',
    owner: 'Admin',
    situation: 'Distribuidor principal enfocado en zona norte.',
    value: 0,
  },
  {
    id: 5,
    name: 'Sofía',
    email: 'sofia.ventas@email.com',
    phone: '+54 9 11 3333-4444',
    role: 'distribuidor',
    source: 'Interno',
    products: [],
    status: 'nipponflex-fan',
    contactDate: '2025-05-20',
    lastContactDate: '2026-08-06',
    nextActionDate: '2026-08-09',
    owner: 'Admin',
    situation: 'Distribuidora especializada en kits familiares y purificadores.',
    value: 0,
  }
]

const initialTransactions = [
  {
    id: 1,
    product: 'Colchón Evolution FIR Gz Relax',
    amount: 850000,
    units: 1,
    date: '2026-08-01',
    distributor: 'Alejandro',
  },
  {
    id: 2,
    product: 'KIT Pillows',
    amount: 140000,
    units: 2,
    date: '2026-08-03',
    distributor: 'Sofía',
  },
  {
    id: 3,
    product: 'Kit Familiar',
    amount: 420000,
    units: 1,
    date: '2026-08-05',
    distributor: 'Sofía',
  },
]

function formatCurrency(value) {
  return new Intl.NumberFormat('es-AR', {
    currency: 'ARS',
    maximumFractionDigits: 0,
    style: 'currency',
  }).format(value)
}

function formatDate(date) {
  return new Intl.DateTimeFormat('es-AR', {
    day: '2-digit',
    month: 'short',
  }).format(new Date(`${date}T12:00:00`))
}

function daysBetween(date) {
  const today = new Date()
  const contact = new Date(`${date}T12:00:00`)
  const diff = today.getTime() - contact.getTime()

  return Math.max(0, Math.floor(diff / 86400000))
}

function getStatus(statusId) {
  return statuses.find((status) => status.id === statusId) ?? statuses[0]
}

function loadStoredData(key, initialData) {
  try {
    const stored = window.localStorage.getItem(key)
    const parsed = stored ? JSON.parse(stored) : null
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : initialData
  } catch {
    return initialData
  }
}

function PanelPage() {
  const [activeTab, setActiveTab] = useState('crm') // 'crm' | 'distributors' | 'transactions'
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem(THEME_STORAGE_KEY) || 'light'
  })
  
  // Theme dictionary
  const themeStyles = theme === 'dark' ? {
    bg: 'bg-black text-gray-200 selection:bg-emerald-500/30',
    header: 'border-b border-white/10 bg-black/50 backdrop-blur-xl',
    card: 'rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md',
    metricIconBg: 'bg-white/5 text-gray-300',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-500',
    textTertiary: 'text-gray-400',
    inputBg: 'bg-black/50 border-white/10 text-gray-200 focus:border-emerald-500/50 focus:bg-black',
    buttonOutline: 'border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white',
    buttonPrimary: 'bg-white text-black hover:bg-gray-100',
    tabActive: 'bg-white text-black shadow-lg',
    tabInactive: 'text-gray-400 hover:text-white hover:bg-white/5',
    tableHeader: 'border-b border-white/10 bg-white/5 text-gray-400',
    tableRowHover: 'hover:bg-white/5',
    tableRowActive: 'bg-white/5',
    divider: 'border-white/10'
  } : {
    bg: 'bg-[#f4f7f2] text-gray-800 selection:bg-emerald-500/30',
    header: 'border-b border-[#dfe8dc] bg-white/70 backdrop-blur-xl shadow-sm',
    card: 'rounded-2xl border border-[#dfe8dc] bg-white/90 backdrop-blur-md shadow-sm',
    metricIconBg: 'bg-[#e9f5e7] text-[#148a45]',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-500',
    textTertiary: 'text-gray-600',
    inputBg: 'bg-white border-[#cbd8c8] text-gray-900 focus:border-[#148a45] focus:bg-white',
    buttonOutline: 'border border-[#cbd8c8] bg-white text-gray-700 hover:bg-gray-50',
    buttonPrimary: 'bg-[#148a45] text-white hover:bg-[#0f7338]',
    tabActive: 'bg-[#148a45] text-white shadow-md',
    tabInactive: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
    tableHeader: 'border-b border-[#e5ede2] bg-gray-50 text-gray-500',
    tableRowHover: 'hover:bg-gray-50',
    tableRowActive: 'bg-emerald-50',
    divider: 'border-[#dfe8dc]'
  }

  // CRM State
  const [clients, setClients] = useState(() => loadStoredData(STORAGE_KEY, initialClients))
  const [activeId, setActiveId] = useState(clients[0]?.id)
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('todos')
  const [sortConfig, setSortConfig] = useState({ key: 'lastContactDate', direction: 'desc' })

  // Product Tag Input State
  const [newProductInput, setNewProductInput] = useState(CATALOG_PRODUCTS[0])

  // Transactions State
  const [transactions, setTransactions] = useState(() => loadStoredData(TRANSACTIONS_STORAGE_KEY, initialTransactions))

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(clients))
  }, [clients])

  useEffect(() => {
    window.localStorage.setItem(TRANSACTIONS_STORAGE_KEY, JSON.stringify(transactions))
  }, [transactions])
  
  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  // Split contacts by role
  const onlyClients = clients.filter(c => c.role === 'cliente' || !c.role)
  const onlyDistributors = clients.filter(c => c.role === 'distribuidor')

  const activeClient = clients.find((client) => client.id === activeId) ?? clients[0]

  const handleSort = (key) => {
    let direction = 'desc'
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc'
    }
    setSortConfig({ key, direction })
  }

  // Calculate total real sales based on transactions
  const txTotals = useMemo(() => {
    const totalSpent = transactions.reduce((sum, tx) => sum + tx.amount, 0)
    const totalUnits = transactions.reduce((sum, tx) => sum + tx.units, 0)
    return { totalSpent, totalUnits }
  }, [transactions])

  const filteredContacts = useMemo(() => {
    const baseList = activeTab === 'distributors' ? onlyDistributors : onlyClients

    let result = baseList.filter((client) => {
      const matchesStatus = statusFilter === 'todos' || client.status === statusFilter
      const term = query.trim().toLowerCase()
      const matchesQuery =
        !term ||
        [client.name, client.email, client.phone, client.source, ...(client.products || []), client.situation]
          .join(' ')
          .toLowerCase()
          .includes(term)

      return matchesStatus && matchesQuery
    })

    result.sort((a, b) => {
      let aVal = a[sortConfig.key]
      let bVal = b[sortConfig.key]

      if (typeof aVal === 'string') aVal = aVal.toLowerCase()
      if (typeof bVal === 'string') bVal = bVal.toLowerCase()

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1
      return 0
    })

    return result
  }, [onlyClients, onlyDistributors, query, statusFilter, sortConfig, activeTab])

  const totals = useMemo(() => {
    // Total ventas realizadas is from transactions sum
    const ventasRealizadas = txTotals.totalSpent;
    const pending = onlyClients.filter((client) => client.status === 'reunion-pendiente').length
    const fans = onlyClients.filter((client) => client.status === 'nipponflex-fan').length

    return { ventasRealizadas, pending, fans, clients: onlyClients.length, distributors: onlyDistributors.length }
  }, [onlyClients, onlyDistributors, txTotals])
  
  const getDistributorMetrics = (distributorName) => {
    const txs = transactions.filter(t => t.distributor.toLowerCase() === distributorName.toLowerCase())
    const totalVendido = txs.reduce((sum, tx) => sum + tx.amount, 0)
    const comision = totalVendido * 0.05 // 5%
    return { totalVendido, comision }
  }

  const updateClient = (id, field, value) => {
    setClients((current) =>
      current.map((client) =>
        client.id === id
          ? {
              ...client,
              [field]: field === 'value' ? Number(value) : value,
              lastContactDate:
                field === 'status' || field === 'situation'
                  ? new Date().toISOString().slice(0, 10)
                  : client.lastContactDate,
            }
          : client,
      ),
    )
  }

  const addProductToClient = () => {
    if (!newProductInput || !activeClient) return

    setClients((current) =>
      current.map((client) =>
        client.id === activeClient.id
          ? {
              ...client,
              products: [...(client.products || []), newProductInput],
            }
          : client
      )
    )
    setNewProductInput(CATALOG_PRODUCTS[0])
  }

  const removeProductFromClient = (productToRemove) => {
    if (!activeClient) return

    setClients((current) =>
      current.map((client) =>
        client.id === activeClient.id
          ? {
              ...client,
              products: client.products.filter(p => p !== productToRemove),
            }
          : client
      )
    )
  }

  const addClient = () => {
    const nextId = Math.max(...clients.map((client) => client.id), 0) + 1
    const today = new Date().toISOString().slice(0, 10)
    const newClient = {
      id: nextId,
      name: activeTab === 'distributors' ? 'Nuevo distribuidor' : 'Nuevo cliente',
      email: '',
      phone: '+54 9 11',
      role: activeTab === 'distributors' ? 'distribuidor' : 'cliente',
      source: 'Manual',
      products: [],
      status: 'primer-contacto',
      contactDate: today,
      lastContactDate: today,
      nextActionDate: today,
      owner: 'Alejandro',
      situation: 'Contacto creado manualmente.',
      value: 0,
    }

    setClients((current) => [newClient, ...current])
    setActiveId(nextId)
  }
  
  const addTransaction = () => {
    const nextId = Math.max(...transactions.map((tx) => tx.id), 0) + 1
    const today = new Date().toISOString().slice(0, 10)
    const newTx = {
      id: nextId,
      product: CATALOG_PRODUCTS[0],
      amount: 0,
      units: 1,
      date: today,
      distributor: 'Distribuidor',
    }
    setTransactions((current) => [newTx, ...current])
  }

  const updateTransaction = (id, field, value) => {
    setTransactions((current) =>
      current.map((tx) =>
        tx.id === id
          ? {
              ...tx,
              [field]: field === 'amount' || field === 'units' ? Number(value) : value,
            }
          : tx,
      ),
    )
  }
  
  const deleteTransaction = (id) => {
    setTransactions((current) => current.filter((tx) => tx.id !== id))
  }

  const resetDemo = () => {
    setClients(initialClients)
    setTransactions(initialTransactions)
    setActiveId(initialClients[0].id)
    setQuery('')
    setStatusFilter('todos')
  }
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <main className={`min-h-screen ${themeStyles.bg} overflow-x-hidden pb-12 transition-colors duration-300`}>
      {/* Background glow effects - Only in dark mode */}
      {theme === 'dark' && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen opacity-30" />
        </div>
      )}

      <header className={`relative z-10 ${themeStyles.header} transition-colors duration-300`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className={`text-xs font-black uppercase tracking-widest ${theme === 'dark' ? 'text-emerald-400' : 'text-[#148a45]'}`}>Panel privado demo</p>
              <h1 className={`mt-1 text-2xl font-black tracking-tight ${themeStyles.textPrimary} sm:text-3xl`}>
                Vida Plena Nipponflex
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${themeStyles.buttonOutline}`}
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
              </button>
              
              <button
                type="button"
                onClick={resetDemo}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${themeStyles.buttonOutline}`}
              >
                <RotateCcw className="h-4 w-4" />
                Reset demo
              </button>
              
              {activeTab === 'crm' ? (
                <button
                  type="button"
                  onClick={addClient}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition hover:scale-105 ${themeStyles.buttonPrimary}`}
                >
                  <Plus className="h-4 w-4" />
                  Nuevo cliente
                </button>
              ) : activeTab === 'distributors' ? (
                <button
                  type="button"
                  onClick={addClient}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition hover:scale-105 ${themeStyles.buttonPrimary}`}
                >
                  <Plus className="h-4 w-4" />
                  Nuevo distribuidor
                </button>
              ) : (
                <button
                  type="button"
                  onClick={addTransaction}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition hover:scale-105 ${themeStyles.buttonPrimary}`}
                >
                  <Plus className="h-4 w-4" />
                  Nueva venta
                </button>
              )}
            </div>
          </div>
          
          {/* Tabs */}
          <div className={`flex gap-1 border-b pb-4 ${themeStyles.divider}`}>
            <button
              onClick={() => { setActiveTab('crm'); setActiveId(onlyClients[0]?.id) }}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'crm' ? themeStyles.tabActive : themeStyles.tabInactive
              }`}
            >
              CRM Clientes
            </button>
            <button
              onClick={() => { setActiveTab('distributors'); setActiveId(onlyDistributors[0]?.id) }}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'distributors' ? themeStyles.tabActive : themeStyles.tabInactive
              }`}
            >
              Distribuidores
            </button>
            <button
              onClick={() => setActiveTab('transactions')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'transactions' ? themeStyles.tabActive : themeStyles.tabInactive
              }`}
            >
              Compras y Ventas
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activeTab === 'crm' || activeTab === 'distributors' ? (
              <>
                <Metric icon={Users} label="Clientes" value={totals.clients} themeStyles={themeStyles} />
                <Metric icon={Briefcase} label="Distribuidores" value={totals.distributors} themeStyles={themeStyles} />
                <Metric icon={Heart} label="Fans" value={totals.fans} themeStyles={themeStyles} />
                <Metric icon={ShoppingBag} label="Ventas Realizadas" value={formatCurrency(totals.ventasRealizadas)} themeStyles={themeStyles} />
              </>
            ) : (
              <>
                <Metric icon={DollarSign} label="Gasto Total" value={formatCurrency(txTotals.totalSpent)} themeStyles={themeStyles} />
                <Metric icon={Package} label="Unidades Totales" value={txTotals.totalUnits} themeStyles={themeStyles} />
              </>
            )}
          </div>
        </div>
      </header>
      
      {(activeTab === 'crm' || activeTab === 'distributors') && (
        <>
          <section className="relative z-10 mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.55fr_0.9fr] lg:px-8">
            <div className={`min-w-0 overflow-hidden transition-colors ${themeStyles.card}`}>
              <div className={`flex flex-col gap-4 border-b p-5 lg:flex-row lg:items-center ${themeStyles.divider}`}>
                <label className="relative flex-1">
                  <Search className={`pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 ${themeStyles.textSecondary}`} />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={`Buscar ${activeTab === 'distributors' ? 'distribuidor' : 'cliente'}, email, producto...`}
                    className={`w-full h-11 rounded-xl border pl-11 pr-4 text-sm placeholder-gray-500 outline-none transition focus:ring-1 ${themeStyles.inputBg}`}
                  />
                </label>

                <label className="relative w-full lg:w-64">
                  <Filter className={`pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 ${themeStyles.textSecondary}`} />
                  <select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value)}
                    className={`w-full h-11 appearance-none rounded-xl border pl-11 pr-4 text-sm font-semibold outline-none transition focus:ring-1 ${themeStyles.inputBg}`}
                  >
                    <option value="todos">Todos los estados</option>
                    {statuses.map((status) => (
                      <option key={status.id} value={status.id}>
                        {status.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[920px] text-left text-sm">
                  <thead className={`text-xs font-bold uppercase tracking-widest ${themeStyles.tableHeader}`}>
                    <tr>
                      <th className="px-6 py-4 cursor-pointer hover:bg-white/5 transition" onClick={() => handleSort('name')}>
                        <div className="flex items-center gap-1">{activeTab === 'distributors' ? 'Distribuidor' : 'Cliente'} {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />)}</div>
                      </th>
                      <th className="px-6 py-4 cursor-pointer hover:bg-white/5 transition" onClick={() => handleSort('status')}>
                        <div className="flex items-center gap-1">Estado {sortConfig.key === 'status' && (sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />)}</div>
                      </th>
                      <th className="px-6 py-4 cursor-pointer hover:bg-white/5 transition" onClick={() => handleSort('contactDate')}>
                        <div className="flex items-center gap-1">Registro {sortConfig.key === 'contactDate' && (sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />)}</div>
                      </th>
                      {activeTab === 'distributors' ? (
                        <>
                          <th className="px-6 py-4 text-right">Total Vendido</th>
                          <th className="px-6 py-4 text-right">Comisión (5%)</th>
                        </>
                      ) : (
                        <>
                          <th className="px-6 py-4 cursor-pointer hover:bg-white/5 transition" onClick={() => handleSort('lastContactDate')}>
                            <div className="flex items-center gap-1">Último Contacto {sortConfig.key === 'lastContactDate' && (sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />)}</div>
                          </th>
                          <th className="px-6 py-4 text-right cursor-pointer hover:bg-white/5 transition" onClick={() => handleSort('value')}>
                            <div className="flex items-center justify-end gap-1">Valor {sortConfig.key === 'value' && (sortConfig.direction === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />)}</div>
                          </th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody className={`divide-y transition-colors ${theme === 'dark' ? 'divide-white/5' : 'divide-gray-100'}`}>
                    {filteredContacts.map((contact) => {
                      const distMetrics = activeTab === 'distributors' ? getDistributorMetrics(contact.name) : null;
                      
                      return (
                        <tr
                          key={contact.id}
                          onClick={() => setActiveId(contact.id)}
                          className={`cursor-pointer transition-colors ${themeStyles.tableRowHover} ${
                            activeClient?.id === contact.id ? themeStyles.tableRowActive : ''
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className={`font-bold ${themeStyles.textPrimary}`}>{contact.name}</div>
                            {activeTab === 'crm' && (
                              <div className={`mt-1 flex flex-wrap gap-1`}>
                                {contact.products?.slice(0, 1).map((p, i) => (
                                  <span key={i} className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${theme === 'dark' ? 'bg-white/10 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>{p}</span>
                                ))}
                                {contact.products?.length > 1 && (
                                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${theme === 'dark' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                                    +{contact.products.length - 1}
                                  </span>
                                )}
                              </div>
                            )}
                            {activeTab === 'distributors' && (
                              <div className={`mt-1 text-xs ${themeStyles.textSecondary}`}>{contact.email || 'Sin email'}</div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <StatusBadge status={getStatus(contact.status)} theme={theme} />
                          </td>
                          <td className={`px-6 py-4 font-semibold ${themeStyles.textTertiary}`}>{formatDate(contact.contactDate)}</td>
                          
                          {activeTab === 'distributors' && distMetrics ? (
                            <>
                              <td className={`px-6 py-4 text-right font-black ${themeStyles.textPrimary}`}>{formatCurrency(distMetrics.totalVendido)}</td>
                              <td className={`px-6 py-4 text-right font-black text-emerald-500`}>{formatCurrency(distMetrics.comision)}</td>
                            </>
                          ) : (
                            <>
                              <td className={`px-6 py-4 ${themeStyles.textTertiary}`}>
                                <span className="font-semibold">{formatDate(contact.lastContactDate)}</span>
                                <span className={`ml-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${theme === 'dark' ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                                  hace {daysBetween(contact.lastContactDate)}d
                                </span>
                              </td>
                              <td className={`px-6 py-4 text-right font-black ${themeStyles.textPrimary}`}>{formatCurrency(contact.value)}</td>
                            </>
                          )}
                        </tr>
                      )
                    })}
                    {filteredContacts.length === 0 && (
                      <tr>
                        <td colSpan={5} className={`py-12 text-center text-sm font-medium ${themeStyles.textSecondary}`}>
                          No se encontraron {activeTab === 'distributors' ? 'distribuidores' : 'clientes'} que coincidan con la búsqueda.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {activeClient && (
              <aside className={`p-6 h-fit transition-colors ${themeStyles.card}`}>
                <div className={`flex items-start justify-between gap-4 mb-6 pb-6 border-b ${themeStyles.divider}`}>
                  <div>
                    <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${themeStyles.textSecondary}`}>
                      Ficha de {activeClient.role === 'distribuidor' ? 'distribuidor' : 'cliente'}
                    </p>
                    <h2 className={`text-2xl font-black tracking-tight ${themeStyles.textPrimary}`}>{activeClient.name}</h2>
                  </div>
                  <StatusBadge status={getStatus(activeClient.status)} theme={theme} />
                </div>

                <div className="grid gap-5">
                  <Field label="Nombre" themeStyles={themeStyles}>
                    <input
                      value={activeClient.name}
                      onChange={(event) => updateClient(activeClient.id, 'name', event.target.value)}
                      className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-1 ${themeStyles.inputBg}`}
                    />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Estado" themeStyles={themeStyles}>
                      <select
                        value={activeClient.status}
                        onChange={(event) => updateClient(activeClient.id, 'status', event.target.value)}
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-1 ${themeStyles.inputBg}`}
                      >
                        {statuses.map((status) => (
                          <option key={status.id} value={status.id}>
                            {status.label}
                          </option>
                        ))}
                      </select>
                    </Field>
                    
                    <Field label="Rol" themeStyles={themeStyles}>
                      <select
                        value={activeClient.role || 'cliente'}
                        onChange={(event) => updateClient(activeClient.id, 'role', event.target.value)}
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-1 ${themeStyles.inputBg}`}
                      >
                        <option value="cliente">Cliente</option>
                        <option value="distribuidor">Distribuidor</option>
                      </select>
                    </Field>
                  </div>
                  
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Teléfono" themeStyles={themeStyles}>
                      <input
                        value={activeClient.phone}
                        onChange={(event) => updateClient(activeClient.id, 'phone', event.target.value)}
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-1 ${themeStyles.inputBg}`}
                      />
                    </Field>
                    <Field label="Email" themeStyles={themeStyles}>
                      <input
                        type="email"
                        value={activeClient.email || ''}
                        onChange={(event) => updateClient(activeClient.id, 'email', event.target.value)}
                        placeholder="ejemplo@email.com"
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-1 ${themeStyles.inputBg}`}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Registro" themeStyles={themeStyles}>
                      <input
                        type="date"
                        value={activeClient.contactDate}
                        onChange={(event) => updateClient(activeClient.id, 'contactDate', event.target.value)}
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-1 ${themeStyles.inputBg}`}
                      />
                    </Field>
                    <Field label="Último contacto" themeStyles={themeStyles}>
                      <input
                        type="date"
                        value={activeClient.lastContactDate}
                        onChange={(event) => updateClient(activeClient.id, 'lastContactDate', event.target.value)}
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-1 ${themeStyles.inputBg}`}
                      />
                    </Field>
                  </div>
                  
                  {activeClient.role === 'distribuidor' ? (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Total Vendido" themeStyles={themeStyles}>
                         <div className={`w-full rounded-xl border px-4 py-2.5 text-sm font-bold opacity-75 cursor-not-allowed ${themeStyles.inputBg}`}>
                            {formatCurrency(getDistributorMetrics(activeClient.name).totalVendido)}
                         </div>
                      </Field>
                      <Field label="Comisión Ganada (5%)" themeStyles={themeStyles}>
                         <div className={`w-full rounded-xl border px-4 py-2.5 text-sm font-black text-emerald-500 opacity-75 cursor-not-allowed ${themeStyles.inputBg}`}>
                            {formatCurrency(getDistributorMetrics(activeClient.name).comision)}
                         </div>
                      </Field>
                    </div>
                  ) : (
                    <Field label="Valor estimado / comprado" themeStyles={themeStyles}>
                      <input
                        type="number"
                        value={activeClient.value}
                        onChange={(event) => updateClient(activeClient.id, 'value', event.target.value)}
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-1 ${themeStyles.inputBg}`}
                      />
                    </Field>
                  )}

                  <Field label="Productos adquiridos / interesados" themeStyles={themeStyles}>
                    <div className={`p-3 rounded-xl border ${themeStyles.inputBg}`}>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {activeClient.products?.map((prod, i) => (
                          <span key={i} className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md ${theme === 'dark' ? 'bg-white/10 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
                            {prod}
                            <button onClick={() => removeProductFromClient(prod)} className="hover:text-rose-500 transition-colors">
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                        {(!activeClient.products || activeClient.products.length === 0) && (
                          <span className={`text-xs ${themeStyles.textSecondary}`}>Sin productos asignados</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <select
                          value={newProductInput}
                          onChange={(e) => setNewProductInput(e.target.value)}
                          className={`flex-1 bg-transparent text-sm outline-none ${themeStyles.textPrimary} border-b border-dashed border-gray-400 pb-1 cursor-pointer`}
                        >
                          {CATALOG_PRODUCTS.map((prod, i) => (
                            <option key={i} value={prod} className="text-black bg-white">{prod}</option>
                          ))}
                        </select>
                        <button onClick={addProductToClient} type="button" className={`p-1.5 rounded-md transition ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'}`}>
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </Field>

                  <Field label="Notas de seguimiento" themeStyles={themeStyles}>
                    <textarea
                      value={activeClient.situation}
                      onChange={(event) => updateClient(activeClient.id, 'situation', event.target.value)}
                      rows={4}
                      className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-1 resize-none leading-relaxed ${themeStyles.inputBg}`}
                      placeholder="Detalles sobre la situación del contacto..."
                    />
                  </Field>
                </div>
              </aside>
            )}
          </section>

          {activeTab === 'crm' && (
            <section className="relative z-10 mx-auto max-w-7xl px-4 pt-4 pb-12 sm:px-6 lg:px-8">
              <h3 className={`text-sm font-bold uppercase tracking-widest mb-6 ${themeStyles.textSecondary}`}>Pipeline por estado (Clientes)</h3>
              <div className="grid gap-4 lg:grid-cols-5">
                {statuses.map((status) => {
                  const Icon = status.icon
                  const statusClients = onlyClients.filter((client) => client.status === status.id)

                  return (
                    <div key={status.id} className={`p-4 transition-colors ${themeStyles.card}`}>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex h-7 w-7 items-center justify-center rounded-lg ${status.color}`}>
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <h3 className={`text-xs font-black ${themeStyles.textTertiary}`}>{status.label}</h3>
                        </div>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${theme === 'dark' ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                          {statusClients.length}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {statusClients.slice(0, 3).map((client) => (
                          <button
                            key={client.id}
                            type="button"
                            onClick={() => setActiveId(client.id)}
                            className={`block w-full rounded-xl border px-3 py-2.5 text-left transition ${theme === 'dark' ? 'border-white/5 bg-white/5 hover:border-emerald-500/30 hover:bg-white/10' : 'border-gray-100 bg-gray-50 hover:border-emerald-500/30 hover:bg-gray-100'}`}
                          >
                            <span className={`block text-sm font-bold ${themeStyles.textPrimary}`}>{client.name}</span>
                            <span className={`mt-1 block text-[10px] font-medium truncate ${themeStyles.textSecondary}`}>
                              {client.products?.[0] || 'Sin producto'}
                            </span>
                          </button>
                        ))}
                        {statusClients.length === 0 && (
                          <div className={`rounded-xl border border-dashed px-3 py-6 text-center text-xs font-bold ${theme === 'dark' ? 'border-white/10 bg-transparent text-gray-600' : 'border-gray-200 bg-transparent text-gray-400'}`}>
                            Vacío
                          </div>
                        )}
                        {statusClients.length > 3 && (
                          <div className={`text-center pt-2 text-[10px] font-bold ${themeStyles.textSecondary}`}>
                            + {statusClients.length - 3} más
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )}
        </>
      )}

      {activeTab === 'transactions' && (
        <section className="relative z-10 mx-auto max-w-5xl gap-6 px-4 py-8 sm:px-6 lg:px-8">
          <div className={`p-6 transition-colors overflow-hidden ${themeStyles.card}`}>
            <div className={`flex items-center justify-between mb-6 pb-6 border-b ${themeStyles.divider}`}>
              <div>
                <h2 className={`text-xl font-black ${themeStyles.textPrimary}`}>Registro de Operaciones</h2>
                <p className={`text-sm mt-1 ${themeStyles.textSecondary}`}>Control de compras, unidades y asignación de distribuidores.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {transactions.map((tx) => (
                <div key={tx.id} className={`grid grid-cols-1 md:grid-cols-6 gap-4 p-4 rounded-xl border items-center transition hover:border-emerald-500/30 ${theme === 'dark' ? 'border-white/5 bg-white/5' : 'border-gray-100 bg-gray-50'}`}>
                  <div className="md:col-span-2">
                    <Field label="Descripción de producto" themeStyles={themeStyles}>
                      <select
                        value={tx.product}
                        onChange={(e) => updateTransaction(tx.id, 'product', e.target.value)}
                        className={`w-full bg-transparent border-b py-1 text-sm outline-none transition focus:border-emerald-500 ${theme === 'dark' ? 'border-white/10 text-white' : 'border-gray-300 text-gray-900'} cursor-pointer`}
                      >
                        {CATALOG_PRODUCTS.map((prod, i) => (
                          <option key={i} value={prod} className="text-black bg-white">{prod}</option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <div className="md:col-span-1">
                    <Field label="Monto" themeStyles={themeStyles}>
                      <input
                        type="number"
                        value={tx.amount}
                        onChange={(e) => updateTransaction(tx.id, 'amount', e.target.value)}
                        className={`w-full bg-transparent border-b py-1 text-sm outline-none transition focus:border-emerald-500 ${theme === 'dark' ? 'border-white/10 text-white' : 'border-gray-300 text-gray-900'}`}
                      />
                    </Field>
                  </div>
                  <div className="md:col-span-1">
                    <Field label="Unidades" themeStyles={themeStyles}>
                      <input
                        type="number"
                        value={tx.units}
                        onChange={(e) => updateTransaction(tx.id, 'units', e.target.value)}
                        className={`w-full bg-transparent border-b py-1 text-sm outline-none transition focus:border-emerald-500 ${theme === 'dark' ? 'border-white/10 text-white' : 'border-gray-300 text-gray-900'}`}
                      />
                    </Field>
                  </div>
                  <div className="md:col-span-1">
                    <Field label="Distribuidor" themeStyles={themeStyles}>
                      <input
                        value={tx.distributor}
                        onChange={(e) => updateTransaction(tx.id, 'distributor', e.target.value)}
                        className={`w-full bg-transparent border-b py-1 text-sm outline-none transition focus:border-emerald-500 ${theme === 'dark' ? 'border-white/10 text-white' : 'border-gray-300 text-gray-900'}`}
                      />
                    </Field>
                  </div>
                  <div className="md:col-span-1 flex items-end justify-between">
                    <Field label="Fecha" themeStyles={themeStyles}>
                      <input
                        type="date"
                        value={tx.date}
                        onChange={(e) => updateTransaction(tx.id, 'date', e.target.value)}
                        className={`w-full bg-transparent border-b py-1 text-sm outline-none transition focus:border-emerald-500 ${theme === 'dark' ? 'border-white/10 text-white' : 'border-gray-300 text-gray-900'}`}
                      />
                    </Field>
                    <button 
                      onClick={() => deleteTransaction(tx.id)}
                      className="ml-2 text-gray-400 hover:text-rose-500 transition-colors p-1"
                      title="Eliminar registro"
                    >
                      <RotateCcw className="w-4 h-4 rotate-45" />
                    </button>
                  </div>
                </div>
              ))}
              
              {transactions.length === 0 && (
                <div className={`py-12 text-center text-sm font-medium ${themeStyles.textSecondary}`}>
                  No hay transacciones registradas.
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

function StatusBadge({ status, theme }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold border ${status.color}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
      {status.label}
    </span>
  )
}

function Metric({ icon: Icon, label, value, themeStyles }) {
  return (
    <div className={`p-5 transition-transform hover:scale-[1.02] ${themeStyles.card}`}>
      <div className="flex items-center gap-4">
        <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${themeStyles.metricIconBg}`}>
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <p className={`text-[10px] font-bold uppercase tracking-widest ${themeStyles.textSecondary}`}>{label}</p>
          <p className={`mt-1 text-2xl font-black tracking-tight ${themeStyles.textPrimary}`}>{value}</p>
        </div>
      </div>
    </div>
  )
}

function Field({ children, label, themeStyles }) {
  return (
    <label className="grid gap-2">
      <span className={`text-[10px] font-bold uppercase tracking-widest ${themeStyles.textSecondary}`}>{label}</span>
      {children}
    </label>
  )
}

export default PanelPage
