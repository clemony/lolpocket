export type RoleKey = 'top' | 'jungle' | 'middle' | 'bottom' | 'support'
export const roleKey: string[] = [
  'top',
  'jungle',
  'middle',
  'bottom',
  'support',
] satisfies RoleKey[]

export function normalizeRole(pos: string): RoleKey {
  switch (pos.toLowerCase()) {
    case 'top':
      return 'top'
    case 'jungle':
      return 'jungle'
    case 'middle':
    case 'mid':
      return 'middle'
    case 'bottom':
    case 'bot':
      return 'bottom'
    case 'utility':
    case 'support':
      return 'support'
    default:
      return 'support' // safe fallback
  }
}

export function getRoleStat(
  map: Record<string, StatDetail>,
  role: string
): StatDetail {
  if (!map[role]) {
    map[role] = { games: 0, win: 0 }
  }
  return map[role]
}
