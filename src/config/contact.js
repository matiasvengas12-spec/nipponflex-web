export const WHATSAPP_PHONE = '5491144342188'
export const INSTAGRAM_URL = 'https://www.instagram.com/vidaplenasm/'
export const INSTAGRAM_HANDLE = '@vidaplenasm'

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}
