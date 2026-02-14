//
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

  const list = user().inbox?.notifications
  if (!list) return item

  list.unshift(item)

  if (list.length > 20) list.pop()

  return item
}

/* delete */
