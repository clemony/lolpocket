export const inboxBox: InboxType[] = [
  {
    name: "Messages",
    icon: {
      name: "fluent:mail-16-regular",
      class: "",
    },
  },
  {
    name: "Trash",
    icon: {
      name: "trash",
      class: "size-4.25",
    },
  },
]

export const openBox = shallowRef<string>("Messages")
export const inboxUnreadFilter = shallowRef<boolean>(false)

export const sortedMessages = computed(() => {
  let box = [...(user().inbox?.messages || [])]
  box =
    openBox.value === "Messages"
      ? box.filter((m) => !m.trash)
      : openBox.value === "Trash"
        ? box.filter((m) => m.trash)
        : []
  box = inboxUnreadFilter.value ? box.filter((m) => !m.read) : box

  return box.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
})

export function matchMsg(msgId: string): InboxMessage | undefined {
  return user().inbox?.messages?.find((m) => m.id === msgId)
}

export function markRead(msgId: string) {
  user().markInboxMessageRead(msgId, true)
}

export function toggleRead(msgId: string) {
  const msg = matchMsg(msgId)

  if (msg) user().markInboxMessageRead(msgId, !msg.read)
}

export function trashMsg(msgId: string) {
  const msg = matchMsg(msgId)
  /*  fixme
if (msg) {
msg.trash
    msg.dateTrashed = Date.now()
  } */
}

export function trashAllRead() {
  const a = user().inbox?.messages?.filter((m) => m.read === true) ?? []
  a.forEach((m) => {
    trashMsg(m.id)
  })
}
