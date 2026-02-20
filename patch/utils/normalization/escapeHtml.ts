export function escapeHtml(text: string): string {
  return text.replace(
    /[&<>"']/g,
    ch =>
      ({
        '"': '&quot;',
        '&': '&amp;',
        '\'': '&#039;',
        '<': '&lt;',
        '>': '&gt;',
      })[ch]!
  )
}
