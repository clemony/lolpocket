export default function cleanName(name: string): string[] {
  const cleanedName = name
    .replace(/\b(the|of)\b/gi, '')
    .replace(/[.]/g, '')
    .trim();

  return cleanedName.split(/\s+/).filter(Boolean);
}
