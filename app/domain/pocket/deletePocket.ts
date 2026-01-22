// delete

export function deletePocket(pocket) {
  const route = useRoute()
  const inPocket = route.path === `/pocket/${pocket.key}`

  pocket.location.folder = "trash"

  if (inPocket) {
    navigateTo("/backpack")
  }

  if (as().settings.ping_delete_pocket) {
    const toast = useToast()
    const newPocketToast = toast.add({
      title: `Pocket ${pocket.name} sent to trash.`,
      /*       action: {
        label: "Restore?",
        // onClick: () => navigateTo({ path: `/${newPocket.key}` }),
      }, */
      description: "You can restore it for up to 30 days.",
      duration: 7000,
    })

    const vars: Record<string, string> = {
      pocketKey: pocket.key,
      pocketName: pocket.name,
    }

    saveNotification("deletePocket", vars)
  }
}
