export function getPocketLinks(pocket: Pocket) {
  const pocketPages = [
    {
      name: 'Champions',
      icon: 'i-no-champ',
      link: `/pocket/${pocket.key}`,
    },
    {
      name: 'Items',
      icon: 'mdi:bow-arrow',
      link: `/pocket/${pocket.key}/items`,
    },
    {
      name: 'Runes',
      icon: 'i-rune-icon',
      link: `/pocket/${pocket.key}/runes`,
    },

    {
      name: 'Complete',
      icon: 'stash:infinity-solid',
      link: `/pocket/${pocket.key}/complete`,
    },
  ]

  return pocketPages
}
