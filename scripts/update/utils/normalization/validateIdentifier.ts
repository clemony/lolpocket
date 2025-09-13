export function toValidIdentifier(name: string) {
  return name.replace(/[^\w$\s]/g, '')
}