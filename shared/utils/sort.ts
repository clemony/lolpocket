export function sortAscending(value: any, property: string | number) {
  return value.sort((a, b) => Number(a.property) - Number(b.property))
}
