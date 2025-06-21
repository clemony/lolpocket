export function getPocketLinks(pocket: Pocket) {
  const pocketPages = [
    {
      link: `/pocket/${pocket.key}`,
      name: 'Champions',
      icon: 'i-no-champ',
    },
    {
      link: `/pocket/${pocket.key}/items`,
      name: 'Items',
      icon: 'mdi:bow-arrow',
    },
    {
      link: `/pocket/${pocket.key}/runes`,
      name: 'Runes',
      icon: 'i-rune-icon',
    },

    {
      link: `/pocket/${pocket.key}/complete`,
      name: 'Complete',
      icon: 'stash:infinity-solid',
    },
  ]

  return pocketPages
}
