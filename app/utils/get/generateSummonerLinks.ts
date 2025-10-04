export function getSummonerSlug(summoner: Account | Summoner) {
  if (!summoner)
    return

  return `${summoner.region}/${summoner.name}_${summoner.tag}`
}

export function generateSummonerLinks(summoner: Account | Summoner) {
  if (!summoner)
    return null

  const slug = getSummonerSlug(summoner)
  return {
    name: 'profile', // `${capitalize(as().account.name)}`,
    children: [
      {
        name: 'Match History',
        meta: {
          icon: 'history'
        },
        path: `/summoner/${slug}`,
      },
      {
        name: 'Mastery',
        meta: {
          icon: 'i-lol-mastery'
        },
        path: `/summoner/${slug}/mastery`,
      },
      {
        name: 'Live',
        meta: {
          icon: 'mingcute:sound-line-line'
        },
        path: `/summoner/${slug}/live`
      },
    ] as any,
  }
}
