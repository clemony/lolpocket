interface ContactAddress {
  name: string
  address: string
}

export const contactLP: Record<string, ContactAddress> = {
  contact: {
    name: 'contact',
    address: 'contact@lolpocket.com',
  },
  privacy: {
    name: 'privacy',
    address: 'support@lolpocket.com',
  },
  support: {
    name: 'support',
    address: 'support@lolpocket.com',
  }
}