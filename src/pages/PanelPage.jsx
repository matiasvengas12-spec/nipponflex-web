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
} from 'lucide-react'

const STORAGE_KEY = 'vidasanasm-crm-demo'

const statuses = [
  {
    id: 'primer-contacto',
    label: 'Primer contacto',
    color: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    dot: 'bg-sky-400',
    icon: MessageCircle,
  },
  {
    id: 'segundo-contacto',
    label: 'Segundo contacto',
    color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    dot: 'bg-indigo-400',
    icon: Clock3,
  },
  {
    id: 'primer-compra',
    label: 'Primer compra',
    color: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    dot: 'bg-amber-400',
    icon: ShoppingBag,
  },
  {
    id: 'reunion-pendiente',
    label: 'Reunión pendiente',
    color: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    dot: 'bg-rose-400',
    icon: CalendarDays,
  },
  {
    id: 'nipponflex-fan',
    label: 'Nipponflex fan',
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    dot: 'bg-emerald-400',
    icon: Heart,
  },
]

const initialClients = [
  {
    id: 1,
    name: 'Mariana Costa',
    phone: '+54 9 11 5248-9031',
    source: 'Instagram',
    product: 'Colchón FIR Power',
    status: 'reunion-pendiente',
    contactDate: '2026-08-07',
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
    phone: '+54 9 11 6821-4419',
    source: 'WhatsApp',
    product: 'Kit familiar Magneto',
    status: 'segundo-contacto',
    contactDate: '2026-08-06',
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
    phone: '+54 9 11 3904-2208',
    source: 'Referido',
    product: 'Purificador Ion Ball',
    status: 'primer-compra',
    contactDate: '2026-08-02',
    lastContactDate: '2026-08-05',
    nextActionDate: '2026-08-12',
    owner: 'Alejandro',
    situation:
      'Hizo primera compra. Programar seguimiento de experiencia y detectar si suma almohadas.',
    value: 155000,
  },
  {
    id: 4,
    name: 'Pablo Sosa',
    phone: '+54 9 11 7114-0038',
    source: 'Formulario web',
    product: 'Almohadas magnéticas',
    status: 'primer-contacto',
    contactDate: '2026-08-07',
    lastContactDate: '2026-08-07',
    nextActionDate: '2026-08-07',
    owner: 'Mica',
    situation:
      'Consulta inicial por dolor cervical. Falta validar presupuesto, necesidad y mejor horario de contacto.',
    value: 210000,
  },
  {
    id: 5,
    name: 'Natalia Pereyra',
    phone: '+54 9 11 3408-7729',
    source: 'Cliente anterior',
    product: 'Sistema descanso completo',
    status: 'nipponflex-fan',
    contactDate: '2026-07-22',
    lastContactDate: '2026-08-04',
    nextActionDate: '2026-08-20',
    owner: 'Sofía',
    situation:
      'Compra recurrente y recomienda contactos. Ideal para programa de referidos y contenido testimonial.',
    value: 1280000,
  },
  {
    id: 6,
    name: 'Gustavo Ferreyra',
    phone: '+54 9 11 6012-8841',
    source: 'Evento',
    product: 'Manta FIR Power',
    status: 'reunion-pendiente',
    contactDate: '2026-08-03',
    lastContactDate: '2026-08-06',
    nextActionDate: '2026-08-10',
    owner: 'Mica',
    situation:
      'Interesado por recuperación muscular. Reunión pendiente con demostración corta y opción de combo.',
    value: 360000,
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

function loadStoredClients() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    const parsed = stored ? JSON.parse(stored) : null

    return Array.isArray(parsed) && parsed.length > 0 ? parsed : initialClients
  } catch {
    return initialClients
  }
}

function StatusBadge({ statusId }) {
  const status = getStatus(statusId)

  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold border ${status.color}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
      {status.label}
    </span>
  )
}

