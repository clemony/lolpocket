import TopBuilds from 'components/summoner/modules/module/TopBuilds.vue'
import TopBuildsGhost from 'components/summoner/modules/ghost/TopBuildsGhost.vue'
import RankedGhost from 'components/summoner/modules/ghost/RankedGhost.vue'
import MasteryGhost from 'components/summoner/modules/ghost/MasteryGhost.vue'
import NotesGhost from 'components/summoner/modules/ghost/NotesGhost.vue'
import RankedModule from 'components/summoner/modules/module/RankedModule.vue'
import ChampionMastery from 'components/summoner/modules/module/ChampionMastery.vue'

export const allUserModules = [
  {
    name: 'topbuilds',
    component: markRaw(TopBuilds),
    ghost: markRaw(TopBuildsGhost),
  },
  {
    name: 'userranked',
    component: markRaw(RankedModule),
    ghost: markRaw(RankedGhost),
  },
  {
    name: 'championmastery',
    component: markRaw(ChampionMastery),
    ghost: markRaw(MasteryGhost),
  },
  {
    name: 'usernotes',
    component: markRaw(TopBuilds),
    ghost: markRaw(NotesGhost),
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