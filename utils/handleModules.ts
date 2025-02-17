import TopBuildsModule from 'components/summoner/modules/module/TopBuildsModule.vue'
import TopBuildsGhost from 'components/summoner/modules/ghost/TopBuildsGhost.vue'
import RankedGhost from 'components/summoner/modules/ghost/RankedGhost.vue'
import ChampionMasteryGhost from 'components/summoner/modules/ghost/ChampionMasteryGhost.vue'
import NotesGhost from 'components/summoner/modules/ghost/NotesGhost.vue'
import RankedModule from 'components/summoner/modules/module/RankedModule.vue'
import ChampionMasteryModule from 'components/summoner/modules/module/ChampionMasteryModule.vue'
import ChallengeOverviewGhost from 'components/summoner/modules/ghost/ChallengeOverviewGhost.vue'
import ChallengeOverviewModule from 'components/summoner/modules/module/ChallengeOverviewModule.vue'
import NotesModule from 'components/summoner/modules/module/NotesModule.vue'
import SingleMasteryModule from 'components/summoner/modules/module/SingleMasteryModule.vue'
import SingleMasteryGhost from 'components/summoner/modules/ghost/SingleMasteryGhost.vue'

export const allUserModules = [
  {
    name: 'topbuilds',
    component: markRaw(TopBuildsModule),
    ghost: markRaw(TopBuildsGhost),
  },
  {
    name: 'userranked',
    component: markRaw(RankedModule),
    ghost: markRaw(RankedGhost),
  },
  {
    name: 'championmastery',
    component: markRaw(ChampionMasteryModule),
    ghost: markRaw(ChampionMasteryGhost),
  },
  {
    name: 'usernotes',
    component: markRaw(NotesModule),
    ghost: markRaw(NotesGhost),
  },
  {
    name: 'challengecategories',
    component: markRaw(ChallengeOverviewModule),
    ghost: markRaw(ChallengeOverviewGhost),
  },

  {
    name: 'singlemastery',
    component: markRaw(SingleMasteryModule),
    ghost: markRaw(SingleMasteryGhost),
  },
]

// Create a lookup dictionary for easy access
export const moduleRegistry = allUserModules.reduce((acc, module) => {
  acc[module.name] = module.component
  return acc
}, {} as Record<string, any>)

export const ghostRegistry = allUserModules.reduce((acc, module) => {
  acc[module.name] = module.ghost
  return acc
}, {} as Record<string, any>)

export function addModule(moduleName: string, index: number) {
  const as = useAccountStore()
  if (index < as.userBoardModules.length) {
    as.userBoardModules[index] = moduleName ? { name: moduleName } : null
  }
}

export function resetModules() {
  const as = useAccountStore()
  as.userBoardModules = Array.from({ length: 9 }, () => null)
}

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
