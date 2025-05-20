export const defaultUser: userAccount ={
  name: 'Summoner',
  role: null,
  id: null,
  session: null,
  accessToken:  null,
  refreshToken:  null,
  riot: {
    name: 'Summoner',
    tag:  null,
    puuid: null,
    profileIcon:  null,
    level:  null,
    region: 'Runeterra',
  }
}
// logout

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