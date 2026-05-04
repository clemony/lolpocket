import { compareInstantStrings } from "#shared/utils"

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

const messages = () => (user().inbox?.messages ?? []) as InboxMessage[]

export const sortedMessages = computed<InboxMessage[]>(() => {
  let box = [...messages()]
  box =
    openBox.value === "Messages"
      ? box.filter((m: InboxMessage) => !m.trashed_at)
      : openBox.value === "Trash"
        ? box.filter((m: InboxMessage) => m.trashed_at)
        : []
  box =
    inboxUnreadFilter.value ?
      box.filter((m: InboxMessage) => !m.read_at)
    : box

  return box.sort(
    (a, b) =>
      compareInstantStrings(b.created_at, a.created_at)
  )
})

export function matchMsg(msgId: string): InboxMessage | undefined {
  return messages().find((m: InboxMessage) => m.id === msgId)
}

export function markRead(msgId: string) {
  user().markInboxMessageRead(msgId, true)
}

export function toggleRead(msgId: string) {
  const msg = matchMsg(msgId)

  if (msg) user().markInboxMessageRead(msgId, !msg.read_at)
}

export function trashMsg(msgId: string) {
  const msg = matchMsg(msgId)
  if (msg) user().deleteInboxMessage(msgId)
}

export function trashAllRead() {
  const a = messages().filter((m: InboxMessage) => Boolean(m.read_at))
  a.forEach((m: InboxMessage) => {
    trashMsg(m.id)
  })
}
