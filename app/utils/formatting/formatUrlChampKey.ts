export function formatUrlChampKey(key: string): string {
  if (!key)
    return
  return key.toLowerCase().replace('\'', '').replace('. ', '')
}