function PanelPage() {
  const [clients, setClients] = useState(loadStoredClients)
  const [activeId, setActiveId] = useState(clients[0]?.id)
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('todos')

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(clients))
  }, [clients])

  const activeClient = clients.find((client) => client.id === activeId) ?? clients[0]

  const filteredClients = useMemo(() => {
    return clients.filter((client) => {
      const matchesStatus = statusFilter === 'todos' || client.status === statusFilter
      const term = query.trim().toLowerCase()
      const matchesQuery =
        !term ||
        [client.name, client.phone, client.source, client.product, client.situation]
          .join(' ')
          .toLowerCase()
          .includes(term)

      return matchesStatus && matchesQuery
    })
  }, [clients, query, statusFilter])

  const totals = useMemo(() => {
    const opportunity = clients.reduce((sum, client) => sum + client.value, 0)
    const pending = clients.filter((client) => client.status === 'reunion-pendiente').length
    const fans = clients.filter((client) => client.status === 'nipponflex-fan').length

    return { opportunity, pending, fans, clients: clients.length }
  }, [clients])

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

  const addClient = () => {
    const nextId = Math.max(...clients.map((client) => client.id), 0) + 1
    const today = new Date().toISOString().slice(0, 10)
    const newClient = {
      id: nextId,
      name: 'Nuevo cliente',
      phone: '+54 9 11',
      source: 'Manual',
      product: 'Producto a definir',
      status: 'primer-contacto',
      contactDate: today,
      lastContactDate: today,
      nextActionDate: today,
      owner: 'Alejandro',
      situation: 'Contacto creado para seguimiento comercial.',
      value: 0,
    }

    setClients((current) => [newClient, ...current])
    setActiveId(nextId)
  }

  const resetDemo = () => {
    setClients(initialClients)
    setActiveId(initialClients[0].id)
    setQuery('')
    setStatusFilter('todos')
  }

  return (
    <main className="min-h-screen bg-black text-gray-200 selection:bg-emerald-500/30 overflow-x-hidden pb-12">
      {/* Background glow effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen opacity-30" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-emerald-400">Panel privado demo</p>
              <h1 className="mt-1 text-2xl font-black tracking-tight text-white sm:text-3xl">
                CRM Vida Plena Nipponflex
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={resetDemo}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                <RotateCcw className="h-4 w-4" />
                Reset demo
              </button>
              <button
                type="button"
                onClick={addClient}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition hover:scale-105 hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
                Nuevo cliente
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Metric icon={Users} label="Clientes" value={totals.clients} />
            <Metric icon={Clock3} label="Reuniones" value={totals.pending} />
            <Metric icon={Heart} label="Fans" value={totals.fans} />
            <Metric icon={ShoppingBag} label="Oportunidad" value={formatCurrency(totals.opportunity)} />
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.55fr_0.9fr] lg:px-8">
        <div className="min-w-0 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden">
          <div className="flex flex-col gap-4 border-b border-white/10 p-5 lg:flex-row lg:items-center">
            <label className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar cliente, producto o situación..."
                className="w-full h-11 rounded-xl border border-white/10 bg-black/50 pl-11 pr-4 text-sm text-gray-200 placeholder-gray-500 outline-none transition focus:border-emerald-500/50 focus:bg-black focus:ring-1 focus:ring-emerald-500/50"
              />
            </label>

            <label className="relative w-full lg:w-64">
              <Filter className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="w-full h-11 appearance-none rounded-xl border border-white/10 bg-black/50 pl-11 pr-4 text-sm font-semibold text-gray-200 outline-none transition focus:border-emerald-500/50 focus:bg-black focus:ring-1 focus:ring-emerald-500/50"
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
            <table className="w-full min-w-[880px] text-left text-sm">
              <thead className="border-b border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-gray-400">
                <tr>
                  <th className="px-6 py-4">Cliente</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4">Contacto</th>
                  <th className="px-6 py-4">Próxima acción</th>
                  <th className="px-6 py-4 text-right">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredClients.map((client) => (
                  <tr
                    key={client.id}
                    onClick={() => setActiveId(client.id)}
                    className={`cursor-pointer transition-colors hover:bg-white/5 ${
                      activeClient?.id === client.id ? 'bg-white/5' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="font-bold text-white">{client.name}</div>
                      <div className="mt-1 text-xs font-medium text-gray-500">{client.product}</div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge statusId={client.status} />
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      <span className="font-semibold">{formatDate(client.lastContactDate)}</span>
                      <span className="ml-2 inline-block rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-bold text-gray-400">
                        hace {daysBetween(client.lastContactDate)}d
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-300">{formatDate(client.nextActionDate)}</td>
                    <td className="px-6 py-4 text-right font-black text-white">{formatCurrency(client.value)}</td>
                  </tr>
                ))}
                {filteredClients.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-sm font-medium text-gray-500">
                      No se encontraron clientes que coincidan con la búsqueda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {activeClient && (
          <aside className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md p-6 h-fit">
            <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Ficha de cliente</p>
                <h2 className="text-2xl font-black text-white tracking-tight">{activeClient.name}</h2>
              </div>
              <StatusBadge statusId={activeClient.status} />
            </div>

            <div className="grid gap-5">
              <Field label="Nombre">
                <input
                  value={activeClient.name}
                  onChange={(event) => updateClient(activeClient.id, 'name', event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-gray-200 outline-none transition focus:border-emerald-500/50 focus:bg-black focus:ring-1 focus:ring-emerald-500/50"
                />
              </Field>

              <Field label="Estado">
                <select
                  value={activeClient.status}
                  onChange={(event) => updateClient(activeClient.id, 'status', event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-gray-200 outline-none transition focus:border-emerald-500/50 focus:bg-black focus:ring-1 focus:ring-emerald-500/50"
                >
                  {statuses.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Último contacto">
                  <input
                    type="date"
                    value={activeClient.lastContactDate}
                    onChange={(event) => updateClient(activeClient.id, 'lastContactDate', event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-gray-200 outline-none transition focus:border-emerald-500/50 focus:bg-black focus:ring-1 focus:ring-emerald-500/50"
                  />
                </Field>
                <Field label="Próxima acción">
                  <input
                    type="date"
                    value={activeClient.nextActionDate}
                    onChange={(event) => updateClient(activeClient.id, 'nextActionDate', event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-gray-200 outline-none transition focus:border-emerald-500/50 focus:bg-black focus:ring-1 focus:ring-emerald-500/50"
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Teléfono">
                  <input
                    value={activeClient.phone}
                    onChange={(event) => updateClient(activeClient.id, 'phone', event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-gray-200 outline-none transition focus:border-emerald-500/50 focus:bg-black focus:ring-1 focus:ring-emerald-500/50"
                  />
                </Field>
                <Field label="Valor estimado">
                  <input
                    type="number"
                    value={activeClient.value}
                    onChange={(event) => updateClient(activeClient.id, 'value', event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-gray-200 outline-none transition focus:border-emerald-500/50 focus:bg-black focus:ring-1 focus:ring-emerald-500/50"
                  />
                </Field>
              </div>

              <Field label="Producto interesado">
                <input
                  value={activeClient.product}
                  onChange={(event) => updateClient(activeClient.id, 'product', event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-gray-200 outline-none transition focus:border-emerald-500/50 focus:bg-black focus:ring-1 focus:ring-emerald-500/50"
                />
              </Field>

              <Field label="Notas de seguimiento">
                <textarea
                  value={activeClient.situation}
                  onChange={(event) => updateClient(activeClient.id, 'situation', event.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-gray-200 outline-none transition focus:border-emerald-500/50 focus:bg-black focus:ring-1 focus:ring-emerald-500/50 resize-none leading-relaxed"
                  placeholder="Detalles sobre la situación del cliente..."
                />
              </Field>
            </div>
          </aside>
        )}
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-4 pt-4 pb-12 sm:px-6 lg:px-8">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Pipeline por estado</h3>
        <div className="grid gap-4 lg:grid-cols-5">
          {statuses.map((status) => {
            const Icon = status.icon
            const statusClients = clients.filter((client) => client.status === status.id)

            return (
              <div key={status.id} className="rounded-2xl border border-white/10 bg-[#0a0a0a]/50 p-4">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex h-7 w-7 items-center justify-center rounded-lg ${status.color}`}>
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <h3 className="text-xs font-black text-gray-300">{status.label}</h3>
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-gray-400">
                    {statusClients.length}
                  </span>
                </div>
                <div className="space-y-2">
                  {statusClients.slice(0, 3).map((client) => (
                    <button
                      key={client.id}
                      type="button"
                      onClick={() => setActiveId(client.id)}
                      className="block w-full rounded-xl border border-white/5 bg-white/5 px-3 py-2.5 text-left transition hover:border-emerald-500/30 hover:bg-white/10"
                    >
                      <span className="block text-sm font-bold text-gray-200">{client.name}</span>
                      <span className="mt-1 block text-[10px] font-medium text-gray-500 truncate">{client.product}</span>
                    </button>
                  ))}
                  {statusClients.length === 0 && (
                    <div className="rounded-xl border border-dashed border-white/10 bg-transparent px-3 py-6 text-center text-xs font-bold text-gray-600">
                      Vacío
                    </div>
                  )}
                  {statusClients.length > 3 && (
                    <div className="text-center pt-2 text-[10px] font-bold text-gray-500">
                      + {statusClients.length - 3} más
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

function Metric({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md p-5 transition-transform hover:scale-[1.02]">
      <div className="flex items-center gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-gray-300">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{label}</p>
          <p className="mt-1 text-2xl font-black text-white tracking-tight">{value}</p>
        </div>
      </div>
    </div>
  )
}

function Field({ children, label }) {
  return (
    <label className="grid gap-2">
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{label}</span>
      {children}
    </label>
  )
}

export default PanelPage
