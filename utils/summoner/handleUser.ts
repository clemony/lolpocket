
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

export function createNote() {
  const as = useAccountStore()
  const date = new Date()

  const note: Note = {
    title: 'New Note',
    content: 'Write a thing down.',
    icon: ``,
    date: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
  as.userNotes.push(note)
}