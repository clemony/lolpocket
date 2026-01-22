import type { InboxItem } from '@types'

export function saveNotification(
  template: string,
  vars: Record<string, string>
) {
  const item: InboxItem = {
    id: crypto.randomUUID(),
    date: Date.now().toLocaleString(),
    read: false,
    template,
    vars,
  }

  const list = as().inbox.notifications

  list.unshift(item)

  if (list.length > 20)
    list.pop()

  return item
}

/* delete */
