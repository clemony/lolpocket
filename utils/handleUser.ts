import { isMacOS, isMobile, isWindows } from '@basitcodeenv/vue3-device-detect'

export function getDevice() {
  return isMacOS ? 'MacOS' : isWindows ? 'Windows' : isMobile ? 'Mobile' : ''
}

export function getDeviceKey() {
  return getDevice() == 'MacOS' ? '⌘' : getDevice() == 'Windows' ? 'ctrl' : getDevice() == 'Mobile' ? '' : 'meta'
}

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