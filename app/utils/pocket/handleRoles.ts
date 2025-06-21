export function handleRoles(pocket: Pocket) {
  if (pocket.roles && pocket.roles.length > 1 && pocket.roles.includes('all')) {
    const a = pocket.roles.findIndex(r => r == 'all')
    pocket.roles.splice(a, 1)
  }
  else if (pocket.roles && pocket.roles.length <= 0) {
    pocket.roles.push('all')
  }
}
