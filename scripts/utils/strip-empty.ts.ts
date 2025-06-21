export function stripEmpty(obj: any): any {
  if (Array.isArray(obj)) {
    return obj
      .map(stripEmpty)
      .filter(
        v =>
          v !== undefined
          && v !== null
          && v !== ''
          && !(Array.isArray(v) && v.length === 0),
      )
  }

  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj)
        .map(([k, v]) => [k, stripEmpty(v)])
        .filter(
          ([k, v]) =>
            v !== undefined
            && v !== null
            && v !== ''
            && !(Array.isArray(v) && v.length === 0)
            && !(k === 'purchasable' && v === true),
        ),
    )
  }

  return obj
}
