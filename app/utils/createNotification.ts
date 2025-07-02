export function constructNotification(
  title: string,
  key: string,
  badge?: string
) {
  const as = useAccountStore()

  let item: InboxItem = {
    title: title,
    time: new Date(),
    vars: {
      pocketKey: key,
    },
  }
  if (badge) {
    item = {
      ...item,
      badge: badge,
    }
  }
  const n = as.userAccount.inbox.notifications

  n.unshift(item)

  if (length > 10) {
    n.pop()
  }
  console.log("💠 - constructNotification - n:", n)
}

/* delete */
