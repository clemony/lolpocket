export function handleRoles(pocket: Pocket, role?: string) {
  if (!pocket.roles)
    return

  if (pocket.roles.length > 1 && pocket.roles.includes('All')) {
    const a = pocket.roles.findIndex(r => r === 'All')
    pocket.roles.splice(a, 1)
  }
  if ((role && role === 'All' && pocket) || pocket.roles.length === 5) {
    pocket.roles = ['All']
  }
  else if (pocket.roles.length <= 0) {
    pocket.roles.push('All')
  }
}
