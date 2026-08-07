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
    color: 'bg-sky-50 text-sky-800 ring-sky-200',
    dot: 'bg-sky-500',
    icon: MessageCircle,
  },
  {
    id: 'segundo-contacto',
    label: 'Segundo contacto',
    color: 'bg-indigo-50 text-indigo-800 ring-indigo-200',
    dot: 'bg-indigo-500',
    icon: Clock3,
  },
  {
    id: 'primer-compra',
    label: 'Primer compra',
    color: 'bg-amber-50 text-amber-900 ring-amber-200',
    dot: 'bg-amber-500',
    icon: ShoppingBag,
  },
  {
    id: 'reunion-pendiente',
    label: 'Reunion pendiente',
    color: 'bg-rose-50 text-rose-800 ring-rose-200',
    dot: 'bg-rose-500',
    icon: CalendarDays,
  },
  {
    id: 'nipponflex-fan',
    label: 'Nipponflex fan',
    color: 'bg-emerald-50 text-emerald-800 ring-emerald-200',
    dot: 'bg-emerald-500',
    icon: Heart,
  },
]

const initialClients = [
  {
    id: 1,
    name: 'Mariana Costa',
    phone: '+54 9 11 5248-9031',
    source: 'Instagram',
    product: 'Colchon FIR Power',
    status: 'reunion-pendiente',
    contactDate: '2026-08-07',
    lastContactDate: '2026-08-07',
    nextActionDate: '2026-08-09',
    owner: 'Alejandro',
    situation:
      'Pidio asesoramiento para cambiar colchon. Quiere comparar firmeza, garantia y financiacion antes de reservar reunion.',
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
    owner: 'Sofia',
    situation:
      'Ya recibio catalogo. Falta enviar comparativa entre kit familiar y opcion premium para cerrar dudas.',
    value: 420000,
  },
  {
    id: 3,
    name: 'Claudia Mendez',
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
    product: 'Almohadas magneticas',
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
    owner: 'Sofia',
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
      'Interesado por recuperacion muscular. Reunion pendiente con demostracion corta y opcion de combo.',
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
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ring-1 ${status.color}`}>
      <span className={`h-2 w-2 rounded-full ${status.dot}`} />
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
    <main className="min-h-screen bg-[#f4f7f2] text-[#17231b]">
      <header className="border-b border-[#dfe8dc] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-normal text-[#148a45]">Panel privado demo</p>
              <h1 className="mt-1 text-2xl font-black tracking-normal text-[#17231b] sm:text-3xl">
                CRM Vidasanasm Nipponflex
              </h1>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={addClient}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#148a45] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0f7338]"
              >
                <Plus className="h-4 w-4" />
                Nuevo cliente
              </button>
              <button
                type="button"
                onClick={resetDemo}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#cbd8c8] bg-white px-4 py-2.5 text-sm font-bold text-[#334238] transition hover:bg-[#eef5ec]"
              >
                <RotateCcw className="h-4 w-4" />
                Reset demo
              </button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Metric icon={Users} label="Clientes" value={totals.clients} />
            <Metric icon={Clock3} label="Reuniones pendientes" value={totals.pending} />
            <Metric icon={Heart} label="Fans" value={totals.fans} />
            <Metric icon={ShoppingBag} label="Oportunidad" value={formatCurrency(totals.opportunity)} />
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[1.55fr_0.9fr] lg:px-8">
        <div className="min-w-0 rounded-lg border border-[#dfe8dc] bg-white">
          <div className="flex flex-col gap-3 border-b border-[#e5ede2] p-4 lg:flex-row lg:items-center">
            <label className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#667568]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar cliente, producto, telefono o situacion"
                className="h-11 w-full rounded-md border border-[#cbd8c8] bg-white pl-10 pr-3 text-sm font-medium outline-none transition focus:border-[#148a45] focus:ring-4 focus:ring-[#148a45]/10"
              />
            </label>

            <label className="relative w-full lg:w-60">
              <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#667568]" />
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="h-11 w-full appearance-none rounded-md border border-[#cbd8c8] bg-white pl-10 pr-3 text-sm font-bold outline-none transition focus:border-[#148a45] focus:ring-4 focus:ring-[#148a45]/10"
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
              <thead className="border-b border-[#e5ede2] bg-[#f8fbf6] text-xs font-black uppercase tracking-normal text-[#667568]">
                <tr>
                  <th className="px-4 py-3">Cliente</th>
                  <th className="px-4 py-3">Estado</th>
                  <th className="px-4 py-3">Contacto actual</th>
                  <th className="px-4 py-3">Proxima accion</th>
                  <th className="px-4 py-3">Producto</th>
                  <th className="px-4 py-3 text-right">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#edf2ea]">
                {filteredClients.map((client) => (
                  <tr
                    key={client.id}
                    onClick={() => setActiveId(client.id)}
                    className={`cursor-pointer transition hover:bg-[#f8fbf6] ${
                      activeClient?.id === client.id ? 'bg-emerald-50/70' : ''
                    }`}
                  >
                    <td className="px-4 py-4">
                      <div className="font-black text-[#17231b]">{client.name}</div>
                      <div className="mt-1 text-xs font-medium text-[#667568]">{client.phone}</div>
                    </td>
                    <td className="px-4 py-4">
                      <StatusBadge statusId={client.status} />
                    </td>
                    <td className="px-4 py-4 font-bold text-[#334238]">
                      {formatDate(client.lastContactDate)}
                      <span className="block text-xs font-medium text-[#7a897d]">
                        hace {daysBetween(client.lastContactDate)} dias
                      </span>
                    </td>
                    <td className="px-4 py-4 font-bold text-[#334238]">{formatDate(client.nextActionDate)}</td>
                    <td className="px-4 py-4 text-[#334238]">{client.product}</td>
                    <td className="px-4 py-4 text-right font-black text-[#17231b]">{formatCurrency(client.value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {activeClient && (
          <aside className="rounded-lg border border-[#dfe8dc] bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-normal text-[#667568]">Situacion actual</p>
                <h2 className="mt-1 text-xl font-black text-[#17231b]">{activeClient.name}</h2>
              </div>
              <StatusBadge statusId={activeClient.status} />
            </div>

            <div className="mt-5 grid gap-3">
              <Field label="Nombre">
                <input
                  value={activeClient.name}
                  onChange={(event) => updateClient(activeClient.id, 'name', event.target.value)}
                  className="field-input"
                />
              </Field>

              <Field label="Estado">
                <select
                  value={activeClient.status}
                  onChange={(event) => updateClient(activeClient.id, 'status', event.target.value)}
                  className="field-input"
                >
                  {statuses.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Contacto actual">
                  <input
                    type="date"
                    value={activeClient.lastContactDate}
                    onChange={(event) => updateClient(activeClient.id, 'lastContactDate', event.target.value)}
                    className="field-input"
                  />
                </Field>
                <Field label="Proxima accion">
                  <input
                    type="date"
                    value={activeClient.nextActionDate}
                    onChange={(event) => updateClient(activeClient.id, 'nextActionDate', event.target.value)}
                    className="field-input"
                  />
                </Field>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Origen">
                  <input
                    value={activeClient.source}
                    onChange={(event) => updateClient(activeClient.id, 'source', event.target.value)}
                    className="field-input"
                  />
                </Field>
                <Field label="Responsable">
                  <input
                    value={activeClient.owner}
                    onChange={(event) => updateClient(activeClient.id, 'owner', event.target.value)}
                    className="field-input"
                  />
                </Field>
              </div>

              <Field label="Producto">
                <input
                  value={activeClient.product}
                  onChange={(event) => updateClient(activeClient.id, 'product', event.target.value)}
                  className="field-input"
                />
              </Field>

              <Field label="Valor estimado">
                <input
                  type="number"
                  value={activeClient.value}
                  onChange={(event) => updateClient(activeClient.id, 'value', event.target.value)}
                  className="field-input"
                />
              </Field>

              <Field label="Nota de seguimiento">
                <textarea
                  value={activeClient.situation}
                  onChange={(event) => updateClient(activeClient.id, 'situation', event.target.value)}
                  rows={5}
                  className="field-input resize-none leading-6"
                />
              </Field>
            </div>
          </aside>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-3 lg:grid-cols-5">
          {statuses.map((status) => {
            const Icon = status.icon
            const statusClients = clients.filter((client) => client.status === status.id)

            return (
              <div key={status.id} className="rounded-lg border border-[#dfe8dc] bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex h-8 w-8 items-center justify-center rounded-md ${status.color}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-sm font-black text-[#17231b]">{status.label}</h3>
                  </div>
                  <span className="rounded-full bg-[#eef5ec] px-2.5 py-1 text-xs font-black text-[#334238]">
                    {statusClients.length}
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  {statusClients.slice(0, 3).map((client) => (
                    <button
                      key={client.id}
                      type="button"
                      onClick={() => setActiveId(client.id)}
                      className="block w-full rounded-md border border-[#edf2ea] px-3 py-2 text-left transition hover:border-[#148a45]/40 hover:bg-[#f8fbf6]"
                    >
                      <span className="block text-sm font-bold text-[#17231b]">{client.name}</span>
                      <span className="mt-0.5 block text-xs font-medium text-[#667568]">{client.product}</span>
                    </button>
                  ))}
                  {statusClients.length === 0 && (
                    <div className="rounded-md border border-dashed border-[#dfe8dc] px-3 py-5 text-center text-xs font-bold text-[#7a897d]">
                      Sin clientes
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
    <div className="rounded-lg border border-[#dfe8dc] bg-[#fbfdf9] p-4">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#e9f5e7] text-[#148a45]">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-black uppercase tracking-normal text-[#667568]">{label}</p>
          <p className="mt-1 text-xl font-black text-[#17231b]">{value}</p>
        </div>
      </div>
    </div>
  )
}

function Field({ children, label }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-black uppercase tracking-normal text-[#667568]">{label}</span>
      {children}
    </label>
  )
}

export default PanelPage
