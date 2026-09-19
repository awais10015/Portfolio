export const EMAIL = "awais10015@gmail.com";

export const CONTACT_FORM_ID = "contact-form";

export const CONTACT_FORM_HASH = `#${CONTACT_FORM_ID}`;

export const WHATSAPP_NUMBER = "923135820233";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Awais, I saw your portfolio and would like to get in touch.";

export function getWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
