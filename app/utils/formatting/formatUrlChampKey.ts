export function formatUrlChampKey(key: string): string {
  return key.toLowerCase().replace("'", "").replace(". ", "");
}
