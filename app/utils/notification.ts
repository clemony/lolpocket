import { hexoid } from 'hexoid'

const toId = hexoid()
export function saveNotification(
  template: string,
  vars: Record<string, string>
) {
  const item: InboxItem = {
    id: toId(),
    date: new Date(),
    read: false,
    template,
    vars,
  }

  const list = as().account.inbox.notifications

  list.unshift(item)

  if (list.length > 20)
    list.pop()

  return item
}

/* delete */
