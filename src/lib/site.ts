// Single source of truth for company contact details and social links.
// Replace the social URLs with the real company profile links when available.
export const SITE = {
  name: "INDRAPROJECTS",
  tagline: "Dream. Design. Develop. Deliver.",
  description:
    "INDRAPROJECTS is an IT solutions and branding agency crafting websites, brand identities, UI/UX and engineering projects — and helping students build real-world careers.",
  address: "124/9, Mahaliyamman Kovil Street, Suriyampalayam, Erode, Tamil Nadu, India.",
  phone: "9524165106",
  phoneHref: "tel:+919524165106",
  email: "kavingm2007@gmail.com",
  emailHref: "mailto:kavingm2007@gmail.com",
  whatsappHref: "https://wa.me/919524165106",
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
  },
} as const;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`;
export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;
