const roleColors = {
  All: "bc/40",
  Top: "domination",
  Middle: "sorcery",
  Jungle: "resolve",
  Bottom: "precision",
  Support: "inspiration",
}
export function getRoleColor(prefix: string, role: string): string {
  console.log("💠 - getRoleColor - role:", role)
  // prefix i.e. bg -> background

  return `${prefix}-${roleColors[role]}`
}
