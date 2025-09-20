export const inboxBox: DataObject[] = [
  {
    name: 'Messages',
    icon: {
      name: 'fluent:mail-16-regular',
      class: '',
    },
  },
  {
    name: 'Trash',
    icon: {
      name: 'trash',
      class: 'size-4.25',
    },
  },
]

export const openBox = shallowRef<string>('Messages')
export const inboxUnreadFilter = shallowRef<boolean>(false)

export const sortedMessages = computed(() => {
  let box = [...(as().account?.inbox?.messages || [])]
  box
    = openBox.value === 'Messages'
      ? box.filter(m => !m.trash)
      : openBox.value === 'Trash'
        ? box.filter(m => m.trash === true)
        : []
  box = inboxUnreadFilter.value ? box.filter(m => !m.read) : box

  return box.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
})

export function matchMsg(msgId: string, index?: boolean): InboxMessage {
  return as().account.inbox.messages.find(m => m.id === msgId)
}

export function markRead(msgId) {
  const msg = matchMsg(msgId)
  if (msg)
    msg.read = true
}

export function toggleRead(msgId) {
  const msg = matchMsg(msgId)

  if (msg)
    msg.read = !msg.read
}

export function trashMsg(msgId) {
  const msg = matchMsg(msgId)
  if (msg) {
    msg.trash = true
    msg.dateTrashed = new Date()
  }
}

export function trashAllRead() {
  const a = as().account.inbox.messages.filter(m => m.read === true)
  a.forEach((m) => {
    trashMsg(m.id)
  })
}
