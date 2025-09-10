import { getSummonerIcon } from '../splash'

export function generateSummonerLinks(summoner?: Summoner | Partial<Summoner> | Account, puuid?: string): LinkObject {
  if (!summoner)
    return null

  return {
    name: `${capitalize(as().account.name)}`,
    icon: {
      name: getSummonerIcon(as().account.icon),
      class: 'summoner-icon',
    },
    links: [
      {
        name: 'Match History',
        icon: {
          name: 'history',
          class: '**:stroke-[1.5] size-5.25  dst',
        },
        link: `/summoner/${summoner.region}/${summoner.name}_${summoner.tag}`,
      },
      {
        name: 'Mastery',
        icon: {
          name: 'i-lol-mastery',
          class: ' opacity-70',
        },
        link: `/summoner/${summoner.region}/${summoner.name}_${summoner.tag}/mastery`,
      },
      {
        name: 'Live',
        icon: {
          name: 'lucide:square-activity',
          class: '**:stroke-[1.5]  ',
        },
        link: `/summoner/${summoner.region}/${summoner.name}_${summoner.tag}/live`,
      },
    ],
  }
}