import { buildWhatsAppUrl } from '../../config/contact'

function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(
        'Hola, quiero recibir asesoramiento sobre productos Nipponflex.',
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-green-950/30 transition hover:-translate-y-1 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#a8efc1] sm:bottom-5 sm:right-5 sm:h-16 sm:w-16"
    >
      <svg
        aria-hidden="true"
        className="h-7 w-7 sm:h-8 sm:w-8"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.6 6.3A7.8 7.8 0 0 0 12.1 4a7.9 7.9 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.8 1A7.9 7.9 0 0 0 20 12a7.8 7.8 0 0 0-2.4-5.7ZM12 18.4a6.5 6.5 0 0 1-3.3-.9l-.2-.1-2.5.6.7-2.4-.2-.3A6.5 6.5 0 1 1 12 18.4Zm3.6-4.9c-.2-.1-1.2-.6-1.3-.6-.2-.1-.3-.1-.5.1-.1.2-.5.6-.6.8-.1.1-.2.1-.4 0a5.3 5.3 0 0 1-2.7-2.4c-.2-.3.2-.3.6-1.1.1-.1 0-.2 0-.3s-.4-1.1-.6-1.5c-.2-.3-.3-.3-.4-.3h-.4a.7.7 0 0 0-.5.2 2.2 2.2 0 0 0-.7 1.6 3.8 3.8 0 0 0 .8 2 8.7 8.7 0 0 0 3.3 3c.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4-.1 1.2-.5 1.3-.9.2-.5.2-.9.1-1-.1 0-.2-.1-.4-.2Z" />
      </svg>
    </a>
  )
}

export default FloatingWhatsApp
