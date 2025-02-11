import TopBuilds from 'components/summoner/modules/TopBuilds.vue'
import TopBuildsGhost from 'components/summoner/modules/TopBuildsGhost.vue'

export const defaultUser = {
  name: 'Summoner',
  image: ref(null),
  role: ref(null),
  id: ref(null),
  session: ref(null),
  accessToken: '',
  refreshToken: '',
  puuid: ref(null),
  gameName: 'Summoner',
  tagLine: 'Link Riot Account?',
  profileIconId: '',
  summonerLevel: 0,
  region: 'Runeterra',
}

// logout

export async function signOut() {
  const client = useSupabaseClient()
  await client.auth.signOut()
}

export const allUserModules = [

  {
    name: 'Top Builds',
    component: markRaw(TopBuilds),
    ghost: markRaw(TopBuildsGhost),
  },
]