import TopBuildstrinket from 'components/summoner/trinkets/trinket/PinnedPocketsTrinket.vue'
import TopBuildsGhost from 'components/summoner/trinkets/ghost/PinnedPocketsGhost.vue'
import RankedGhost from 'components/summoner/trinkets/ghost/RankedGhost.vue'
import ChampionMasteryGhost from 'components/summoner/trinkets/ghost/Top3MasteryGhost.vue'
import Rankedtrinket from 'components/summoner/trinkets/trinket/RankedTrinket.vue'
import ChampionMasterytrinket from 'components/summoner/trinkets/trinket/Top3MasteryTrinket.vue'
import ChallengeOverviewGhost from 'components/summoner/trinkets/ghost/ChallengesGhost.vue'
import ChallengeOverviewtrinket from 'components/summoner/trinkets/trinket/ChallengesTrinket.vue'
import SingleMasterytrinket from 'components/summoner/trinkets/trinket/MasteryTrinket.vue'
import SingleMasteryGhost from 'components/summoner/trinkets/ghost/MasteryGhost.vue'

export const allTrinkets = [
  {
    name: 'topbuilds',
    component: markRaw(TopBuildstrinket),
    ghost: markRaw(TopBuildsGhost),
  },
  {
    name: 'user-solo-ranked',
    component: markRaw(Rankedtrinket),
    ghost: markRaw(RankedGhost),
    queue: 'soloDuo',
    title: 'Solo/Duo',
  },

  {
    name: 'user-flex-ranked',
    component: markRaw(Rankedtrinket),
    ghost: markRaw(RankedGhost),
    queue: 'flex',
    title: 'Flex',
  },
  {
    name: 'championmastery',
    component: markRaw(ChampionMasterytrinket),
    ghost: markRaw(ChampionMasteryGhost),
  },
  {
    name: 'challengecategories',
    component: markRaw(ChallengeOverviewtrinket),
    ghost: markRaw(ChallengeOverviewGhost),
  },

  {
    name: 'singlemastery',
    component: markRaw(SingleMasterytrinket),
    ghost: markRaw(SingleMasteryGhost),
  },
]

// Create a lookup dictionary for easy access
export const trinketRegistry = allTrinkets.reduce((acc, trinket) => {
  acc[trinket.name] = trinket.component
  return acc
}, {} as Record<string, any>)

export const ghostRegistry = allTrinkets.reduce((acc, trinket) => {
  acc[trinket.name] = trinket.ghost
  return acc
}, {} as Record<string, any>)

/* export function addtrinket(trinketName: string, index: number) {
  const as = useAccountStore()
  if (index < as.userBoardtrinkets.length) {
    as.userBoardtrinkets[index] = trinketName ? { name: trinketName } : null
  }
}
*/
/* export function resetTrinkets() {
  const as = useAccountStore()
  as.nexusTrinkets = Array.from({ length: 9 }, () => null)
}
 */
export const challengeCats = [
  {
    name: 'expertise',
    icon: 'expertise',
    color: 'var(--color-domination)',
  },
  {
    name: 'veterancy',
    icon: 'veterancy',
    color: 'var(--color-sorcery)',
  },
  {
    name: 'collection',
    icon: 'collection',
    color: 'var(--color-precision)',

  },
  {
    name: 'imagination',
    icon: 'imagination',
    color: 'var(--color-inspiration)',
  },
  {
    name: 'teamwork & strategy',
    icon: 'teamwork',
    color: 'var(--color-resolve)',
  },
]
