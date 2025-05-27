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