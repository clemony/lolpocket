export function generateSummonerLinks(summoner: Account | Summoner) {
  if (!summoner)
    return null

  const slug = `${summoner.region}/${summoner.name}_${summoner.tag}`
  return {
    name: 'profile', // `${capitalize(as().account.name)}`,
    children: [
      {
        name: 'Match History',
        path: `/summoner/${slug}`,
      },
      {
        name: 'Mastery',
        path: `/summoner/${slug}/mastery`,
      },
      {
        name: 'Live',
        path: `/summoner/${slug}/live`,
      },
    ] as any,
  }
}
