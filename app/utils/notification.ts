import { hexoid } from 'hexoid'

const toId = hexoid()
export function saveNotification(
  template: string,
  vars: Record<string, string>
) {
  const as = useAccountStore()

  const item: InboxItem = {
    id: toId(),
    date: new Date(),
    template,
    vars,
    read: false,
  }

  const list = as.account.inbox.notifications

  list.unshift(item)

  if (list.length > 20)
    list.pop()

  return item
}

/* delete */
