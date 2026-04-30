//
export function saveNotification(
  template: string,
  vars: Record<string, string>
) {
  const recipientId = user().account?.uuid
  if (!recipientId) return

  const item: InboxNotification = {
    id: crypto.randomUUID(),
    recipient_uuid: recipientId,
    template,
    vars,
    related_type: null,
    related_id: null,
    created_at: new Date().toISOString(),
    read_at: null,
    dismissed_at: null
  }

  user().addInboxNotification(item)
  return item
}
