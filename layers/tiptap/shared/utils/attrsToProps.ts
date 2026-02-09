export function attrsToProps(
  attrs: Record<string, string | undefined>
) {
  return {
    id: attrs['data-id'],
    key: attrs['data-key'],
    name: attrs['data-name'],
  }
}
