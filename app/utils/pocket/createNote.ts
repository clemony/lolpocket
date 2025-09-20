export function createNote() {
  const date = new Date()

  const note: Note = {
    title: 'New Note',
    content: 'Write a thing down.',
    date: date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    icon: ``,
  }
  as().userNotes.push(note)
}
