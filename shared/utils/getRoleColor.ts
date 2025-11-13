const roleColors = {
  Middle: "sorcery",
  All: "bc/40",
  Bottom: "precision",
  Jungle: "resolve",
  Support: "inspiration",
  Top: "domination",
};
export function getRoleColor(prefix: string, role: string): string {
  console.log("💠 - getRoleColor - role:", role);
  // prefix i.e. bg -> background

  return `${prefix}-${roleColors[role]}`;
}
