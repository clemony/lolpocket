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
