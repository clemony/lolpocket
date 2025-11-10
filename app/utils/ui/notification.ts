import type { InboxItem } from '~~/shared/schema'

export function saveNotification(
  template: string,
  vars: Record<string, string>
) {
  const item: InboxItem = {
    id: crypto.randomUUID(),
    date: Date.now(),
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
