export function saveNotificationData(
  vars: Record<string, string>,
  template?: string,
) {
  const as = useAccountStore()

  let item: InboxItem = {
    time: new Date(),
    vars,
  }
  if (template) {
    item = {
      ...item,
      template,
    }
  }
  const n = ref(as.userAccount.inbox.notifications)

  n.value.unshift(item)

  if (n.value.length > 10) {
    n.value.pop()
  }

  as.userAccount.inbox.newNotifications++
  console.log(
    '💠 - as.userAccount.inbox.newNotifications:',
    as.userAccount.inbox.newNotifications,
  )
  console.log('💠 - constructNotification - n:', n)
}

/* delete */
