export async function accountUpdate(account) {
  const data = await $fetch("/api/supabase/update/account", {
    body: account,
    headers: useRequestHeaders(["cookie"]),
    method: "POST",
  })
  const toast = useToast()
  console.log("📎 - accountUpdate - data:", data)

  if (!data) {
    sendErrorToast()
  } else {
    as().account = Object.assign(as().account, data)
    toast.add({
      title: "Welcome back!",
      color: "neutral",
      description: `Great to see you, ${
        as().account?.name ?? as().account?.username ?? "Summoner"
      }!`,
      icon: "tick",
    })

    ps().$persist
  }
}
